function mostCommonWordForloop(paragraph: string, banned: string[]): string {

    const bannedSet: Set<string> = new Set(banned);

    const paragraphArr: string[] = paragraph.toLowerCase().split(/\W+/).filter(word => word !== '');

    let mostStr: string = "";
    let mostCount: number = 0;


    const checkedWords: Set<string> = new Set();


    for (let i = 0; i < paragraphArr.length; i++) {
        const word = paragraphArr[i];

        if (bannedSet.has(word) || checkedWords.has(word)) continue;


        checkedWords.add(word);

        let count = 1;

        for (let j = i + 1; j < paragraphArr.length; j++) {
            if (word === paragraphArr[j]) {
                count++;
            }
        }

        if (count > mostCount) {
            mostStr = word;
            mostCount = count;
        }
    }

    return mostStr;
}

export default mostCommonWordForloop;