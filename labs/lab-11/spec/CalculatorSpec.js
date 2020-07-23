describe("Test add() method", function() {
 	var calc;
    //This will be called before running each spec
    beforeEach(function() {
        calc = new Calculator(); //Create a calculator object to call our math operations
    });

    /* 
    *  Example Test Case for Addition Operation
    */
   it("Check addition, two positive values", function() {

        expect( calc.add(1,2) ).toEqual(3);
    }); 

   it("Check addition, two negative values", function() {

        expect( calc.add(-7,-5) ).toEqual(-12);
    }); 
});

/*
* Create a new test suit with two new test cases for sub() method
*/
describe("Test sub() method", function() {
    var calc;
   //This will be called before running each spec
   beforeEach(function() {
       calc = new Calculator(); //Create a calculator object to call our math operations
   });

   /* 
   *  Example Test Case for Addition Operation
   */
  it("Check subtraction, two positive values", function() {

       expect( calc.sub(1,2) ).toEqual(-1);
   }); 

  it("Check subtraction, two negative values", function() {

       expect( calc.sub(-7,-5) ).toEqual(-2);
   }); 
});
/*
* Create a new test suit with two new test cases for multiply() method
*/
describe("Test multiply() method", function() {
    var calc;
   //This will be called before running each spec
   beforeEach(function() {
       calc = new Calculator(); //Create a calculator object to call our math operations
   });

   /* 
   *  Example Test Case for Addition Operation
   */
  it("Check multiplication, two positive values", function() {

       expect( calc.multiply(3,2) ).toEqual(6);
   }); 

  it("Check multiplication, two negative values", function() {

       expect( calc.multiply(-7,-5) ).toEqual(35);
   }); 
});
/*
* Create a new test suit with two new test cases for divide() method
*/
describe("Test divide() method", function() {
    var calc;
   //This will be called before running each spec
   beforeEach(function() {
       calc = new Calculator(); //Create a calculator object to call our math operations
   });

   /* 
   *  Example Test Case for Addition Operation
   */
  it("Check division, two positive values", function() {

       expect( calc.divide(9,3) ).toEqual(3);
   }); 

  it("Check division, two negative values", function() {

       expect( calc.divide(-35,-5) ).toEqual(7);
   }); 
});