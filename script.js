const redniBroj = document.querySelector("#redniBroj");
const ime = document.querySelector("#Ime");
const prezime = document.querySelector("#Prezime");
const tabela = document.querySelector("#tabela");
const redovi = document.querySelectorAll(".red");
//redove kao NodeList kolekciju pretvaramo u Array da bi mogli da ga sortiramo
const redoviNiz = Array.from(redovi);

//funkcije koje soritraju elemente po rednom broju, imenu i prezimenu

function sortirajBroj(a, b) {
    //redni broj iz reda tabele dohvatamo kao tekstualni sadrzaj prvog(ne nultog, jer postoji i nulto dete!) deteta elementa
    //console.log(a.childNodes)
    //console.log(a.childNodes[1].textContent) // mozete videti ovde
    if (a.childNodes[1].textContent < b.childNodes[1].textContent)
        return -1
    else if (a.childNodes[1].textContent > b.childNodes[1].textContent)
        return 1
    else
        return 0;
}

function sortirajImena(a, b) {
    //ime iz reda tabele dohvatamo kao tekstualni sadrzaj treceg deteta elementa
    //console.log(a.childNodes)
    //console.log(a.childNodes[3].textContent) // mozete videti ovde
    if (a.childNodes[3].textContent < b.childNodes[3].textContent)
        return -1
    else if (a.childNodes[3].textContent > b.childNodes[3].textContent)
        return 1
    else
        return 0;
}

function sortirajPrezimena(a, b) {
    //ime iz reda tabele dohvatamo kao tekstualni sadrzaj petog deteta elementa
    //console.log(a.childNodes)
    //console.log(a.childNodes[5].textContent) // mozete videti ovde
    if (a.childNodes[5].textContent < b.childNodes[5].textContent)
        return -1
    else if (a.childNodes[5].textContent > b.childNodes[5].textContent)
        return 1
    else
        return 0;
}

//promenljive za naizmenicno sortiranje(rastuce pa opadajuce pa rastuce itd.)
let rastuciBroj = true;
let rastuciIme = true;
let rastuciPrezime = true;

redniBroj.addEventListener('click', function () {

    let sortiraniNiz;
    if (rastuciBroj === true) {
        sortiraniNiz = redoviNiz.sort(function (a, b) {
            return sortirajBroj(a, b)
        });
        rastuciBroj = false;
    } else {
        sortiraniNiz = redoviNiz.sort(function (b, a) {
            return sortirajBroj(a, b)
        });
        rastuciBroj = true;
    }

    for (let element of sortiraniNiz) {
        tabela.appendChild(element);
    }
    /*Ponovnim dodavanjem sortiranih elemenata U DOM menja se prvobitni redosled*/
});


ime.addEventListener('click', function () {

    let sortiraniNiz;
    if (rastuciIme === true) {
        sortiraniNiz = redoviNiz.sort(function (a, b) {
            return sortirajImena(a, b)
        });
        rastuciIme = false;
    } else {
        sortiraniNiz = redoviNiz.sort(function (b, a) {
            return sortirajImena(a, b)
        });
        rastuciIme = true;
    }

    for (let element of sortiraniNiz) {
        tabela.appendChild(element);
    }
});

prezime.addEventListener('click', function () {

    let sortiraniNiz;
    if (rastuciPrezime === true) {
        sortiraniNiz = redoviNiz.sort(function (a, b) {
            return sortirajPrezimena(a, b)
        });
        rastuciPrezime = false;
    } else {
        sortiraniNiz = redoviNiz.sort(function (b, a) {
            return sortirajPrezimena(a, b)
        });
        rastuciPrezime = true;
    }

    for (let element of sortiraniNiz) {
        tabela.appendChild(element);
    }
});
