module.exports = function longestConsecutiveLength(array) {
  if(array.length <= 1){
    return array.length
  }    
  let counter = 1;   
  let length = 0
  ([...new Set(array.sort((a, b) => a - b))]).reduce((prev, current) => {
    if(current - prev == 1){     
      ++counter;
      if(counter > length){
        length = counter;
      }
    }else{     
      counter = 1;
    }      
    return current;
  });
  return length;  
}
