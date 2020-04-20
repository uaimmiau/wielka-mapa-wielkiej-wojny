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
