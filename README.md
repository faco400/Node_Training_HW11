# Node_Training_HW11
Repository focusing on Studying node with the focus on JSON syntax and use of regular expressions for pattern matching.

1. [Taks](#task)
2. [Documentation](#documentation)
    - [myJSONParse](#function-myjsonparsejsonstring)
    - [Regular expressions](#regular-expressions-used)
    - [Challenges](#challenges)
3. [How to run](#how-to-run)

### Task

Implement a simplified version of the `JSON.parse` function in JavaScript using regular expressions. This assignment will test your understanding of JSON syntax and your ability to use regular expressions for pattern matching.

### **Part 1: JSON Syntax Understanding**

1. **JSON Syntax**: Begin by revisiting the JSON (JavaScript Object Notation) syntax. Make sure you understand the basic structure of JSON objects, arrays, strings, numbers, booleans, and null values.
2. **Parsing Rules**: Familiarize yourself with the rules for parsing JSON, including how to handle nested objects and arrays.

### **Part 2: JSON Parser Implementation**

1. **Implement JSON.parse**: Create a JavaScript function called `myJSONParse` that takes a JSON-formatted string as input and returns the corresponding JavaScript object. You should use regular expressions to tokenize and parse the input string.
2. **Tokenization**: Implement tokenization by using regular expressions to identify JSON elements (objects, arrays, strings, numbers, booleans, null, etc.) in the input string.
3. **Parsing**: Implement a parsing algorithm that processes the tokens generated in the previous step and constructs the corresponding JavaScript object.
4. **Error Handling**: Ensure your implementation handles common JSON syntax errors gracefully and provides informative error messages when parsing fails.
5. **Testing**: Test your `myJSONParse` function with various JSON strings to ensure it can correctly parse them into JavaScript objects.

### **Part 3: Documentation and Reflection**

1. **Documentation**: Provide clear comments and documentation in your code to explain how your `myJSONParse` function works and how you used regular expressions.
2. **Reflect**: Write a brief reflection on your experience implementing a JSON parser with regular expressions. Discuss any challenges you encountered and how you addressed them.

### **Submission**

Submit your JavaScript code for the `myJSONParse` function, along with any test cases you used to validate its correctness. Include the documentation and reflection as well.

### **Example**

Here's a simplified example structure of what your code might look like:

```js
function myJSONParse(jsonString) {
  // Implement JSON parsing with regular expressions...
}

const jsonString = '{"name": "John", "age": 30, "city": "New York"}';
const jsonObject = myJSONParse(jsonString);

console.log(jsonObject); // Should output the parsed JavaScript object.
```

### **Bonus Challenge**

For an extra challenge, consider extending your `myJSONParse` function to handle additional JSON features, such as Unicode escapes, handling of special characters in strings, and custom revivers similar to the native `JSON.parse` function.

## Documentation

### Function **myJSONParse(jsonString)**
- This function takes a json string as input and returns a json object of this string. To do this the function generates a array of tokens by calling **tokenize** function and with the use of a index variable, navigates the tokens array to parse each token and generate the json object. 
- Nested in the **myJSONParse** function there are 3 auxiliary functions that parse values, array and objects:
  - **parseValue()**: This function is nested inside **myJSONParse** and is responsible to start the conversion process. Its main objective is to parse normal values such as numbers, strings, booleans etc. But it also is responsible to call the other auxiliary functions when necessary.

  - **parseObject()**: This function is responsible to create a object variable that wil store the parsed keys and values of json string. It identifies the keys and values of the object in the tokens array and assign them into the created object by calling **parseValue()**. When the object ends (finds `}` token) it breaks loop and returns object.

  - **parseArray()**: Similar to **parseObject** this function is responsible to create a array variable that wil store the parsed array values of json string. When the array ends (finds `]` token) it breaks loop and returns array.

### Regular expressions used:
```js
const regex = /"([^"\\]*(?:\\.[^"\\]*)*)"|true|false|null|-?\d+(\.\d+)?([eE][+-]?\d+)?|[{}\[\],:]/g;
```

The regex above is used to generate the array of tokens to be used to navigate the json string.

```js
/^-?[0-9]+(\.[0-9]+)?/.test(token)
```
the regex above is used to test if token in tokens array is a number, if true then it returns the token converted into corresponding number by using parseFloat.

### Challenges
While trying to implement the task. A challenge encountered was finding the regular expressions to be used. in the **tokenize** function and to parse numbers. The first regex was implemented based on research in the internet and study of regular expression in the [MDN website](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions).

The second regular expression was obtained by practicing the use of regex in the [Regex 101 website](https://regex101.com/) to obtain a suitable expression to match numbers in the json string.

### How to run

Inside *main.js* file the is some test cases, feel free to test them by executing the following command on project root directory:

```terminal
node main.js
```