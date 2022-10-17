function caesarCipher(word){
    let result = "";
    for(let i=0; i<word.length; i++){
        let c = word.charCodeAt(i);
        if(c===90 || c===122){
            result = result+String.fromCharCode(97); // if Z or z then a
        }else if(c>=65 && c<90){
            result = result+String.fromCharCode(c+32+1) // Convert upper case to lower case then find next letter
        }else if(c>=97 && c<122){
            result = result+String.fromCharCode(c+1) // next letter
        }else{
            result = result + word[i];
        }
        console.log(result);
    }
    return result;
}

export default caesarCipher;