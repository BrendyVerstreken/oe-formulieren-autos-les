const MaakInputOngedaan = (parentElement) => {
      let childrenOfParent = Array.from(parentElement.children);
      if(childrenOfParent.length > 0) {
            childrenOfParent.forEach(childElement => {
                  let inputType = childElement.type;
                  if (inputType == 'text' || inputType == 'number' ) {
                        childElement.value = '';
                  } else if (inputType == 'checkbox' || inputType == 'radiobutton') {
                        childElement.checked = false;
                  } else if (inputType == 'select') {
                        childElement.selectedindex = -1;
                  }
            });
      }
      childrenOfParent.forEach(descendant => {
            MaakInputOngedaan(descendant);
      });
}

const MaakCheckBoxen = (titel,keuzes, name, doelElement) => {
      doelElement.innerHTML = `<h2>${titel}</h2>`;
      keuzes.forEach(keuze => {
            let htmlCheckBox = document.createElement('input');
            htmlCheckBox.type = 'checkbox';
            htmlCheckBox.name = name;
            htmlCheckBox.id = 'chk' + keuze;
            htmlCheckBox.value = keuze;
            doelElement.appendChild(htmlCheckBox);
            doelElement.innerHTML += `${keuze} <br />`;
      });
}

/*
•	Checkboxen aanmaken op basis van een array 
      met de keuzemogelijkheden
•	Een groep van checkboxen met een bepaalde naam laten afvinken
•	Checkboxen laten aanvinken op basis van een array 
      met de keuzemogelijkheden die aangevinkt moeten worden
•	De waarden in groep van checkboxen met een bepaalde naam 
      die aangevinkt zijn retourneren als een array
•	Keuzerondjes aanmaken op basis van een array 
      met de keuzemogelijkheden en ze retourneren
•	De index van het aangevinkte keuzerondje 
      in groep van keuzerondjes met een bepaalde naam retourneren 
•	Een function MaakInputOngedaan die alle input 
      in een bepaald DOM-element en zijn descendants ongedaan maakt.
*/