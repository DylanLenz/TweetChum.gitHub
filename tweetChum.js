var input = prompt("Type input:");
    if (input.length <= 140){
        console.log(input);
      }else{
          var x = input.length;
          var a = 0;
          var b = 134;
          var num = 1;
        while (x > 137){
          console.log(num + ". " + input.slice(a,b) + "...");
          a = a + 134;
          b = b + 134;
          num++;
          x = x - 134;
        }
        if (x <= 137){
          b = input.length;
          console.log(num + ". " + input.slice(a,b));
          }
        }
