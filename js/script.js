"use strict";
var btnSlaOp;
var divFeedBack, divMotor, divOpties;
var pre;
var slcAutos;
var txtMerk, txtType;

window.addEventListener('load', Initieer);

function Initieer() {
	KoppelElementen();
	KoppelEvents();
	VulStandaardwaarden();
};

const KoppelElementen = () => {
btnSlaOp = document.getElementById("btnSlaOp");
divFeedBack = document.getElementById("divFeedBack");
divMotor = document.getElementById("divMotor");
divOpties = document.getElementById("divOpties");
pre = document.getElementById("pre");
slcAutos = document.getElementById("slcAutos");
txtMerk = document.getElementById("txtMerk");
txtType = document.getElementById("txtType");
}

const KoppelEvents = () => {
	btnSlaOp.addEventListener('click', () => {
                        
	});
}

const VulStandaardwaarden = () => {
	slcAutos.selectedIndex = "0";
	txtMerk.value = "";
	txtType.value = "";
}
