// let n = 5;
// for (let i = 0; i < n; i++) {
//   let half = (n - 1) / 2;
//   let stars = "";

//   if (i > half) {
//     for (let sp = 0; sp < i - half; sp++) {
//       stars += " ";
//     }
//     for (let p = 0; p < n - i; p++) {
//       stars += "*";
//     }
//     for (let q = half; q <= n - i; q++) {
//       stars += "*";
//     }
//   } else {
//     for (let sj = i; sj <= half - 1; sj++) {
//       stars += " ";
//     }
//     for (let j = 0; j <= i; j++) {
//       stars += "*";
//     }
//     for (let m = 1; m <= i; m++) {
//       stars += "*";
//     }
//   }
//   console.log(stars);
// }

let n = 5;

for (let i = 0; i < n; i++) {
  let stars = "";

  for (let sj = 0; sj < n - i - 1; sj++) {
    stars += " ";
  }
  for (let j = 0; j <= i; j++) {
    stars += "*";
  }
  for (let p = 1; p <= i; p++) {
    stars += "*";
  }
  console.log(stars);
}

for (let i = n - 2; i >= 0; i--) {
  let stars = "";

  for (let sj = 0; sj < n - i - 1; sj++) {
    stars += " ";
  }
  for (let j = 0; j <= i; j++) {
    stars += "*";
  }
  for (let p = 1; p <= i; p++) {
    stars += "*";
  }
  console.log(stars);
}
