export const addTransition = (class1, class2) => {
  const card = document.querySelector(class1);
    card.classList.add(class2);
}

export const removeTransition = (class1, class2) => {
  const card = document.querySelector(class1);
    card.classList.remove(class2);
}