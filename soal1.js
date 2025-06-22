
console.log("Jawaban Soal 1");

// Jumlahkan semua angka genap dalam array berikut
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
let resultOne = 0

//Jawaban No. 1
for(let index = 0; index < numbers.length; index++){
    if (numbers[index] % 2 === 0){
        resultOne += numbers[index];
    }
}
console.log("[1]", resultOne);


const numbersTwo = [1, 2, 3, 4, 5, 6, 7, 8];
//Tambahkan semua angka ganjil dalam array dan kembalikan hasilnya.
let resultTwo = 0

//Jawaban No. 2
for(let index = 0; index < numbersTwo.length; index++){
    if (numbers[index] % 2 !== 0){
        resultTwo += numbers[index];
    }
}
console.log("[2]", resultTwo);


// Ubah semua huruf kecil dalam array menjadi huruf besar
let students = ["Tito", "arY", "Bostang"]
let resultThree = []

//Jawaban No. 3
for (let index = 0; index < students.length; index++) {
    resultThree.push(students[index].toUpperCase())
}
console.log("[3]", resultThree);



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
console.log("[4]", resultFour);


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
console.log("[5]", resultFive);


//Ambil hanya angka unik dari array (hapus duplikat).
const numbersThree = [1, 2, 2, 3, 4, 4, 5];

//Jawaban No. 6
let resultSix = [];

for (let index = 0; index < numbersThree.length; index++) {
   if (resultSix.includes(numbersThree[index]) === false) {
    resultSix.push(numbersThree[index])
   }
}
console.log("[6]", resultSix);



// Ambil nama produk dengan harga tertinggi
const products = [
    { name: 'Laptop', price: 15000000 },
    { name: 'Phone', price: 8000000 },
    { name: 'Monitor', price: 3000000 },
];

// Jawaban No. 7
let resultSeven = products[0]

for (let index = 0; index < products.length; index++) {
    if (products.price > resultSeven.price) {
        resultSeven = products[index]
    }
}
console.log("[7]", resultSeven);


// Buat kalimat dari array kata.
const words = ['Belajar', 'array', 'itu', 'menyenangkan'];

// Jawaban No. 8
let resultEight = ''

for (let index = 0; index < words.length; index++) {
    if (index === 0) {
        resultEight = words[index]
    } else{
        resultEight = resultEight + ' ' + words[index]
    }
}
console.log("[8]", resultEight);



// Ambil hanya 3 data pertama yang mengandung kata 'a' pada nama.
const names = ['Aldo', 'Budi', 'Caca', 'Dinda', 'Eka', 'Fajar'];

// Jawaban No. 9
let resultNine = []
for (let index = 0; index < names.length; index++) {
    const lowerCaseName = names[index].toLowerCase(); 

    if(lowerCaseName.includes("a") && resultNine.length < 3){
        resultNine.push(names[index]);
    }
}
console.log("[9]", resultNine);



// Hitung total karakter dari semua nama dalam array.
const namesTwo = ['Ani', 'Budi', 'Citra']; // 12 karakter
let resultTen = 0;

// Jawaban No. 10
for (let index = 0; index < namesTwo.length; index++) {
    resultTen += namesTwo[index].length;
}

console.log("[10]", resultTen);



// Output: ['Tono (22)', 'Tara (25)']
// Ubah array objek ke array string dengan format 'Nama (Umur)' dan hanya yang umurnya di atas 21.
const peopleTwo = [
    { name: 'Tono', age: 22 },
    { name: 'Tini', age: 19 },
    { name: 'Tara', age: 25 },
];

//Jawaban No. 11
let resultEleven = []

for (let index = 0; index < peopleTwo.length; index++) {
    if(peopleTwo[index].age > 21){
        resultEleven.push(`${peopleTwo[index].name} (${peopleTwo[index].age})`)
    }
}
console.log("[11}", resultEleven);

