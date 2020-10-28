let n = prompt(
  "Hi, friend! \nEnter a number N. \nAnd the function returns the sum of its digits"
);
if (n) {
  alert("Result: " + cycle(n) + ".");
} else {
  alert("You didn`t enter number N");
}
function cycle(n) {
  let x = 0;
  let y;
  while (n) {
    y = n % 10;
    n = (n - y) / 10;
    x += y;
  }
  return x;
}


