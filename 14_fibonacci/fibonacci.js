const fibonacci = function(fibby) {


    //make sure fibby is a numbah
    fibby = Number(fibby);

    //less than 0 is invalid

    if (fibby < 0){
        return "OOPS";
    }

    //idfk why 1 doesn;'t work so uhhhh

    if (fibby == 1) {
        return 1;
    }


    //honestly more commplicated than it needs to be but it works sooooo

    let former = 0;
    let latter = 1;
    let total = 0;

    for (let i = 1; i < fibby; i++) {

     

        total = former + latter;
        former = latter;
        latter = total;
        

    }

    return total;

};

// Do not edit below this line
module.exports = fibonacci;
