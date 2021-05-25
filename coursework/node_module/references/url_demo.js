const url = require("url");

const urlObj = new URL("http://mysite.com/hello.html?id=100&status=active");

//serialize
//console.log(urlObj.href);

//Host
//console.log(urlObj.hostname);

//Path name
//console.log(urlObj.pathname);

//serialized query
//console.log(urlObj.search);
//console.log(urlObj.searchParams);

//Add parameters
//urlObj.searchParams.append("abs", "123");
//console.log(urlObj.searchParams);
//
////Loop through
//urlObj.searchParams.forEach((val, namee) => {
//    console.log(`${namee}: ${val}`);
//});