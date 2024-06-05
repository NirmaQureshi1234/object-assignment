//Part 2: Car Details

//Challenge:

//1. Design a type alias named Car to represent a car object.

type myCar = {
    make: string;
    model: string;
    year: number;
    color: string;
};
  
  let myCar: myCar = {
    make: 'Tesla',
    model: 'X',
    year: 2023,
    color: 'black',
  };
  
  console.log(myCar);

//2. Include a nested object named engine within Car, containing a property named horsepower (number).

type Car = {
    make: string;
    model: string;
    year: number;
    color: string;
    engine: {
      horsepower: number;
    };
  };
  
  let Car: Car = {
    make: "Lamborghini",
    model: "Revuelto",
    year: 2022,
    color: "White",
    engine: {
      horsepower: 746,
    },
  };
  
  console.log(Car);

//3. Define a function named getHorsepower directly within the Car type alias to retrieve the engine's horsepower.

type theCar = {
    make: string;
    model: string;
    year: number;
    color: string;
    engine: {
      horsepower: number;
    };
  };
  
  // Function to engine's horsepower
  function getHorsepower(car: theCar): number {
    return car.engine.horsepower;
  }
  
  let theCar: Car = {
    make: "Ferrari",
    model: "SF90 stradale",
    year: 2023,
    color: "black",
    engine: {
      horsepower: 735,
    },
  };
  
  console.log(getHorsepower(theCar)); 