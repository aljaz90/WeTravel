import requests
import time
import sys
import json
from datetime import date

url = "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/pricing/v1.0"

class Offer:
    def __init__(self, price, outboundFlight, inboundFlight):
        self.price = price
        self.outboundFlight = outboundFlight
        self.inboundFlight = inboundFlight

    def printData(self):
        print("---------------")
        print(f"Price: EUR {self.price}€")
        print("---------------")
        # OUTBOUND FLIGHT
        if self.outboundFlight.get("direct"):
            print("[DIRECT] OUTBOUND FLIGHT")
        else:
            print("OUTBOUND FLIGHT")
            print(f"Stops: {self.outboundFlight.get('stops')}")

        print(f"Carrier: {self.outboundFlight.get('carrier')}")
        print(f"Segments:")
        for i, segment in enumerate(self.outboundFlight.get("segments")):
            print("\tSEGMENT " + str(i+1))
            print(f"\t{segment.get('flightNumber')}")
            print(f"\t{segment.get('origin')} - {segment.get('destination')}")
            print(f"\tDuration: {segment.get('duration')/60}h")
            print(f"\tOperating carrier: {segment.get('carrier')}\n")

        # INBOUND FLIGHT
        if self.inboundFlight.get("direct"):
            print("[DIRECT] INBOUND FLIGHT")
        else:
            print("INBOUND FLIGHT")
            print(f"Stops: {self.inboundFlight.get('stops')}")

        print(f"Carrier: {self.inboundFlight.get('carrier')}")
        print(f"Segments:")
        for i, segment in enumerate(self.inboundFlight.get("segments")):
            print("\tSEGMENT " + str(i+1))
            print(f"\t{segment.get('flightNumber')}")
            print(f"\t{segment.get('origin')} - {segment.get('destination')}")
            print(f"\tDuration: {segment.get('duration')/60}h")
            print(f"\tOperating carrier: {segment.get('carrier')}\n")

class Search:

    def __init__(self, outboundDate, inboundDate, origin, destination, cabinClass, adults=1, children=0, infants=0):
        payload = f"inboundDate={inboundDate}&cabinClass={cabinClass}&children={children}&infants={infants}&country=GB&currency=EUR&locale=en-GB&originPlace={origin}-sky&destinationPlace={destination}-sky&outboundDate={outboundDate}&adults={adults}"
        headers = {
            'x-rapidapi-host': "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
            'x-rapidapi-key': "d9db34e064mshd0d8e9d32b2f42ep11fd0djsn59a7fc17ba87",
            'content-type': "application/x-www-form-urlencoded"
        }
        response = requests.request("POST", url, data=payload, headers=headers)
        if response.status_code == 201:
            print("**********")
            print("Loading...")
            print("**********")
            self.sessionKey = response.headers["Location"].split("/")[-1]
            self.offers = []
        else:
            print("ERROR ", response.status_code, " ", response.text)
            sys.exit()

    def getResults(self):
        session_url = "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/pricing/uk2/v1.0/{}".format(self.sessionKey)
        querystring = {"pageIndex":"0","pageSize":"100"}
        headers = {
            'x-rapidapi-host': "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
            'x-rapidapi-key': "d9db34e064mshd0d8e9d32b2f42ep11fd0djsn59a7fc17ba87"
        }

        response = requests.request("GET", session_url, headers=headers, params=querystring)

        if response.status_code == 200:
            self.data = json.loads(response.text)
            self.updateData()
            return json.loads(response.text)
        else:
            print("ERROR ", response.status_code, " ", response.text)
            sys.exit()

    def updateData(self):
        self.offers = []
        itineraries = self.data["Itineraries"]
        for itinerarie in itineraries:
            self.offers.append(self.updateOffer(itinerarie))
        self.offers.sort(key = lambda offer: offer.price)
    
    def updateOffer(self, itinerarie):
        price = None
        pricingOptions = itinerarie["PricingOptions"]
        for option in pricingOptions:
            if price is None or price > option["Price"]:
                price = option["Price"]
        outboundFlight = self.buildLeg(itinerarie["OutboundLegId"])
        inboundFlight = self.buildLeg(itinerarie["InboundLegId"])

        return Offer(price, outboundFlight, inboundFlight)
    
    def buildLeg(self, legId):
        leg = self.getLeg(legId)
        segments = []
        for segmentId in leg["SegmentIds"]:
            segment = self.getSegment(segmentId)
            newSegment = {
                "origin": self.getPlace(segment["OriginStation"]),
                "destination": self.getPlace(segment["DestinationStation"]),
                "carrier": self.getCarrier(segment["OperatingCarrier"]).get("name"),
                "duration": segment["Duration"],
                "flightNumber": self.getCarrier(segment["OperatingCarrier"]).get("code")+segment["FlightNumber"]
            }
            segments.append(newSegment)
        carrier = self.getCarrier(leg["Carriers"][0]).get("name")
        return {"segments": segments, "carrier": carrier, "direct": len(segments) == 1, "stops": len(segments)-1}
    
    def getSegment(self, segmentId):
        segments = self.data["Segments"]
        for segment in segments:
            if segment["Id"] == segmentId:
                return segment
        return None

    def getPlace(self, placeId):
        places = self.data["Places"]
        for place in places:
            if placeId == place["Id"]:
                return place["Code"]
        return None

    def printResults(self):

        for i in range(1, len(self.offers)):
            offer = self.offers[i-1]
            print("======================") 
            print("FLIGHT " + str(i)) 
            offer.printData()
            print("======================")
            if i % 3 == 0:
                print("Enter the number from the menu you would like to do.")
                print("1. Load more")
                print("2. Cancel")
                userInput = input("What would you like to do?\n")
                if userInput == "1":
                    continue
                else:
                    return

    def getCarrier(self, carrierId):
        carriers = self.data["Carriers"]
        for carrier in carriers:
            if carrier["Id"] == carrierId:
                return {"name": carrier["Name"], "code": carrier["Code"]}
        return None

    def getLeg(self, legId):
        legs = self.data["Legs"]
        for leg in legs:
            if leg["Id"] == legId:
                return leg
        return None

def validateDate(data):
    year, month, day = data.split("-")
    return date(int(year), int(month), int(day))

while True:
    print("====================================================")
    print("Enter the number from the menu you would like to do.")
    print("1. Check a flight")
    print("2. Exit")
    print("====================================================")
    userInput = input("What would you like to do?\n")

    if userInput == "1":
        outboundDate = input("Enter you outbound date [YYYY-mm-dd]:\t")
        inboundDate = input("Enter you inbound date [YYYY-mm-dd]:\t")

        outboundDate = validateDate(outboundDate)
        inboundDate = validateDate(inboundDate)

        cabinClass = input("Enter the preferred cabin class [economy, premiumeconomy, business, first]:\t")
        origin = input("Enter the place of origin [airport code]:\t")
        destination = input("Enter the destination [airport code]:\t")
        adults = input("Enter number of adults [16+] (default: 1):\t")
        children = input("Enter number of children [1-16] (default: 0):\t")
        infants = input("Enter number of infants [0-1] (default: 0):\t")

        if adults == "":
            adults = 1
        if children == "":
            children = 0
        if infants == "":
            infants = 0

        search = Search(outboundDate, inboundDate, origin, destination, cabinClass, adults, children, infants)

        time.sleep(5)

        results = search.getResults()
        search.printResults()
        #print(results["Itineraries"][0])

    elif userInput == "2":
        sys.exit()
    else:
        print("*************")
        print("Invalid Input")
        print("*************")
        continue