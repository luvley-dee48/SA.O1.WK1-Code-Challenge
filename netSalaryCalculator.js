//the net salary calculator
let basicSalary;
let benefits = [];


const payRates = [
  { min: 0, max: 24000, rate: 10 },
  { min: 24001, max: 32333, rate: 25 },
  { min: 32334, max: 500000, rate: 30 },
  { min: 500001, max: 800000, rate: 32.5 },
  { min: 800001, max: Infinity, rate: 35 },
];

//calculate the tax, the payee
let totalIncome = basicSalary + benefits;
let paye = 0;

for (let i = 0; i < payRates.length; i++) {
  if (totalIncome >= payRates[i].min && totalIncome <= payRates[i].max) {
    let paye = math.floor(totalIncome * (payRates[i].rate / 100));
  }
}
//calculate the Nhif dedections
function calculateNhifDeduction(basicSalary) {
  let nhifDeduction;
  //Nhif deductionsbased on the income
  if (basicSalary > 0 && basicSalary <= 5999) {
    nhifDeduction = 150;
  } else if (basicSalary >= 6000 && basicSalary <= 7999) {
    nhifDeduction = 300;
  } else if (basicSalary >= 8000 && basicSalary <= 11999) {
    nhifDeduction = 400;
  } else if (basicSalary >= 12000 && basicSalary <= 14999) {
    nhifDeduction = 500;
  } else if (basicSalary >= 15000 && basicSalary <= 19999) {
    nhifDeduction = 600;
  } else if (basicSalary >= 20000 && basicSalary <= 24999) {
    nhifDeduction = 750;
  } else if (basicSalary >= 25000 && basicSalary <= 29999) {
    nhifDeduction = 850;
  } else if (basicSalary >= 30000 && basicSalary <= 34999) {
    nhifDeduction = 900;
  } else if (basicSalary >= 35000 && basicSalary <= 39999) {
    nhifDeduction = 950;
  } else if (basicSalary >= 40000 && basicSalary <= 44999) {
    nhifDeduction = 1000;
  } else if (basicSalary >= 45000 && basicSalary <= 49999) {
    nhifDeduction = 1100;
  } else if (basicSalary >= 50000 && basicSalary <= 59999) {
    nhifDeduction = 1200;
  } else if (basicSalary >= 60000 && basicSalary <= 69999) {
    nhifDeduction = 1300;
  } else if (basicSalary >= 70000 && basicSalary <= 79999) {
    nhifDeduction = 1400;
  } else if (basicSalary >= 80000 && basicSalary <= 89999) {
    nhifDeduction = 1500;
  } else if (basicSalary >= 90000 && basicSalary <= 99999) {
    nhifDeduction = 1600;
  } else {
    nhifDeduction = 1700;
  }
  return nhifDeduction;
}
console.log(calculateNhifDeduction(100000));

//Calculating the Nssf deductions
function CalculateNssfAmount(pensionablePay, tier) {
  let nssfAmount = 0;
  //for the first tire amount
  if (tier === "I") {
    if (pensionablePay <= 6000) {
      nssfAmount = pensionablePay * 0.06;
    } else if (pensionablePay > 6000 && pensionablePay <= 7000) {
      nssfAmount = 6000 * 0.06;
    }
  } else if (tier === "II") {
    //the second tier amount
    if (pensionablePay > 7000 && pensionablePay <= 18000) {
      nssfAmount = pensionablePay * 0.06 - 7000 * 0.06;
    } else if (pensionablePay > 18000 && pensionablePay <= 36000) {
      nssfAmount = 18000 * 0.06 - 7000 * 0.06;
    }
  }
  return nssfAmount;
}
let pensionablePay = 9000; // example of a pensionablePay
let tier = "II"; // the example of a tier
let nssfDeduction = CalculateNssfAmount(pensionablePay, tier);
console.log("Nssf Deduction:", nssfDeduction);

//calculating benefits
function calculateBenefits(...benefits) {
    return (benefits.reduce((sum, benefits) => sum + benefits, 0)) * 0.15
}

//gross salary

function calculateGrossTax(basicSalary, benefits) {
  let grossTax = Math.floor(basicSalary + benefits);
  return grossTax;
}
console.log(calculateGrossTax(70000, 5000));

let payeAmount = 10000;
let nhifDeduction = 300;

function calculateNetSalary(basicSalary, benefits, tier) {
  let grossTax = calculateGrossTax(basicSalary, benefits);
  let payeAmount = calculatePaye;
  let nhifDeduction = calculateNhifDeduction(basicSalary);
  let nssfDeduction = CalculateNssfAmount(basicSalary, tier);
  let netSalary = grossTax - payeAmount - nhifDeduction - nssfDeduction;
  return netSalary;
}
// let netSalary = grossTax- payeAmount - nhifDeduction - nssfDeduction;
// //console log the net salary

// }
// console.log("Net Salary:", 50000);
