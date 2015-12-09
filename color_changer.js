var availableColors = ['AliceBlue',
'AntiqueWhite',
'Aqua',
'Aquamarine',
'Azure',
'Beige',
'Bisque',
'Black',
'BlanchedAlmond',
'Blue',
'BlueViolet',
'Brown',
'BurlyWood',
'CadetBlue',
'Chartreuse',
'Chocolate',
'Coral',
'CornflowerBlue',
'Cornsilk',
'Crimson',
'Cyan',
'DarkBlue',
'DarkCyan',
'DarkGoldenRod',
'DarkGray',
'DarkGreen',
'DarkKhaki',
'DarkMagenta',
'DarkOliveGreen',
'DarkOrange',
'DarkOrchid',
'DarkRed',
'DarkSalmon',
'DarkSeaGreen',
'DarkSlateBlue',
'DarkSlateGray',
'DarkTurquoise',
'DarkViolet',
'DeepPink',
'DeepSkyBlue',
'DimGray',
'DodgerBlue',
'FireBrick',
'FloralWhite',
'ForestGreen',
'Fuchsia',
'Gainsboro',
'GhostWhite',
'Gold',
'GoldenRod',
'Gray',
'Green',
'GreenYellow',
'HoneyDew',
'HotPink',
'IndianRed',
'Indigo',
'Ivory',
'Khaki',
'Lavender',
'LavenderBlush',
'LawnGreen',
'LemonChiffon',
'LightBlue',
'LightCoral',
'LightCyan',
'LightGoldenRodYellow',
'LightGray',
'LightGreen',
'LightPink',
'LightSalmon',
'LightSeaGreen',
'LightSkyBlue',
'LightSlateGray',
'LightSteelBlue',
'LightYellow',
'Lime',
'LimeGreen',
'Linen',
'Magenta',
'Maroon',
'MediumAquaMarine',
'MediumBlue',
'MediumOrchid',
'MediumPurple',
'MediumSeaGreen',
'MediumSlateBlue',
'MediumSpringGreen',
'MediumTurquoise',
'MediumVioletRed',
'MidnightBlue',
'MintCream',
'MistyRose',
'Moccasin',
'NavajoWhite',
'Navy',
'OldLace',
'Olive',
'OliveDrab',
'Orange',
'OrangeRed',
'Orchid',
'PaleGoldenRod',
'PaleGreen',
'PaleTurquoise',
'PaleVioletRed',
'PapayaWhip',
'PeachPuff',
'Peru',
'Pink',
'Plum',
'PowderBlue',
'Purple',
'RebeccaPurple',
'Red',
'RosyBrown',
'RoyalBlue',
'SaddleBrown',
'Salmon',
'SandyBrown',
'SeaGreen',
'SeaShell',
'Sienna',
'Silver',
'SkyBlue',
'SlateBlue',
'SlateGray',
'Snow',
'SpringGreen',
'SteelBlue',
'Tan',
'Teal',
'Thistle',
'Tomato',
'Turquoise',
'Violet',
'Wheat',
'White',
'WhiteSmoke',
'Yellow',
'YellowGreen'];

var colorButtons = [];
var currentColor;

colorButtons = ['green', 'red', 'yellow'];

buttonContainer = document.getElementById('color-buttons');

init();

function init() {

	buttonContainer.innerHTML = '';

	for(var i = 0; i < colorButtons.length; i++){
		var btn = document.createElement("BUTTON");
		btn.innerHTML = colorButtons[i];
		btn.setAttribute('onclick','changeColor(\''+colorButtons[i]+'\')');
		btn.style.backgroundColor = colorButtons[i];
		buttonContainer.appendChild(btn);
	}
}

var select = document.getElementById("new-color"); 

for(var i = 0; i < availableColors.length; i++){
	var color = availableColors[i];
    var optionEl = document.createElement("option");
    optionEl.textContent = color;
    optionEl.value = color;
    select.appendChild(optionEl);
}

function changeColor(color) {
	document.body.style.backgroundColor = color;
	currentColor = color;
}

function addNew() {
	var newColor = document.getElementById('new-color').value;
	if(colorButtons.indexOf(newColor) !== -1){
		alert('That color already exists.');
	}else{
		colorButtons.push(newColor);
		init();
	}
}

function removeElement() {
	//Remove from the array
	var index = colorButtons.indexOf(currentColor);
	colorButtons.splice(index, 1);

	init();

	document.body.style.backgroundColor = 'white';
}