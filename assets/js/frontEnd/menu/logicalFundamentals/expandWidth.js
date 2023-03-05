export function expandWidth(divSelect,firstChild,existingWidth,replacWidth) {
    let selectedDiv = document.querySelector(divSelect);
    let selectFirstChild = document.querySelector(firstChild);

    if (selectedDiv.classList.contains(existingWidth)) {

      selectFirstChild.classList.add('opacity-0');
      selectedDiv.classList.remove(existingWidth);
      selectedDiv.classList.add(replacWidth);

    }
  }