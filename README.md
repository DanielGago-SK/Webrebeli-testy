Prečo sa tá hrubá časť kódu opakuje tri krát???  

img.animate({ width: "65px", height: "65px" }, 400,  **() => {   
    wrap.css("display", "block");  
    bgr.animate({ width: "100%" }, 900);  
    txt.animate({ left: "0px" }, 1500);  
  });**  
  
  Tak je to jasné - koľko je elementov, toľko krát sa opakuje...  
  (img elementy sú tri!)  
  
  Tak pomocou vymysleného .timer elementu to funguje aj cez Callback: 
img.animate({ left: "0px" }, 1000);
  timer.animate({ left: "0px" }, 1000); /* časovač tak isto 1000*/
  img.animate({ width: "75px", height: "75px" }, 500);
  timer.animate({ left: "0px" }, 500); /* časovač tak isto 500 */
  img.animate({ width: "65px", height: "65px" }, 400);
  timer.animate({ left: "0px" }, 400, () => {
    /* timer-om sa v podstate nevykoná nič (viditeľné na obrazovke), element je tu iba raz, tak sa volá tá nasledovná funkcia iba raz */
    wrap.css("display", "block");
    bgr.animate({ width: "100%" }, 900);
    txt.animate({ left: "0px" }, 1500);
    timer.animate({ left: "0px" }, 4000, () => {
      /* podobne tu pomocou timer - 4sekundy sa "čaká" (v podstate ako "delay") a elementy sú staticky zobrazené na obrazovke. až potom začne tretia časť - mazanie obsahu */
      img.animate({ left: "-400px", opacity: "0" }, 500);
      wrap.animate({ left: "-400px", opacity: "0" }, 500);

V prvom prípade "čaká" 1000 + 500 + 900ms na animácie img elementu a v druhom 4000ms aby bol obsah chvíľu na obrazovke.  
Mohol som to časovať aj pomocou setTimeout a volať tak postupne funkcie, ale toto sa ľahšie časuje, hlavne ak by so pridával ďalšie animácie.
