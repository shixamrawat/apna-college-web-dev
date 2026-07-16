let lst=[1,2,3,4,5,6,7,8,9];
function ques1(n){
    let ans=[];
    for(let l of lst){
        if(l>n){
            ans.push(l);
        }
    }
    return ans;
}
console.log("Ques 1");
console.log(ques1(5));

country=["Australia","Germany","United States of America"];

let temp="aaabbhbsabkbbbafdaljfwjaflekdsk";
function ques2(str){
    let ans="";
    for(char of str){
        if(!ans.includes(char)){
            ans+=char;
        }
    }
    return ans;
}

console.log("Ques 2");
console.log(ques2(temp));

function ques3(){
    let longest=country[0];
    for(let cnt of country){
        if(cnt.length>longest.length){
            longest=cnt;
        }
    }
    return longest;
}
console.log("Ques 3");
console.log(ques3());

let str="this is a test string";

function ques4(str){
    str = str.toLowerCase();
    let ans=0;
    for(let i=0;i<str.length;i++){
        let char=str[i];
        if(char=='a' || char=='e' || char=='i' || char=='o' || char=='u'){
            ans++;
        }
    }
    return ans;
}
console.log("Ques 4");
console.log(ques4(str));

function ques5(start,end){
    let rand=Math.floor(Math.random()*(end-start+1)+start);
    return rand;
}
console.log("Ques 5");
console.log(ques5(10,15));