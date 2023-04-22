
var redosled=[true,true,true];


function sortirajTabelu(n)
{
	var tabela=document.getElementById("Tabela");
	var redovi=tabela.rows; 
	var brRedova=redovi.length;  
	if(redosled[n]==true)  
	{
        for(var i=1;i<brRedova-1;i++)
	             for(var j=i+1;j<brRedova;j++)
		        {
		           if(n==0)   
		            {	 
                        
                       if(parseInt(redovi[i].cells[0].innerHTML)>parseInt(redovi[j].cells[0].innerHTML))
			            {
                            
                            var pom=redovi[i].innerHTML;
                            redovi[i].innerHTML=redovi[j].innerHTML;
                            redovi[j].innerHTML=pom;
			            }
		            }
		            else   
		            {
                        
			            if(redovi[i].cells[n].innerHTML>redovi[j].cells[n].innerHTML)
			            {
                            
                            var pom=redovi[i].innerHTML;
                            redovi[i].innerHTML=redovi[j].innerHTML;
                            redovi[j].innerHTML=pom;
                        }
		             }
                     
		            redosled[n]=false;
		        }
	}	
    
	else 
	{
	    for(var i=1;i<brRedova-1;i++)
	        for(var j=i+1;j<brRedova;j++)
	        {
		        if(n==0)  
		        {	
                    if(parseInt(redovi[i].cells[0].innerHTML)<parseInt(redovi[j].cells[0].innerHTML))
		            {
                        var pom=redovi[i].innerHTML;
                        redovi[i].innerHTML=redovi[j].innerHTML;
                        redovi[j].innerHTML=pom;
			        }
		        }          
                else  
			    {
				    if(redovi[i].cells[n].innerHTML<redovi[j].cells[n].innerHTML)
				    {
                        var pom=redovi[i].innerHTML;
                        redovi[i].innerHTML=redovi[j].innerHTML;
                        redovi[j].innerHTML=pom;
				    }					
			    }
                redosled[n]=true; 
		    }			
	}	
}
