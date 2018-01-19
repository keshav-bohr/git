
    var dictionary = ["hello","world"];
    var randomWordIndex = Math.floor(Math.random()*dictionary.length);
    var wordLength = dictionary[randomWordIndex].length;
    var dashWord = "-----------------";
    var preRandomIndex = -1;
    
    //var guessSubmit = document.querySelector('.guessSubmit');
    //var guessClass = document.querySelector('.guessClass');

    var chance = 3;
    function replaceAt(string, index, replace) {
      return string.substring(0, index) + replace + string.substring(index + 1);
    }

    str=dashWord.slice(0,dictionary[randomWordIndex].length);
    for(i=1;i<=2;i++)
      {
        randomIndex=Math.floor(Math.random()*wordLength);
        if(preRandomIndex==randomIndex)
           randomIndex++;
        //str = dictionary[randomWordIndex];
        //str=dashWord.slice(0,dictionary[randomWordIndex].length);
        str=replaceAt(str,randomIndex,dictionary[randomWordIndex][randomIndex]);
        preRandomIndex=randomIndex;
      }

    //document.write(str);
    //guessClass.addEventListener('click',guessSubmit);

    (function guessSubmit()
    {
      /*console.log("in function");
      if(!(((guessField.charCodeAt()>=65)&&(guessField.charCodeAt()<=90))||((guessField.charCodeAt()>=97)&&(guessField.charCodeAt()<=122))))
           {
            alert("enter a character");
           }
      
      else*/
           
          while((chance)&&(str!=dictionary[randomWordIndex]))
          {
          guessField = prompt(str);
          guessField = guessField.toLowerCase();
          guessFieldIndex = dictionary[randomWordIndex].indexOf(guessField);
          if(guessFieldIndex==-1)
            {
              chance--;
              document.write("wrong guess<br/>You have "+chance+" chances left ");
              
            }
          else
            {
              str=replaceAt(str,guessFieldIndex,dictionary[randomWordIndex][guessFieldIndex])
              //document.write(str);
            }
          }
          
          if(str==dictionary[randomWordIndex])
          	alert("congrats");
        
    }
)();

