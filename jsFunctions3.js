//exercise 44 - Function Expression Exercise
//NOTE: Udemy's coding exercise platform does NOT support the ** operator.  You'll need to multiply a number by itself or use the Math.pow() method.
const square = num => {
    return num *= num;
}

//exercise 45 - Methods exercise
const square = {
    area : function (side) {
        return side *= side;
    },
    perimeter : function (side) {
        return side *= 4;
    }
};

//exercise 46 - Egg Laying Exercise
const hen = {
    name: "Helen",
    eggCount: 0,
    layAnEgg : function () {
        this.eggCount += 1;
        return `EGG`;
    }
}