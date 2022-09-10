// Color types of spray 
    // https://smartstore.naver.com/ajbondmall/products/5637187269?
    // color-we-def : [rgb, color-partner-def-eng, color-partner-def-kor]
    // exception: 투명343, 투명무광331 제외


const colors = {

    black: ["#fff", "흑색305", "black"],
    // black: ["rgb(36,32,33)", "흑색305", "black"],
    white: ["rgb(255,255,255)", "백색315", "whute"],
    red: ["rgb(237,29,37)", "적색320", "red"],
    silver: ["rgb(214,225,232)", "은색321", "silver"],
    darkBlue: ["rgb(44,125,197)", "진청326", "dark blue"],
    lightBlue: ["rgb(71,199,245)", "연청327", "light blue"],
    green: ["rgb(34,114,53)", "녹색319", "green"],
    lightGreen: ["rgb(58,177,105)", "연녹351", "light green"],
    darkGray: ["rgb(89,88,90)", "진회342", "dark grey"],
    middleGray: ["rgb(129,130,133)","중회337", "noutray gray"],
    lightGray: ["rgb(168,169,173)", "연회347", "light gray"],
    yellow: ["rgb(250,212,1)", "황색350", "yellow"],
    darkBrown: ["rgb(53,54,74)", "진밤313", "dark brown"],
    lightBrown: ["rgb(97,52,55)", "연밤314", "light brown"],
    ivory: ["rgb(254,251,204)", "아이보리330", "ivory"],
    lightYellow: ["rgb(253,237,189)", "미색357", "light yellow"],
    beige: ["rgb(205,213,201)", "베이지371", "beige"],
    brightOrange: ["rgb(241,92,65)", "주황322", "bright orange"],
    jangbi: ["rgb(245,131,70)", "장비색365", "jangbi"],
    pink: ["rgb(242,134,183)", "분홍329", "pink"],
    darkBlue: ["rgb(25,51,94)", "곤색328", "dark blue"],
    khaki: ["rgb(38,80,81)", "국방390", "kaki"],
    gold: ["rgb(211,168,10)", "금색341", "gold"],
    flatBlack: ["rgb(36,32,33)", "흑무광388", "flat black"],
    flatWhite: ["rgb(254,251,213)", "백무광310", "flat white"],
    concrete: ["rgb(117,138,146)", "7.5BG 335", "7.5BG"],
    porter: ["rgb(27,83,135)", "용달301", "youngdal"],
    jade: ["rgb(124,178,176)", "쑥색318", "mignonette"],
    wood: ["rgb(162,85,11)", "나무색368", "mustard"],
    orange: ["rgb(245,129,31)", "오렌지 L-358 310", "orange"]

};

const colorPalette = document.querySelector(".color-options");
const colorPicker = document.querySelector(".color-option");

const displayColorPalette = function(colorData) {

    colorPalette.innerHTML = '';

    for(const color in colorData) {

        // console.log(colors[color])
        const html = `<div class="color-option" style="background-color: ${colors[color][0]}" data-color="${colors[color][0]}"></div>`;
        colorPalette.insertAdjacentHTML('afterbegin', html);

    }

}

displayColorPalette(colors);

const ctx = document.getElementById('canvas').getContext('2d');

const colorArr = Array.from(document.getElementsByClassName("color-option"));

// default color
let colorValue = 'black'; 
let colorStripe = 'white';

function onColorClick(e) {
    const colorValue = e.target.dataset.color;
    draw(colorValue);
}

colorArr.forEach(color => color.addEventListener("click", onColorClick));

function draw(colorValue) {
    const ctx = document.getElementById('canvas').getContext('2d');
    
    // wood part
    ctx.fillStyle = 'rgb(156,97,50)';
    ctx.fillRect(10, 300, 700, 15);
    
    // foundation part
    ctx.fillStyle = colorValue;
    ctx.fillRect(50, 300, 100, 15);
    ctx.fillRect(570, 300, 100, 15);

    //stripe part
    ctx.fillStyle = colorStripe;
    ctx.fillRect(70, 300, 10, 15);
    ctx.fillRect(90, 300, 10, 15);
    ctx.fillRect(110, 300, 10, 15);

    ctx.fillRect(590, 300, 10, 15);
    ctx.fillRect(610, 300, 10, 15);
    ctx.fillRect(630, 300, 10, 15);

    ctx.fillRect(360, 300, 10, 15);
}

draw();