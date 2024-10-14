const arr=[1,2,3,4,5];

console.log(arr.reduce((acc,cur)=>{
    console.log(acc+"  "+cur);
    return 1;   
}));