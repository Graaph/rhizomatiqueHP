
let oneDirection = function (direction,sektionLen,lineCount,lineLen,color,rndColor,rndBias) {

    let animation = [];
    for(let i = 1;i <= lineCount;i++){
        animation.push(new rndWalk({
            "length" : lineLen,
            "direction" : direction,
            "color" : color,
            "rndColor" : rndColor,
            "rndBias" : rndBias,
            })
        )
    }

    return new Sektion({
        length : sektionLen ,
        loops : 1,
        animations : animation
    })
};


let rndWalker = function (sektionLen,lineCount) {

    let animation = [];
    for(let i = 1;i <= lineCount;i++){
        animation.push(new rndWalk({}) )
    }

    return new Sektion({
        length : sektionLen ,
        loops : 1,
        animations : animation
    })
};


let punkte = function (sektionLen,lineCount) {

    let animation = [];
    for(let i = 1;i <= lineCount;i++){
        animation.push(new rndPoints() )
    }

    return new Sektion({
        length : sektionLen ,
        loops : 1,
        animations : animation
    })
};

let rz_logo = function (len) {
    return new Sektion({
        length : len ,
        loops : 1,
        animations : [
            new logo(),
        ]

    })
};
