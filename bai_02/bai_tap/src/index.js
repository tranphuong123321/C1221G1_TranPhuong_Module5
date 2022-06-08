var n1 = 0;
var n2 = 1;
var total;
var tong = 1;
for (var i = 1; i <= 20; i++) {
    total = n1 + n2;
    n1 = n2;
    n2 = total;
    tong += total;
}
console.log(tong);
