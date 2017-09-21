var nachUnten = function(length,color,rndColor,rndBias){

    var tmp = new rndWalk({
        //"length" : length,
        "direction" : 2,
        "color" : color,
        "rndColor" : rndColor,
        "rndBias" : rndBias,

    })

    return tmp

};

var punkte = function () {
    return new rndPoints()
}

var song01 = [
    new Sektion({
        length : 64 ,
        loops : 1,
        animations : [
            new logo(),

        ]

    }),
    new Sektion({
        length : 64 ,
        loops : 1,
        animations : [
            new logo(),
            new logo(),
        ]

    }),
    new Sektion({
        length : 64 ,
        loops : 1,
        animations : [
            new logo(),
            new logo(),
            new logo(),
        ]

    }),


    /*new Sektion({
        length : 8 ,
        loops : 1,
        animations : [
            nachUnten(10,[100,255,100],true,10),
            nachUnten(10,[100,255,100],true,10),
            nachUnten(10,[100,255,100],true,10),

        ]

    }),
    new Sektion({
        length : 16 ,
        loops : 1,
        animations : [
            nachUnten(10,[100,255,100],true,10),
            nachUnten(10,[100,255,100],true,10),
            nachUnten(10,[100,255,100],true,10),

        ]

    }),
    new Sektion({
        length : 40 ,
        loops : 1,
        animations : [
            punkte(),
            punkte(),
            punkte(),
            punkte(),
            punkte(),
            punkte(),
            punkte(),
            punkte(),
            punkte(),
            punkte(),
            punkte(),
            punkte(),
            punkte(),
            punkte(),
            punkte(),
            punkte(),
            punkte(),

        ]

    }),
    new Sektion({
        length : 200 ,
        loops : 1,
        animations : [
            new rndWalk({
                "length" : 8,
                "direction" : 4,
                "color" : [220.50,70],
                "rndColor" : true,
                "rndBias" : 15,
            }),
            new rndWalk({
                "length" : 8,
                "direction" : 4,
                "color" : [220.50,70],
                "rndColor" : true,
                "rndBias" : 15,
            }),new rndWalk({
                "length" : 8,
                "direction" : 4,
                "color" : [220.50,70],
                "rndColor" : true,
                "rndBias" : 15,
            }),new rndWalk({
                "length" : 8,
                "direction" : 4,
                "color" : [220.50,70],
                "rndColor" : true,
                "rndBias" : 15,
            }),new rndWalk({
                "length" : 8,
                "direction" : 4,
                "color" : [220.50,70],
                "rndColor" : true,
                "rndBias" : 15,
            }),
            new rndWalk({
                "length" : 8,
                "direction" : 4,
                "color" : [220.50,70],
                "rndColor" : true,
                "rndBias" : 15,
            }),
            new rndWalk({
                "length" : 8,
                "direction" : 4,
                "color" : [220.50,70],
                "rndColor" : true,
                "rndBias" : 15,
            }),







        ]

    }),*/




    /*new Sektion({
        length : 64 ,
        loops : 1,
        animations : [
            punkte(),
            punkte(),
            punkte(),
            punkte(),
            punkte(),
            punkte(),
            punkte(),
            punkte(),
            punkte(),
            punkte(),
            punkte(),
            punkte(),
            punkte(),
            punkte(),
            punkte(),
            punkte(),
            punkte(),
            //new rndPoints(),
            nachUnten(10,[100,255,100],true,10),
            nachUnten(10,[100,255,100],true,10),
            nachUnten(10,[100,255,100],true,10),
            nachUnten(10,[100,255,100],true,10),
            nachUnten(10,[100,255,100],true,10),
            nachUnten(10,[100,255,100],true,10),
            nachUnten(10,[100,255,100],true,10),
            nachUnten(10,[100,255,100],true,10),
            nachUnten(10,[100,255,100],true,10),
            strobo()
        ]

    }),*/

];