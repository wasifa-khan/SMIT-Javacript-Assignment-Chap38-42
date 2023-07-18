function calculateOvertimePay(hoursWorked) {
    var regularHours = 40; 
    var overtimeRate = 12;
  
    if (hoursWorked <= regularHours) {
      return 0; 
    } else {
      var overtimeHours = hoursWorked - regularHours; 
      var overtimePay = overtimeHours * overtimeRate; 
      return overtimePay;
    }
  }
  var hoursWorked = parseFloat(prompt("Enter the number of hours worked by the employee:"));
  
  var overtimePay = calculateOvertimePay(hoursWorked);
  console.log("Overtime pay: Rs. " + overtimePay.toFixed(2));
  