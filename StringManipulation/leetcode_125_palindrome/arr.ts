
const palindromeInArr = (testString:string):boolean => {

    const testArr = testString.toLowerCase().replace(/[^a-zA-Z0-9]/g, '').split('');
    for (let i = 0; i < Math.floor(testArr.length / 2); i++) {
        if(testArr[i]!==testArr[testArr.length-1-i]){
            return false;
        }
    }

    return true;

};

export default palindromeInArr;

