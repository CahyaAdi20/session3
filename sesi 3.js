function tampilkan() {
    console.log("halo!");
  }
  
  tampilkan();

function TambahDua(angka) {
  return angka + 2
}

var tampung = TambahDua(2);
console.log(tampung)


var arr = [0, 1, 2, 3];
arr.push(4);
console.log(arr); // 0, 1, 2, 3, 4

var arr = [0, 1, 2, 3, 4];
var irisan1 = arr.slice(1,3); // mengambil irisan array mulai dari index 1 hingga index 2 (sebelum index 3). Index 3 tidak ikut diambil.
console.log(irisan1); // [1, 2]

var irisan2 = arr.slice(1);
console.log(irisan2); // [1, 2, 3, 4]

var irisan3 = arr.slice(2, 3);
console.log(irisan3); // [2]

var irisan4 = arr.slice(2, 2);
console.log(irisan4); // [] KOSONG!