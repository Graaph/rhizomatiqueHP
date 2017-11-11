const lineCount = 2;
const rndBias = 20;

let refSong = [

    //punkte(32,8),

    //rndWalker(64,1),


    //oneDirection(direction,sektionLen,lineCount,lineLen,color,rndColor,rndBias)

    oneDirection(0,32,lineCount,1,[0,0,150],true,rndBias),
    oneDirection(1,32,lineCount,1,colorLib.rndColor(),true,rndBias),
    oneDirection(2,32,lineCount,1,colorLib.rndColor(),true,rndBias),
    oneDirection(3,32,lineCount,1,colorLib.rndColor(),true,rndBias),
    oneDirection(4,32,lineCount,1,colorLib.rndColor(),true,rndBias),
    oneDirection(5,32,lineCount,1,colorLib.rndColor(),true,rndBias),

];