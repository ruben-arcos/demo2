// When provided with a number between 0-9, return it in words.

// Input :: 1

// Output :: "One".

// If your language supports it, try using a switch statement.

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

//my solution
function switchItUp(number){
    switch (number) {
        case 0:
        return 'Zero';
        break;
        case 1:
        return 'One'
        break;
        case 2:
        return 'Two';
        break;
        case 3:
        return 'Three';
        break;
        case 4:
        return 'Four';
        break;
        case 5:
        return 'Five'
        break;
        case 6:
        return 'Six';
        break;
        case 7:
        return 'Seven';
        break;
         case 8:
        return 'Eight';
        break;
        case 9:
        return 'Nine';
        break;
        default:
        console.log("Enter a valid number please");
    }
  }

//test
describe("Basic Tests",() =>{
    it("Testing for fixed tests", () => {
      assert.strictEqual(switchItUp(1),"One");
      assert.strictEqual(switchItUp(3),"Three");
      assert.strictEqual(switchItUp(5),"Five");
    });
  });

//other solutions
//1.
switchItUp=n=>["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine"][n]

//2.
function switchItUp (number) {
    return 'Zero One Two Three Four Five Six Seven Eight Nine'.split(' ')[number];
  }