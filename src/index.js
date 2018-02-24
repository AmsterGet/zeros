module.exports = function getZerosCount(number) {
    let zeroesCount = 0;
    while(number!==0){
        number=Math.trunc(number/5);
        zeroesCount+=number;
    }
    return zeroesCount;
};
