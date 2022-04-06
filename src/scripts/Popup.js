let Popwrapper = document.querySelector(".Popup-wrapper");
let Pop = document.querySelector(".Popup");

export function Popup(Title, Description, Technologies, Image, Link_Live, Link_Repo) {
    Popwrapper.style.display = "flex"
    

    let div1 = document.createElement('div');
    div1.className = "Popup-title";
    let h2 = document.createElement('h2');
    h2.textContent = Title;
    let x = document.createElement('button')
    x.textContent = 'X'
    let ul = document.createElement('ul');

    let img = document.createElement('div');
    img.className = 'Popup-img';
    img.style.backgroundImage = `url(${Image})`;

    let div2 = document.createElement('div');
    div2.className = 'Popup-content';
    let p = document.createElement('p');
    p.textContent = Description;
    let nav = document.createElement('nav');
    nav.className = 'Popup-nav';
    let Live = document.createElement('a');
    Live.textContent = 'See Live';
    Live.href = Link_Live;
    Live.target = '_blank';
    Live.className = 'Popup-Live'
    let LiveImg = document.createElement('img')
    LiveImg.src = "/src/img/Open.png"
    let Source = document.createElement('a');
    Source.textContent = 'See Source';
    Source.href = Link_Repo;
    Source.target = "_blank"
    Source.className = 'Popup-Source'
    let SourceImg = document.createElement('img')
    SourceImg.src = "/src/img/GitHub-white.png"



    Pop.appendChild(div1)
    Pop.appendChild(img)
    Pop.appendChild(div2)
    div1.appendChild(h2)
    h2.appendChild(x)
    div1.appendChild(ul)

    for(let i = 0; i < Technologies.length; i++){
        let li = document.createElement('li');
        li.textContent = Technologies[i];
        ul.appendChild(li)
    }

    div2.appendChild(p)
    div2.appendChild(nav)
    nav.appendChild(Live)
    Live.appendChild(LiveImg)
    nav.appendChild(Source)
    Source.appendChild(SourceImg)

    var close = () => {
        Popwrapper.style.display = "none"
        div1.parentNode.removeChild(div1)
        img.parentNode.removeChild(img)
        div2.parentNode.removeChild(div2)
    }
    
    Popwrapper.addEventListener('click', (e) => {
        if (Popwrapper !== e.target) return;
        close()
    })

    x.onclick = () => {
        close()
    }
}