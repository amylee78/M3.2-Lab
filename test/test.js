import {helloWorld, add} from '../js/main.js';
// Import the sinon library to allow us to create a spy on the console.log function
import sinon from 'sinon';

QUnit.module('main.js tests', function() {

  //  QUnit.test('helloWorld should print Hello World to the console', function(assert) {
        //Arrange
    //    const consoleSpy = sinon.spy(console, 'log');
        //Act
    //    helloWorld();
        //Assert
      //  assert.ok(consoleSpy.calledWith('Hello World'), 'console.log should be called with Hello World');
       // consoleSpy.restore();
   // });

        QUnit.test('Prints Hello World alert button', function(assert) {
        //Arrange
     //const alertSpy = sinon.spy(window, 'alert');
     
         // checks if alert exists. if not leave it empty.
         // used chatgpt to help me as it did not reconize window. who said to used globalThis instead
          globalThis.alert = globalThis.alert || function() {};
         
            const alertSpy = sinon.spy(globalThis, 'alert');
        //Act
        helloWorld();
        //Assert
        assert.ok(alertSpy.calledWith('Hello World!'), 'alert should be called with Hello World!');
        alertSpy.restore();
    });


    QUnit.test('add should return the sum of two numbers', function(assert) {
        //Arrange
        const num1 = 2;
        const num2 = 3;
        const expected = 5;
        //Act
        const result = add(num1, num2);
        //Assert
        assert.equal(result, expected, 'add(2, 3) should return 5');
    });

    QUnit.test('add should return the sum of negative numbers', function(assert) {
        //Arrange
        const num1 = -2;
        const num2 = -3;
        const expected = -5;
        //Act
        const result = add(num1, num2);
        //Assert
        assert.equal(result, expected, 'add(-2, -3) should return -5');
    });

    QUnit.test('add should return the sum of a positive and a negative number', function(assert) {
        //Arrange
        const num1 = 2;
        const num2 = -3;
        const expected = -1;
        //Act
        const result = add(num1, num2);
        //Assert
        assert.equal(result, expected, 'add(2, -3) should return -1');
    });

});
