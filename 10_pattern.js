let n = 5;
let c = 1;
for (let i = 0; i < n; i++) {
  let half = (n - 1) / 2;
  let spaces = "";
  let stars = "";

  if (i > half) {
    for (let sp = 0; sp < i - half; sp++) {
      spaces += " ";
    }
    for (let p = 0; p < n - i; p++) {
      stars += c;
      c++;
    }
    for (let q = half; q <= n - i; q++) {
      stars += c;
      c++;
    }
  } else {
    for (let sj = i; sj <= half - 1; sj++) {
      spaces += " ";
    }
    for (let j = 0; j <= i; j++) {
      stars += c;
      c++;
    }
    for (let m = 1; m <= i; m++) {
      stars += c;
      c++;
    }
  }
  console.log(spaces + stars);
}
