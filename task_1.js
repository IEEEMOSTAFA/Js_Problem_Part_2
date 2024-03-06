const heights2 = [167, 190, 120, 165, 137];

function get_Max(arr1){
    let low = arr1[0];
    for(const num of arr1){
        if(num < low)
        {
            low = num;
        }
        

    }
    return low;
    
}





const result = get_Max(heights2);


console.log("The Lowest Number is:: ",result);