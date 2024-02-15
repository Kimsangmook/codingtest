function groupAnagrams(strs: string[]): string[][] {
    const anagramsMap: Map<string, string[]> = new Map();
    strs.forEach(word => {
        const sortedWord = word.split("").sort().join("");
        if (!anagramsMap.has(sortedWord)) {
            anagramsMap.set(sortedWord, []);
        } 

        anagramsMap.get(sortedWord)!.push(word);
 

    });
    return [...anagramsMap.values()];
}

export default groupAnagrams;