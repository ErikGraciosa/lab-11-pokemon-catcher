// IMPORT MODULES under test here:
import { generateThreeUniqueNumbers } from '../functions.js';
import { generateThreeUniqueNumbersArchive } from '../archivefunction.js';

const test = QUnit.test;

test('function should create array of 3 unique numbers, check if numbers are unique', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = false;
    let actualBoolean = true;

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = generateThreeUniqueNumbers();
        
    actualBoolean = ((actual[0] === actual[1] || actual[1] === actual[2] || actual[0] === actual[2])); 
         
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actualBoolean, expected);
});


test('function should confirm array length is 3', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 3;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = generateThreeUniqueNumbers().length;

        //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});


//Test of other function testing out recursion.
test('function should create array of 3 unique numbers, check if numbers are unique', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = false;
    let actualBoolean = true;

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = generateThreeUniqueNumbersArchive();    
    
    actualBoolean = ((actual[0] === actual[1] || actual[1] === actual[2] || actual[0] === actual[2]));        

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actualBoolean, expected);
});