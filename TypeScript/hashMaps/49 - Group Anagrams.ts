

function groupAnagrams(strs: string[]): string[][] {
    for(let i = 0; i < strs.length; i++){
        let currWord: string = strs[i];
        let hashMap: Map<string, number> = new Map();

        for(let j = 0; j < currWord.length; j++){
            let currChar: string = currWord[j];
            hashMap.set(currChar, i);
        }



    }
};

function groupAnagrams(strs: string[]): string[][] {
    let sortedList: string[] = [];
    let answerList: string[][] = [];

    let hashMap: Map<string, number> = new Map();

    for(let i = 0; i < strs.length; i++){
        let currWord: string = strs[i].split("").sort().join();

        sortedList.push(currWord)
        hashMap.set(currWord, i);
    }

    for(let i = 0; i < sortedList.length; i++){
        if(hashMap.has(sortedList[i])){
            answerList.push(sortedList[i][hashMap.values(sortedList[i])]);
        }
    }

};