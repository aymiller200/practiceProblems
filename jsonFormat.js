/* 
!DESCRIBE WHAT JSON FORMAT IS. 
    * JSON stands for: Javascript Object Notation. 
    * Light-weight format for transferring data.This data transfer can be between different functions in your code, between different applications, data transferred from an api to your application.
    *Used because: 
        * Easy for humans to understand. 
        * easy for computers to parse and generate
    *JSON formatted data is one of the most common ways to send data from an api

!DELETE THE DATATYPES NOT PERMITTED IN JSON
  *All the data on this json object are allowed except from undefined and functions
    *Undefined is not allowed in JSON because if you want a property on an object to be undefined, it is better practice to completely omit that property from the object.
    *Functions are not allowed in json data because json is only a data description language. Its only purpose is to pass data, it is not a programming language and therefore it is not used for computing logic


!REPLACE PLACEHOLDER-TEXT WITH THE CORRESPONDING DATA TYPE PROPERLY FORMATTED AS JSON.

*/

const myJsonObj = {
  "myString": "strings must be wrapped in double quotes in json objects",
  "myNumber": 123.321,
  "myNull": null, //no quotes because null is not a string, it is its own null value
  "myBoolean": true,
  //myUndefined: [undefined],
  "myArray": [1, 2, "string", false],//whatever you pass into your arrays, make sure it is formatted in proper json
  //myFunction: [some function],
  "myObject": {
    "name": "Ayanna",
    "age": 27
  } //all data in object must be in json format
};

//!IN JSON FORMAT ALL PROPERTIES IN OUR DATA ARE A STRING AND MUST BE WRAPPED IN DOUBLE QUOTES