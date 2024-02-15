function mostCommonWordMap(paragraph: string, banned: string[]): string {
    const bannedSet: Set<string> = new Set(banned);

    const paragraphArr: string[] = paragraph.toLowerCase().split(/\W+/).filter(word => word !== '');

    const wordCountMap: Map<string, number> = new Map();

    paragraphArr.forEach(word => {

        if (!bannedSet.has(word)) {
            wordCountMap.set(word, (wordCountMap.get(word) || 0) + 1); // 이부분이 키
        }
    });


    let mostStr: string = "";
    let mostCount: number = 0;

    console.log(wordCountMap);

    wordCountMap.forEach((count, word) => {

        if (count > mostCount) {
            mostStr = word;
            mostCount = count;
        }
    });

    return mostStr;
}

export default mostCommonWordMap;
