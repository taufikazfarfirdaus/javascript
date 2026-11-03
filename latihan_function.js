console.log("SOAL FUNCTION 1")

for(let i = 1; i <= 10; i++) {
    if (i % 15 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
            console.log("Fizz");
         } else if (i % 5 === 0) {
                console.log("Buzz");
            } else {
                console.log(i);
            }
        }
console.log(" SOAL FUNCTION 2")

function cekAngka(angka) {
    if (angka % 2 === 0){
        console.log(angka +" adalah bilangan genap");
    } else {
        console.log(angka + " adalah bilangan ganjil");
    }
}
cekAngka(9);

console.log(" SOAL FUNCTION 3")
function balikString(teks) {
    let hasil ="";
    for (let i = teks.length - 1; i >= 0; i--) {
        hasil += teks[i];
    }
    return hasil;
}
console.log(balikString("Taufik"));
