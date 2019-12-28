function sortNumber(params = '') {
  let number_regex = new RegExp(/[0-9]/g);
  
  let number = params.match(number_regex);
  
  if(number === null) {
    console.log('No number found in parameter!');
  } else {
    let sorted_number = number.sort((a, b) => a - b);
    
    console.log(sorted_number.join(''));
  }
}

// console log output
sortNumber('98765nice43210'); // return 0123456789
sortNumber('nice'); // No number found in parameter!

