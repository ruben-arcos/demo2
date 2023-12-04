//Bob needs a fast way to calculate the volume of a cuboid 
//with three values: the length, width and height of the 
//cuboid. Write a function to help Bob with this calculation.

//my solution
class Kata {
    static getVolumeOfCuboid(length, width, height) {
      return length * width * height;
    }
  }

  console.log(Kata.getVolumeOfCuboid(1,2,3))
  console.log(Kata.getVolumeOfCuboid(9,9, 9))
  console.log(Kata.getVolumeOfCuboid(6,2,5))

