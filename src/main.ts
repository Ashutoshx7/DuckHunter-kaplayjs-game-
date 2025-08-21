import { COLORS } from "./constants";
import k from "./kaplayCtx";

k.loadSprite ("menu","./graphics/menu.png");
k.loadSprite("background", "./graphics/background.png")
k.loadFont ("nes", "./fonts/nintendo-nes-font/nintendo-nes-font.ttf"); // <-- Fixed font path typo
k.scene ("main-menu", () =>{ 
    k.add([k.sprite("menu")]);
    k.add([
        k.text("CLICK TO START" , {   font:  "nes"  , size : 8}), k.anchor("center"), k.pos(k.center().x,k.center().y +40)]);
    k.add([ k.text("MADE BY Krnx-X7" , {font: "nes", size : 8 }),
        k.z(2),
        k.pos(10,215),
        k.color(COLORS.BLUE),
        k.opacity (0.5),
        ]);
        
       
        let bestScore: number = k.getData("best-score") || 0;
        if (!bestScore){
            bestScore = 0;
            k.setData("best-score", 0);
        }
        
        k.add([

            k.text(`TOP SCORE= ${0}`,{
                font: "nes",
                size : 8,

            }),
            k.pos(55,184),
            k.color (COLORS.RED),
        ]);
        k.onClick(() => {
            k.go("game");
        });
        });
      
k.scene ("game", ()  =>  
     {k.setCursor("none");
    k.add([k.rect(k.width(),k.height()),k.color(COLORS.BLUE), "sky"]);
    k.add([k.sprite("background"),k.pos(0,-10),k.z(1)]);
    const score =k.add([
        k.text ( formatScore (0,),{font:"nes",size:8}),
        k.pos (192,197),
            k.z(2),
            k.color (COLORS.RED),

    
    ]);
    const roundCount = k.add([
        k.text("1", {font: "nes", size: 8}),
        k.pos(42,182),
        k.z(2),
        k.color (COLORS.RED),
    ]) ;
    const duckIcons =k.add ([k.pos(95,198)]);
    let duckIconPosx =1;
    for (let i=0;i<10;i++){
        duckIcons.add([k.rect(7,9), k.pos(duckIconPosx,0) ,   `duckIcon-${i}`]);
        duckIconPosx +=8;
    }
    const bulletUiMask =k.add([k.rect(0,8),
        k.pos(25,198),
        k.z(2),
        k.color (0,0,0),

    ]);
});

k.scene ( "game-over", ()  =>{});




k.go ("main-menu");

function formatScore(score: number): string {
    return score.toString().padStart(6, "0");
}