function checkname(){
  n=document.getElementById('name').value;
   pattern_name=/^([A-Z]|[a-z]){3,27}[ ][a-z]{3,27}[ ]*[a-z]{3,27}$/;
if(pattern_name.test(n)==true)
   {
   document.getElementById('checkname').innerHTML="<img src='true-icon.gif' id='true' name='true' />";
   }
else{
   document.getElementById('checkname').innerHTML="<img src='false-icon.gif' name='false' id='false'/>";
   }
   
          }


function checkemail(){
       e=document.getElementById('email').value;
       pattern_email=/^[a-z]{2,25}([0-9]*|([_][a-z]{2,25}[0-9]*))[@]([y][a][h][o][o]|[g][m][a][i][l])[.][c][o][m]$/;
   if(pattern_email.test(e)==true)
       {
   document.getElementById('checkemail').innerHTML="<img src='true-icon.gif' id='true' name='true' />";
   }
else{
   document.getElementById('checkemail').innerHTML="<img src='false-icon.gif' id='false' name='false' />";
   }
           }
function checkphone(){
       p=document.getElementById('phone').value;
       pattern_phone=/^[0][1]([0-2]|[5])[0-9]{8}$/;
       if(pattern_phone.test(p)==true)
           {
           document.getElementById('checkphone').innerHTML="<img src='true-icon.gif' id='true' name='true' />";
           }
      else{
           document.getElementById('checkphone').innerHTML="<img src='false-icon.gif' id='false' name='false' />";
           }
       }

function checkaddress(){
           a=document.getElementById('address').value;
           pattern_address=/^([0-9]+|[a-z]{2,20})([.]|[ ]|[_]|[,])([a-z]{2,20}([ ]|[.]|[_]|[,]))*[a-z]{2,20}$/;
           if(pattern_address.test(a)==true)
           {
           document.getElementById('checkaddress').innerHTML="<img src='true-icon.gif' id='true' name='true'/>";
           }
      else{
           document.getElementById('checkaddress').innerHTML="<img src='false-icon.gif' id='false' name='false' />";
           }
       }

function checkcity(){
           c=document.getElementById('city').value;
           pattern_city=/^([A-Z]|[a-z])[a-z]{1,6}([ ]|[_])*[a-z]*$/;
           if(pattern_city.test(c)==true)
           {
           document.getElementById('checkcity').innerHTML="<img src='true-icon.gif' name='true' id='true'/>";
           }
      else{
           document.getElementById('checkcity').innerHTML="<img src='false-icon.gif' id='false' name='false' />";
           }
   }

function checkzip(){
           z=document.getElementById('zip').value;
           pattern_zip=/^[0-9]{5}$/;
           if(pattern_zip.test(z)==true)
           {
           document.getElementById('checkzip').innerHTML="<img src='true-icon.gif' name='true' id='true'/>";
           }
      else{
           document.getElementById('checkzip').innerHTML="<img src='false-icon.gif' id='false' name='false' />";
           }
   }