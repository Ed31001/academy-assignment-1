function countVowels(str){
    let counter = 0;

    for (let i = 0; i < str.length; i++){
        if (str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u')
            counter++;
    }
    
    return counter;
}

console.log(countVowels("edouard"));