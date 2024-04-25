// 45.	Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
function make_car(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = { manufacturer: manufacturer, model: model };
    for (var i = 0; i < options.length; i++) {
        var _a = options[i], key = _a[0], value = _a[1];
        car[key] = value;
    }
    return car;
}
var car1 = make_car("Toyota", "Land Cruiser", ["color", "black"], ["year", 2020]);
var car2 = make_car("Ford", "Fiesta", ["color", "blue"], ["year", 2019]);
console.log(car1);
console.log(car2);
