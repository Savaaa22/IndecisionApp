const add = (a, b) => {
  return a + b;
};

const user = {
  name: "Andrew",
  cities: ["Philadelphia", "New York", "Dublin"],
  printPlacesLived() {
    console.log(this.cities);
    const cityMessages = this.cities.map(
      city => this.name + " has lived in " + city
    );
    return cityMessages;
  }
};

// Challenge Area
const multiplier = {
  numbers: [1, 2, 3, 4, 5, 6],
  multiplyBy: 2,
  multiply() {
    const multiplyMap = this.numbers.map(number => number * this.multiplyBy);
    return multiplyMap;
  }
};
