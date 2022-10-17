function capitalize(word){
    if(!isNaN(word)){
        return "Not a String"
    }
    if(!isNaN(word[0])){
        return "First letter is Not a Character"
    }
    return word[0].toUpperCase() + word.slice(1,word.length) ;
}
export default capitalize;