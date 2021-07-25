Prečo sa tá hrubá časť kódu opakuje tri krát???  

img.animate({ width: "65px", height: "65px" }, 400,  **() => {   
    wrap.css("display", "block");  
    bgr.animate({ width: "100%" }, 900);  
    txt.animate({ left: "0px" }, 1500);  
  });**  
  
  Tak je to jasné - koľko je elementov, toľko krát sa opakuje...  
  Tak pomocou vymysleného .test elementu to funguje aj cez Callback: 
img.animate({ left: "0px" }, 1000);  
img.animate({ width: "75px", height: "75px" }, 500);  
img.animate({ width: "65px", height: "65px" }, 400)  
test. animate({left: '0px'},1900, () => {  
wrap.css("display", "block");  
bgr.animate({ width: "100%" }, 900);  
txt.animate({ left: "0px" }, 1500)  
test.animate({left: '0px'}, 4000, () => {  
img.animate({ left: "-400px", opacity: "0" }, 500);  
wrap.animate({ left: "-400px", opacity: "0" }, 500);  

V prvom prípade "čaká" 1900ms na animácie img elementu (1000 + 500 + 400) a v druhom 4000ms aby bol obsah chvíľu na obrazovke. Ale to som pravda mohol časovať aj pomocou setTimeout a volať funkcie...
