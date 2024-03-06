const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

function get_low(str)
{
    let low = str[0];
    for(let i = 1 ; i < str.length ; i++){
        if(str[i].length < low.length)
        {
            low = str[i];
        }    
    }
    return low;

}

const result = get_low(heights2);


console.log("The Lowest Name is:: ",result);