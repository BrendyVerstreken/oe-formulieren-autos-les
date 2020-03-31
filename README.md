Een lijst van autos tonen en bewerken
# Autos bewerken
In het bestand data.js vinden we 3 zaken:
- een array van motortypes
- een array met opties
- een array met gegevens van autos
## Bij het opstarten
- Worden alle DOM-elementen gekoppeld
- Worden in divMoter radiobuttons aangemaakt op basis van de array motorTypes. De waarde van de buttons is de index in de array. 
  De naam is 'motor'
- Worden in divOpties checkboxes aangemaakt op basis van de array optieLijst. De waarde en id van de checkbox is de naam van de optie.
  De naam is 'gekozenOpties'
- De event handlers worden gekoppeld aan slcAuto en btnSlaOp (zie verder)
- in slcAutos worden de namen en types van de autos getoond. De hoogte van de listbox wordt ingesteld op basis van de lengte van de array autos
- in pre wordt de array autos op een leesbare manier weergegeven
## Bij keuze voor een auto
- De gegevens van de auto worden opgehaald uit de array
- De gegevens van de gekozen auto worden getoond in de controls
## Bij opslaan
- De gegevens van de geselecteerde auto worden aangepast
- De vernieuwde gegevens worden getoond.
