




const palindromes = function (string) {

    
    let fixedString = string.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").replace(/ /g, "").toLowerCase();
        
        
    
        
 
        let backwards = fixedString.split('').reverse().join('');

        if (backwards == fixedString) {
            return true;
        } else {
            console.log(backwards);
            console.log(fixedString);
            return false;
        }




};

// Do not edit below this line
module.exports = palindromes;
