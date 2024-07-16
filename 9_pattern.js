let c = 1;
for (let i = 0; i < 5; i++) {
  let num = "";
  for (let j = 0; j < i; j++) {
    num += c;
    c++;
  }
  console.log(num);
}
