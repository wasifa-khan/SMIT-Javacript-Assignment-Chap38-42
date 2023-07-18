function calculateAverage(mark1, mark2, mark3) {
    var totalMarks = mark1 + mark2 + mark3;
    var average = totalMarks / 3;
    return average;
  }
  function calculatePercentage(mark1, mark2, mark3) {
    var totalMarks = mark1 + mark2 + mark3;
    var totalPossibleMarks = 300; 
    var percentage = (totalMarks / totalPossibleMarks) * 100;
    return percentage;
  }
  function mainFunction(mark1, mark2, mark3) {
    var average = calculateAverage(mark1, mark2, mark3);
    var percentage = calculatePercentage(mark1, mark2, mark3);
  
    console.log("Average marks: " + average);
    console.log("Percentage: " + percentage + "%");
  }
  var subject1Marks = 80;
  var subject2Marks = 90;
  var subject3Marks = 75;
  mainFunction(subject1Marks, subject2Marks, subject3Marks);
  