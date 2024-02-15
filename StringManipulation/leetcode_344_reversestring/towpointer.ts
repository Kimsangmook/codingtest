const reverseArrTowPointer = (str: string[]): string[] => {
    const charArray = str;

    let left : number = 0;
    let right : number = charArray.length -1;

    while(left<right){
        [charArray[left],charArray[right]]=[charArray[right],charArray[left]];
        left++;
        right--;
    }
    return charArray;
};


export default reverseArrTowPointer;