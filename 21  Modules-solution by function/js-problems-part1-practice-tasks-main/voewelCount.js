function countVowels(sentence) {
   
    sentence = sentence.toLowerCase();
    let vowelCount = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    
   
    for (let i = 0; i < sentence.length; i++) {
       
        if (vowels.includes(sentence[i]) ===true) {
           
            vowelCount++;
        }
    }
    
    
    return vowelCount;
}


const inputString = "I Love my country";
const result = countVowels(inputString)
console.log(result);
