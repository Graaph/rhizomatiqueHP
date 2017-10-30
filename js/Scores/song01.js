var song01 = [

    new Sektion({
        length : 32 ,
        loops : 1,
        animations : [
            new rndWalk({direction: 2}),
            new rndWalk({direction: 2}),
            new rndWalk({direction: 2}),
            new rndWalk({direction: 2}),
            new rndWalk({direction: 3}),
            new rndWalk({direction: 4}),
            new rndWalk({direction: 5}),
            new rndWalk({direction: 4}),
            new rndWalk({direction: 4}),
        ]

    }),
     new Sektion({
        length : 32 ,
        loops : 1,
        animations : [
            new rndWalk({direction: 5}),
            new rndWalk({direction: 4}),
            new rndWalk({direction: 2}),
            new rndWalk({direction: 1}),
            new rndWalk({direction: 1}),
            new rndWalk({direction: 0}),
            new rndWalk({direction: 0}),
            new rndWalk({direction: 2}),
            new rndWalk(),
        ]

    }),
    new Sektion({
        length : 64 ,
        loops : 1,
        animations : [
            new rndWalk(),
            new rndWalk(),
            new rndWalk(),
            new rndWalk(),
        ]

    }),

    new Sektion({
        length : 8 ,
        loops : 1,
        animations : [
             new logo(),

        ]

    }),

     new Sektion({
        length : 8 ,
        loops : 1,
        animations : [
             new logo(),
             new logo(),

        ]

    }),

      new Sektion({
        length : 8 ,
        loops : 1,
        animations : [
             new logo(),
             new logo(),
             new logo(),
             new logo(),

        ]

    }),

       new Sektion({
        length : 8 ,
        loops : 1,
        animations : [
             new logo(),
             new logo(),
             new logo(),
            new rndWalk(),
            new rndWalk(),
            new rndWalk(),
            new rndWalk(),
            new rndWalk(),
             

        ]

    }),

];