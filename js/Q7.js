function count(){
    let string = "Pleases read this application and give me gratuity are";
    string = string.toLowerCase()
    let value = "ea"
    let Count = 0;

    for(let i = 0 ;i<string.length;i++){
        switch(string.slice(i,i+3)){
            case value:
                Count++
                break
        }

    }
    document.write("the word " +" ' " +value + "' " +  " has occured " +Count + " times")

}
count()
