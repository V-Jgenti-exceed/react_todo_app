
function FindIntersection() {

    let testOne = ["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"].join(',').split(',').map(function (item) {
        return Number(item);
    })
    let sortedArr = testOne.sort();
    let strArr = [];
    for (let i = 0; i < testOne.length - 1; i++) {
        if (sortedArr[i + 1] == sortedArr[i]) {
            strArr.push(sortedArr[i]);

        }
    }
    return strArr;
}

console.log(FindIntersection())

