var nachUnten = function(length,color,rndColor,rndBias){

    var tmp = new rndWalk({
        //"length" : length,
        "direction" : 1,
        "color" : color,
        "rndColor" : rndColor,
        "rndBias" : rndBias,

    })

    return tmp

};

var punkte = function () {
    return new rndPoints({
        length : 4,
    })
}

var song01 = [

    new Sektion({
        length : 10000 ,
        loops : 1,
        animations : [
            new rndWalk({direction : 2}),





        ]

    }),

];