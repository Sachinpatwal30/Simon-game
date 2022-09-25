
var buttonColors=["red","blue","green","yellow"];
var gamePattern=[];
var userClickedPattern=[];
var gameLevel=1; 
var started=false;

function startOver()
{
    started=false;
    gameLevel=1;
    gamePattern=[];
}


function checkAnswer(index)
{
   

    if(gamePattern[index]===userClickedPattern[index]){


    if(gamePattern.length===userClickedPattern.length)
    {
        setTimeout(function () {
            nextSequence();
          }, 1000);
  
    }

  
    $("#level-title").text("LEVEL:"+gamePattern.length);


    }else
    {   
        playSound("wrong");
       
        $("body").addClass("game-over");

        setTimeout(function(){
            
            $("body").removeClass("game-over");

        },200);
        $("#level-title").text("Game Over, Press Any Key to Restart");

        startOver();

       
    }
    
    

}

function nextSequence()
{  

     userClickedPattern=[];
    var randomNumber=Math.floor(Math.random()*4);
    var randomChosenColor= buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);   
  


  // $("#"+randomChosenColor).fadeOut(100).fadeIn(100);   //for Animation on Click
     playSound(randomChosenColor);   
     animatePress(randomChosenColor);

}

$(".btn").on("click",function(){
     
    var userChosenColor=$(this).attr("id");
    userClickedPattern.push(userChosenColor);
   

    animatePress(userChosenColor);
    playSound(userChosenColor); 
  
    checkAnswer(userClickedPattern.length-1);    
    

})


   


    $(document).on("keypress",function(){


        if(!started)
        {

            $("#level-title").text("LEVEL:"+gameLevel);
            started=true;
          
          
            nextSequence();

           
        
        }

        
    })
    
    


























function playSound(color)
{  
    
   
    var audio= new Audio("sounds/"+color+".mp3");
     audio.play();

}

function animatePress(currentColor)
{
    $("."+currentColor).addClass("pressed");

    setTimeout(function(){


         $("."+currentColor).removeClass("pressed");

    },100)
}


