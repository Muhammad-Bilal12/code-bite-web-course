// String Manipulation

// let txt = "Bilal";

// console.log("the length of txt is", txt.length); // -> String property: show the no of character in string

// String can be define in single or double quotes
// You can use quotes inside a string, as long as they don't match the quotes surrounding the string

// Escape Sequence is a special character start with \
// eg:

// console.log('We are the so-called "Vikings" from the north.');
// console.log("Form feed \f.");
// console.log("Backspace \b.");
// console.log("Backspace \nasadas.");

// JavaScript Strings as Objects

// let x = "John";
// let y = new String("John");
// console.log(x, y);

// console.log(x == y); //values are equal
// console.log(x === y); // but types are not equal
// Comparing two JavaScript objects always returns false.

// x = new String("Bilal");
// y = new String("Bilal");
// console.log(x == y);
// console.log(x === y);

// ----------------------------**********************---------------------------

// String Methods
// Note: String is immutable means we apply string methods it will return a new string.

// Extracting String Parts
// 1. Slice Method

// let text = "Apple, Banana, Kiwi";
// let part = text.slice(7, 13); // start index , ending index not included
// console.log(text.length);
// console.log(part);
// console.log(text.slice(7)); // method will slice out the rest of the string

// If a parameter is negative, the position is counted from the end of the string

// console.log(text.slice(-12));
// console.log(text.slice(-12, -6));

// 2. SubString();
// negative value are treated as zero

// let str = "Apple, Banana, Kiwi";
// let part = str.substring(7, 13);

// console.log(part);

// 3. subStr() -> Deprecated
// the second parameter specifies the length of the character you want to extract.

// let text = "Apple, Banana, Kiwi";
// console.log(text.substr(7, 6));

// Replacing String Content
// 4. replace();
// The replace() method replaces a specified value with another value in a string

// let text = "Please visit Microsoft!";
// let newText = text.replace("Microsoft", "W3Schools");
// console.log(newText);

// example 2
// replace only first match

// let para =
//   'Fiverr is a Israeli multinational online marketplace for freelance services.\
//    Fiverr’s platform connects freelancers (sellers) to people or businesses looking to hire (buyers). \
//     Listings on Fiverr are diverse and range from "get a well-designed business card" to "help with HTML, JavaScript, CSS, and jQuery"';

// let replaceFiverr = para.replace("Fiverr", "Upwork");
// console.log(replaceFiverr);

// example 3
// the replace() method is case sensitive. Writing MICROSOFT (with upper-case) will not work

// let text = "Please visit Microsoft!";
// let newText = text.replace("MICROSOFT", "W3Schools"); // nothing happens
// console.log(newText);

// 5. ReplaceAll(); -> ES2021 Features
// In 2021, JavaScript introduced the string method replaceAll():

// let para =
//   'Fiverr is a Israeli multinational online marketplace for freelance services.\
//    Fiverr’s platform connects freelancers (sellers) to people or businesses looking to hire (buyers). \
//     Listings on Fiverr are diverse and range from "get a well-designed business card" to "help with HTML, JavaScript, CSS, and jQuery"';
// let newPara = para.replaceAll("Fiverr", "Workchest");

// console.log(newPara);

// 6. Converting to Upper and Lower Case

// let greet = "heLlo WoRld";

// console.log(greet);
// console.log(greet.toUpperCase());
// console.log(greet.toLowerCase());

// 7. JavaScript String concat()

// let firstName = "Muhammad ";
// let lastName = "Bilal";
// console.log(firstName.concat(" ", lastName));

// Trim Method
// The trim() method removes whitespace from both sides of a string but not in the middle

// 8. trim

// let text1 = "      Hello World!      there";
// let text2 = text1.trim();
// console.log(text2);

// JavaScript String Padding
// ECMAScript 2017 added two new string methods to JavaScript:
// padStart() and padEnd() to support padding at the beginning and at the end of a string.

// let text = "5";
// let padded = text.padStart(4, "0");
// console.log(padded);

// example

// let name = "Be";
// let newName = name.padStart(3, "M");
// console.log(newName);

// Extracting String Characters
// 10.  charAt()
// The charAt() method returns the character at a specified index (position) in a string

// let text = "HELLO WORLD";
// let char = text.charAt(4);

// console.log(char);

// 11. charCodeAt()
// The charCodeAt() method returns the unicode of the character at a specified index in a string:
// The method returns a UTF-16 code (an integer between 0 and 65535). //returns ascii code

// let text = "HELLO WORLD";
// let char = text.charCodeAt(0);
// console.log(char);

// Property Access
// ECMAScript 5 (2009) allows property access [ ] on strings

// let text = "HELLO WORLD";
// let char = text[0];
// console.log(char);

// **If no character is found, [ ] returns undefined, while charAt() returns an empty string.

// Converting a String to an Array
// If you want to work with a string as an array, you can convert it to an array.

// 12. split() ->split string with given characters

// let text = "my name is bilal";
// console.log(text.split()); //the returned array will contain the whole string in index [0]
// console.log(text.split("")); //the returned array will be an array of single characters
// let newt = text.split(" "); // Split on spaces

// 13. join();
// join() method is used to join() the all the array with the specified characters.

// console.log(newt.join(","));

// ******************************--------------------------****************************
// ------------------------------**************************----------------------------

// Javascript Searching Methods

// 1. indxOF()

// let text = "Please locate where 'locate' occurs!";
// let index = text.indexOf("locate");

// console.log(index);

// let text = "Please locate where 'locate' occurs!";
// let index = text.lastIndexOf("locate");
// console.log(text.length, index);

// let text = "Please locate where 'locate' occurs!";
// console.log(text.search("locate"));

//
