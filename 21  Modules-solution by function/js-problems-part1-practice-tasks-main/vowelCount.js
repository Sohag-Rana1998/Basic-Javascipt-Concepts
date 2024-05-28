const sentence = 'I am learner of programming hero to learn web development';

const result = vowelCount(sentence);

function vowelCount(sentence) {
  let count = 0;
  let vowel = ['a', 'e', 'i', 'o', 'u'];
   sentence.toLowerCase()
  for (let i = 0; i < sentence.length; i++) {
    if (vowel.includes(sentence[i]) ===true) {
      count++;
    }
    
  }
  return count;
}

console.log(result)