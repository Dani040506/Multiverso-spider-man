function handleMouseEnter(){
  this.classList.add('card-hovered');
  document.body.id = `${this.id}-hovered`;
}

function handleMouseLeave(){
  this.classList.remove('card-hovered');
  document.body.id = '';
}

function addeventListenersToCards(){
  const cards = document.getElementsByClassName('card');
  console.log(cards); 

  for (let i = 0; i < cards.length; i++) {
    const card = cards[i];
    card.addEventListener('mouseenter', handleMouseEnter);
    card.addEventListener('mouseleave', handleMouseLeave);
  }
}
document.addEventListener('DOMContentLoaded', addeventListenersToCards, false);

function selectCarrosselItem(selectedButtonElement) {
  const selectedButton = selectedButtonElement.id;
  const carrossel = document.querySelector('.cards-carrossel');
  const currentTransform = carrossel.style.transform || 'rotateY(0deg)';
  const rotateYMatch = currentTransform.match(/rotateY\((-?\d+deg)\)/i);
  const rotateYdeg = -90 * (Number(selectedButton) - 1);
  let newTransform = `rotateY(${rotateYdeg}deg)`;

  if (rotateYMatch) {
    newTransform = currentTransform.replace(rotateYMatch[0], `rotateY(${rotateYdeg}deg)`);
  }

  carrossel.style.transform = newTransform;

  const activeButtonElement = document.querySelector('.controller-button--active');
  activeButtonElement.classList.remove('controller-button--active');
  selectedButtonElement.classList.add('controller-button--active');
}