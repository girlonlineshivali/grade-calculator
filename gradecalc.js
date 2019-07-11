var grade = prompt("Enter your grade % in your math class", 76)
if (grade >= 97){
  console.log("You have an A+. You need to increase your grade by " + (100 - grade) + " % to get a 100 in the class")
} else if (grade >= 93 && grade < 97){
  console.log("You have a A. You need to increase your grade by " + (100 - grade) + " % to get a 100 in the class")
} else if (grade >= 90 && grade < 93){
  console.log("You have a A-. You need to increase your grade by " + (100 - grade) + " % to get a 100 in the class")
} else if (grade >= 87 && grade < 90){
  console.log("You have a B+. You need to increase your grade by " + (100 - grade) + " % to get a 100 in the class")
} else if (grade >= 85 && grade < 87){
  console.log("You have an B. You need to increase your grade by " + (100 - grade) + " % to get a 100 in the class")
} else if (grade >= 80 && grade < 85){
  console.log("You have an B-. You need to increase your grade by " + (100 - grade) + " % to get a 100 in the class")
} else if (grade >= 77 && grade < 80){
  console.log("You have an C+. You need to increase your grade by " + (100 - grade) + " % to get a 100 in the class")
} else if (grade >= 75 && grade < 77){
  console.log("You have an C. You need to increase your grade by " + (100 - grade) + " % to get a 100 in the class")
} else if (grade >= 70 && grade < 75){
  console.log("You have an C. You need to increase your grade by " + (100 - grade) + " % to get a 100 in the class")
} else if (grade >= 67 && grade < 70){
  console.log("You have an D+. You need to increase your grade by " + (100 - grade) + " % to get a 100 in the class")
} else if (grade >= 65 && grade < 67){
  console.log("You have an D. You need to increase your grade by " + (100 - grade) + " % to get a 100 in the class")
} else if (grade >= 60 && grade < 65){
  console.log("You have an D-. You need to increase your grade by " + (100 - grade) + " % to get a 100 in the class")
} else {
  console.log("You have an F. You need to increase your grade by " + (100 - grade) + " % to get a 100 in the class")
} 
