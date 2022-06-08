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
function sumFibo(num: number) {
    let n1: number;
    n1 = 0
    let n2: number;
    n2 = 1
    let total: number;
    let tong: number;
    tong = 1
    for (let i = 1; i <= num; i++) {
        total = n1 + n2;
        n1 = n2;
        n2 = total;
        tong += total;
    }
    console.log(tong);
}

sumFibo(9);
