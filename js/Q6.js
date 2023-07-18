function vowels(){
        let sentence = "today we will go home on time"
        document.write("sentence before removing vowels: <br>" +sentence + "<br>")
        sentence = sentence.toLowerCase();
        for(let i = 0 ;i<sentence.length;i++){
            if(sentence[i] === "a" ||sentence[i] === "e"||sentence[i] === "i"||sentence[i] === "o"||sentence[i] === "u"){
                sentence = sentence.replace(sentence[i],"")
    
            }
        }
        document.write("sentence after removing vowels: <br>"+sentence)
        }
        vowels()
        