import Stack from "./datastructures/stack";

function validParens(s: string): boolean {
    let parens = new Stack<string>([]); 
    let valid = false;
    if (s.length === 1) return valid;
    //if (s[0] === ')' || s[0] === '}' || s[0] === ']') return valid;
    for(let i=0; i<s.length; i++) {
        if(s[i] === '(' || s[i] === '[' || s[i] === '{'){
            parens.push(s[i]);
        }
        let top = parens.peek();
        if(s[i] === ')'){
           if(top === '('){
             parens.pop();
           }else {
               return false;
           }
        }

        if(s[i] === ']'){
           if(top === '['){
             parens.pop();
           }else {
               return false;
           }
        }

        if(s[i] === '}'){
           if(top === '{'){
             parens.pop();
           }else {
               return false;
           }
        }
    }

    if(parens.size() === 0) {
        valid = true;
    }
    return valid;
}

let res = validParens("){")
console.log(res);
