const makeCase = function(input, text) {
  if (text === "camel") {
    let output = input.split(" ");
    for (let i = 1; i < output.length; i++) {
      let upperCaseStart = output[i][0].toUpperCase();
      output[i] = upperCaseStart + output[i].slice(1);
    }
    output = output.join("");
    return output;
  } else if (text === "pascal") {
    let output = input.split(" ");
    for (let i = 0; i < output.length; i++) {
      let upperCaseStart = output[i][0].toUpperCase();
      output[i] = upperCaseStart + output[i].slice(1);
    }
    output = output.join("");
    return output;
  } else if (text === "snake") {
    let output = input.split(" ");
    output = output.join("_");
    console.log(output);
    return output;
  } else if (text === "kebab") {
    let output = input.split(" ");
    output = output.join("-");
    console.log(output);
    return output;
  } else if (text === "title") {
    let output = input.split(" ");
    for (let i = 0; i < output.length; i++) {
      let upperCaseStart = output[i][0].toUpperCase();
      output[i] = upperCaseStart + output[i].slice(1);
    }
    output = output.join(" ");
    return output;
  } else if (text === "vowel") {
    let output = input.split(" ");
    let newOutput = "";
    for (let i = 0; i < output.length; i++) {
      for (let j = 0; j < output[i].length; j++) {
        if (output[i][j] === "a" || output[i][j] === "e" || output[i][j] === "i" || output[i][j] === "o" || output[i][j] === "u") {
          let upperCaseVar = output[i][j].toUpperCase();
          newOutput += upperCaseVar;
        } else {
          newOutput += output[i][j];
        }
      }
      newOutput += " ";
    }
    return newOutput;
  } else if (text === "consonant") {
    let output = input.split(" ");
    let newOutput = "";
    for (let i = 0; i < output.length; i++) {
      for (let j = 0; j < output[i].length; j++) {
        if (output[i][j] !== "a" && output[i][j] !== "e" && output[i][j] !== "i" && output[i][j] !== "o" && output[i][j] !== "u") {
          let upperCaseVar = output[i][j].toUpperCase();
          newOutput += upperCaseVar;
        } else {
          newOutput += output[i][j];
        }
      }
      newOutput += " ";
    }
    return newOutput;
  } else if (typeof text === "object") {
    for (let i = 0; i < text.length; i++) {
      input = makeCase(input, text[i]);
    }
  }
};

// (makeCase("this is a string", "camel"));
// (makeCase("this is a string", "pascal"));
// (makeCase("this is a string", "snake"));
// (makeCase("this is a string", "kebab"));
// console.log(makeCase("this is a string", "title"));
// console.log(makeCase("this is a string", "vowel"));
// console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["title", "kebab"]));

//EXPECTED OUTPUT
// thisIsAString
// ThisIsAString
// this_is_a_string
// this-is-a-string
// This Is A String
// thIs Is A strIng
// THiS iS a STRiNG
// thIs-Is-A-strIng
