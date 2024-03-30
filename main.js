"use strict";
//          100 days of coding challenge ( DAY 16 )
//   Question 01    
let Laptop = {
    make: "Lenovo",
    model: "Thinkpad",
    year: "2018",
    describe: function () {
        console.log(`This laptop is a ${this.year} ${this.make} ${this.model}.`);
    }
};
Laptop.describe();
//   Question 02
let laptops = [
    { make: "HP", model: "Spectre x360", year: "2021" },
    { make: "Dell", model: "XPS 15", year: "2022" },
    { make: "Apple", model: "Macbook pro", year: "2024" },
];
let [laptop1, laptop2, laptop3] = laptops;
console.log(laptop1);
console.log(laptop2);
console.log(laptop3);
//   Question 03
let pricesSet1 = [2200, 5500, 3500];
let pricesSet2 = [1000, 3000, 2600];
let combinedPrices = [...pricesSet1, ...pricesSet2].sort((a, b) => a - b);
console.log(combinedPrices);
