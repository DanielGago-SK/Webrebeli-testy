function slide() {
  /* načítaj si elementy */
  img = $(".img");
  bgr = $(".bgr");
  txt = $(".txt");
  wrap = $(".wrap_txt");
  /** POZOR - ak osm použil "const", "var" alebo "let" tak volaná funkcia clear už s tými premennými nevedela pracovať, boli lokálne!!!  **/


  /* daj naspäť východzí stav...*/
  img.css({ left: "-50px", width: "0px", height: "0px", opacity: "1" });
  wrap.css({ display: "none", opacity: "1", left: "-15px" });
  bgr.css("width", "0px");
  txt.css({ left: "-400px" });
  /* a spusti animácie */
  img.animate({ left: "0px" }, 1000);
  img.animate({ width: "75px", height: "75px" }, 500);
  img.animate({ width: "65px", height: "65px" }, 400,  () => {
    /* PREČO SA CELÝ TENTO KÓD V TEJTO FUNKCII VYKONÁVA 3 KRÁT ???? */
    console.log("vykonávam druhú časť");
    wrap.css("display", "block");
    bgr.animate({ width: "100%" }, 900);
    txt.animate({ left: "0px" }, 1500);
  });
  setTimeout (clear, 6000);
  /* a po cca 4 sekundách to nechaj zmiznúť celé... */
}
    
    
    function clear() {
        /*let img = $(".img");
        let bgr = $(".bgr");
        let txt = $(".txt");
        let wrap = $(".wrap_txt");*/
        img.animate({ left: '-400px', opacity: '0'}, 500);
        wrap.animate({ left: "-400px", opacity: "0" }, 500);
    }