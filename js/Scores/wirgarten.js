var wirgarten = [
    new Sektion({
        length : 100,
        loops : 1,
        animations : [
            new rndWalk({
                "color" : [50,50,50],
                "rndBias" : 2
            }),
            new rndWalk({
                "color" : [100,100,100],
                "rndBias" : 5
            })
        ]
    }),
   new Sektion({
        length : 50,
        loops : 4,
        animations : [
            new rndWalk({
                "direction" : 1,
                "color" : [255,255,255]
            }),
            new rndWalk({
                "direction" : 1,
                "color" : [255,255,255]
            })
        ]
    }),

    new Sektion({
        length : 100 ,
        loops : 1,
        animations : [
            new rndWalk({"direction" : 3}),
            new rndWalk({"direction" : 3}),
            new rndWalk({"direction" : 3}),
            new rndWalk({"direction" : 3}),
            new rndWalk({"direction" : 3}),
            new rndWalk({"direction" : 3}),
            new rndWalk({"direction" : 3}),
            new rndWalk({"direction" : 0})]
    }),

];