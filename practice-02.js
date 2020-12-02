getList = () => {
  return ["Honda", "Ford", "Bugatti"];
};

printCars = (listOfCars) => {
  listOfCars.forEach((carType) => {
      console.log(carType);
  });
};

printCost = () => {
  console.log(12.87);
};

playSound = () => {
  console.log("I would play a sound if I knew how");
};

////////////////////////////////////////////////////////////////
//get list of cars
const cars = getList();
//iterate over list, printing
printCars(cars);
//pring out cost of inv
printCost();
//plat fanfare
playSound();
