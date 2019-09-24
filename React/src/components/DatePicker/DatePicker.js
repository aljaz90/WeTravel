import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faCalendar, faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

let formatDate = date => {
    date += "";
    if (date.length > 1) {
        return date;
    } else {
        return "0"+date;
    }
};

export default props => {

    let [showingCalendar, setShowCalendar] = useState(false);
    let [currentDate, setCurrentDate] = useState(new Date());
    let [selectedDate, setSelectedDate] = useState("");
    let [selectedDate2, setSelectedDate2] = useState("");
    
    let toggleCalendar = show => {
        setShowCalendar(show);
    };

    let getDatesInMonth = () => {
        let dates = [];
        let date2 = new Date(`${currentDate.getFullYear()}-${formatDate(currentDate.getMonth()+1)}-01`);
        let today = new Date();
        let maxDate = new Date(`${today.getFullYear()+1}-${formatDate(today.getMonth()+1)}-${formatDate(today.getDate())}`);

        if (date2.getDay() !== 1) {
            let additionalDays = (date2.getDay() === 0 ? 7 : date2.getDay())-1;
            let i = 31;
            do {
                let additionalDate = new Date(`${date2.getMonth() === 0 ? date2.getFullYear()-1 : date2.getFullYear()}-${date2.getMonth() === 0 ? 12 : formatDate(date2.getMonth())}-${formatDate(i)}`);
                if (!isNaN(additionalDate.getDate())) {
                    dates.push({ date: `${additionalDate.getFullYear()}-${formatDate(additionalDate.getMonth()+1)}-${formatDate(i)}`, disabled: (today > additionalDate) || (additionalDate > maxDate), day: additionalDate.getDay() === 0 ? 7 : additionalDate.getDay() });
                }
                i--;
            } while(dates.length < additionalDays);
            dates = dates.reverse();
        }

        for (let i = 1; i<32; i++) {
            let newDate = new Date(`${currentDate.getFullYear()}-${formatDate(currentDate.getMonth()+1)}-${formatDate(i)}`);
            if (isNaN(newDate.getDate()) || currentDate.getMonth() !== newDate.getMonth()) {
                break;
            }
            dates.push({ date: `${newDate.getFullYear()}-${formatDate(newDate.getMonth()+1)}-${formatDate(i)}`, disabled: (today > newDate) || (newDate > maxDate), day: newDate.getDay() === 0 ? 7 : newDate.getDay() });
        }
        
        let lastDate = new Date(dates[dates.length-1].date);
        if (lastDate.getDay() !== 0) {
            let additionalDays = 7 - lastDate.getDay();
            for (let i = 1; i<=additionalDays; i++){
                let additionalDate = new Date(`${lastDate.getMonth() === 11 ? lastDate.getFullYear()+1 : lastDate.getFullYear()}-${lastDate.getMonth() === 11 ? "01" : formatDate(lastDate.getMonth()+2)}-${formatDate(i)}`);
                if (!isNaN(additionalDate.getDate())) {
                    dates.push({ date: `${additionalDate.getFullYear()}-${formatDate(additionalDate.getMonth()+1)}-${formatDate(i)}`, disabled: (today > additionalDate) || (additionalDate > maxDate), day: additionalDate.getDay() === 0 ? 7 : additionalDate.getDay() });
                }
            }
        }
        return dates;
    };

    let handleChangeCurrentDate = add => {
        let newMonth = add ? currentDate.getMonth()+2 : currentDate.getMonth();
        let newYear = currentDate.getFullYear();
        if (newMonth > 11) {
            newYear++;
            newMonth = 1;
        }
        else if (newMonth === 0) {
            newYear--;
            newMonth = 12;
        }

        let date = new Date(`${newYear}-${formatDate(newMonth)}-01`);
        setCurrentDate(date);
    };

    let handleSelectDate = date => {
        if (props.type === "range") {
            if (selectedDate === "" || selectedDate2 !== "") {
                setSelectedDate(date);
                setSelectedDate2("");
                /*props.onChanged("departing", date);
                props.onChanged("arriving", "");*/
                props.onChanged("deparingarriving", {departing: date, arriving: ""});
            }
            else {
                setSelectedDate2(date);
                props.onChanged("arriving", date);
            }
        } else {
            setSelectedDate(date);
            props.onChanged("", date);
            setShowCalendar(false);
        }
    };

    if (props.type === "range") {
        let beginDate = new Date(selectedDate);
        let endDate = new Date(selectedDate2);

        return (
            <div onMouseEnter={() => toggleCalendar(true)} onMouseLeave={() => toggleCalendar(false)} className="date-picker date-picker--range">
                <input required readOnly placeholder={props.placeholder} value={selectedDate} type="text" className="date-picker--input" />
                <FontAwesomeIcon className="date-picker--icon" icon={faCalendar} />
                { showingCalendar ? 
                <div className="date-picker--calendar">
                    <div className="date-picker--calendar--header">
                        <div className="date-picker--calendar--header--nav">
                            <FontAwesomeIcon onClick={() => handleChangeCurrentDate(false)} className="date-picker--calendar--header--nav--leftArr" icon={faArrowLeft} />
                            <div className="date-picker--calendar--header--nav--heading">{monthNames[currentDate.getMonth()] + " " + currentDate.getFullYear()}</div>
                            <FontAwesomeIcon onClick={() => handleChangeCurrentDate(true)} className="date-picker--calendar--header--nav--rightArr" icon={faArrowRight} />
                        </div>
                        <div className="date-picker--calendar--header--days">
                            <div className="date-picker--calendar--header--days--item">Mon</div>
                            <div className="date-picker--calendar--header--days--item">Tue</div>
                            <div className="date-picker--calendar--header--days--item">Wed</div>
                            <div className="date-picker--calendar--header--days--item">Thu</div>
                            <div className="date-picker--calendar--header--days--item">Fri</div>
                            <div className="date-picker--calendar--header--days--item">Sat</div>
                            <div className="date-picker--calendar--header--days--item">Sun</div>
                        </div>
                    </div>
                    <div className="date-picker--calendar--calendar">
                        {getDatesInMonth().map(date => {
                                    return( <div 
                                                key={date.date}
                                                onClick={(e) => !date.disabled ? handleSelectDate(date.date) : null} 
                                                className={"date-picker--calendar--calendar--date" + 
                                                    (date.disabled ? " date-picker--calendar--calendar--date--disabled" : "") + 
                                                    ((((new Date(date.date) >= beginDate) && (new Date(date.date) <= endDate)) || date.date === (selectedDate2 || selectedDate) ) ? " date-picker--calendar--calendar--date--selected" : "")}>
                                                    { date.date.split("-")[2]}
                                                    { date.date === selectedDate ? <FontAwesomeIcon className="date-picker--calendar--calendar--date--begin" icon={faChevronRight} /> : null }
                                                    { date.date === selectedDate2 ? <FontAwesomeIcon className="date-picker--calendar--calendar--date--end" icon={faChevronLeft} /> : null }
                                            </div>);
                                })}              
                    </div>
                </div> : ""
                }
                <input required readOnly placeholder={props.placeholder2} value={selectedDate2} type="text" className="date-picker--input date-picker--input--range" />
                <FontAwesomeIcon className="date-picker--icon date-picker--icon--range" icon={faCalendar} />
            </div>
        );
    }

    return (
        <div onMouseEnter={() => toggleCalendar(true)} onMouseLeave={() => toggleCalendar(false)} className="date-picker">
            <input required readOnly placeholder={props.placeholder} value={selectedDate} type="text" className="date-picker--input" />
            <FontAwesomeIcon className="date-picker--icon" icon={faCalendar} />
            { showingCalendar ? 
            <div className="date-picker--calendar">
                <div className="date-picker--calendar--header">
                    <div className="date-picker--calendar--header--nav">
                        <FontAwesomeIcon onClick={() => handleChangeCurrentDate(false)} className="date-picker--calendar--header--nav--leftArr" icon={faArrowLeft} />
                        <div className="date-picker--calendar--header--nav--heading">{monthNames[currentDate.getMonth()] + " " + currentDate.getFullYear()}</div>
                        <FontAwesomeIcon onClick={() => handleChangeCurrentDate(true)} className="date-picker--calendar--header--nav--rightArr" icon={faArrowRight} />
                    </div>
                    <div className="date-picker--calendar--header--days">
                        <div className="date-picker--calendar--header--days--item">Mon</div>
                        <div className="date-picker--calendar--header--days--item">Tue</div>
                        <div className="date-picker--calendar--header--days--item">Wed</div>
                        <div className="date-picker--calendar--header--days--item">Thu</div>
                        <div className="date-picker--calendar--header--days--item">Fri</div>
                        <div className="date-picker--calendar--header--days--item">Sat</div>
                        <div className="date-picker--calendar--header--days--item">Sun</div>
                    </div>
                </div>
                <div className="date-picker--calendar--calendar">
                    {getDatesInMonth().map(date => <div onClick={(e) => !date.disabled ? handleSelectDate(date.date) : null} className={"date-picker--calendar--calendar--date" + (date.disabled ? " date-picker--calendar--calendar--date--disabled" : "") + (date.date === selectedDate ? " date-picker--calendar--calendar--date--selected" : "")}>{ date.date.split("-")[2] }</div>)}
                </div>
            </div> : ""
            }
        </div>
    );
}
