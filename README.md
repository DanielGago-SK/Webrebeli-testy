Prečo sa tá hrubá časť kódu opakuje tri krát???  

img.animate({ width: "65px", height: "65px" }, 400,  **() => {   
    wrap.css("display", "block");  
    bgr.animate({ width: "100%" }, 900);  
    txt.animate({ left: "0px" }, 1500);  
  });**  
