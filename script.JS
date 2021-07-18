//No.1
let IT = ["IT Support", "Web Developer", "UI/UX Designer", "Software Developer", "Mobile Apps Developer", "System Analyst"]

console.log(IT);


//No.2
let fullTim = ["Sarah", "Maulana", "Yakob", "Rodhiyah", "Aldi", "Firsty", "Bagas", "Aditya", "Shella", "Lazarro", "Roni", "Shofiyyah", "Edi", "Sartika", "Trio", "Nobertus"]

let timA = fullTim.slice(0, 8)
let timB = fullTim.slice(9, 16)

console.log("tim", timA, timB);

document.getElementById("demo1").innerHTML = timA;
document.getElementById("demo2").innerHTML = timB;


//No.3
let ganjil = [3, 5, 7, 9, 11]

let rumus = ganjil.map(num => {
    return num * 5;
})
console.log(rumus)

document.getElementById("demo3").innerHTML = rumus;

//No.4
const pelajaran1 = ["Math", "English", "Programming"];
const pelajaran2 = ["Geography", "Spanish", "Programming"];

function CekPelajaran(pelajaran1, pelajaran2) {
    return pelajaran1.some(item => pelajaran2.includes(item))
};

CekPelajaran(pelajaran1,pelajaran2);

document.getElementById("demo4").innerHTML = CekPelajaran(pelajaran1,pelajaran2);



//No.5 di HTML


//No.6 di HTML

