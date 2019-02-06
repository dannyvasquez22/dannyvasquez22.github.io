const URL = 'https://raw.githubusercontent.com/dannyvasquez22/dannyvasquez22.github.io/master/js/';
const menu = document.getElementById('menu');
const miInit = {
    method: 'GET',
    cache: 'default'
};

requestJSON('data.json');

function requestJSON(archivo){
    fetch(`${URL}${archivo}`,miInit)
    .then((resp) => {
        if(resp.status != 200){

        }else{
            return resp.json();
        }
    })
    .then((data) => {
        //console.log(data);
        contruyeElementos(data);
    })
    .catch((error) => {
        console.log('error');
    });
}

let eleH1, eleH2, eleP, eleUl, eleText, eleH5, eleH3, eleLang;
let objeto = document.getElementsByClassName('item');

function contruyeElementos(data){
    eleUl = document.createElement('ul');
    for(const cont of data[0].interesesPersonales){
        const eleLi = document.createElement('li');
        eleText = document.createTextNode(cont);
        eleLi.appendChild(eleText);
        eleUl.appendChild(eleLi);
        eleUl.appendAfter(document.getElementById('intereses_personales'));
    }

    elementUlLanguage = document.createElement('ul');
    for (const lang of data[0].languages) {
        const eleLi = document.createElement('li');
        eleLang = document.createTextNode(lang);
        eleLi.appendChild(eleLang);
        elementUlLanguage.appendChild(eleLi);
        elementUlLanguage.appendAfter(document.getElementById('languages'));
    }

    for (const lang of data[0].aboutMe) {
        const elementPAbout = document.createElement('p');
        elementPAbout.appendChild(document.createTextNode(lang));
        elementPAbout.appendAfter(document.getElementById('about_me'));
    }

    let objetoEdu = document.getElementById('educationBox');    
    for (const edu of data[0].Educacion) {
        const divi = document.createElement('div');
        divi.classList.add('line');
        
        const divi_child = document.createElement('div');
        divi_child.classList.add('item');
        
        const eleH2 = document.createElement('h2');
        eleH2.appendChild(document.createTextNode(edu.Tema));

        const eleH5 = document.createElement('h5');
        eleH5.appendChild(document.createTextNode(edu.Anio));

        const elementArticle = document.createElement('article');
        elementArticle.classList.add('url');

        const elementA = document.createElement('a');
        elementA.href = edu.URL ? edu.URL : "#";
        elementA.target = "_blank";

        const elementP = document.createElement('p');
        elementP.appendChild(document.createTextNode(edu.Lugar));

        const elementSpan = document.createElement('span');
        elementSpan.classList.add('icon-r-arrow_right');

        elementA.appendChild(elementP);
        elementA.appendChild(elementSpan);

        elementArticle.appendChild(elementA);

        divi_child.appendChild(eleH2);
        divi_child.appendChild(eleH5);
        divi_child.appendChild(elementArticle);

        divi.appendChild(divi_child);
        objetoEdu.appendChild(divi);
    }

    const elemSection = document.createElement('section');
    elemSection.classList.add('hg_uno');
    // for (const server of data[0].skillServer) {
    //     const divBox = document.createElement('div');
    //     divBox.classList.add('box');
    //     divBox.classList.add('item');
        
    //     if (server.next === true) {
    //         divBox.classList.add('disable');
    //     }

    //     const divImg = document.createElement('div');
    //     divImg.classList.add('img');

    //     const elemImg = document.createElement('img');
    //     elemImg.src = server.img;
    //     elemImg.alt = server.lenguaje;

    //     divImg.appendChild(elemImg);

    //     const elemArticle = document.createElement('article');
    //     elemArticle.classList.add('info');

    //     const divData = document.createElement('div');
    //     divData.classList.add('datos');

    //     const elemArticleTitle = document.createElement('article');
    //     elemArticleTitle.classList.add('title');

    //     const eleH3 = document.createElement('h3');
    //     eleH3.appendChild(document.createTextNode(server.lenguaje));

    //     elemArticleTitle.appendChild(eleH3);

    //     const eleSpan = document.createElement('span');
    //     eleSpan.classList.add('icon-r-favorite');

    //     if (server.favorite === true) {
    //         elemArticleTitle.appendChild(eleSpan);
    //     }

    //     const elementP = document.createElement('p');
    //     elementP.appendChild(document.createTextNode(server.level));

    //     divData.appendChild(elemArticleTitle);
    //     divData.appendChild(elementP);

    //     elemArticle.appendChild(divData);

    //     divBox.appendChild(divImg);
    //     divBox.appendChild(elemArticle);

    //     elemSection.appendChild(divBox);
    //     elemSection.appendAfter(document.getElementById('byServer'));
    //     // console.log(elemSection);
    // }
}

const nav = document.getElementById('n-dos');
const barra = document.getElementsByClassName('barra');
const mClose = document.getElementsByClassName('m_close');
let cont = 0;

menu.addEventListener('click',()=>{
    if(cont == 0){
        nav.style.minHeight = '100vh';
        nav.style.display = 'flex';
        menu.childNodes[1].textContent = 'Cerrar';
        for(const elem of barra){
            elem.classList.add('b-on');
        }    
        cont++;
    }else{  
        close();
        cont--;
    }
});

for(const btn_nav of mClose){
    btn_nav.addEventListener('click',()=>{
        close();
        cont--;
    });
}

function close(){
    menu.childNodes[1].textContent = 'Menu';
    nav.style.minHeight = '0vh';
    nav.style.display = 'none';

    for(const elem of barra){
        elem.classList.remove('b-on');
    }  
}

const box = document.getElementsByClassName('box');

function animate(){
    for(let i = 0; i < box.length; i++){
        let a = box[i].children[1];
        let b;
        box[i].addEventListener('mouseover',() => {
            b = a.children[0];
            let c = b.children[0];
            if (c.children[1] != null){
                c.childNodes[3].style.opacity = 1;
                c.childNodes[3].style.marginLeft = '0.5em';
            }
        });
        box[i].addEventListener('mouseout',() => {
            b = a.children[0];
            let c = b.children[0];
            if (c.children[1] != null){
                c.childNodes[3].style.opacity = 0;
                c.childNodes[3].style.marginLeft = '-0.5em';
            }
        });

    }
}

animate();

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function toggleDarkLight() {
    var body = document.getElementById("body");
    var currentClass = body.className;
    body.className = currentClass == "dark-mode" ? "light-mode" : "dark-mode";
    // console.log(body.className);
}


/* Adds Element BEFORE NeighborElement */
Element.prototype.appendBefore = function (element) {
    element.parentNode.insertBefore(this, element);
}, false;

/* Adds Element AFTER NeighborElement */
Element.prototype.appendAfter = function (element) {
    element.parentNode.insertBefore(this, element.nextSibling);
}, false;