// The function is not returning the correct values. Can you figure out why?

// Example (Input --> Output ):

    // 3 --> "Earth"

//my solution
function getPlanetName(id){
    var name;
    switch(id){
      case 1:
        name = 'Mercury'
        console.log('Mercury')
        break;
      case 2:
        name = 'Venus'
        console.log('Venus')
        break;
      case 3:
        name = 'Earth'
        console.log('Earth')
        break;
      case 4:
        name = 'Mars'
        console.log('Mars')
        break;
      case 5:
        name = 'Jupiter'
        console.log('Jupiter')
        break;
      case 6:
        name = 'Saturn'
        console.log('Saturn')
        break;
      case 7:
        name = 'Uranus'
        console.log('Uranus')
        break;
      case 8:
        name = 'Neptune'
        console.log('Neptune')
        break;
    }
    
    return name;
  }

  console.log(getPlanetName(3)) //ouput: Earth
  console.log(getPlanetName(6)) //ouput: Saturn
  console.log(getPlanetName(2)) //ouput: Venus

//other solutions
//1.
function getPlanetName(id){
    var name;
    switch(id){
      case 1:
        name = 'Mercury'
        break;
      case 2:
        name = 'Venus'
        break;
      case 3:
        name = 'Earth'
        break;
      case 4:
        name = 'Mars'
        break;
      case 5:
        name = 'Jupiter'
        break;
      case 6:
        name = 'Saturn'
        break;
      case 7:
        name = 'Uranus'
        break;
      case 8:
        name = 'Neptune'
    }
    
    return name;
  }

//2.
function getPlanetName(id){
    return {
      1: 'Mercury',
      2: 'Venus',
      3: 'Earth',
      4: 'Mars',
      5: 'Jupiter',
      6: 'Saturn',
      7: 'Uranus',
      8: 'Neptune'
    }[id]
  }