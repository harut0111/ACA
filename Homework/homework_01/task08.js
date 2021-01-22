"use strict";

const findRoots = (a, b, c) => {
    if (a === 0) {
        return "Enter valid constans";
    }
    else {
        let d = Math.pow(b, 2) - 4 * a * c;
        // console.log(d);

        if (d < 0) {
            return "Solution does not exists";
        }
        else if (d === 0) {
            let x = -b / 2 * a;
            return `Solution is ${x}`;
        } else {
            let x1 = ((-b - Math.sqrt(d)) / (2 * a));
            let x2 = ((-b + Math.sqrt(d)) / (2 * a));
            return `Solution are ${x1} and ${x2}`;
        }
    }
}
let test = [[1, 2, 1], [0, 4, -5], [3, -8, 12], [5, -13, 6]];
for (let i = 0; i < test.length; i++) {
    let a = test[i][0];
    let b = test[i][1];
    let c = test[i][2];
    console.log(findRoots(a, b, c));
}

