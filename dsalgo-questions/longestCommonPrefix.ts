function longestCommonPrefix(str: string[]): string {
    let pref:string = str[0];
    for(let i=1; i<str.length; i++){
        let j=0, k=0;
        while(j<pref.length || k<str[i].length) {
            if(pref[j] !== str[i][k]){
                pref = pref.slice(0, j);
                break;
            }
            j++;
            k++;
        }
    }
    return pref;
}
//let res = longestCommonPrefix(["flower","flow","flight"]);
let res = longestCommonPrefix(["flower","flow","flight"]);
console.log(res);
