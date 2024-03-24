//the getGrade function will use a simple if--else statement to determine the mutiple conditions met
//once the marks are inputed and the grade is determined it shall be able to get displayed
//the block of code executed by the if is when the condition is true
//else block of code is executed if the condition is false

function getGrade() {
    let grade;
    if (marks > 79) {
      grade = "A";
    } else if (marks >= 60) {
      grade = "B";
    } else if (marks >= 50 && marks <= 59) {
      grade = "C";
    } else if (marks >= 40 && marks <= 49) {
      grade = "D";
    } else {
      grade = "E";
    }
    return grade; // returns the calculated
  }
  console.log(getGrade((marks = 67)));
  