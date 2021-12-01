const arrayOfspinners = [
  "\r|   ",
  "\r/   ",
  "\r-   ",
  "\r\\   ",
  "\r|   ",
  "\r|   ",
  "\n",
];
let time = 100;
arrayOfspinners.forEach((element) => {
  setTimeout(() => process.stdout.write(element), time);
  time += 200;
});
