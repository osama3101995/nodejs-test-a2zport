const findLongestWordWithMostVowels = (sentence) =>  {

    const countVowels = (word) => {
      const vowels = ['a', 'e', 'i', 'o', 'u'];
      return word.split('').filter(char => vowels.includes(char)).length;
    }
  
    const words = sentence.replace(/[^a-zA-Z ]/g, '').split(' ');
  
    let longestWord = '';
    let maxWordLength = 0;
    let maxVowelCount = 0;
  
    for (const word of words) {

      const cleanedWord = word.toLowerCase();
      const wordLength = cleanedWord.length;
      const vowelCount = countVowels(cleanedWord);
  
      if (wordLength > maxWordLength) {
        longestWord = cleanedWord;
        maxWordLength = wordLength;
        maxVowelCount = vowelCount;
      } 
      
      else if (wordLength === maxWordLength && vowelCount > maxVowelCount) {
        longestWord = cleanedWord;
        maxVowelCount = vowelCount;
      }
      
    }
  
    return longestWord;
  }
  


 const runTests = () => {
    const testCases = [
      {
        input: "Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers",
        expected: "experience",
        description: "Multiple words with different lengths, one with the most vowels",
      },
      {
        input: "The quick brown fox jumped over the lazy dog",
        expected: "jumped",
        description: "Multiple words with the same longest length, one with the most vowels",
      },
      {
        input: "The quick brown fox jumps over the lazy dog",
        expected: "quick",
        description: "Multiple words with the same longest length and same number of vowels",
      },
      {
        input: "A test sentence with multiple words",
        expected: "sentence",
        description: "Short sentence with multiple words, one with the most vowels",
      },
      {
        input: "Programming is fun",
        expected: "programming",
        description: "Short sentence with a single longest word, which has the most vowels",
      },
      {
        input: "JavaScript is awesome!",
        expected: "javascript",
        description: "Short sentence with a single longest word containing non-alphabetic characters",
      },
    ];
  
    for (const { input, expected, description } of testCases) {
      const result = findLongestWordWithMostVowels(input);
      console.log(`Test Case: ${description}`);
      console.log(`Input: "${input}"`);
      console.log(`Expected: "${expected}"`);
      console.log(`Result: "${result}"`);
      console.log(`Test ${result === expected ? 'Passed' : 'Failed'}`);
      console.log('---');
    }
  }
  
  runTests();
  
  