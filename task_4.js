const phones = [
    { model: "PhoneA", brand: "Iphone", price: 95000 },
    { model: "PhoneB", brand: "Samsung", price: 40000 },
    { model: "PhoneC", brand: "Oppo", price: 26000 },
    { model: "PhoneD", brand: "Nokia", price: 35000 },
    { model: "PhoneE", brand: "Iphone", price: 105000 },
    { model: "PhoneF", brand: "HTC", price: 48000 },
];

function find_avg(product){
    let sum_money = 0;
    let len = 0;
    for(const cost of product){
        sum_money = sum_money + cost.price;
        len ++;

    }
    const final_avg = sum_money / len;
    return final_avg;

}



const result = find_avg(phones);
console.log('Total avg. of phone price is  ::',result);