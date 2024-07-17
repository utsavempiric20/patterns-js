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

for (let i = n - 2; i >= 0; i--) {
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
