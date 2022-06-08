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
function sumFibo(num) {
    var n1;
    n1 = 0;
    var n2;
    n2 = 1;
    var n3;
    var sum;
    sum = 1;
    var list = [];
    for (var i = 1; i <= num; i++) {
        n3 = n1 + n2;
        n1 = n2;
        n2 = n3;
        list.push(n3);
        sum += n3;
    }
    console.log(list);
    return (sum);
}
sumFibo(2);
