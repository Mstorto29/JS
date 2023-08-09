function car (make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

const auto = new car("honda", "Accord", 1999);

console.log(auto instanceof car);

conselo.log(auto instanceof Object);

console.log(auto instanceof Error);