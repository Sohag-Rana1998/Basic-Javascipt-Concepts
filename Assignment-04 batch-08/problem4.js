
//we will write a function named "findAddress()" which will take an object.
function findAddress(obj) {
  
  //access the elements of the object and replace the missing property by double "_ _" underscore.


  const street = obj.street || "__";
  
  const house = obj.house || "__";
  
  const society = obj.society || "__";
  

// form the string as given on the sample "10, 15A, Earth Perfect"
  const str = street + "," + house + "," + society;

  //return the string.
  return str;


}

console.log(findAddress({ street: 10,house:'15A',  society: 'Earth Perfect' }));