import { Works } from './Data.js';
import { Popup } from './Popup.js';

const WorkCards = document.querySelector('.Works-Cards');

for (let i = 0; i < Works.length; i += 1) {
  const article = document.createElement('article');
  article.className = 'Works-Card';
  article.style.backgroundImage = `linear-gradient(180.45deg,rgba(38, 38, 38, 0) 0.75%,rgba(38, 38, 38, 0.9) 61.94%),url(${Works[i].Image})`;
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

  for (let i = 0; i < Works[i].Technologies.length; i += 1) {
    const li = document.createElement('li');
    li.textContent = Works[i].Technologies[i];
    ul.appendChild(li);
  }

  nav.appendChild(button);
  WorkCards.appendChild(article);

  button.onclick = () => {
    Popup(Works[i].Title, Works[i].Description, Works[i].Technologies,
      Works[i].Image, Works[i].Link_Live, Works[i].Link_Repo);
  };
}