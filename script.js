// // let name = "Axmadov Sardor", age = 15 , grade = 9, section = "Green";
// // console.log(`My name is ${name} and I'm ${age} years old. I study in ${grade} ${section} class.`);

// // let val = 1;
// // val = Boolean(val)
// // console.log(val);

// // let matn = false;
// // matn = Boolean(matn);
// // console.log(matn)

// // let trying = " 13131314 ";
// // trying = Number(trying)
// // console.log(trying);

// // //1-masala
// // let i = 1
// // while(i <= 15){
// //     console.log(i)
// //     i+= 2
// // }

// // //2-masala
// // let n = 1
// // let son = prompt("Enter the number: ")
// // son = Number(son)
// // while (n <= son){
// //     console.log(n)
// //     n++
// // }

// // //3-masala
// // let a = 0;
// // do{
// //     a = +prompt("Enter negative number: ")
// //     if (a > 0) {
// //         alert("Enter negative number!!!")
// //     } else {
// //         console.log(a);
// //     }
// // }while(a >= 0)

// // //4-masala
// // let b = 0;
// // for(b; b<=50; b+=5){
// //     console.log(b)
// // }

// // //5-masala
// // let c = 1;
// // let result = 0;
// // let d = +prompt("Enter the number: ")
// // for(c; c <= 10; c++){
// //     result = c * d
// //     console.log(result);
// // }

// //syntax
// // switch(x){
// //     case value1:
// //         ...
// //     case value2:
// //         ...
// //     default:
// //         ...
// // }

// let a = 13;
// switch(a){
//     case 11:
//         console.log("11 ekan");
//         break
//     case 13:
//         console.log("13 ekan");
//         break
//     case 11:
//         console.log("15 ekan");
//         break
//     case 11:
//         console.log("119 ekan");
//         break
//     default:
//         console.log("Hech qaysi ekan")
//         break
// }

// //guruhlash

// switch(a){
//     case 11:
//     case 13:
//         console.log("13 yoki 11 ekan");
//         break
//     default:
//         console.log("Hech qaysi ekan")
//         break
// }

// //Topshiriq - 1:
// prompt
// let kun = +prompt("Hozir qaysi hafta kuni (1- Dushanba, 7- yakshanba)");
// switch(kun){
//     case 1:
//         console.log("Bugun Dushanba!");
//         break
//     case 2:
//         console.log("Bugun Seshanba!");
//         break
//     case 3:
//         console.log("Bugun Chorshanba!");
//         break
//     case 4:
//         console.log("Bugun Payshanba!");
//         break
//     case 5:
//         console.log("Bugun Juma!");
//         break
//     case 6:
//         console.log("Bugun Shanba!");
//         break
//     case 7:
//         console.log("Bugun Yakshanba!");
//         break
//     default:
//         console.log("To'g'ri kiriting");
//         break
// }

// //Topshiriq - 2:
// let oy = +prompt("Oy raqamini kiriting (Yanvar-1, Dekabr-12)")

// switch (oy) {
//     case 1:
//     case 2:    
//     case 12:
//         console.log("Qish");
//         break;    
//     case 3:
//     case 4:
//     case 5:
//         console.log("Bahor");
//         break;    
//     case 6:
//     case 7:
//     case 8:
//         console.log("Yoz");
//         break;    
//     case 9:
//     case 10:
//     case 11:
//         console.log("Kuz");
//         break;

//     default:
//         console.log("Noto'g'ri kiritdingiz");
//         break;
// }

// //Topshiriq - 3:
// let pul = prompt("Tanlang (xuddi shunday yozing: usd, rub, eur):")

// switch(pul){
//     case "usd":
//         console.log("1 USD = 12 973,95 UZS");
//         break
//     case "rub":
//         console.log("1 Rubl = 131,65 UZS")
//         break
//     case "eur":
//         console.log("1 EUR = 13 512,00 UZS");
//         break
//     default:
//         console.log("Xato yozdingiz!");
//         break
// }

// //Topshiriq - 4:
// let son_bir = +prompt("Birinchi sonni kiriting:")
// let son_ikki = +prompt("Ikkinchi sonni kiriting:")
// let amal = prompt("Amalni kiriting (+, -, *, /)")

// switch(amal){
//     case "+":
//         result = son_bir + son_ikki
//         console.log(result);
//         break
//     case "-":
//         result = son_bir - son_ikki
//         console.log(result);
//         break
//     case "*":
//         result = son_bir * son_ikki
//         console.log(result);
//         break
//     case "/":
//         result = son_bir / son_ikki
//         console.log(result);
//         break
//     default:
//         console.log('Qayerdir xato ketti!');
        
        
// }

// function kich(a, b) {
//     if(a > b){
//         c = a
//     }
//     else if (b > a){
//         c = b
//     } else{
//         c = "Ular bir xil"
//     }
    
//     return(c)
// }

// let son1 = +prompt("Birinchi sonni kiriting: ")
// let son2 = +prompt("Ikkinchi sonni yozing: ")

// console.log(kich(son1, son2))

// function kvadrat(a){
//     perimeter = a * 4
//     yuza = a * a
//     return("Uning perimetri " + perimeter + "cm, yuzi esa " + yuza + "cm2.")
// }

// let taraf = +prompt("Kvadratning tarafi uzunligini kiriting (cm): ")
// console.log(kvadrat(taraf));

// function turtburchak(a, b){
//     perimeter = (a + b) * 2
//     yuza = a * b
//     return("Uning perimetri " + perimeter + "cm, yuzi esa " + yuza + "cm2.")
// }

// let uzunligi = +prompt("To'rtburchakning tarafi uzunligini kiriting (cm): ")
// let eni = +prompt("To'rtburchakning tarafi enini kiriting (cm): ")
// console.log(turtburchak(uzunligi, eni));


// let choosedrink = function(a){
//     if (a == "Choy"){
//         return "Siz Choyni tanladingiz"
//     }
//     else if (a == "Qahva"){
//         return "Siz Qahvani tanladingiz"
//     }
//     else if (a == "Suv"){
//         return "Siz Suvni tanladingiz"
//     }
//     else{
//         return "Topilmadi!"
//     }
// }
// let b = prompt("Sizning yoqtirgan ichimligingiz nima?(Choy, Qahva, Suv)")
// console.log(choosedrink(b));

// let narx = (c) =>{
//     if (c <= 5) {
//         return c * 5000
//     } else {
//         return c * 3000
//     }
// }
// let d = +prompt("Necha kilometr yurdingiz?")
// console.log(narx(d) + " so'm");

// let pul = (e) =>{
//     if (e < 100000) {
//         return e  + " so'm to'lashingiz kerak!"
//     } else if (e < 200000) {
//         return e * 0.9 + " so'm to'lashingiz kerak!(10% chegirma)"
//     }
//     else{
//         return e * 0.8  + " so'm to'lashingiz kerak! (20% chegirma))"
//     }
// }
// let f = +prompt("Restoranga qancha to'lashingiz kerak?")
// console.log(pul(f));

//Object

// let Smartphone = {
//     brand:"Samsung",
//     model: "Galaxy S24+",
//     storage: "512 GB",
//     ram: "12 GB",
//     battery: "4900 mAh",
//     is5g: true,
//     narxi: "1,108"
// }
// let Smartphone2 = {
//     brand:"Samsung",
//     mmodel: "Galaxy S24 Ultra",
//     storage: "1 TB",
//     ram: "8 GB",
//     battery: "5000 mAh",
//     is5g: true
// }

// console.log(Smartphone.brand, Smartphone.model, "narxi $",Smartphone.narxi, ".")
// if (Smartphone2.is5g == true) {
//     result =  "5G mavjud"
// } else {
//     result = "5G mavjud emas."    
// }

// console.log(result)

//2-topshiriq
// let Student = {
//     name:"Axmadov Sardor",
//     age : 15,
//     grade : 5,
//     isPassed : true
// }

// delete Student.age
// console.log("Does object have grade?:", "grade" in Student)

// for(let key in Student){
//     console.log(key)
//     console.log(Student[key])
// }

// //3-topshiriq

// let Book = {
//     title: "Qo'rqma",
//     author: "Javlon Jovliyev",
//     year: 2020,
//     pages: 376,
//     isBestSeller: false
// }

// if (Book.isBestSeller == true) {
//     delete Book.isBestSeller
// }

// console.log("Hali ham 'isBestSeller' hali ham bormi:", 'isBestSeller' in Book)

// if (Book.year < 2000) {
//     Book.title += " Classic"
// }

// let count = 0
// for (let key in Book) {
//     console.log(Book[key]);
//     count++
//     if (count == 2) {
//         break
//     }
// }
let person = {
    name:"Sardor",
    age:15
}

person.birth = "2009-08-05"
console.log(person);

delete person.birth

console.log("birth" in person);

person.birth = "2009-08-05"

for(let key in person){
    console.log(`${key}: ${person[key]}`)
}

let person2 ={
    name: "Asad",
    age: 15,
    getInfo(){
        console.log("jhjh");
        
    }
}
let person3 = person2
person3.age = 34
console.log(person2)
console.log(person3);


// Object.assign(person3,person);

// console.log(person3);

console.log(person2==person3)
// console.log(person == person2);
// console.log(person == person3);

person.gap = function(){console.log(`${this.name}ning yoshi ${this.age}da.`)}
person.yosh = {this.age = this.age + 12}

person.gap()
person.keyingi()