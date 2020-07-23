function display2_1() {
  var myanswer  = "The first 'console.log(saiyan.dragonball)' will output 'undefined', as 'dragonball' has not yet been assigned a value. The command 'log.console(null == undefined)' will output 'true'; however, the following command 'console.log(null === undefined)' will output false. This is because the '==' operator compares for equality after doing any necessary type conversions, while the '===' opertator returns false since the two are not of the same type. The expressions 'null' and 'undefined' are two different entities. Null is an object used to represent no value, while undefined is a type of variable that has not been assigned a value. " // TODO 2.1: Fill in Answer here after the :
  document.getElementById("21answer").innerHTML = myanswer; // Do not change
}
function display2_2() {
  var myanswer  = "The 'use strict' directive in javascipt prevents the use of undeclared varibales so that your code is less prone to errors. If 'use strict' was removed in this example, the console would not display any errors, and x would be assigned the value 3.14." // TODO 2.2: Fill in Answer here
  document.getElementById("22answer").innerHTML = myanswer; // Do not change
}

function display2_5() {
  var myanswer  = "The reason that we are able to see children that we are not able to view on the HTML page is through the use of the Document Object Model (DOM). This is an onject-oriented representation of the HTML web page, which we can modify by using a scripting language like javascript. Here, we find the 'div_1134' element and use the '.children.' method to store all of it's children." // TODO 2.5: Fill in Answer here
  document.getElementById("25answer").innerHTML = myanswer; // Do not change
}

function countDiv() { // Do not add or remove lines to this function
    var divs = document.getElementsByTagName('div'); // TODO: Question 2.3: Use the document Object to get the number of divs in the HTML page. Replace dummyMethod with the correct one.
    alert("Number of divs in this page is: " + divs.length); // Do not change 
}

function makeOrange() { // Do not add or remove lines to this function
    var narutos = document.getElementsByName('naruto'); // TODO: Question 2.4: Use the document Object to get all tags named "naruto" in the HTML page. Replace dummyMethod with the correct one.
    for(var i=0; i< narutos.length; i++) { // Do not change
        narutos[i].style.color = 'orange'; // Do not change
    }
}

function getChildrenTags() { // Do not add or remove lines to this function
  var children = document.getElementById('div_1134').children; // TODO: Question 2.5 Use the appropriate function to get all the children of a div named 'div_1134'
  var tagNames = ""; // Do not change
  for (var i = 0; i < children.length; i++) {// Do not change
    console.log(children[i].tagName);// Do not change
    tagNames += children[i].tagName +", " ;// Do not change
  }// Do not change
  alert(children.length); // Do not change
  alert("The tags that I found are: " + tagNames);// Do not change
}

