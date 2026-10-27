const value=()=>{
    let counter=0
    return()=>{
        counter += 10;
        console.log(counter)
    }
}
const result=value()
result()
result()
result()
// result()

const calculateSalary=(salary, callback)=>{
callback(salary);
}
const addBonus=(salary)=>{
console.log("addbonus:",salary+5000)
}
const deductSalary=(salary)=>{
    console.log("deductsalary:",salary-2000)
}
const salary=20000;
console.log("calculated salaey is:",salary);
calculateSalary(salary, addBonus);
calculateSalary(salary, deductSalary);

const checkResult=(mark)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(mark>=35){
                console.log("student passed")
            }else{
                console.log("student failed")
            }
        },2000);
    });
};
checkResult(75)
.then((result)=>{
    console.log(result);
})
.catch((error)=>{
    console.log(error);
})
checkResult(20)
.then((result)=>{
    console.log(result);
})
.catch((error)=>{
    console.log(error);
})