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

function myJSONParse(jsonString) {
  // getting token array of jsonString
  const tokens = tokenize(jsonString);
  let index = 0; //helper to navigate through tokens

  //Parsing values by iterating through each token...
  function parseValue() {
    // getting token from tokens and increment index
    const token = tokens[index++];
    // for(let token of tokens) {
      if(token === null) // if token of value null return null
        return null;
      if(token === true) // if token is of value true return true
        return true;
      if(token === false) // if token is of value false return false
        return false;
      if(token === '{') // if tokens if start of object then parse object and return it
        return parseObject();
      // if(token === '[')
        // return parseArray();
      if(/^-?[0-9]+(\.[0-9]+)?/.test(token)) // if its number parse into floating point
        return parseFloat(token);

      //if token starts a string then processes it to escape correctly
      if(token[0] === '"') {
        return token.slice(1, -1).replace(/\\(["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, (match, p1) => {
          switch(p1[0]) {
            case '"':
              return '"';
            case '\\':
              return '\\';
            case '/':
              return '/';
            case 'b':
              return '\b';
            case 'f':
              return '\f';
            case 'n':
              return '\n';
            case 'r':
              return '\r';
            case 't':
              return '\t';
            case 'u':
                return String.fromCharCode(parseInt(p1.slice(1), 16));
          }
        });
      }
      throw new Error(`Unexpected token ${token}`);
    // }
  }

  function parseObject() {
    const obj = {};// object to be returned
    // getting token from tokens and increment index
    let token = tokens[index++];

    //if token === } then is the end of object, return it
    if(token === '}')
      return obj;
    
    index--; //go back to beginning of object

    //iterating through object string
    while(true){
      token = tokens[index++];
      //if token start does not have double quotes of string key throw error
      if (token[0] !== '"')
        throw new Error('Expected string as key');
      const key = token.slice(1,-1); // getting key of object

      // if there is not colon after token throw error
      if(tokens[index++] !== ':')
        throw new Error('Expected colon after key');

      //parse value of key to object
      obj[key] = parseValue();

      //if next token is end of object, break loop
      token = tokens[index++];
      if(token === '}')
        break;

      // if next token is not comma then throw error
      if(token !== ',')
        throw new Error('Expected comma or closing brace');

    }
    return obj;
  }

  return parseValue()
}

console.log(myJSONParse('{"name": "Vini", "age": 32}'))

// const jsonString = '{"name": "John", "age": 30, "city": "New York"}';
// const jsonObject = myJSONParse(jsonString);

// console.log(jsonObject); // Should output the parsed JavaScript object.
  
// console.log(tokenize('{"name": "Vini"}'));
// const json = '{"result":true, "count":42}';
// const obj = JSON.parse(json);

// console.log(obj);