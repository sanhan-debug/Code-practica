

function Product(id, name, price) {
    this.id = id,
        this.name = name,
        this.price = price
}


function Milk(id, name, price, fatPercent, madeIn) {
    Product.call(this, id, name, price)
    this.fatPercent = fatPercent,
        this.madeIn = madeIn
}

Object.setPrototypeOf(Milk.prototype, Product.prototype);

let milk1 = new Milk(1, "palsud", "1.25", 8, "Sabirabad")
let milk2 = new Milk(2, "atena", "1.39", 4, "Sumqayit")
let milk3 = new Milk(3, "sutash", "1.99", 11, "Turkiye")

let milks = []

milks.push(milk1, milk2, milk3)

// console.log(milks)

// milks.forEach((sud)=>(console.log(sud)))

let sud1 = milks.find((sud) => (sud.id == 1))

// console.log(sud1)
let sum = 0;
let result = 0;

function fatPercent(arr) {
    for (let i = 0; i < arr.length; i++) {
        Number(sum = sum + arr[i].fatPercent)
    }
    result = sum / arr.length
    // console.log(result)
}

// fatPercent(milks)
// =============================TASKS=============================

let arrMain = [32, 25, 85, 89, 45, 76, 7, 41, 2, 12]

arrMain.forEach((element) => {
    // console.log(element)
})

let maxElement = arrMain.reduce((max, current) => (current > max ? current : max), arrMain[0]);
// console.log(maxElement);


arrMain.push(15)
// console.log(arrMain)
arrMain.shift(arrMain)
// console.log(arrMain)

arrMain.sort((a, b) => {
    return a - b
})

// console.log(arrMain[arrMain.length - 1])

// console.log(arrMain)

let add43 = arrMain.splice(3, 0, 43)
// console.log(arrMain)

// let print3 = arrMain.slice(3)

// 1. Verilmiş bir array-də ədədlərin yerini dəyişdirərək,cüt ədədləri əvvələ, tək ədədləri isə axıra yerləşdirin.
// 2. Bir array-dəki ən kiçik və ən böyük ədədləri tapın,sonra bu ədədləri array-dən silin.



// function sortedArr(arr) {
//     let arr1 = []
//     let arr2=[]
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 == 0) {

//         }else{
//             result[2]+=arr[i]
//         }
//     }
//     console.log(arr)
// }
// sortedArr(arrMain)

// 3.Bir array verilir. Bu arrayin daxilindəki unikal(təkrarlanmayan) elementləri tapın və yeni bir array-də cəmləyərək qaytarın.

// function findUniqueElements(arr) {
//     const uniqueElements = [];
//     const elementCount = [];

//     for (let i = 0; i < arr.length; i++) {
//         const element = arr[i];
//         if (elementCount[element]) {
//             elementCount[element]++;
//         } else {
//             elementCount[element] = 1;
//         }
//     }

//     for (let element in elementCount) {
//         if (elementCount[element] === 1) {
//             uniqueElements.push(Number(element));
//         }
//     }

//     return uniqueElements;
// }

// const array = [1, 2, 3, 2, 4, 5, 1, 6];
// const netice = findUniqueElements(array);
// console.log(netice); 



// 4.Bir string ve bir char qebul eden bir function yazın.Əgər daxil olunmuş char string-də varsa char-ın yerləşdiyi indekslərin cəmini yoxdursa -1 return etsin. Məsələn salam və 'a' daxil olunarsa output 1+3=4 olmalıdır.

function indexPlusChar(word, char) {
    
    word.includes((element) => {
        element=char
        let result =0;
        for (let i = 0; i < array.length; i++) {
         result = word[element]+word[i]
        }

    })
    console.log(result)
}

indexPlusChar("salam", "a")


// 5.Bir mətn verilir. Mətnin içərisindəki sözlərin sayını tapın və hər bir sözün daxilindəki hərf sayını ayrıca hesablayın. Sonra, ən uzun sözü və onun hərf sayını ekrana çap edin.
// 6.const arr1 = ["a", "b", "c", "d", "e", "f", "j", "k", "y","u"];
// Verilən 'arr1' adlı array-dən təsadüfi bir hərfi qaytaran bir JavaScript funksiyası yazın.
// 7.Bir function yazın parametr olaraq bir array, bir index və bir string qəbul edir. Və daxil olunmuş indeksə əsasən göndərilmiş string-i həmin array-ə əlavə edib return etsin. Məsələn arqument olaraq - ['a','salam','b','world'], 3, "dev" göndərilərsə o zaman dev string-ini 3cu indekse elave etmelidir, eger gonderilmish indeks array-in uzunlugundan boyuk olarsa o zaman hemin string array-in en sonuna elave edilsin.
// 8.İstifadəçidən bir array daxil etməsini istəyin. Bu arrayin daxilindəki ədədlərin kvadratlarını tapın və bu kvadratların cəmini hesablayın. Daha sonra, bu cəmi 2-yə bölün və bu ədədi ekrana çap edin.
// 9. const students = [  { name: "Leyla", points: 500 },
//   { name: "Akif", points: 500 },
//   { name: "Fikret", points: 3000 },
//   { name: "Rashad", points: 500 },
//   { name: "Turkan", points: 1900 },
//   { name: "Sabir", points: 1000 },
//   { name: "Idris", points: 340 },
//   { name: "Nijat", points: 940 },
//   { name: "Ismet", points: 1780 },
// ];
// her telebenin pointini 30 bal artirin