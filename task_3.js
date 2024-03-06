

function calculateElectronicsBudget(num1,num2,num3) {
    const tablet = 15000 
    const laptop = 35000 
    const  mobile = 20000 

    const total_price = (tablet*num1)+(laptop*num2)+(mobile*num3);
    

    return total_price


}


const result = calculateElectronicsBudget(2,2,2);


console.log("Total Gadget price is   : ", result);