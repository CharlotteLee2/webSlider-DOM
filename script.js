//let box = document.querySelector(".box"); //selcting the box element
/*
let box = document.getElementsByTagName("section");
console.log(box);

for(let i = 0; i < box.length; i++){
  box[i].style.border = "1px solid black";
}*/

/*
querySelector() => returns the first elemts with the selector

querySelectorAll() => returns a node list(object) with all the selected items

getElementsByClassName() => returns a HTML collection (array) with all the matching class items

getElementsByTagName()

getElementsById() => returns one element with the element matching the ID

*/

// select arrows
const prevArrow = document.querySelector('.prev');
const nextArrow = document.querySelector('.next');

// save the number of images inside the container

const carouselContainer = document.querySelector('.carousel').children;

// the number of children and save in a new variable
let totalSlides = carouselContainer.length;
let index = 0;

// add event listener to the arrows

prevArrow.addEventListener('click', () => {
  moveSlides("prev");
});

nextArrow.addEventListener('click', () => {
  moveSlides("next");
});

const moveSlides = (direction) => {

  if(direction === 'next') {
    index++;
    if(index === totalSlides) {
      index = 0;
    }
  }
  else
  {
    if(index === 0) {
      index = totalSlides - 1;
    }
    else {
      index--;
    }
  }

  for(let i = 0; i < totalSlides; i++) {
    carouselContainer[i].classList.remove('main');
  }

    carouselContainer[index].classList.add('main');
    console.log(index);

};

setInterval(() => {
  moveSlides('next');
}, 2000);












