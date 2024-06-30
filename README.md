This repository contains JavaScript solutions to fundamental programming challenges aimed at reinforcing basic concepts and problem-solving skills.

Repository Structure
The repository is organized into folders, each containing solutions to specific challenges. Here's what you'll find:

Challenge 1: Student Grade Generator (Toy Problem)
File: studentGrade.js
Description: Prompts the user for student marks and determines the corresponding grade based on predefined grading criteria.
Question:
Write a function that prompts the user to input student marks. The input should be between 0 and 100. The output should correspond the correct grade, as shown below:

A > 79
B - 60 to 79
C - 59 to 49
D - 40 to 49
E - less than 40
Challenge 2: Speed Detector (Toy Problem)
File: speedDetector.js
Description: Calculates demerit points for a car's speed exceeding the limit and determines if the driver's license should be suspended.
Question:
Write a program that takes the speed of a car as input (e.g., 80). If the speed is less than 70, it should print “Ok”. Otherwise, for every 5 km/s above the speed limit (70), it should give the driver one demerit point and print the total number of demerit points.

For example, if the speed is 80, it should print: “Points: 2”. If the driver gets more than 12 points, the function should print: “License suspended”.
Challenge 3: Net Salary Calculator (Toy Problem)
File: netSalaryCalculator.js
Description: Computes an individual’s net salary considering basic salary, benefits, tax (PAYE), NHIF deductions, and NSSF deductions using predefined rates.
Question:
Write a program whose major task is to calculate an individual’s Net Salary by getting the inputs of basic salary and benefits. Calculate the payee (i.e. Tax), NHIF Deductions, NSSF Deductions, gross salary, and net salary.

Use KRA, NHIF, and NSSF values provided in the link.
Prerequisites
To run or modify these solutions, ensure you have the following:

Node.js: Installed on your local machine for executing JavaScript programs.
Text Editor: Use any code editor like Visual Studio Code, Atom, or Sublime Text for editing JavaScript files.
Getting Started
Follow these steps to get started with the challenges:

Clone the repository to your local machine:

bash
Copy code
git clone https://github.com/joseMirungu/Wk1_Code_Challenge.git
cd Wk1_Code_Challenge
Navigate to the challenge folder you wish to explore:

bash
Copy code
cd Challenge1  # Replace with Challenge2 or Challenge3 for other challenges
Open the JavaScript file in your preferred code editor to view or modify the solution.

Usage
Each JavaScript file contains an independent solution to its respective challenge. Run them using Node.js to see the output in your terminal or console.

Example:

bash
Copy code
node studentGrade.js
node speedDetector.js
node netSalaryCalculator.js
Additional Resources
KRA Tax Rates: More about PAYE and tax calculations.
NHIF and NSSF Deductions: Detailed rates provided by Aren Software.
