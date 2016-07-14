var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];
var grades = [];
var gradeCount = {
  A: 0,
  B: 0,
  C: 0,
  D: 0,
  F: 0
};

var minScore = Math.min.apply(null,scores);
var maxScore = Math.max.apply(null,scores);

for (i in scores) {
  var grade = scoreConverter(scores[i]);
  grades.push(grade);
};

gradeCounter(grades) {
  for (i in grades) {
    if (grades[i] === "A") {
      gradeCount.A += 1;
    } else if (grades[i] === "B") {
      gradeCount.B += 1;
    } else if (grades[i] === "C") {
      gradeCount.C += 1;
    } else if (grades[i] === "D") {
      gradeCount.D += 1;
    } else {
      gradeCount.F += 1;
    }
  };
}

console.log(grades);
console.log("Here are the counts of each grade: " + JSON.stringify(gradeCount));
console.log("The lowest grade was a " + scoreConverter(minScore));
console.log("The highest grade was a " + scoreConverter(maxScore));

function scoreConverter(score) {
  if (score > 90) {
    return "A";
  } else if (score > 80) {
    return "B";
  } else if (score > 70) {
    return "C";
  } else if (score > 60) {
    return "D";
  } else {
    return "F";
  }
};