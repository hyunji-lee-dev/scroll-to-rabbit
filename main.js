'use strict';

const list = document.querySelector('.list');
const createBtn = document.querySelector('.btn--create');
const findBtn = document.querySelector('.btn--find');
const arrowUp = document.querySelector('.arrow-up');
const NUM_OF_ITEMS = 20;

createBtn.addEventListener('click', () => {
  if (list.innerHTML === '') {
    createList();
  } else {
    const listItems = document.querySelectorAll('li');
    updateList(listItems);
  }
});

function createList() {
  const arr = new Array(NUM_OF_ITEMS);
  populateArray(arr);
  list.innerHTML = arr.join('');
}

function populateArray(arr) {
  const randomNumber = random();
  for (let i = 0; i < arr.length; i++) {
    if (i === randomNumber) {
      arr[
        i
      ] = `<li><img src="img/rabbit.png" alt="rabbit" id="rabbit" class="img"/></li>`;
    } else {
      arr[i] = `<li><img src="img/carrot.png" alt="carrot" class="img"/></li>`;
    }
  }
}

function updateList(listItems) {
  const randomNumber = random();
  listItems.forEach((val, idx) => {
    if (idx === randomNumber) {
      val.innerHTML = `<img src="img/rabbit.png" alt="rabbit" id="rabbit" class="img"/>`;
    } else {
      val.innerHTML = `<img src="img/carrot.png" alt="carrot" class="img"/>`;
    }
  });
}

function random() {
  return Math.floor(Math.random() * NUM_OF_ITEMS);
}

findBtn.addEventListener('click', () => {
  const rabbit = document.querySelector('#rabbit');
  rabbit.scrollIntoView({ block: 'center', behavior: 'smooth' });
});

arrowUp.addEventListener('click', () => {
  scrollTo({ top: 0, behavior: 'smooth' });
});
