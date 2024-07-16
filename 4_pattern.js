let n = 3;
for (let i = 0; i < n; i++) {
  let stars = "";

  for (let sk = 0; sk < i; sk++) {
    stars += " ";
  }
  for (let k = 0; k < n - i; k++) {
    stars += "*";
  }
  for (let j = n; j < n * 2 - i; j++) {
    stars += "*";
  }
  console.log(stars);
}

for (let i = 0; i < n; i++) {
  let stars = "";
  for (let sn = 0; sn < n - i - 1; sn++) {
    stars += " ";
  }
  for (let m = 0; m <= i; m++) {
    stars += "*";
  }
  for (let p = n; p <= n + i; p++) {
    stars += "*";
  }
  console.log(stars);
}
