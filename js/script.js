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
      ToonAutos();
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

const ToonAutos = () => {
      slcAutos.options.length = 0;
      for (let index = 0; index < autos.length; index++) {
            const auto = autos[index];
            let text = `${auto.Merk} ${auto.Type}`;
            let value = index;
            slcAutos.options[index] = new Option(text, value);
      }
}

/*
Bij het opstarten
Worden in divMoter radiobuttons aangemaakt op basis van de array motorTypes.
De waarde van de buttons is de index in de array. 
De naam is 'motor'

Worden in divOpties checkboxes aangemaakt op basis van de array optieLijst. 
De waarde en id van de checkbox is de naam van de optie. 
De naam is 'gekozenOpties'

De event handlers worden gekoppeld aan slcAuto en btnSlaOp (zie verder)
in slcAutos worden de namen en types van de autos getoond. 
De hoogte van de listbox wordt ingesteld op basis van de lengte van de array autos
in pre wordt de array autos op een leesbare manier weergegeven
Bij keuze voor een auto
De gegevens van de auto worden opgehaald uit de array
De gegevens van de gekozen auto worden getoond in de controls
Bij opslaan
De gegevens van de geselecteerde auto worden aangepast
De vernieuwde gegevens worden getoond.
*/