const calcPRIME = function(y){

  let  boollean = false;

  if(y === 2){
    boollean = true
  }

  if( y > 2){
    let count = 1
    let remainders = 0;

    while( count < y){
      if( y % count === 0){
        remainders++;
      }
      count++;
    }

    if(remainders === 1){
      boollean = true;
    }

  }

  return boollean
}

const ResultColor = function(y){

  let prime = false;
  let even  = false;



  if(y % 2 === 0 | y === 0){
    even = true;
  }else if(calcPRIME(y)){
    prime = true
  }

  if(even === true){
    return `var(--even)`
  }else if(prime === true){
    return `var(--prime)`
  }else{
    return `var(--odds)`
  }

}

const array = [0,1,2,3,4,5]
array.map((i) => console.log(ResultColor(i)))