//     *
//    ***
//   *****
//  *******

let n = 5;
for (let i = 0; i < n; i++) {
  let stars = "";
  let k;
  for (k = 0; k <= n - i - 1; k++) {
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
