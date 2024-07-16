let c = 1;
let n = 3;

for (let i = 0; i < n; i++) {
  let stars = "";

  for (let sj = 0; sj < n - i - 1; sj++) {
    stars += " ";
  }
  for (let j = 0; j <= i; j++) {
    stars += c;
    c++;
  }
  for (let p = 1; p <= i; p++) {
    stars += c;
    c++;
  }
  console.log(stars);
}

for (let i = 0; i < n; i++) {
  let stars = "";
  for (let sm = 0; sm <= i; sm++) {
    stars += " ";
  }
  for (let m = 0; m < n - i - 1; m++) {
    stars += c;
    c++;
  }
  for (let p = n + 1; p < n * 2 - i - 1; p++) {
    stars += c;
    c++;
  }
  console.log(stars);
}
