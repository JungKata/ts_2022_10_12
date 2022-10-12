var symbolus = /[. , : ; ? ' ' \" - = ~ ! @ # $ % ^ & * ( ) _ + / < > {}]/;


document.addEventListener('DOMContentLoaded', () => {
    const usname = document.getElementById('felhasznalonev') as HTMLInputElement | null;
    const namevalue = usname?.value;

    if(namevalue != null){
        if(namevalue.length > 30 || namevalue?.length < 6){
        (document.getElementById('usernameerror') as HTMLElement).textContent = "A felhasználónév nem lehet hosszabb 30 karakternél és rövidebb se 6-nál"
        }
        else if(symbolus.test(namevalue) == true ){
            (document.getElementById('usernameerror') as HTMLElement).textContent = "A felhasználónév nem tartalmazhat specialis karaktert"
        }
    }else{
        
    }

   });
   
