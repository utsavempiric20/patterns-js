let n = 10;

for (let i = 0; i < n; i++) {
  let stars = "";

  for (let sj = 0; sj < n - i - 1; sj++) {
    stars += " ";
  }
  stars += "*";
  for (let j = 0; j < i; j++) {
    stars += " ";
  }
  for (let p = 1; p < i; p++) {
    stars += " ";
  }
  if (i > 0) {
    stars += "*";
  }
  console.log(stars);
}

for (let i = n - 2; i >= 0; i--) {
  let stars = "";

  for (let sj = 0; sj < n - i - 1; sj++) {
    stars += " ";
  }
  stars += "*";
  for (let j = 0; j < i; j++) {
    stars += " ";
  }
  for (let p = 1; p < i; p++) {
    stars += " ";
  }
  if (i > 0) {
    stars += "*";
  }
  console.log(stars);
}
