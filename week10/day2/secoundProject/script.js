document.getElementById("anagram-form").addEventListener("submit", function (e) {
    e.preventDefault(); 
    
    const string1 = document.getElementById("string1").value;
    const string2 = document.getElementById("string2").value;
  
    const result = isAnagram(string1, string2);
    document.getElementById("result").textContent = result 
      ? "The strings are anagrams!" 
      : "The strings are not anagrams.";
  });

  function isAnagram(string1,string2){
    const trimedString1 = string1.trim().toLowerCase()
    const trimedString2 = string2.trim().toLowerCase()
    
    const splitedString1 = trimedString1.split('')
    const splitedString2 = trimedString2.split('')

    const sortedString1 = splitedString1.sort().join('')
    const sortedString2 = splitedString2.sort().join('')
    

    return sortedString1 === sortedString2
    
  }