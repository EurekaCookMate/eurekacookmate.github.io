$ ( document ).ready(function(){
  
  
  $("#buttonClick").click(function() {
    
     
     
        
     
     
       var cups = $('#Cups').val();
       var ml = $('#Ml').val();
    
    
    
    
      var num1 = parseFloat(ml);
      var num2 = parseFloat(cups);
      var num3 = 0;
      
      var cupsInactive = false;
      var mlInactive = false;
      
      
      if(cups.length == 0){
          cupsInactive = true;
          
          
      }
      
      if(ml.length == 0){
          mlInactive = true;
          
          
      }
      
      if(mlInactive == true && cupsInactive == true){
          alert("Please enter a number!");
      }
      
      if(mlInactive == false && cupsInactive == false){
          alert("Please only enter one number!");
         
         
         
         }
      
       else if(mlInactive == false && cupsInactive == true){
           num3 = num1 / 250;
           $('#Cups').val(num3);
           
           
       }
      
      
      else if(mlInactive == true && cupsInactive == false){
           num3 = num2 * 250;
           $('#Ml').val(num3);
           
           
       }
      
    
   
    
    
    
  

    
    
  });
    
    
    
  $("#clear").click(function() {
       $('#cups').val("");
       $('#ml').val("");
       $("#tbsp").val("");
       $("#tsp").val("");
       $('#grams').val("");
       $('#pounds').val("");
       
    
       
       
      
      
      
      
  });
    
    $("#buttonClick2").click(function() {
    
     
     
        
     
     
       var tsp = $('#tsp').val();
       var tbsp = $('#tbsp').val();
    
    
    
    
      var num1 = parseFloat(tsp);
      var num2 = parseFloat(tbsp);
      var num3 = 0;
      
      var tspInactive = false;
      var tbspInactive = false;
      
      
      if(tsp.length == 0){
          tspInactive = true;
          
          
      }
      
      if(tbsp.length == 0){
          tbspInactive = true;
          
          
      }
      
      if(tspInactive == true && tbspInactive == true){
          alert("Please enter a number!");
      }
      
      if(tspInactive == false && tbspInactive == false){
          alert("Please only enter one number!");
         
         
         
         }
      
       else if(tspInactive == false && tbspInactive == true){
           num3 = num1 / 3;
           $('#tbsp').val(num3);
           
           
       }
      
      
      else if(tspInactive == true && tbspInactive == false){
           num3 = num2 * 3;
           $('#tsp').val(num3);
           
           
       }
      
    
   
    
    
    
  

    
    
  });
    $("#buttonClick3").click(function() {
    
     
     
        
     
     
       var grams = $('#grams').val();
       var pounds = $('#pounds').val();
    
    
    
    
      var num1 = parseFloat(grams);
      var num2 = parseFloat(pounds);
      var num3 = 0;
      
      var gramsInactive = false;
      var poundsInactive = false;
      
      
      if(grams.length == 0){
          gramsInactive = true;
          
          
      }
      
      if(pounds.length == 0){
          poundsInactive = true;
          
          
      }
      
      if(gramsInactive == true && poundsInactive == true){
          alert("Please enter a number!");
      }
      
      if(gramsInactive == false && poundsInactive == false){
          alert("Please only enter one number!");
         
         
         
         }
      
       else if(gramsInactive == false && poundsInactive == true){
           num3 = num1 / 454;
           $('#pounds').val(num3);
           
           
       }
      
      
      else if(gramsInactive == true && poundsInactive == false){
           num3 = num2 * 454;
           $('#grams').val(num3);
           
           
       }
      
    
   
    
    
    
  

    
    
  });
    
    
    
    
    
  
});
   
                              
   

});
   
   
 
    
