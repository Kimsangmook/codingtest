function reorderLogFiles(logs: string[]): string[] {
    let letterArr:string[]=[];
    let digitArr:string[]=[];

    logs.map(function(log){
        
        if(isNaN(Number(log.split(" ")[1]))){
            letterArr.push(log);
        }else{
            digitArr.push(log);
        }
    });


    
    letterArr.sort((a, b) => {
        const contentA = a.substring(a.indexOf(" ") + 1); 
        const contentB = b.substring(b.indexOf(" ") + 1);
        const identifierA = a.substring(0, a.indexOf(" ")); 
        const identifierB = b.substring(0, b.indexOf(" "));
    

        if (contentA !== contentB) {
            return contentA.localeCompare(contentB);
        }

        return identifierA.localeCompare(identifierB);
    });

    return [...letterArr.sort(),...digitArr];
};

export default reorderLogFiles