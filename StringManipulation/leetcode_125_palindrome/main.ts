import palindromeInStinrg from "./string";
import palindromeInArr from "./arr";

const case1:string="A man, a plan, a canal : Panama";
const case2:string="race a car";

console.log(palindromeInStinrg(case1)); // true
console.log(palindromeInStinrg(case2)); // false

console.log(palindromeInArr(case1)); // true
console.log(palindromeInArr(case2)); // false