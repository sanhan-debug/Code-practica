// "use strict"

// class Product {
//     constructor(id,name,price) {
//         this.id=id,
//         this.name=name,
//         this.price=price
//     }
// }

// class Milk extends Product{
//     constructor(id,name,price,fatPecrent,madeIn){
//         super(id,name,price)
//         this.fatPecrent=fatPecrent,
//         this.madeIn=madeIn
//     }
// }

// let milk1 = new Milk(1,"azersud","5.99",8,"Sabirabad")

// console.log(milk1)


class Device {
    constructor(brand, model, screenSize, batteryLevel, price, salePrice, saleCount) {
        if (!salePrice > price) {
            throw new Error("Tessufki maya deyerinden asahgi mehsul sata bilmezsiz (xeyriyyechi deyilsen)");

        }
        this.brand = brand,
            this.model = model,
            this.screenSize = screenSize,
            this.batteryLevel = batteryLevel,
            this.price = price,
            this.salePrice = salePrice,
            this.saleCount = saleCount
    }

    calcluteProfit() {
        let profit = this.saleCount * (this.salePrice - this.price)
        if (profit < 0) {
            return "qardash ziyandasiz"
        } else {
            return `geliriniz : ${profit}`
        }
    }

    displayBatteryLevel() {
        return this.batteryLevel
    }

    displayDetails() {
        return this.screenSize, this.model, this.brand
    }


}


class Phone extends Device {
    constructor(brand, model, screenSize, batteryLevel, price, salePrice, saleCount, isSmart) {
        super(brand, model, screenSize, batteryLevel, price, salePrice, saleCount)
        this.isSmart = isSmart
    }
}

class Labtop extends Device {
    constructor(brand, model, screenSize, batteryLevel, price, salePrice, saleCount, isRGBKeyboard) {
        super(brand, model, screenSize, batteryLevel, price, salePrice, saleCount)
        this.isRGBKeyboard = isRGBKeyboard
    }
}


let phone1 = new Phone("Iphone", "14 pro", "2.5inch", 85, 2200, 2500, 5, true)
let phone2 = new Phone("Xiaomi", "14 ultra", "2.49inch", 83, 2800, 3200, 3, true)
let phone3 = new Phone("Nokia", "216", "1inch", 100, 70, 85, 2, true)
let labtop1 = new Labtop("HP", "Probook", "15.6inch", 99, 1700, 2300, 4, true)
let labtop2 = new Labtop("Macbook", "AIR", "14inch", 91, 3000, 3600, 2, true)


let products = [];
products.push(phone1, phone2, phone3, labtop1, labtop2)
// console.log(products)
// 1. FilterbyPrice - parametr olaraq array və price deyerleri qebul edir. Gonderilmish array-də price-ı göndərilmiş
// price-dan yuxarı olan product-ların name-lərini qaytarın.

// task1

// function filterByPrice (arr,breakPrice){
//     arr.forEach((item)=>{
//        if(item.price > breakPrice){
//         console.log(item.brand)
//        }
//     })
// }

// filterByPrice(products,2000)


Array.prototype.myMap = function(callback) {
let result =[]
    for (let i = 0; i < this.length; i++) {
            result[i]=callback(this[i])
    }
    return result
} 

let arr=[1,2,3,4,5]

//  israfil = 5

// console.log(israfil)

let resultMain = arr.myMap((x)=>x*8)
console.log(resultMain)

// console.log(window)