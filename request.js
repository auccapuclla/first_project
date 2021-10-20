function myFunction() {
    // Get the value of the input field with id="numb"
    let x = document.getElementById("numb").value;
    // If x is Not a Number or less than one or greater than 10
    console.log(x);
    let text;
    if (x == 1 || x == 3 || x == 5) {
        var newWindow = window.open("form.html");
    } else {
        text = "ID no valid";
        document.getElementById("demo").innerHTML = text;
    }
  }