var nachUnten = function(length,color,rndColor,rndBias){

    var tmp = new rndWalk({
        //"length" : length,
        "direction" : 2,
        "color" : color,
        "rndColor" : rndColor,
        "rndBias" : rndBias,

    })

    //console.log(tmp)

    return tmp

};

var wirgarten = [
    new Sektion({
        length : 40 ,
        loops : 1,
        animations : [
            nachUnten(20,"rnd",true,2),
        ]

    }),

];