// let x = ["sohel", "apeel", "orange"]
let x = [20, 10, 50, 80]

let ska = x.map((sks) => {

    if (sks >= 20) {
        return sks - 10
    }


})
console.log(ska);


let y = [20, 80, 90, 40]

let csd = y.forEach((a) => {

    console.log(a * 2);
    // return a+2
})


let skdfs = "my name is sohel"
console.log(skdfs.toUpperCase());


let kaa = "mynameissohel"
let kaas = "dskaf"
console.log(kaas + kaa.split(3));


let kk = 19

let iei = kk >= 18 ? console.log('auld') : console.log('child');;


let manu = [
    { dis: "kalo vuna", price: 150, spicy: true, qty: 2 },
    { dis: "vorta", price: 150, spicy: true, qty: 2 },
    { dis: "chicken", price: 150, spicy: false, qty: 2 },
    { dis: "Egg fry", price: 150, spicy: true, qty: 2 },
    { dis: "salad", prices: 150, spicy: false, qty: 2 },
]

// console.table(manu[2])

let myllop = manu.forEach((manus, index) => {
    // console.table(`${index+1}  ${manus.dis}`);
    console.table(manus);
})



let mymap = manu.map((skad, index) => {

    return skad.dis


})
console.table(mymap);

let myfltr = manu.filter((q) => q.spicy + q.price)


console.table(myfltr);


let nsm = [2, 3, 3, 5, 10, 9, 2,]

let sa = nsm.filter((k) => {

    return k > 5
})
console.log(sa);

let Wellcome = document.getElementById("Wellcome")

Wellcome.addEventListener("click", () => {
    let spack = new SpeechSynthesisUtterance("hello sir , How are you?")
    speechSynthesis.speak(spack)

})


let inputs = document.getElementById("inputs")
let Voice = document.getElementById("Voice")

Voice.addEventListener("click", () => {
    let input = inputs.value

    let sas = new SpeechSynthesisUtterance(`${input}`)

    speechSynthesis.speak(sas)
    inputs.value = ""
    console.log(input);

})