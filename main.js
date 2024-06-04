function tokenize (jsonString) {
  //array of tokens
  const tokens = [];

  // regex expression
  const regex = /"([^"\\]*(?:\\.[^"\\]*)*)"|true|false|null|-?\d+(\.\d+)?([eE][+-]?\d+)?|[{}\[\],:]/g;

  // variable store matched regex
  let match;
  while((match = regex.exec(jsonString)) !== null) {
    tokens.push(match[0]) // pushing into tokens matched expression
  }

  //returning array of
  return tokens;
}

// function myJSONParse(jsonString) {
//   // Implement JSON parsing with regular expressions...
// }

// const jsonString = '{"name": "John", "age": 30, "city": "New York"}';
// const jsonObject = myJSONParse(jsonString);

// console.log(jsonObject); // Should output the parsed JavaScript object.
  
// console.log(tokenize('{"name": "Vini"}'));
// const json = '{"result":true, "count":42}';
// const obj = JSON.parse(json);

// console.log(obj);