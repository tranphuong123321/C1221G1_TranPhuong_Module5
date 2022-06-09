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


let n1: number = 0;
let n2: number = 1;
let n3: number;
let list: number[] = [];
let sum: number = 0;

function createFibo(num: number, count: number) {
    if (count < num) {
        if (count <= 1) {
            n3 = count;
        } else {
            n3 = n1 + n2;
            n1 = n2;
            n2 = n3;
        }
        count++;
        list.push(n3);
        createFibo(num, count);
    } else {
        return list;
    }
}

function sumFibo() {
    createFibo(6, 0)
    for (let number of list) {
        sum += number;
    }
    console.log(list);
    console.log(sum);
}
sumFibo();




