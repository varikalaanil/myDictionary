
 // DOCUMENTATION --> DICTONARY APPP.
  
  //Data fetch from an data base
      
  // Access all the fields.

 let word = document.getElementById("word")
 let meaning = document.getElementById("meaning")
 let sym = document.getElementById("sym")
 let ant = document.getElementById("ant")
 let speech = document.getElementById("speech")
 let example = document.getElementById("example")
 let myButton = document.getElementById("myButton")
 let userInput = document.getElementById("input")
 let body = document.getElementById("body")
 let ul = document.querySelector("ul")

 // Function for working of an api

 const getMeaning = (word) => {
   fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)  // Api request
   .then(response => response.json())
   
   .then(json => 
     {
          console.log(json)
       if(word != ''){
        ul.innerHTML = 
        ` 
        <li> Word : ${json[0].word}</li>
        <li>Speech : ${json[0].meanings[0].partOfSpeech}</li>
        <li>Definition : ${json[0].meanings[0].definitions[0].definition}</li>       
        <li> Synomym : ${json[0].meanings[0].synonyms[1]}</li>
        
        `
     }
    
    })
    
    
   userInput.value = ''}

   // User action for search event.

    myButton.onclick = () => {

        if(userInput.value != '')
        getMeaning(userInput.value);
        else
        alert("PLEASE ENTER A WORD!")
    
    }
    


  