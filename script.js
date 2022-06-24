/* eslint-disable no-plusplus */
const hamburgerButton = document.getElementById('menu-btn');

hamburgerButton.addEventListener('click', () => {
  document.getElementById('lead').className += ' display-menu';
  document.getElementsByClassName('logo')[0].className += ' display-menu';
  document.getElementById('menu').className += ' display-menu';
  document.getElementsByClassName('nav-container')[0].classList.add('display-menu');
  document.getElementsByClassName('categories')[0].classList.add('display-menu');
  document.getElementsByClassName('close')[0].classList.add('display-menu');
  document.getElementsByClassName('header-content')[0].classList.add('display-menu');
  document.getElementsByTagName('body')[0].classList.add('display-menu');

  for (let i = 0; i < document.getElementsByClassName('category').length; i++) {
    document.getElementsByClassName('category')[i].classList.add('display-menu');
  }
});

const closeButton = document.getElementsByClassName('close')[0];

function closeMenu() {
  document.getElementById('lead').classList.remove('display-menu');
  document.getElementsByClassName('logo')[0].classList.remove('display-menu');
  document.getElementById('menu').classList.remove('display-menu');
  document.getElementsByClassName('nav-container')[0].classList.remove('display-menu');
  document.getElementsByClassName('categories')[0].classList.remove('display-menu');
  document.getElementsByClassName('close')[0].classList.remove('display-menu');
  document.getElementsByClassName('header-content')[0].classList.remove('display-menu');
  document.getElementsByTagName('body')[0].classList.remove('display-menu');

  for (let i = 0; i < document.getElementsByClassName('category').length; i++) {
    document.getElementsByClassName('category')[i].classList.remove('display-menu');
  }
}

closeButton.addEventListener('click', () => {
  closeMenu();
});

const closeMenuElements = document.getElementsByClassName('category');

for (let i = 0; i < closeMenuElements.length; i++) {
  closeMenuElements[i].addEventListener('click', () => {
    closeMenu();
  });
}

// Windows Pop Ups

const projectsInfo = [
  {
    project_title: 'Tonic',
    project_image: 'Images/desk-card1.png',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    short_description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    technologies: ['html', 'css', 'javaScript', 'github', 'ruby', 'Bootstrap'],
    live_version: 'https://www.portfolio.com/portfolio1',
    source_link: 'https://www.github.com/danielgalindo10/tonic',
  },

  {
    project_title: 'Multi-Post Stories',
    project_image: 'Images/desk-card2.png',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    short_description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    technologies: ['html', 'css', 'javaScript', 'github', 'ruby', 'Bootstrap'],
    live_version: 'https://www.portfolio.com/portfolio2',
    source_link: 'https://www.github.com/danielgalindo10/multi-post-stories',
  },

  {
    project_title: 'Facebook 360',
    project_image: 'Images/desk-card3.png',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    short_description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    technologies: ['html', 'css', 'javaScript', 'github', 'ruby', 'Bootstrap'],
    live_version: 'https://www.portfolio.com/portfolio3',
    source_link: 'https://www.github.com/danielgalindo10/facebook360',
  },

  {
    project_title: 'Uber Navigation',
    project_image: 'Images/desk-card4.png',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    short_description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    technologies: ['html', 'css', 'javaScript', 'github', 'ruby', 'Bootstrap'],
    live_version: 'https://www.portfolio.com/portfolio4',
    source_link: 'https://www.github.com/danielgalindo10/uber-navigation',
  },
];

let cardLayout = '';

for (let i = 0; i < projectsInfo.length; i++) {
  cardLayout = `
  <div class="card card1">
  <img class="card-photo" src="${projectsInfo[i].project_image}" alt="card1" />
    <div class="card-content">
      <h2 class="title">${projectsInfo[i].project_title}</h2>
      <ul class="list">
        <li class="list-element">CANOPY</li>
        <li class="dot"><span class="point"></span></li>
        <li class="list-element text-grey">Back End Dev</li>
        <li class="dot"><span class="point"></span></li>
        <li class="list-element text-grey">2015</li>
      </ul>
      
      <p class="text">${projectsInfo[i].short_description}</p>
      <div class="card-exp">
        <div class="Languages">
          <ul class="card-languages">
            <li class="lan"><span>html</span></li>
            <li class="lan"><span>Ruby on Rails</span></li>
            <li class="lan"><span>css</span></li>
            <li class="lan"><span>javaScript</span></li>
          </ul>
        </div>
      </div>
      <div class="button">
        <button class="btn" type="button" onClick='showPopUp(${i})'> See Project</button>
      </div>
    </div>
  </div>`;

  document.getElementsByClassName('content-work')[0].innerHTML += cardLayout;
}

function closePopUp() {
  document.getElementsByTagName('body')[0].classList.remove('pop-up');
  document.getElementsByClassName('content-work')[0].classList.remove('pop-up');
  document.getElementById('pop-up').classList.remove('pop-up');
  document.getElementById('pop-up-content').classList.remove('pop-up');
}

function popUpTechnologies(projectNumber) {
  let codingSkills = '';
  for (let i = 0; i < projectsInfo[projectNumber].technologies.length; i++) {
    codingSkills += `<li class="lan"><span>${projectsInfo[projectNumber].technologies[i]}</span></li>`;
  }
  return codingSkills;
}

// eslint-disable-next-line no-unused-vars
function showPopUp(cardNumber) {
  let paragraphText = '';

  if (window.screen.width >= 768) {
    paragraphText = projectsInfo[cardNumber].description;
  } else {
    paragraphText = projectsInfo[cardNumber].short_description;
  }

  const codingSkills = popUpTechnologies(cardNumber);

  const htmlPopUp = `
    <div id="pop-up">
      <div class="pop-bckg">
        <div class="card">
          <div class="card-content">
            <h2 class="title">${projectsInfo[cardNumber].project_title}<i class="fa-solid fa-xmark close-pop-up" ></i></h2>
            <ul class="list">
              <li class="list-element">CANOPY</li>
              <li class="dot"><span class="point"></span></li>
              <li class="list-element text-grey">Back End Dev</li>
              <li class="dot"><span class="point"></span></li>
              <li class="list-element text-grey">2015</li>
            </ul>
            <div style="background: url(${projectsInfo[cardNumber].project_image}) no-repeat center; background-size: 1334px" class="card-photo">
            </div>
            <div id="pop-up-columns">
              <div id="pop-up-left-column">
                <p class="text">${paragraphText}</p>
              </div>
              <div id="pop-up-right-column">
                <div class="card-exp">
                  <div class="Languages">
                    <ul class="card-languages">
                      ${codingSkills}
                    </ul>
                  </div>
                </div>
              </div>
              <div class="pop-up-buttons">
                <div class="button">
                  <button class="btn" type="button">See Live <i class="fa-solid fa-arrow-up-right-from-square"></i></button>
                </div>
                <div class="button">
                  <button class="btn" type="button">See Source <i class="fa-brands fa-github"></i></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>`;

  document.getElementById('pop-up-content').innerHTML = htmlPopUp;
  document.getElementById('pop-up-content').classList.add('pop-up');
  document.getElementsByTagName('body')[0].classList.add('pop-up');
  document.getElementsByClassName('content-work')[0].classList.add('pop-up');
  document.getElementById('pop-up').classList.add('pop-up');
  document.getElementsByClassName('close-pop-up')[0].addEventListener('click', () => {
    closePopUp();
  });
}

// End of Windows Pop Ups

// Validation Form Section

const form = document.querySelector('.form-contact');
const email = document.getElementById('mail');
const error = document.querySelector('small');
form.addEventListener('submit', (e) => {
  const message = [];

  if (email.value !== email.value.toLowerCase()) {
    message.push('Email must be on lowercase.');
  }

  if (message.length > 0) {
    e.preventDefault();
    error.innerHTML = message.join('<br/>');
    email.style.border = '2px solid #df0000';
    email.style.borderRadius = '3px';
    error.style.backgroundColor = 'red';
  }
});

// Preserve Data on the Browser Section

function getFormData() {
  const formData = {
    name: document.getElementById('name').value,
    email: document.getElementById('mail').value,
    message: document.getElementById('msg').value,
  };

  // // Put the object into storage
  localStorage.setItem('formData', JSON.stringify(formData));

  // // Retrieve the object from storage
  const retrieveFormData = localStorage.getItem('formData');
  // eslint-disable-next-line no-console
  console.log(JSON.parse(retrieveFormData));
}

document.getElementById('name').addEventListener('change', () => {
  getFormData();
});
document.getElementById('mail').addEventListener('change', () => {
  getFormData();
});
document.getElementById('msg').addEventListener('change', () => {
  getFormData();
});

function loadLocalStorageData() {
  if (localStorage.getItem('formData') !== null) {
    // console.log('Content exists');
    const retrieveFormData = localStorage.getItem('formData');
    const retrieveJsonData = JSON.parse(retrieveFormData);
    document.getElementById('name').value = retrieveJsonData.name;
    document.getElementById('mail').value = retrieveJsonData.email;
    document.getElementById('msg').value = retrieveJsonData.message;
  }
}

window.onload = () => {
  loadLocalStorageData();
  // console.log('The DOM it's uploaded');
}; 
// End of preserve data in the browser section