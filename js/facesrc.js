// facesrc.js

function preview(file)  
{  
    var prevDiv = document.getElementById('preview');  
    if (file.files && file.files[0])  
    {  
        var reader = new FileReader();  
        reader.onload = function(evt){  
        prevDiv.innerHTML = '<img class="image" src="' + evt.target.result + '" />';  
        }    
        reader.readAsDataURL(file.files[0]);  
    }  
    else    
    {  
        prevDiv.innerHTML = '<div class="div_img" style="filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale,src=\'' + file.value + '\'"></div>';  
    }  
} 