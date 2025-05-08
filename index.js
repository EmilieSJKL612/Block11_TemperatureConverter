/**
 * One yard is 0.9144 meters.
 * @param {number} yards
 * @returns {number} the given distance in `yards` converted to meters
 */
function convertToMeters(yards) {return yards * 0.9144;}
console.log(convertToMeters(200))

/**
 * Describes the given distance after converting it from yards to meters.
 * - If the distance is greater than 1000 meters, it's longer than a kilometer.
 * - If the distance is greater than 100 meters, it's longer than a hectometer.
 * - If the distance is greater than 10 meters, it's longer than a decameter.
 * - Otherwise, the distance is longer than a sandwich.
 * @example
 * describeDistance(100);
 * // Returns "100 yards is 91.44 meters, which is longer than a decameter!"
 * @param {number} yards
 * @returns {string} A description of the given distance.
 */
function describeDistance(yards) {
    // let meters = yards * 0.9144;
    const meters = convertToMeters(yards);
    if (meters > 1000) {return (`${yards} yards is ${meters} meters, which is longer than a kilometer.`)} 
    else if (meters > 100) {return (`${yards} yards is ${meters} meters, which is longer than a hectometer.`)}
    else if (meters > 10) {return (`${yards} yards is ${meters} meters, which is longer than a decameter.`)}
    else {return (`The distance is longer than a sandwich.`)}
}

console.log(describeDistance(99999));
console.log(describeDistance(9999));
console.log(describeDistance(200));
console.log(describeDistance(100));
console.log(describeDistance(1));


const yards = parseFloat(prompt("Please enter a distance in yards: "));

const description = describeDistance(yards);

alert(description);
