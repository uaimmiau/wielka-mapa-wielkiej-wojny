var i = 0;

//Stolice Neutralne
var tabStoliceNeutralne = ["h2006","h1908","h1114","h1214", "h1314", "h1515", "h0617", "h0818", "h1918", "h0620", "h1824", "h1924", "h1626", "h2126"];
var liczbaStolicNeutralnych = tabStoliceNeutralne.length;
for(i = 0; i < liczbaStolicNeutralnych; i++){
    document.getElementById(tabStoliceNeutralne[i]).src = "img/stolyca.png";
}
//Stolice Ententa
var tabStoliceEntenta = ["h1111", "h1512", "h0724", "h1724"];
var liczbaStolicEntenty = tabStoliceEntenta.length;
for(i = 0; i < liczbaStolicEntenty; i++){
    document.getElementById(tabStoliceEntenta[i]).src = "img/stolyca_e.png";
}
//Stolice Centralne
var tabStoliceCentralne = ["h1118", "h1520", "h1726"];
var liczbaStolicCentralnych = tabStoliceCentralne.length;
for(i = 0; i < liczbaStolicCentralnych; i++){
    document.getElementById(tabStoliceCentralne[i]).src = "img/stolyca_c.png";
}
document.getElementById('h1828').src = "img/stambul.png";

//Mosty dla pana starosty
document.getElementById('h0907').src = "img/most_l.png";
document.getElementById('h0909').src = "img/most_r.png";
document.getElementById('h1830').src = "img/most_r.png";
document.getElementById('h0908').src = "img/most_t.png";
document.getElementById('h1729').src = "img/most_t.png";
document.getElementById('h1008').src = "img/most_b.png";
document.getElementById('h1829').src = "img/most_b.png";

//Trudne warunki nieatfosmeryczne
var tabTrudneWarunki = ["h0219", "h0220", "h0221", "h0222", "h0223", "h0318", "h0319", "h0320", "h0322", "h0323", "h0324", "h0418", "h0423", "h0424", "h0524", "h0525", "h0725", "h0825", "h0925", "h0926", "h0927", "h1235", "h1334", "h1335", "h1422", "h1424", "h1425", "h1434", "h1513", "h1516", "h1517", "h1518", "h1519", "h1614", "h1615", "h1616", "h1617", "h1618", "h1635", "h1709", "h1716", "h1734", "h1810"];
var liczbaTrudnychWarunkow = tabTrudneWarunki.length;
for(i = 0; i < liczbaTrudnychWarunkow; i++){
    document.getElementById(tabTrudneWarunki[i]).src = "img/gory.png";
}
document.getElementById('h1515').src = "img/eeee.png";


//ROBIENIE OPISÓW
let tabOpisow = [];
// let tabOpisow = [
//     {
//         kraj: "Niemcy",
//         stolica: "Berlin",
//         wladca: "Cesarz Wilhelm II",
//         stabilnosc: "Sytuacja w Niemczech jest stabilna"

//     },    
//     {
//         kraj: "Austro-Węgry",
//         stolica: "Wiedeń",
//         wladca: "Cesarz Franciszek Józef",
//         stabilnosc: "Sytuacja w Austro-Węgrzech jest stabilna"

//     },
//     {
//         kraj: "Imperium Osmańskie",
//         stolica: "Konstantynopol",
//         wladca: "Sułtan Mehmed V",
//         stabilnosc: "Sytuacja w Turcji jest stabilna"

//     },
//     {
//         kraj: "Bułgaria",
//         stolica: "Sofia",
//         wladca: "Car Ferdynand I",
//         stabilnosc: "Sytuacja w Bułgarii jest stabilna"

//     },
//     {
//         kraj: "Wielka Brytania",
//         stolica: "Londyn",
//         wladca: "Król Jerzy V",
//         stabilnosc: "Sytuacja w Wielkiej Brytanii jest stabilna"

//     },
//     {
//         kraj: "Francja",
//         stolica: "Paryż",
//         wladca: "Prezydent Raymond Poincare",
//         stabilnosc: "Sytuacja we Francji jest stabilna"

//     },
//     {
//         kraj: "Rosja",
//         stolica: "Petersburg",
//         wladca: "Car Mikołaj II",
//         stabilnosc: "Sytuacja w Rosji jest stabilna"

//     },
//     {
//         kraj: "Serbia",
//         stolica: "Belgrad",
//         wladca: "Król Piotr I",
//         stabilnosc: "Sytuacja w Serbii jest stabilna"

//     },
//     {
//         kraj: "Norwegia",
//         stolica: "Oslo",
//         wladca: "Król Haakon VII",
//         stabilnosc: "Ogląda wojnę z bezpiecznej odległości"

//     },
//     {
//         kraj: "Szwecja",
//         stolica: "Sztokholm",
//         wladca: "Król Gustaw V",
//         stabilnosc: "Ogląda wojnę z bezpiecznej odległości"

//     },    
//     {
//         kraj: "Dania",
//         stolica: "Kopenhaga",
//         wladca: "Król Chrystian X",
//         stabilnosc: "Ogląda wojnę z bezpiecznej odległości"

//     },    
//     {
//         kraj: "Holandia",
//         stolica: "Amsterdam",
//         wladca: "Królowa Wilhelmina",
//         stabilnosc: "Ogląda wojnę z bezpiecznej odległości"

//     },    
//     {
//         kraj: "Belgia",
//         stolica: "Bruksela",
//         wladca: "Król Albert I",
//         stabilnosc: "Ogląda wojnę z bezpiecznej odległości"

//     },    
//     {
//         kraj: "Luksemburg",
//         stolica: "Luksemburg",
//         wladca: "Księżna Maria Adelajda",
//         stabilnosc: "Ogląda wojnę z bezpiecznej odległości"

//     },
//     {
//         kraj: "Szwajcaria",
//         stolica: "Berno",
//         wladca: "Rada federalna",
//         stabilnosc: "Ściśle neutralna"
//     },
//     {
//         kraj: "Rumunia",
//         stolica: "Bukareszt",
//         wladca: "Król Ferdynand I",
//         stabilnosc: "Ogląda wojnę z bezpiecznej odległości"

//     },    
//     {
//         kraj: "Czarnogóra",
//         stolica: "Cetinje",
//         wladca: "Król Mikołaj I",
//         stabilnosc: "Ogląda wojnę z bezpiecznej odległości"

//     },    
//     {
//         kraj: "Albania",
//         stolica: "Tirana",
//         wladca: "Książe Wilhelm I",
//         stabilnosc: "Ogląda wojnę z bezpiecznej odległości"

//     },    
//     {
//         kraj: "Grecja",
//         stolica: "Ateny",
//         wladca: "Król Konstantyn I",
//         stabilnosc: "Ogląda wojnę z bezpiecznej odległości"

//     },    
//     {
//         kraj: "Włochy",
//         stolica: "Rzym",
//         wladca: "Król Wiktor Emanuel III",
//         stabilnosc: "Ogląda wojnę z bezpiecznej odległości"

//     },    
//     {
//         kraj: "Hiszpania",
//         stolica: "Madryt",
//         wladca: "Król Alfons XIII",
//         stabilnosc: "Ogląda wojnę z bezpiecznej odległości"
//     },    
//     {
//         kraj: "Portugalia",
//         stolica: "Lizbona",
//         wladca: "Prezydent Manuel de Arriaga",
//         stabilnosc: "Ogląda wojnę z bezpiecznej odległości"

//     }
// ];

 fetch("opisy.json").then( res => {
     return res.json();
 }).then(tabOpisy => {
     tabOpisow = tabOpisy;
 }).catch( err => {
     console.error(err);
 });

const h2006= document.getElementById('h2006');
const h1908= document.getElementById('h1908');
const h1114= document.getElementById('h1114');
const h1214= document.getElementById('h1214');
const h1314= document.getElementById('h1314');
const h1515= document.getElementById('h1515');
const h0617= document.getElementById('h0617');
const h0818= document.getElementById('h0818');
const h1918= document.getElementById('h1918');
const h0620= document.getElementById('h0620');
const h1824= document.getElementById('h1824');
const h1924= document.getElementById('h1924');
const h1626= document.getElementById('h1626');
const h2126= document.getElementById('h2126');
const h1111= document.getElementById('h1111');
const h1512= document.getElementById('h1512');
const h0724= document.getElementById('h0724');
const h1724= document.getElementById('h1724');
const h1118= document.getElementById('h1118');
const h1520= document.getElementById('h1520');
const h1726= document.getElementById('h1726');
const h1828= document.getElementById('h1828');
const kraj = document.getElementById('kraj');
const stolica = document.getElementById('stolica');
const wladca = document.getElementById('wladca');
const stabilnosc = document.getElementById('stabilnosc');

h2006.addEventListener('mouseenter', e => { 
    kraj.innerText = tabOpisow[21].kraj;
    stolica.innerText = tabOpisow[21].stolica;
    wladca.innerText = tabOpisow[21].wladca;
    stabilnosc.innerText = tabOpisow[21].stabilnosc;
    document.getElementById('opis').style.color = "#000000";
});
h1908.addEventListener('mouseenter', e => { 
    kraj.innerText = tabOpisow[20].kraj;
    stolica.innerText = tabOpisow[20].stolica;
    wladca.innerText = tabOpisow[20].wladca;
    stabilnosc.innerText = tabOpisow[20].stabilnosc;
    document.getElementById('opis').style.color = "#000000";
});
h1114.addEventListener('mouseenter', e => { 
    kraj.innerText = tabOpisow[11].kraj;
    stolica.innerText = tabOpisow[11].stolica;
    wladca.innerText = tabOpisow[11].wladca;
    stabilnosc.innerText = tabOpisow[11].stabilnosc;
    document.getElementById('opis').style.color = "#000000";
});
h1214.addEventListener('mouseenter', e => { 
    kraj.innerText = tabOpisow[12].kraj;
    stolica.innerText = tabOpisow[12].stolica;
    wladca.innerText = tabOpisow[12].wladca;
    stabilnosc.innerText = tabOpisow[12].stabilnosc;
    document.getElementById('opis').style.color = "#000000";
});
h1314.addEventListener('mouseenter', e => { 
    kraj.innerText = tabOpisow[13].kraj;
    stolica.innerText = tabOpisow[13].stolica;
    wladca.innerText = tabOpisow[13].wladca;
    stabilnosc.innerText = tabOpisow[13].stabilnosc;
    document.getElementById('opis').style.color = "#000000";
});
h1515.addEventListener('mouseenter', e => { 
    kraj.innerText = tabOpisow[14].kraj;
    stolica.innerText = tabOpisow[14].stolica;
    wladca.innerText = tabOpisow[14].wladca;
    stabilnosc.innerText = tabOpisow[14].stabilnosc;
    document.getElementById('opis').style.color = "#000000";
});
h0617.addEventListener('mouseenter', e => { 
    kraj.innerText = tabOpisow[8].kraj;
    stolica.innerText = tabOpisow[8].stolica;
    wladca.innerText = tabOpisow[8].wladca;
    stabilnosc.innerText = tabOpisow[8].stabilnosc;
    document.getElementById('opis').style.color = "#000000";
});
h0818.addEventListener('mouseenter', e => { 
    kraj.innerText = tabOpisow[10].kraj;
    stolica.innerText = tabOpisow[10].stolica;
    wladca.innerText = tabOpisow[10].wladca;
    stabilnosc.innerText = tabOpisow[10].stabilnosc;
    document.getElementById('opis').style.color = "#000000";
});
h1918.addEventListener('mouseenter', e => { 
    kraj.innerText = tabOpisow[19].kraj;
    stolica.innerText = tabOpisow[19].stolica;
    wladca.innerText = tabOpisow[19].wladca;
    stabilnosc.innerText = tabOpisow[19].stabilnosc;
    document.getElementById('opis').style.color = "#000000";
});
h0620.addEventListener('mouseenter', e => { 
    kraj.innerText = tabOpisow[9].kraj;
    stolica.innerText = tabOpisow[9].stolica;
    wladca.innerText = tabOpisow[9].wladca;
    stabilnosc.innerText = tabOpisow[9].stabilnosc;
    document.getElementById('opis').style.color = "#000000";
});
h1824.addEventListener('mouseenter', e => { 
    kraj.innerText = tabOpisow[16].kraj;
    stolica.innerText = tabOpisow[16].stolica;
    wladca.innerText = tabOpisow[16].wladca;
    stabilnosc.innerText = tabOpisow[16].stabilnosc;
    document.getElementById('opis').style.color = "#000000";
});
h1924.addEventListener('mouseenter', e => { 
    kraj.innerText = tabOpisow[17].kraj;
    stolica.innerText = tabOpisow[17].stolica;
    wladca.innerText = tabOpisow[17].wladca;
    stabilnosc.innerText = tabOpisow[17].stabilnosc;
    document.getElementById('opis').style.color = "#000000";
});
h1626.addEventListener('mouseenter', e => { 
    kraj.innerText = tabOpisow[15].kraj;
    stolica.innerText = tabOpisow[15].stolica;
    wladca.innerText = tabOpisow[15].wladca;
    stabilnosc.innerText = tabOpisow[15].stabilnosc;
    document.getElementById('opis').style.color = "#000000";
});
h2126.addEventListener('mouseenter', e => { 
    kraj.innerText = tabOpisow[18].kraj;
    stolica.innerText = tabOpisow[18].stolica;
    wladca.innerText = tabOpisow[18].wladca;
    stabilnosc.innerText = tabOpisow[18].stabilnosc;
    document.getElementById('opis').style.color = "#000000";
});
h1111.addEventListener('mouseenter', e => { 
    kraj.innerText = tabOpisow[4].kraj;
    stolica.innerText = tabOpisow[4].stolica;
    wladca.innerText = tabOpisow[4].wladca;
    stabilnosc.innerText = tabOpisow[4].stabilnosc;
    document.getElementById('opis').style.color = "#005600";
});
h1512.addEventListener('mouseenter', e => { 
    kraj.innerText = tabOpisow[5].kraj;
    stolica.innerText = tabOpisow[5].stolica;
    wladca.innerText = tabOpisow[5].wladca;
    stabilnosc.innerText = tabOpisow[5].stabilnosc;
    document.getElementById('opis').style.color = "#005600";
    
});
h0724.addEventListener('mouseenter', e => { 
    kraj.innerText = tabOpisow[6].kraj;
    stolica.innerText = tabOpisow[6].stolica;
    wladca.innerText = tabOpisow[6].wladca;
    stabilnosc.innerText = tabOpisow[6].stabilnosc;
    document.getElementById('opis').style.color = "#005600";
});
h1724.addEventListener('mouseenter', e => { 
    kraj.innerText = tabOpisow[7].kraj;
    stolica.innerText = tabOpisow[7].stolica;
    wladca.innerText = tabOpisow[7].wladca;
    stabilnosc.innerText = tabOpisow[7].stabilnosc;
    document.getElementById('opis').style.color = "#005600";
});
h1118.addEventListener('mouseenter', e => { 
    kraj.innerText = tabOpisow[0].kraj;
    stolica.innerText = tabOpisow[0].stolica;
    wladca.innerText = tabOpisow[0].wladca;
    stabilnosc.innerText = tabOpisow[0].stabilnosc;
    document.getElementById('opis').style.color = "#a00000";
});
h1520.addEventListener('mouseenter', e => { 
    kraj.innerText = tabOpisow[1].kraj;
    stolica.innerText = tabOpisow[1].stolica;
    wladca.innerText = tabOpisow[1].wladca;
    stabilnosc.innerText = tabOpisow[1].stabilnosc;
    document.getElementById('opis').style.color = "#a00000";
});
h1726.addEventListener('mouseenter', e => { 
    kraj.innerText = tabOpisow[3].kraj;
    stolica.innerText = tabOpisow[3].stolica;
    wladca.innerText = tabOpisow[3].wladca;
    stabilnosc.innerText = tabOpisow[3].stabilnosc;
    document.getElementById('opis').style.color = "#a00000";
});
h1828.addEventListener('mouseenter', e => { 
    kraj.innerText = tabOpisow[2].kraj;
    stolica.innerText = tabOpisow[2].stolica;
    wladca.innerText = tabOpisow[2].wladca;
    stabilnosc.innerText = tabOpisow[2].stabilnosc;
    document.getElementById('opis').style.color = "#a00000";
});













