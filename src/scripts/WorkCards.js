import Works from './Data.js';
import Popup from './Popup.js';

const WorkCards = document.querySelector('.Works-Cards');
const RecentImg = document.querySelector('.Works-Recent-Img');
const RecentH2 = document.querySelector('.Works-Recent-h2');
const RecentP = document.querySelector('.Works-Recent-p');
const RecentButton = document.querySelector('.Works-Card-Button');
const RecentCat = document.querySelector('.Works-Card-Categories');

RecentImg.src = Works[0].Image;
RecentH2.textContent = Works[0].Title;
RecentP.textContent = Works[0].Description;

for (let i = 0; i < Works[0].Technologies.length; i += 1) {
  const li = document.createElement('li');
  li.textContent = Works[0].Technologies[i];
  RecentCat.appendChild(li);
}

RecentButton.onclick = () => {
  Popup(Works[0].Title, Works[0].Description, Works[0].Technologies,
    Works[0].Image, Works[0].Link_Live, Works[0].Link_Repo);
};

for (let i = 0; i < Works.length; i += 1) {
  const article = document.createElement('article');
  article.className = 'Works-Card';
  article.style.backgroundImage = `linear-gradient(180.45deg,rgba(38, 38, 38, 0) 0.75%,rgba(38, 38, 38, 0.9) 61.94%),url(${Works[i].Image})`;
  const mediaQuery = window.matchMedia('(min-device-width: 768px)');
  if (mediaQuery.matches) {
    article.addEventListener('mouseenter', () => {
      article.style.backgroundImage = `url(${Works[i].Image})`;
    });
    article.addEventListener('mouseleave', () => {
      article.style.backgroundImage = `linear-gradient(180.45deg,rgba(38, 38, 38, 0) 0.75%,rgba(38, 38, 38, 0.9) 61.94%),url(${Works[i].Image})`;
    });
  }
  const div = document.createElement('div');
  div.className = 'Works-Card-Content';
  const h2 = document.createElement('h2');
  h2.textContent = Works[i].Title;
  const p = document.createElement('p');
  p.textContent = Works[i].Description;
  const ul = document.createElement('ul');
  ul.className = 'Works-Card-Categories';

  const nav = document.createElement('nav');
  nav.className = 'Works-Card-SeeProject';
  const button = document.createElement('button');
  button.textContent = 'See Project';
  button.className = 'button-reg';
  button.type = 'button';
  article.appendChild(div);
  article.appendChild(nav);
  div.appendChild(h2);
  div.appendChild(p);
  div.appendChild(ul);

  for (let j = 0; j < Works[i].Technologies.length; j += 1) {
    const li = document.createElement('li');
    li.textContent = Works[i].Technologies[j];
    ul.appendChild(li);
  }

  nav.appendChild(button);
  WorkCards.appendChild(article);

  button.onclick = () => {
    Popup(Works[i].Title, Works[i].Description, Works[i].Technologies,
      Works[i].Image, Works[i].Link_Live, Works[i].Link_Repo);
  };
}
