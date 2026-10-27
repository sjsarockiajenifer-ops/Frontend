// const amount=()=>{
//     let  value=10000
//     const amount1=(num)=>{
// value-=num
// console.log("value",value);
//     }
//     return amount1
// }
// const addingdata=amount()
// addingdata(1000)
// addingdata(1000)

const product=()=>{
    let productname="";
    const innerproduct=(pro)=>{
        productname+=pro
        console.log(productname)
    } 
    return innerproduct
}
const fullname=product()
fullname("milk")