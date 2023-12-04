//Given a month as an integer from 1 to 12, return to 
//which quarter of the year it belongs as an integer number.

//For example: month 2 (February), is part of the first quarter; 
//month 6 (June), is part of the second quarter; and month 11 
//(November), is part of the fourth quarter.

//Constraint:
  //1 <= month <= 12

//my solution  
const quarterOf = (month) => {
    let january = 1
    let february = 2
    let march = 3
    let april = 4
    let may = 5 
    let june = 6
    let july = 7
    let august = 8
    let september = 9
    let october = 10
    let november = 11
    let decembet = 12
  
    if (month === january || month === february || month === march) {
      return 1
    } else if (month === april || month === may || month === june) {
      return 2
    }else if (month === july || month === august || month === september){
      return 3
    } else {
      return 4
    }
  }

console.log(quarterOf(1)) //output 1
console.log(quarterOf(12)) //output 4
console.log(quarterOf(5)) //output 2

//other solutions
//1.
const quarterOf = m => Math.ceil(m/3);

//2.
const quarterOf = (month, quarter = 4) => {
	switch (month) {
		case 1:
		case 2:
		case 3:
			quarter = 1;
			break;
		case 4:
		case 5:
		case 6:
			quarter = 2;
			break;
		case 7:
		case 8:
		case 9:
			quarter = 3;
			break;
	}
	return quarter;
};