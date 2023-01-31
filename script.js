let output = [];

for (let fizzbuz = 1; fizzbuz <= 100; fizzbuz++) {
  if (fizzbuz % 2 === 0 && fizzbuz % 7 === 0) {
    output.push("Fizzbuzz");
  } else if (fizzbuz % 2 === 0) {
    output.push("Fizz");
  } else if (fizzbuz % 7 === 0) {
    output.push("Buzz");
  } else {
    output.push(fizzbuz);
  }
}

const printOutput = () => {
  console.log(output);
};

printOutput();