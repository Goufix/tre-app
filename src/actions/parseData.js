const data = require('./meta');

function parseData(data) {
  let resp = data.split('\n');
  const res = resp.forEach((data, index, array) => {
    const res = data.replace('• ', '')
   return res;
  })
  return res;
}
console.log(parseData(data));