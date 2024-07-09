const fs = require("fs");

fs.readFile("./text.txt", { encoding: "utf-8" }, (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

console.log("hello");

let dat = fs.readFileSync("./text.txt", { encoding: "utf-8" });
console.log(dat);
console.log("byyy..");

fs.appendFile("./text.txt", "i am suraj\n", (err) => {
  if (err) console.log(err);
  else console.log("data appended");
});

fs.appendFile(
  "./log.txt",
  "\nThis is me third time wrinting in the file\n",
  (err) => {
    if (err) {
      console.log("Cannot be appended");
      console.log(err);
    } else {
      console.log("Data has been appended in the file");
    }
  }
);

/*endcoding utf is used to convert data asycky to real value

at first hello get printed and then data get printed beacuse fs.redafile works asynchronesly

fs.readfilesync works synchronesly so further opertions not get excuted until readfilesync not solved
so at first data get printed an after that byyy.. get printed
fs.append add data in text.txt and it can also create new file.



In Node.js, Modules are the blocks of encapsulated code that communicate with an external application on
 the basis of their related functionality. Modules can be a single file or a collection of multiple 
 files/folders. The reason programmers are heavily reliant on modules is because of their reusability as
  well as the ability to break down a complex piece of code into manageable chunks. 

Modules are of three types:

Core Modules
local Modules
Third-party Modules


Core Modules: Node.js has many built-in modules that are part of the platform and come with Node.js 
installation. These modules can be loaded into the program by using the required function.

const module = require('module_name');
The require() function will return a JavaScript type depending on what the particular module returns. 


Core Modules	Description
http	creates an HTTP server in Node.js.
assert	set of assertion functions useful for testing.
fs	used to handle file system.
path	includes methods to deal with file paths.
process	provides information and control about the current Node.js process.
os	provides information about the operating system.
querystring	utility used for parsing and formatting URL query strings.
url	module provides utilities for URL resolution and parsing.



Local Modules: Unlike built-in and external modules, local modules are created locally in your Node.js 
application. Let’s create a simple calculating module that calculates various operations. Create a
 calc.js file that has the following code: 


 exports.add = function (x, y) {
    return x + y;
};

Filename: index.js 


onst calculator = require('./calc');
 
let x = 50, y = 10;
 
console.log("Addition of 50 and 10 is "
             + calculator.add(x, y));



             Third-party modules: Third-party modules are modules that are available online using the
              Node Package Manager(NPM). These modules can be installed in the project folder or globally.
               Some of the popular third-party modules are Mongoose, express, angular, and React. 

Example:

npm install express
npm install mongoose
npm install -g @angular/cli

























*/
