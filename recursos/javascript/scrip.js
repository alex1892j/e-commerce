let search = document.querySelector('.search-box');

document.querySelector('#searchIcon', '#coverContSearc').onclick = () => {
    search.classList.toggle('active')
    menu.classList.remove('active')
    input.focus();
    input.value = "";
    coverContSearc.style.display = "block";
    listprod.style.display = "none";
    if (input.value === "") {

        listprod.style.display = "none";
    }

};



let menu = document.querySelector('.navard');

document.querySelector('#menuIcon').onclick = () => {
    menu.classList.toggle('active')
    search.classList.remove('active')

};





window.onscroll = () => {
    menu.classList.remove('active')
    search.classList.remove('active')
    coverContSearc.style.display = "none";
    listprod.style.display = "none";

}

let header = document.querySelector('header');

window.addEventListener('scroll', () => {
    header.classList.toggle('Shadow', window.scrollY > 0);
});




let coverContSearc = document.getElementById("coverContSearc");
let listprod = document.getElementById("listprod");
let input = document.getElementById('buscar');


document.getElementById("input", addEventListener("keyup", buscadorInterno));


function buscadorInterno() {
    let filter = input.value.toUpperCase();
    let li = listprod.getElementsByTagName("li");

    for (let i = 0; i < li.length; i++) {
        const a = li[i].getElementsByTagName("a")[0];

        let textvalue = a.textContent || a.innerText;

        if (textvalue.toUpperCase().indexOf(filter) > -1) {

            li[i].style.display = "";
            listprod.style.display = "block";

            if (input.value === "") {

                listprod.style.display = "none";
            }

        } else {
            li[i].style.display = "none";
        }



    }
}

