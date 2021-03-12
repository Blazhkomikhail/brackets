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