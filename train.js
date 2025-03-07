// console.log("TRAIN AREA!!");
// D-TASK
// function countLetter(letter, word) {
//     let count = 0;
//     for(let i=0; i<word.length; i++){
//       if (word[i] === letter)
//         count=count+1;
//     }
//     return count;
//   }

//   console.log(countLetter("e", "engineer"));


// NodeJS event loop va Callback functions


// CALLBACK function
// console.log("Jack Ma maslahatlari");
// const list = [
    // "yaxshi talaba boling", // 0-20
    // "togri boshliq tanlang va koproq hato qiling", // 20-30
    // "uzingizga ishlashingizni boshlang", // 30-40
    // "siz kuchli bolgan narsalarni qiling", // 40-50
    // "yoshlarga investitsiya qiling", // 50-60
    // "endi dam oling, foydasi yoq endi", // 60
// ];
// function maslahatBering(a, callback) {
//     if(typeof a !=="number") callback("insert a number",null);
//     else if(a <= 20) callback(null,list[0]);
//     else if(a > 20 && a <= 30) callback(null, list[1]);
//     else if(a > 30 && a <= 30) callback(null, list[2]);
//     else if(a > 40 && a <= 50) callback(null, list[3]);
//     else if(a > 50 && a <= 60) callback(null, list[4]);
//     else {
//         setTimeout(function(){
//             callback(null, list[5]);    
//         }, 5000);
//     }
// }

// console.log('passed here 0');
// maslahatBering(65, (err, data) => {
//     if(err) console.log('ERROR:', err);
//     else {
//         console.log('javob:', data);
//     }
// })
// console.log('passed here 1');


// ASYNC function
// function maslahatBering(a, callback) {
//     if(typeof a !=="number") callback("insert a number",null);
//     else if(a <= 20) callback(null,list[0]);
//     else if(a > 20 && a <= 30) callback(null, list[1]);
//     else if(a > 30 && a <= 30) callback(null, list[2]);
//     else if(a > 40 && a <= 50) callback(null, list[3]);
//     else if(a > 50 && a <= 60) callback(null, list[4]);
//     else {
//         setTimeout(function(){
//             callback(null, list[5]);    
//         }, 5000);
//     }
// }

// console.log('passed here 0');
// maslahatBering(65, (err, data) => {
//     if(err) console.log('ERROR:', err);
//     else {
//         console.log('javob:', data);
//     }
// })
// console.log('passed here 1');

// Asynchronous functions

// async function maslahatBering(a) {
//     if(typeof a !=="number") throw new Error("insert a number");
//     else if(a <= 20) return(list[0]);
//     else if(a > 20 && a <= 30) return(list[1]);
//     else if(a > 30 && a <= 30) return(list[2]);
//     else if(a > 40 && a <= 50) return(list[3]);
//     else if(a > 50 && a <= 60) return(list[4]);
//     else {
//         // return(list[5]);
//         return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(list[5]);
//         }, 1000);
//         });
//     }
// }

// call via then/catch
// console.log("passed here 0");
// maslahatBering(65)
//    .then(data => {
//    console.log("javob:", data);
// })
//   .catch(err => {
//    console.log("ERROR:", err)
// })
// console.log('passed here 1');

// call via asyn/await
// async function run() {
//   let javob = await maslahatBering(25);
//   console.log(javob);
//   javob = await maslahatBering(7);
//   console.log(javob);
//   javob = await maslahatBering(41);
//   console.log(javob);
// }
// run();

// B-TASK
// function countDigits(word) {
//     let count = 0;
//    for (let i=0; i<word.length; i++){
//      if (word[i] >= "0" && word[i] <= "9"){  
//      // console.log(word[i])
//      count=count+1;
//      }
//    }
//   return count;   
//   }
//   console.log(countDigits("ad2a54y79wet0sfgb9"));

// C-TASK
// function checkContent(word1,word2) {
//     return word1.split('').sort().join('') === word2.split('').sort().join('');
//    }
//    console.log(checkContent("mitgroup", "gmtiprou"));
  
// // D-TASK
// const moment = require("moment") ;

// console.log(moment().format("HH-MM"));

// class Shop {
//   non;
//   cola;
//   lagmon;
  
  
//   constructor(non, lagmon, cola) {
//     this.non = non;
//     this.cola = cola;
//     this.lagmon = lagmon;
//   }
  
  
//   qoldiq() {
//     const time = moment().format("HH:MM");
//     console.log(`hozir ${time}da ${this.non}ta non, ${this.lagmon}ta lagmon va ${this.cola}ta cola mavjud`);
//   }
  
//   sotish(maxsulot, miqdor) {
//     if (maxsulot === 'non'){
//       this.non = this.non - miqdor;
//     } else if (maxsulot === 'lagmon') {
//       this.lagmon = this.lagmon - miqdor;
//     }else if (maxsulot === 'cola') {
//       this.cola = this.cola - miqdor;
//     }
//   }
  
//   qabul(maxsulot, miqdor) {
//      if (maxsulot === 'non'){
//       this.non = this.non + miqdor;
//     } else if (maxsulot === 'lagmon') {
//       this.lagmon = this.lagmon + miqdor;
//     }else if (maxsulot === 'cola') {
//       this.cola = this.cola + miqdor;
//     }
//   }
// }

// const shop = new Shop(4,5,2);
// shop.qoldiq()
// shop.sotish('non', 3);
// shop.qabul('cola',4);
// shop.qoldiq()

// E-TASK
function getReverse(word) {
  return word.split("").reverse("").join("")
}
console.log(getReverse("hello"));


    