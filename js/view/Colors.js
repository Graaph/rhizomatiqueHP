

var ColorLib = function() {
    console.log("init ColorLib");
}

ColorLib.prototype.rndColor = function(baseColor,bias) {

    if ( !baseColor){
        return [
            getRandomInt(0,255),
            getRandomInt(0,255),
            getRandomInt(0,255)
        ]
    }


    let retColor = [
        getRandomInt( baseColor[0] - bias ,(baseColor[0] + bias) % 255 ),
        getRandomInt( baseColor[1] - bias ,(baseColor[1] + bias) % 255 ),
        getRandomInt( baseColor[2] - bias ,(baseColor[2] + bias) % 255 )
    ];

    for (let i = 0; i <3; i++){
            if (retColor[i] < 0){ retColor[i] = 0}
    }

    return retColor;
};

var colorLib = new ColorLib();
console.log(colorLib);