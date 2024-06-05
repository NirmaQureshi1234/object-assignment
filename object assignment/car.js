//Part 2: Car Details
var myCar = {
    make: 'Toyota',
    model: 'Camry',
    year: 2020,
    color: 'blue',
};
console.log(myCar);
var Car = {
    make: "Honda",
    model: "Civic",
    year: 2022,
    color: "White",
    engine: {
        horsepower: 205,
    },
};
console.log(Car);
// Function to engine's horsepower
function getHorsepower(car) {
    return car.engine.horsepower;
}
var theCar = {
    make: "Nissan",
    model: "Sentra",
    year: 2020,
    color: "black",
    engine: {
        horsepower: 149,
    },
};
console.log(getHorsepower(theCar));
