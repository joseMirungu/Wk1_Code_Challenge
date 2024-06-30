function getStudentGrade() {
   
    console.log("Please enter the student's marks (0-100):");

    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    readline.question('', (inputMarks) => {
        let marks = parseInt(inputMarks.trim(), 10);

        if (isNaN(marks) || marks < 0 || marks > 100) {
            console.log("Invalid input. Please enter a number between 0 and 100.");
        } else {
        
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

           
            console.log("Grade: " + grade);
        }
        readline.close();
    });
}

getStudentGrade();
