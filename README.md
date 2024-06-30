Certainly! Here's a revised README with a clear flow and eye-catching arrangement for your repository:

---

# Week 1 Toy Problems

Welcome to the Week 1 Toy Problems repository! This repository contains JavaScript solutions to fundamental programming challenges aimed at reinforcing basic concepts and problem-solving skills.

## Challenges

Explore and solve these challenges to enhance your JavaScript skills:

### Challenge 1: Student Grade Generator (Toy Problem)

#### Question:
Write a function that prompts the user to input student marks. The input should be between 0 and 100. The output should correspond to the correct grade based on predefined grading criteria:
- A > 79
- B - 60 to 79
- C - 59 to 49
- D - 40 to 49
- E - less than 40

#### File: `student.js`
#### Description:
Prompts the user for student marks and determines the corresponding grade based on predefined grading criteria.

### Challenge 2: Speed Detector (Toy Problem)

#### Question:
Write a program that takes the speed of a car as input (e.g., 80). If the speed is less than 70, it should print “Ok”. Otherwise, for every 5 km/s above the speed limit (70), it should give the driver one demerit point and print the total number of demerit points.
- For example, if the speed is 80, it should print: “Points: 2”. If the driver gets more than 12 points, the function should print: “License suspended”.

#### File: `speed.js`
#### Description:
Calculates demerit points for a car's speed exceeding the limit and determines if the driver's license should be suspended.

### Challenge 3: Net Salary Calculator (Toy Problem)

#### Question:
Write a program to calculate an individual’s Net Salary by inputting basic salary and benefits. Calculate the payee (i.e., Tax), NHIF Deductions, NSSF Deductions, gross salary, and net salary using predefined rates.
- Use KRA, NHIF, and NSSF values provided in the [link](https://www.aren.co.ke/payroll/taxrates.htm).

#### File: `net.js`
#### Description:
Computes an individual’s net salary considering basic salary, benefits, tax (PAYE), NHIF deductions, and NSSF deductions using predefined rates.

## Repository Structure

The repository is organized into folders, each containing solutions to specific challenges. Each challenge is implemented in its own JavaScript file for clarity and simplicity.

## Prerequisites

Before running or modifying these solutions, ensure you have the following:
1. **Node.js**: Installed on your local machine for executing JavaScript programs.
2. **Text Editor**: Use any code editor like Visual Studio Code, Atom, or Sublime Text for editing JavaScript files.

## Getting Started

Follow these steps to get started with the challenges:
1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/joseMirungu/Wk1_Code_Challenge.git
   cd Wk1_Code_Challenge
   ```

2. Open the JavaScript file in your preferred code editor to view or modify the solution.

## Usage

Run each JavaScript file using Node.js to see the output in your terminal or console.

Example:
```bash
node student.js
node speed.js
node net.js
```

## Additional Resources

- **KRA Tax Rates**: Learn more about [PAYE and tax calculations](https://www.kra.go.ke/en/individual/calculate-tax/calculating-tax/paye).
- **NHIF and NSSF Deductions**: Detailed rates provided by Aren Software can be found [here](https://www.aren.co.ke/payroll/taxrates.htm).

