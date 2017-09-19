var ColorLib = function() {
    console.log("init ColorLib");
}

ColorLib.prototype.rndColor = function(baseColor,bias) {

    if ( !baseColor){
        return retColor = [
            getRandomInt(0,255),
            getRandomInt(0,255),
            getRandomInt(0,255)
        ]
    }

    console.log(baseColor[0] - bias,(baseColor[0] + bias) % 255, getRandomInt(baseColor[0] - bias,(baseColor[0] + bias) % 255 ) );

    var retColor = [
        getRandomInt( baseColor[0] - bias ,(baseColor[0] + bias) % 255 ),
        getRandomInt( baseColor[1] - bias ,(baseColor[1] + bias) % 255 ),
        getRandomInt( baseColor[2] - bias ,(baseColor[2] + bias) % 255 )
    ]
    console.log(retColor);

    return retColor;
};

var colorLib = new ColorLib();
console.log(colorLib);