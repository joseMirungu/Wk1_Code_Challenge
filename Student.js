const prompt = require('prompt');


prompt.start();

function getGrade() {
   
    prompt.get(['marks'], function (err, result) {
        if (err) {
            console.error(err);
            return;
        }

      
        let marks = Number(result.marks);

     
        if (isNaN(marks) || marks < 0 || marks > 100) {
            console.log("Invalid input. Please enter a number between 0 and 100.");
            return;
        }

      
        let grade;
        if (marks > 79) {
            grade = 'A';
        } else if (marks >= 60) {
            grade = 'B';
        } else if (marks >= 50) {
            grade = 'C';
        } else if (marks >= 40) {
            grade = 'D';
        } else {
            grade = 'E';
        }

    
        console.log("The grade is: " + grade);
    });
}


getGrade();
