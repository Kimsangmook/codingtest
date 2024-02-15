const palindromeInString = (testString: string): boolean => {
    const testArr = testString.toLowerCase().replace(/[^a-zA-Z0-9]/g, '').split('');
    return testArr.join('') === testArr.reverse().join('');
};

export default palindromeInString;
