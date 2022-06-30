function handleVowel(){
    let counter=0;    
    let vowels=['a','e','u','i','o'];        
    let str=document.getElementById("input-text").value;

    for (ch of str){
        if(vowels.includes(ch)){
            counter++;
        }
    }
    document.getElementById("num-vowels").innerHTML=`The word has ${counter} vowels.`;
    setTimeout(function(){
        window.location.reload(1);
     }, 2000);
}