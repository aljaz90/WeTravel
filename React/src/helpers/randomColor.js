let hexToRgb = hex => {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? ""+ parseInt(result[1], 16) + "," + parseInt(result[2], 16) + "," + parseInt(result[3], 16) : null;
}

export default hexFormat => {
    const colorList = [
        {colorLight: '#ED213A', colorDark: '#93291E', additionalColors: []},
        {colorLight: '#FDC830', colorDark: '#F37335', additionalColors: []},
        {colorLight: '#00B4DB', colorDark: '#0083B0', additionalColors: []},
        {colorLight: '#59C173', colorDark: '#5D26C1', additionalColors: ["#a17fe0"]},
        {colorLight: '#8f94fb', colorDark: '#4e54c8', additionalColors: []},
        {colorLight: '#f80759', colorDark: '#bc4e9c', additionalColors: []},
        {colorLight: '#40E0D0', colorDark: '#FF0080', additionalColors: ["#FF8C00"]},
        {colorLight: '#11998e', colorDark: '#38ef7d', additionalColors: []},
        {colorLight: '#FC5C7D', colorDark: '#6A82FB', additionalColors: []},
        {colorLight: '#FC466B', colorDark: '#3F5EFB', additionalColors: []},
        {colorLight: '#00b09b', colorDark: '#96c93d', additionalColors: []},
        {colorLight: '#00F260', colorDark: '#0575E6', additionalColors: []},
        {colorLight: '#fc4a1a', colorDark: '#f7b733', additionalColors: []},
        {colorLight: '#fdeff9', colorDark: '#03001e', additionalColors: ["#ec38bc", "#7303c0"]},
        {colorLight: '#667db6', colorDark: '#667db6', additionalColors: ["#ec38bc", "#ec38bc"]},
        {colorLight: '#1a2a6c', colorDark: '#fdbb2d', additionalColors: ["#b21f1f"]},
        {colorLight: '#22c1c3', colorDark: '#fdbb2d', additionalColors: []},
        {colorLight: '#7F00FF', colorDark: '#E100FF', additionalColors: []},
        {colorLight: '#396afc', colorDark: '#2948ff', additionalColors: []},
        {colorLight: '#0cebeb', colorDark: '#29ffc6', additionalColors: ["#20e3b2"]},
        {colorLight: '#283c86', colorDark: '#45a247', additionalColors: []},
        {colorLight: '#000046', colorDark: '#1CB5E0', additionalColors: []},
        {colorLight: '#E44D26', colorDark: '#F16529', additionalColors: []},
        {colorLight: '#B2FEFA', colorDark: '#0ED2F7', additionalColors: []},
        {colorLight: '#C33764', colorDark: '#1D2671', additionalColors: []},
        {colorLight: '#0575E6', colorDark: '#021B79', additionalColors: []},
        {colorLight: '#DCE35B', colorDark: '#45B649', additionalColors: []},
        {colorLight: '#A770EF', colorDark: '#FDB99B', additionalColors: ["#CF8BF3"]}
    ];
    let randomIndex = Math.floor(Math.random() * colorList.length);
    if (hexFormat) {
        return colorList[randomIndex];
    }
    let colorToReturn = {...colorList[randomIndex]};
    colorToReturn.colorLight = hexToRgb(colorToReturn.colorLight);
    colorToReturn.colorDark = hexToRgb(colorToReturn.colorDark);
    colorToReturn.additionalColors = colorToReturn.additionalColors.map(color => hexToRgb(color));
    return colorToReturn;
}
