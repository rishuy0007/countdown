
const inputs = document.querySelectorAll("input");

const date = new Date();
const tarik = date.toDateString();
const time = date.toLocaleTimeString();

document.querySelector(".title-date").innerHTML = `${tarik} ${time}`;

document.querySelector(".startbtn").addEventListener("click" ,()=>{ setInterval(
    function clock(){

        if( inputs[3].value<=0)
        {
            return;
        }
    
        inputs[3].value--;
    
       if(inputs[3].value == 0)
       {
           if(inputs[2].value==0)
           {
               if(inputs[1].value==0)
               {

                  if(inputs[0].value==0)
                  {
                      return;

                  }
                else{
                        inputs[1].value = 24;
                    }

                    inputs[0].value--;

                }
                else{
                    inputs[2].value = 60;
                    inputs[3].value = 60;
                }
    
                inputs[1].value--;
            }
            else
            {
                inputs[3].value = 60;
                
            }
    
            inputs[2].value--;
        }
        
        
    
    }
    , 1000)});









