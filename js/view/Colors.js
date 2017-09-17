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

    return retColor = [
        getRandomInt(baseColor[0] - bias,(baseColor[0] + 2* bias) % 255 ),
        getRandomInt(baseColor[1] - bias,(baseColor[1] + 2* bias) % 255 ),
        getRandomInt(baseColor[2] - bias,(baseColor[2] + 2* bias) % 255 )
    ]
};

var colorLib = new ColorLib();
console.log(colorLib);