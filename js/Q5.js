function index(){
        let string = prompt("enter a string")
        let find = prompt("enter letter whose index u want to search for")
        for(let i = 0 ;i<string.length;i++){
            if(string[i] === find){
                document.write("index of " + find + " is " +i);
                break;
            }
        }
    }
    index();