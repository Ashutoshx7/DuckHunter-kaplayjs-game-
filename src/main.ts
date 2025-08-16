import { COLORS } from "./constants";
import k from "./kaplayCtx";

k.loadSprite ("menu","./graphics/menu.png");
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
        
        // --- HIGHLIGHTED FIX: Use consistent key for best score ---
        let bestScore: number = k.getData("best-score") || 0;
        if (!bestScore){
            bestScore = 0;
            k.setData("best-score", 0);
        }
        // --- END FIX ---
        k.add([

            k.text(`TOP SCORE= ${0}`,{
                font: "nes",
                size : 8,

            }),
            k.pos(55,184),
            k.color (COLORS.RED),
        ]);
        });
      
k.scene ("game", ()  =>   {});
k.scene ( "game-over", ()  =>{});
k.go ("main-menu");