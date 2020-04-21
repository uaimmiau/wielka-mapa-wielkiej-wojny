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

let tab = [];

fetch("opisy.json").then( res => {
    return res.json();
}).then(tabOpisy => {
    tab = tabOpisy;
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
    kraj.innerText = tab[21].kraj;
    stolica.innerText = tab[21].stolica;
    wladca.innerText = tab[21].wladca;
    stabilnosc.innerText = tab[21].stabilnosc;
});
h1908.addEventListener('mouseenter', e => { 
    kraj.innerText = tab[20].kraj;
    stolica.innerText = tab[20].stolica;
    wladca.innerText = tab[20].wladca;
    stabilnosc.innerText = tab[20].stabilnosc;
});
h1114.addEventListener('mouseenter', e => { 
    kraj.innerText = tab[11].kraj;
    stolica.innerText = tab[11].stolica;
    wladca.innerText = tab[11].wladca;
    stabilnosc.innerText = tab[11].stabilnosc;
});
h1214.addEventListener('mouseenter', e => { 
    kraj.innerText = tab[12].kraj;
    stolica.innerText = tab[12].stolica;
    wladca.innerText = tab[12].wladca;
    stabilnosc.innerText = tab[12].stabilnosc;
});
h1314.addEventListener('mouseenter', e => { 
    kraj.innerText = tab[13].kraj;
    stolica.innerText = tab[13].stolica;
    wladca.innerText = tab[13].wladca;
    stabilnosc.innerText = tab[13].stabilnosc;
});
h1515.addEventListener('mouseenter', e => { 
    kraj.innerText = tab[14].kraj;
    stolica.innerText = tab[14].stolica;
    wladca.innerText = tab[14].wladca;
    stabilnosc.innerText = tab[14].stabilnosc;
});
h0617.addEventListener('mouseenter', e => { 
    kraj.innerText = tab[8].kraj;
    stolica.innerText = tab[8].stolica;
    wladca.innerText = tab[8].wladca;
    stabilnosc.innerText = tab[8].stabilnosc;
});
h0818.addEventListener('mouseenter', e => { 
    kraj.innerText = tab[10].kraj;
    stolica.innerText = tab[10].stolica;
    wladca.innerText = tab[10].wladca;
    stabilnosc.innerText = tab[10].stabilnosc;
});
h1918.addEventListener('mouseenter', e => { 
    kraj.innerText = tab[19].kraj;
    stolica.innerText = tab[19].stolica;
    wladca.innerText = tab[19].wladca;
    stabilnosc.innerText = tab[19].stabilnosc;
});
h0620.addEventListener('mouseenter', e => { 
    kraj.innerText = tab[9].kraj;
    stolica.innerText = tab[9].stolica;
    wladca.innerText = tab[9].wladca;
    stabilnosc.innerText = tab[9].stabilnosc;
});
h1824.addEventListener('mouseenter', e => { 
    kraj.innerText = tab[16].kraj;
    stolica.innerText = tab[16].stolica;
    wladca.innerText = tab[16].wladca;
    stabilnosc.innerText = tab[16].stabilnosc;
});
h1924.addEventListener('mouseenter', e => { 
    kraj.innerText = tab[17].kraj;
    stolica.innerText = tab[17].stolica;
    wladca.innerText = tab[17].wladca;
    stabilnosc.innerText = tab[17].stabilnosc;
});
h1626.addEventListener('mouseenter', e => { 
    kraj.innerText = tab[15].kraj;
    stolica.innerText = tab[15].stolica;
    wladca.innerText = tab[15].wladca;
    stabilnosc.innerText = tab[15].stabilnosc;
});
h2126.addEventListener('mouseenter', e => { 
    kraj.innerText = tab[18].kraj;
    stolica.innerText = tab[18].stolica;
    wladca.innerText = tab[18].wladca;
    stabilnosc.innerText = tab[18].stabilnosc;
});
h1111.addEventListener('mouseenter', e => { 
    kraj.innerText = tab[4].kraj;
    stolica.innerText = tab[4].stolica;
    wladca.innerText = tab[4].wladca;
    stabilnosc.innerText = tab[4].stabilnosc;
});
h1512.addEventListener('mouseenter', e => { 
    kraj.innerText = tab[5].kraj;
    stolica.innerText = tab[5].stolica;
    wladca.innerText = tab[5].wladca;
    stabilnosc.innerText = tab[5].stabilnosc;
});
h0724.addEventListener('mouseenter', e => { 
    kraj.innerText = tab[6].kraj;
    stolica.innerText = tab[6].stolica;
    wladca.innerText = tab[6].wladca;
    stabilnosc.innerText = tab[6].stabilnosc;
});
h1724.addEventListener('mouseenter', e => { 
    kraj.innerText = tab[7].kraj;
    stolica.innerText = tab[7].stolica;
    wladca.innerText = tab[7].wladca;
    stabilnosc.innerText = tab[7].stabilnosc;
});
h1118.addEventListener('mouseenter', e => { 
    kraj.innerText = tab[0].kraj;
    stolica.innerText = tab[0].stolica;
    wladca.innerText = tab[0].wladca;
    stabilnosc.innerText = tab[0].stabilnosc;
});
h1520.addEventListener('mouseenter', e => { 
    kraj.innerText = tab[1].kraj;
    stolica.innerText = tab[1].stolica;
    wladca.innerText = tab[1].wladca;
    stabilnosc.innerText = tab[1].stabilnosc;
});
h1726.addEventListener('mouseenter', e => { 
    kraj.innerText = tab[3].kraj;
    stolica.innerText = tab[3].stolica;
    wladca.innerText = tab[3].wladca;
    stabilnosc.innerText = tab[3].stabilnosc;
});
h1828.addEventListener('mouseenter', e => { 
    kraj.innerText = tab[2].kraj;
    stolica.innerText = tab[2].stolica;
    wladca.innerText = tab[2].wladca;
    stabilnosc.innerText = tab[2].stabilnosc;
});













