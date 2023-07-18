
//your JS code here. If required.
 function findFirstNonRepeatedChar() {
      var inputString = prompt("Enter a string:");
      var charCount = {};
      
      // Count the occurrence of each character
      for (var i = 0; i < inputString.length; i++) {
        var char = inputString[i];
        if (charCount[char]) {
          charCount[char]++;
        } else {
          charCount[char] = 1;
        }
      }
      
      // Find the first non-repeated character
      for (var j = 0; j < inputString.length; j++) {
        var char = inputString[j];
        if (charCount[char] === 1) {
          alert("The first non-repeated character is: " + char);
          return;
        }
      }
      
      alert("There are no non-repeated characters.");
    }
