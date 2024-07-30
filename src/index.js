module.exports = function toReadable (number) {   
  const t = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  const o = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const p = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const z = ['zero'];
  let str = number.toString();
  let out = '';

  if(number === 0) {
    out = z[number];
  } else  
  if(str.length == 1) {
    out = o[number];        
  } else
  if(str.length == 2){
    if(str[0] == 1 && str[1] >= 0) {
      out = p[(str[1])];
    } else 
    if(str[0] >= 0 && str[1] == 0) {
      out = t[(str[0]-2)];
    } else 
    if(str[0] >= 0 && str[1] >= 0) {
      out = t[(str[0]-2)] + ' ' + o[(str[1])];
    }    
  } else 
  if(str.length == 3){
    if(str[0] >= 1 && str[1] == 0 && str[2] == 0) {
      out = o[(str[0])] + ' hundred';
    } else 
    if(str[0] >= 1 && str[1] == 0 && str[2] >= 1) {
      out = o[(str[0])] + ' hundred' + ' ' + o[(str[2])];
    } else 
    if(str[0] >= 1 && str[1] == 1 && str[2] >= 0) {
      out = o[(str[0])] + ' hundred' + ' ' + p[(str[2])];
    } else 
    if(str[0] >= 1 && str[1] >= 2 && str[2] == 0) {
      out = o[(str[0])] + ' hundred' + ' ' + t[(str[1]-2)];
    } else 
    if(str[0] >= 1 && str[1] >= 2 && str[2] >= 0) {
      out = o[(str[0])] + ' hundred' + ' ' + t[(str[1]-2)] + ' ' + o[(str[2])];
    }
  }
  let arr = out.split();
  out = arr.join('');
  console.log(out)
  return out;
}
