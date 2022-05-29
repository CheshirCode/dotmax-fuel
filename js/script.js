"use strict "
const mainForm = document.forms.formFuel;
console.log(mainForm);
const mainFormTruck = mainForm.elements.truck;
console.log(mainFormTruck);
const mainFormRefrigerator = mainForm.elements.refrigerator;
console.log(mainFormRefrigerator);
const mainFormHeatingEngine = mainForm.elements.heatingEngine;
console.log(mainFormHeatingEngine);

const truckValue = mainFormTruck.value = 100.350;
console.log(truckValue);
if (mainFormTruck.value < 0) {
  alert("Неверное значение");
  mainFormTruck.value = "";
} else {
  mainFormTruck.value;
}