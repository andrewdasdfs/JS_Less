
const hasLicence = true;
const age = 16;
const isDrink = false;

const canDrive = age >= 16 && hasLicence && !isDrink;
console.log(`Могу сесть за руль: ${canDrive ? 'Да' : 'Нет'}`);

