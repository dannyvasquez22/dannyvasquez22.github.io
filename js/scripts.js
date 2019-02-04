const URL = 'https://raw.githubusercontent.com/srjefers/srjefers.github.io/master/resume/js/';
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

let eleH1, eleH2, eleP, eleUl, eleText, eleH5, eleH3;
let objeto = document.getElementsByClassName('item');

function contruyeElementos(data){
    eleUl = document.createElement('ul');
    // let firstBox = document.getElementById('r_uno');
    for(const cont of data[0].interesesPersonales){
        const eleLi = document.createElement('li');
        eleText = document.createTextNode(cont);
        eleLi.appendChild(eleText);
        eleUl.appendChild(eleLi);
        // firstBox.appendChild(eleUl);
        eleUl.appendAfter(document.getElementById('intereses_personales'));
    }
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