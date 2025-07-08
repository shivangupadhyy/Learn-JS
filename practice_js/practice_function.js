function updateBrand(obj){
    obj.brand = "Toyota";

    obj = null;
}

const  car = {
    brand : "Honda",
    model : "Accord",
    year : "1998",
}

console.log(car.brand);
console.log(car.model);
console.log(car.year);

updateBrand(car)

console.log(car.brand);