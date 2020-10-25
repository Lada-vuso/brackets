module.exports = function check(str, bracketsConfig) {
  // your solution
  console.log(str, bracketsConfig);
  let arr = [];
  let bracketsConfigNew = bracketsConfig.flat();
  
  for (let i = 0; i < str.length; i++) {
    let bracketsIndex;
    
    for (let j = 0; j < bracketsConfigNew.length; j++) {
      if (str[i] === bracketsConfigNew[j]) {
        if (bracketsConfigNew[j] === bracketsConfigNew[j+1]) {
          bracketsIndex = j+1;
        } else {
        bracketsIndex = j;
        }
      } else {
        bracketsIndex = -1;
      }
       
      if (bracketsIndex === -1){
        continue
      }
    
      if (bracketsIndex % 2 === 0) {
        arr.push(bracketsIndex + 1);
      } else {
        if (arr.length !== 0 && arr.pop() !== bracketsIndex) {
        return false;
        } else continue;
      }
    }
  }
  return arr.length === 0;
}

