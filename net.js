const PAYE_RATES = [
    { min: 0, max: 288000, rate: 0.1 },
    { min: 288001, max: 388000, rate: 0.25 },
    { min: 388001, max: 6000000, rate: 0.3 },
    { min: 6000001, max: 9600000, rate: 0.325 },
    { min: 9600001, max: Infinity, rate: 0.35 }
];

const NHIF_RATES = [
    { min: 0, max: 5999, deduction: 150 },
    { min: 6000, max: 7999, deduction: 300 },
    { min: 8000, max: 11999, deduction: 400 },
    { min: 12000, max: 14999, deduction: 500 },
    { min: 15000, max: 19999, deduction: 600 },
    { min: 20000, max: 24999, deduction: 750 },
    { min: 25000, max: 29999, deduction: 850 },
    { min: 30000, max: 34999, deduction: 900 },
    { min: 35000, max: 39999, deduction: 950 },
    { min: 40000, max: 44999, deduction: 1000 },
    { min: 45000, max: 49999, deduction: 1100 },
    { min: 50000, max: 59999, deduction: 1200 },
    { min: 60000, max: 69999, deduction: 1300 },
    { min: 70000, max: 79999, deduction: 1400 },
    { min: 80000, max: 89999, deduction: 1500 },
    { min: 90000, max: 99999, deduction: 1600 },
    { min: 100000, max: Infinity, deduction: 1700 }
];

const NSSF_RATE_EMPLOYEE = 0.06;

function calculatePAYE(taxableIncome) {
    let tax = 0;
    for (let rate of PAYE_RATES) {
        if (taxableIncome > rate.min && taxableIncome <= rate.max) {
            tax = (taxableIncome - rate.min) * rate.rate;
            break;
        }
    }
    return tax;
}

function calculateNHIFDeduction(grossPay) {
    let nhif = 0;
    for (let rate of NHIF_RATES) {
        if (grossPay >= rate.min && grossPay <= rate.max) {
            nhif = rate.deduction;
            break;
        }
    }
    return nhif;
}

function calculateNSSFContribution(pensionablePay) {
    return pensionablePay * NSSF_RATE_EMPLOYEE;
}

function calculateNetSalary(basicSalary, benefits) {
    let grossSalary = basicSalary + benefits;
    let payee = calculatePAYE(grossSalary);
    let nhifDeduction = calculateNHIFDeduction(grossSalary);
    let nssfDeduction = calculateNSSFContribution(basicSalary);
    let netSalary = grossSalary - payee - nhifDeduction - nssfDeduction;

    console.log(`Basic Salary: ${basicSalary}`);
    console.log(`Benefits: ${benefits}`);
    console.log(`Gross Salary: ${grossSalary}`);
    console.log(`PAYE (Tax): ${payee.toFixed(2)}`);
    console.log(`NHIF Deductions: ${nhifDeduction.toFixed(2)}`);
    console.log(`NSSF Deductions: ${nssfDeduction.toFixed(2)}`);
    console.log(`Net Salary: ${netSalary.toFixed(2)}`);
}

calculateNetSalary(100000, 20000);
