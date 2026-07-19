let arr=[1,2,3,4,5];

const sqr=arr.map((n)=>{
    return n*n;
})
const sum=arr.reduce((acc,n)=>{
    return acc+n;
});

const fiveMore=arr.map((n)=>{
    return n+5;
});

let str=["adam","bob","catlyn","donald","eve"];

let newStr=str.map((ch)=>{
    return ch.toUpperCase();
});

const doubleAndReturnArgs=(arr,...args)=>[
    ...arr,
    ...args.map((n)=>{
        return n*2;
    })
];