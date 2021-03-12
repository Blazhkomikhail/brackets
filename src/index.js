module.exports = function check(str, bracketsConfig) {
  const config = bracketsConfig.map(elem => {
    return `${elem[0]}${elem[1]}`;
  })
  let iteration = Math.ceil(str.length / 2);
  let string = str;
  let arrFromSrting = string.split('');

  for(let i = 0; i <= iteration; i++) {
    for (const elem of config) {
      if (string.indexOf(elem) !== -1)
        arrFromSrting.splice(string.indexOf(elem), 2);
        string = arrFromSrting.join('');
    }
  }
  return !string.length;
}
        
  //       for(let i = 0; i <= iteration; i++) {
  //         if ( string.indexOf(brackets) !== -1 ) {
  //           tempArray.splice(string.indexOf(brackets), 2);
  //         } else if( string.indexOf(squareBrackets) !== -1 ) {
  //           tempArray.splice(string.indexOf(squareBrackets), 2);
  //         } else if(string.indexOf(curlyBrackets) !== -1 ) {
  //           tempArray.splice(string.indexOf(curlyBrackets), 2);
  //         } else if (string.indexOf(staightSlashes) !== -1 ) {
  //           tempArray.splice(string.indexOf(staightSlashes), 2);
  //         }
  //         string = tempArray.join('');
  //       }
  // }
  // result.push(!string.length);

  // result.push(bracketsConfig.every( (elem) => {
  //   return elem.join('') === brackets ||
  //          elem.join('') === squareBrackets ||
  //          elem.join('') === curlyBrackets ||
  //          elem.join('') === staightSlashes;
  //   }));

  //   return result.every( e => e === true );  
