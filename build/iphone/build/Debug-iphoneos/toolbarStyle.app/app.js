//Titanium.UI.setBackgroundColor('#FFF');
var win = Ti.UI.createWindow();


var mkButton = function(sourceImg) {
	return Ti.UI.createButton({
		backgroundImage:sourceImg,
		width:46,
		left:4,
		top:2,
		height:43
	});
}

var toolBar = Ti.UI.createView({
	bottom:0,
	right:0,
	height:50,
	left:0,
	backgroundImage:'background.png', //Use your favorite background image (better with rectangle).
	layout:'horizontal'
});

var btn1 = mkButton('KS_nav_ui.png');

var btn2 =  mkButton('KS_nav_ui.png');

var btn3 =  mkButton('KS_nav_ui.png');

var btn4 =  mkButton('KS_nav_ui.png');

toolBar.add(btn1);
toolBar.add(btn2);
toolBar.add(btn3);
toolBar.add(btn4);

win.add(toolBar);
win.open();

