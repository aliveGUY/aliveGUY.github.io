const Popwrapper = document.querySelector('.Popup-wrapper');
const Pop = document.querySelector('.Popup');

export function Popup(Title, Description, Technologies, Image, LinkLive, LinkRepo) {
  Popwrapper.style.display = 'flex';

  const div1 = document.createElement('div');
  div1.className = 'Popup-title';
  const h2 = document.createElement('h2');
  h2.textContent = Title;
  const x = document.createElement('button');
  x.textContent = 'X';
  const ul = document.createElement('ul');

  const img = document.createElement('div');
  img.className = 'Popup-img';
  img.style.backgroundImage = `url(${Image})`;

  const div2 = document.createElement('div');
  div2.className = 'Popup-content';
  const p = document.createElement('p');
  p.textContent = Description;
  const nav = document.createElement('nav');
  nav.className = 'Popup-nav';
  const Live = document.createElement('a');
  Live.textContent = 'See Live';
  Live.href = LinkLive;
  Live.target = '_blank';
  Live.className = 'Popup-Live';
  const LiveImg = document.createElement('img');
  LiveImg.src = '/src/img/Open.png';
  const Source = document.createElement('a');
  Source.textContent = 'See Source';
  Source.href = LinkRepo;
  Source.target = '_blank';
  Source.className = 'Popup-Source';
  const SourceImg = document.createElement('img');
  SourceImg.src = '/src/img/GitHub-white.png';

  Pop.appendChild(div1);
  Pop.appendChild(img);
  Pop.appendChild(div2);
  div1.appendChild(h2);
  h2.appendChild(x);
  div1.appendChild(ul);

  for (let i = 0; i < Technologies.length; i += 1) {
    const li = document.createElement('li');
    li.textContent = Technologies[i];
    ul.appendChild(li);
  }

  div2.appendChild(p);
  div2.appendChild(nav);
  nav.appendChild(Live);
  Live.appendChild(LiveImg);
  nav.appendChild(Source);
  Source.appendChild(SourceImg);

  const close = () => {
    Popwrapper.style.display = 'none';
    div1.parentNode.removeChild(div1);
    img.parentNode.removeChild(img);
    div2.parentNode.removeChild(div2);
  };

  Popwrapper.addEventListener('click', (e) => {
    if (Popwrapper !== e.target) return;
    close();
  });

  x.onclick = () => {
    close();
  };
}