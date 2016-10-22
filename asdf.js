
var a = 1, b = 2, c = 3;

(function firstFunction(){
  var b = 5, c = 6;

  (function secondFunction(){
    var b = 8;

    return console.log("a: " + a + ", b: " + console.log(secondFunction (b)) + ", c: " + console.log(firstFunction (c)));


    (function thirdFunction(){
      var a = 7, c = 9;

      (function fourthFunction(){
        var a = 1, c = 8;

      });
    });
  });
});

console.log(secondFunction());