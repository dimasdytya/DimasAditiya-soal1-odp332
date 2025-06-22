// Jumlahkan semua angka genap dalam array berikut
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
let resultOne = 0

//Jawaban No. 1
for(let index = 0; index < numbers.length; index++){
    if (numbers[index] % 2 === 0){
        resultOne += numbers[index];
    }
}
console.log(resultOne);


const numbersTwo = [1, 2, 3, 4, 5, 6, 7, 8];
//Tambahkan semua angka ganjil dalam array dan kembalikan hasilnya.
let resultTwo = 0

//Jawaban No. 2
for(let index = 0; index < numbersTwo.length; index++){
    if (numbers[index] % 2 !== 0){
        resultTwo += numbers[index];
    }
}
console.log(resultTwo);


// Ubah semua huruf kecil dalam array menjadi huruf besar
let students = ["Tito", "arY", "Bostang"]
let resultThree = []

//Jawaban No. 3
for (let index = 0; index < students.length; index++) {
    resultThree.push(students[index].toUpperCase())
}
console.log(resultThree);



// Ambil hanya nama-nama orang yang umurnya di atas 18 tahun.
// Ambil hanya orang yang panjang namanya lebih dari 5
const people = [
  { name: "Andi", age: 17 },
  { name: "Tito Alexsta", age: 20 },
  { name: "Bostang", age: 22 },
  { name: "Cici", age: 17 },
];

// Jawaban 4
let resultFour = [];

for (let index = 0; index < people.length; index++) {
  if (people[index].age > 18 && people[index].name.length > 5) {
    resultFour.push(people[index].name);
  }
}
console.log(resultFour);


// Hitung total harga semua barang
const items = [
    { name: 'Book', price: 10000 },
    { name: 'Pen', price: 5000 },
    { name: 'Pencil', price: 3000 },
];

//Jawaban 5
let resultFive = 0;

for (let index = 0; index < items.length; index++) {
    resultFive += items[index].price;
}
console.log(resultFive);


//Ambil hanya angka unik dari array (hapus duplikat).
const numbersThree = [1, 2, 2, 3, 4, 4, 5];

//Jawaban No. 6
let resultSix = [];

for (let index = 0; index < numbersThree.length; index++) {
   if (resultSix.includes(numbersThree[index]) === false) {
    resultSix.push(numbersThree[index])
   }
}
console.log(resultSix);



// Ambil nama produk dengan harga tertinggi
const products = [
    { name: 'Laptop', price: 15000000 },
    { name: 'Phone', price: 8000000 },
    { name: 'Monitor', price: 3000000 },
];




// Buat kalimat dari array kata.
const words = ['Belajar', 'array', 'itu', 'menyenangkan'];


// Ambil hanya 3 data pertama yang mengandung kata 'a' pada nama.
const names = ['Aldo', 'Budi', 'Caca', 'Dinda', 'Eka', 'Fajar'];


// Hitung total karakter dari semua nama dalam array.
const namesTwo = ['Ani', 'Budi', 'Citra']; // 12 karakter
let totalChars = 0;

for (let i = 0; i < namesTwo.length; i++) {
    totalChars += namesTwo[i].length;
}

console.log(totalChars);



// Output: ['Tono (22)', 'Tara (25)']
// Ubah array objek ke array string dengan format 'Nama (Umur)' dan hanya yang umurnya di atas 21.
const peopleTwo = [
    { name: 'Tono', age: 22 },
    { name: 'Tini', age: 19 },
    { name: 'Tara', age: 25 },
];
