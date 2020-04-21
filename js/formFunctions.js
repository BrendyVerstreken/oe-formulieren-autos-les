const MaakInputOngedaan = (parentElement) => {
      let childrenOfParent = Array.from(parentElement.children);
      if(childrenOfParent.length > 0) {
            childrenOfParent.forEach(childElement => {
                  let inputType = childElement.type;
                  if (inputType == 'text' || inputType == 'number' ) {
                        childElement.value = '';
                  } else if (inputType == 'checkbox' || inputType == 'radiobutton') {
                        childElement.checked = false;
                  }
            });
      }
      childrenOfParent.forEach(descendant => {
            MaakInputOngedaan(descendant);
      });
}

/*

Breng de code die je gebruikt ivm de checkboxen en radiobuttons onder in een apart js-bestand formFunctions.

Aanmaken van checkboxen/radiobuttons met een bepaalde titel (h2-tag), name in een bepaalde div en op basis van een array van waarden.
Aanvinken van checkboxen/radiobuttons op basis van de name en  een array met aan te duiden waarden.
Een array retourneren met de aangevinkte waarden in checkboxen op basis van de name.
De index retourneren van de aangeduide radiobutton op basis van de name
Een function om de input van de descendants van een DOM-element ongedaan te maken op basis van de id van het parent element. Doe dit voor inputs van het type text, checkbox en radio. Je kunt dit later uitbreiden naar andere types.
*/