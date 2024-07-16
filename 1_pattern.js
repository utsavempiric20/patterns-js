//j   0 1 2 3 4
//i 0 *
//  1 * *
//  2 * * *
//  3 * * * *
//  4 * * * * *

for (let i = 0; i < 5; i++) {
  let stars = "";
  for (let j = 0; j < i; j++) {
    stars += "* ";
  }
  console.log(stars);
}
