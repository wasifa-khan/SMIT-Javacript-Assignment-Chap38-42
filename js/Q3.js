function calculateSemiperimeter(a, b, c) {
    return (a + b + c) / 2;
  }

  function calculateTriangleArea(a, b, c) {
    var s = calculateSemiperimeter(a, b, c);
    var area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    return area;
  }
  var sideA = 5;
  var sideB = 7;
  var sideC = 9;
  
  var triangleArea = calculateTriangleArea(sideA, sideB, sideC);
  document.write("The area of the triangle is: " + triangleArea);
  