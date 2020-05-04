import { Complex } from './complex'




export function polynom(x : Complex ,coeffs : Complex[] ) {
  let sum : Complex = new Complex(1,0);
  coeffs.forEach( ( item : Complex, i ) => {
    sum = sum.sum(item.mul(x.pow(i+1)))
  });
  return sum
}

export function diff_polynom(x : Complex ,coeffs : Complex[] ) {
  let sum : Complex = new Complex(0,0);
  coeffs.forEach( ( item : Complex, i ) => {
    sum = sum.sum(item.mul(x.pow(i)).mul(new Complex(i+1,0)))
  });
  return sum
}
