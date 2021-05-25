const fs = require("fs");
const path = require("path");

//Folder creation
//fs.mkdir(path.join(__dirname, "test"), {}, (e) => {
//    e ? console.log(e) : console.log("Folder created");
//});

//Create file and write
//fs.writeFile(
//  path.join(__dirname, "/test", "hello.txt"),
//  "Hello world hey",
//  (e) => {
//    e ? console.log(e) : console.log("File created");
//
//    fs.appendFile(
//        path.join(__dirname, "/test", "hello.txt"),
//        "Added text",
//        e => {
//            e ? console.log(e) : console.log("File appended to");
//        }
//    );
//  }
//);

//Readfile
//fs.readFile(path.join(__dirname, "/test", "hello.txt"), "utf8", (e, data) => {
//  console.log(data);
//});

//fs.rename(
//  path.join(__dirname, "/test", "hello.txt"),
//  path.join(__dirname, "/test", "hello2.txt"),
//  (e) => {
//    e ? console.log(e) : console.log("Rename succesful");
//  }
//);
