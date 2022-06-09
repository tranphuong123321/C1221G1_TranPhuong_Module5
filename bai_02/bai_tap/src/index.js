// let n1: number;
// n1=0
// let n2: number;
// n2=1
// let total: number;
// let tong: number;
// tong=1
// for (let i = 1; i <= 20; i++) {
//     total = n1 + n2;
//     n1 = n2;
//     n2 = total;
//     tong += total;
// }
// console.log(tong);
var n1 = 0;
var n2 = 1;
var n3;
var list = [];
var sum = 0;
function createFibo(num, count) {
    if (count < num) {
        if (count <= 1) {
            n3 = count;
        }
        else {
            n3 = n1 + n2;
            n1 = n2;
            n2 = n3;
        }
        count++;
        list.push(n3);
        createFibo(num, count);
    }
    else {
        return list;
    }
}
function sumFibo() {
    createFibo(6, 0);
    for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
        var number = list_1[_i];
        sum += number;
    }
    console.log(list);
    console.log(sum);
}
sumFibo();
