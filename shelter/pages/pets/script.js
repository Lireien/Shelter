const petsData = `[
  {
    "name": "Jennifer",
    "img": "../../assets/images/pets-jennifer.png",
    "type": "Dog",
    "breed": "Labrador",
    "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    "age": "2 months",
    "inoculations": ["none"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Sophia",
    "img": "../../assets/images/pets-sophia.png",
    "type": "Dog",
    "breed": "Shih tzu",
    "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    "age": "1 month",
    "inoculations": ["parvovirus"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Woody",
    "img": "../../assets/images/pets-woody.png",
    "type": "Dog",
    "breed": "Golden Retriever",
    "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
    "age": "3 years 6 months",
    "inoculations": ["adenovirus", "distemper"],
    "diseases": ["right back leg mobility reduced"],
    "parasites": ["none"]
  },
  {
    "name": "Scarlett",
    "img": "../../assets/images/pets-scarlet.png",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
    "age": "3 months",
    "inoculations": ["parainfluenza"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Katrine",
    "img": "../../assets/images/pets-katrine.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
    "age": "6 months",
    "inoculations": ["panleukopenia"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Timmy",
    "img": "../../assets/images/pets-timmy.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
    "age": "2 years 3 months",
    "inoculations": ["calicivirus", "viral rhinotracheitis"],
    "diseases": ["kidney stones"],
    "parasites": ["none"]
  },
  {
    "name": "Freddie",
    "img": "../../assets/images/pets-freddie.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
    "age": "2 months",
    "inoculations": ["rabies"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Charly",
    "img": "../../assets/images/pets-charly.png",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
    "age": "8 years",
    "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
    "diseases": ["deafness", "blindness"],
    "parasites": ["lice", "fleas"]
  }
]`;

const dataPets = JSON.parse(petsData);

const bodyElement = document.querySelector('body');
const burgerElement = document.querySelector('.nav__icon');
const navElement = document.querySelector('.nav-mobile');
const navListElement = document.querySelector('.nav__list-mobile');
const shadowedBoxEl = document.querySelector('.mask__layout');

//execution
burgerElement.addEventListener('click', toggleMenu);
burgerElement.addEventListener('click', closeMenu);
navListElement.addEventListener('click', closeMenu);

//Burger
function toggleMenu() {
  burgerElement.classList.toggle('active');
  navElement.classList.toggle('active');
  shadowedBoxEl.classList.toggle('active');
  bodyElement.classList.toggle('locked');
}
function closeMenu(event) {
  if (event.target.classList.contains('nav-link-mobile')) {
    console.log(event.target);
    burgerElement.classList.remove('active');
    navElement.classList.remove('active');
    shadowedBoxEl.classList.remove('active');
    bodyElement.classList.remove('locked');
  }
}
//popup

function createPopup(name) {
  const maxPetsList = makeMaxList(dataPets);
  const pet = maxPetsList.filter((item) => item.name == name)[0];
  const popupWindow = document.createElement('div');
  popupWindow.classList.add('popup');
  popupWindow.innerHTML = `<button type="button" class="popup__close-btn">
  <img src="../../assets/images/svg/Vector.svg"
        alt="close"                    
  />
  </button>     
      <div class="popup__img">
          <img src=${pet.img} 
          alt=${pet.name}
          class='pet__picture'>
      </div>
      <div class="popup__info">            
          <div class="popup__info-kind">
              <h4 class="pet__name">${pet.name}</h4>
              <p><span class="pet__type">${
                pet.type
              }</span> - <span class="pet__breed">${pet.breed}</span>
              </p>
          </div>
          <p class="popup__about">${pet.description}</p>
          <ul class="popup__characteristics">
              <li class="characteristic">Age: <span class="age">${pet.age}
              </span></li>
              <li class="characteristic">Inoculations: <span class="inoculations">
              ${convertArrToStr(pet.inoculations)}</span></li>
              <li class="characteristic">Diseases: <span class="diseases">
              ${convertArrToStr(pet.diseases)}</span></li>
              <li class="characteristic">Parasites: <span class="parasites">
              ${convertArrToStr(pet.parasites)}</span></li>
          </ul>
      </div>`;
  bodyElement.prepend(popupWindow);
}
function popupOpenHandler() {
  const sliderElement = document.querySelector('.friends-cards__wrapper');
  sliderElement.addEventListener('click', (e) => {
    let petCard = e.target.closest('.friends-card');
    if (e.target.classList.contains('friends-card') || petCard) {
      createPopup(petCard.dataset.name);
      shadowedBoxEl.classList.toggle('active');
      bodyElement.classList.toggle('locked');
      const closePopupBtnEl = document.querySelector('.popup__close-btn');
      closePopupBtnEl.addEventListener('click', () => {
        popupCloseHandler();
      });
    }
  });
}

function popupCloseHandler() {
  shadowedBoxEl.classList.remove('active');
  bodyElement.classList.remove('locked');
  popupDeleteHandler();
}
function popupDeleteHandler() {
  const popup = document.querySelector('.popup');
  if (popup) popup.remove();
}
function convertArrToStr(arr) {
  let str = arr.join(', ');
  if (str[length - 1] == ',') {
    return str.substring(0, str.length - 1);
  } else {
    return str;
  }
}

popupOpenHandler();

//pagination&slider

const petsCardsWrapper = document.querySelector('.friends-cards__wrapper');
const currentPageElement = document.querySelector('.current__btn');
const btnForwardEl = document.querySelector('.forward__btn');

let cardsField = setSliderSize();
// let startPage = 1;
let currentPage = 1;
currentPageElement.innerHTML = currentPage;

function makeMaxList(data) {
  let newArr = [];
  for (let i = 0; i < 6; i++) {
    const newPets = data;
    for (let j = data.length; j > 0; j--) {
      let random = randomizer(j);
      let randomElement = newPets.splice(random, 1)[0];
      newPets.push(randomElement);
    }
    newArr = [...newArr, ...newPets];
  }
  console.log(newArr);
  return newArr;
}

function cardCreator(list) {
  const maxPetsList = sort863Elements(makeMaxList(list));
  let str = '';
  cardsField = setSliderSize();
  let startFrom = cardsField * (currentPage - 1);
  for (let i = startFrom; i < startFrom + cardsField; i++) {
    str += `<div class="friends-card" data-name="${maxPetsList[i].name}">
    <div class="card__img-wrapper">
      <img
        src="${maxPetsList[i].img}"
        alt="${maxPetsList[i].name}"
        class="pets__img"
      />
    </div>
    <h4 class="card__name">${maxPetsList[i].name}</h4>
    <a href="##" class="anchor card__btn">Learn more</a>
  </div>`;
  }
  petsCardsWrapper.innerHTML = str;
}
cardCreator(dataPets);

function setSliderSize() {
  let width = document.documentElement.clientWidth;
  if (width > 1279) {
    return 8;
  } else if (width < 768) {
    return 3;
  } else {
    return 6;
  }
}
function randomizer(n) {
  let num;
  return (num = Math.floor(Math.random() * n));
}

function shuffleCards(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
