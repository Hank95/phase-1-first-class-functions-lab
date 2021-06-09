// Code your solution in this file!
const drivers = ["Sally", "Bob", "Freddy", "Claudia"];

const returnFirstTwoDrivers = function (arr) {
  return arr.slice(0, 2);
};

const returnLastTwoDrivers = function (arr) {
  return arr.slice(-2);
};
console.log(returnLastTwoDrivers(drivers));

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(num) {
  const faremultiplier = function (fare) {
    return fare * num;
  };
  return faremultiplier;
}
const fareDoubler = function (fare) {
  return createFareMultiplier(2)(fare);
};

const fareTripler = function (fare) {
  return createFareMultiplier(3)(fare);
};
function selectDifferentDrivers(arrayOfDrivers, fn) {
  return fn(arrayOfDrivers);
}
