// let line=" "
// let sum=0
// for(let a=1;a<=10;a++){
//     line+=a+"+"
// sum+=a
// }
// console.log('${line}=${sum}');

// let num=0;
// for(let y=1;y<=6;y++){
//     number=num+y;
// }
// console.log(number,"+")

// let num = 0;

// for (let y = 1; y <= 6; y++) {
//     let number = num + y;

//     console.log(num + "+" + y + "=" + number);

//     num = number - y;
// }

const arr=[1,2,3,4,5,6,7,8,9]
const data=arr.map((e,i)=>{
    if(e%2===0){
        return e
    }
})
console.log(data);
