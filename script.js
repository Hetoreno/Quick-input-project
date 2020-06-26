document.getElementById(`newName`).onclick= function(){
    var name = document.getElementById(`userName`).value;
    
    document.getElementById(`box`).style.backgroundColor= `white`;
    document.getElementById(`newInput`).innerHTML = `Hello ` + name + `</br>` + `Welcome :D`;
    
    document.getElementById(`remove`).innerHTML=`Thank you for your submission`;
    
    document.getElementById(`newName`).style.display= `none`;
    document.getElementById(`userName`).style.display=`none`;
}