/* 
 *  Andrew Pereira 
 *
 * and open the template in the editor.
 */
            function Clear() {

            document.getElementById("num").value = "";
            document.getElementById("num").focus();
            document.getElementById("result").innerHTML = "";

            }
            
            var btn = document.getElementById("btn");
            var result = document.getElementById("result");
            btn.onclick = function(){ //literal function trigger onclick event 
                var num = document.getElementById("num").value; //read value from textbox 
                var fahrenheit = (num * 9/5) + 32;
                var fahrenheit1 = fahrenheit.toFixed(2);
                result.innerHTML = num + " °C = " + fahrenheit1 + " °F"; //display result in p tag result 
            };
            
            var btn2 = document.getElementById("btn2");
            btn2.onclick = function(){
              var num = document.getElementById("num").value;  
              var celsius = (num - 32) * 5/9;
              var celsius2 = celsius.toFixed(2);
              result.innerHTML = num + " °F = " + celsius2 + " °C";
            };
            
            var btn3 = document.getElementById("btn3");
            btn3.onclick = function(){
              var num = document.getElementById("num").value;  
              var meters = (num / 3.281);
              var meters2 = meters.toFixed(2);
              result.innerHTML = num+ " feet = " + meters2 + " meters";
            };
            var btn4 = document.getElementById("btn4");
            btn4.onclick = function(){
              var num = document.getElementById("num").value;  
              var feet = (num * 3.281);
              var feet2 = feet.toFixed(2);
              result.innerHTML = num + " meters = " + feet2 + " feet";
            };
            
            var btn5 = document.getElementById("btn5");
            btn5.onclick = function(){
                var num = document.getElementById("num").value;
                var centi = num * 2.54;
                var centi2 = centi.toFixed(2);
                result.innerHTML = num + " inches = " + centi2 + " centimeters";
            };
            var btn6 = document.getElementById("btn6");
            btn6.onclick = function(){
                var num = document.getElementById("num").value;
                var inch = (num / 2.54);
                var inch2 = inch.toFixed(2);
                result.innerHTML = num + " centimeters = " + inch2 + " inches";
            };
            
            var btn7 = document.getElementById("btn7");
            btn7.onclick = function(){
                var num = document.getElementById("num").value;
                var kilo = (num / 2.205);
                var kilo2 = kilo.toFixed(2);
                result.innerHTML = num + " pounds = " + kilo2 + " kilograms";
            };
            var btn8 = document.getElementById("btn8");
            btn8.onclick = function(){
                var num = document.getElementById("num").value;
                var pounds = (num * 2.205);
                pounds2 = pounds.toFixed(2);
                result.innerHTML = num + " kilograms = " + pounds2 + " pounds";
            };

