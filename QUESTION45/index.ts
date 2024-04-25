// 45.	Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
 
function make_car(manufacturer: string, model: string, ...options: [string, any][]): Object {
    let car: { [key: string]: any } = { manufacturer, model };

    for (let i = 0; i < options.length; i++) {
        let [key, value] = options[i];
        car[key] = value;
    }

    return car;
}

let car1 = make_car("Toyota", "Land Cruiser", ["color", "black"], ["year", 2020]);
let car2 = make_car("Ford", "Fiesta", ["color", "blue"], ["year", 2019]);

console.log(car1);
console.log(car2);
