export function expandHeight(divSelect,existingHeight,replacHeight) {
    var myDiv = document.querySelector(divSelect);
    
    if (myDiv.classList.contains(existingHeight)) {
      myDiv.classList.remove(existingHeight);
      myDiv.classList.add(replacHeight);
    }
  }