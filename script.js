function calculateBMI() {
    var weight = document.getElementById("weight").value;
    var height = document.getElementById("height").value / 100; // convert cm to meters
    var bmi = weight / (height * height);
  
    var result = document.getElementById("result");
  
    if (isNaN(bmi)) {
      result.innerHTML = "Please enter valid values for weight and height.";
    } else {
      result.innerHTML = "Your BMI is: " + bmi.toFixed(2);
  
      if (bmi < 18.5) {
        result.innerHTML += " (Underweight)";
      } else if (bmi >= 18.5 && bmi < 25) {
        result.innerHTML += " (Average Weight)";
      } else {
        result.innerHTML += " (Overweight)";
      }
    }
  }
  