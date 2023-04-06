
let listItem=document.createElement("option");
let itemText=document.createTextNode("content");
listItem.appendChild(itemText);

document.getElementById("componentId").append(listItem);



function addComponent(){
    let listItem=document.createElement("option");
    let itemText=document.createTextNode(document.getElementById("addId").value);
    listItem.appendChild(itemText);

    document.getElementById("componentId").append(listItem);

    let component=document.getElementById("component").value;
    let componentId=document.getElementById("componentId").value;

    switch(component){
        case "Div":
            document.getElementById(componentId).append(addDiv());
            break;
    }
}
function addDiv(){
    var bgColor=document.getElementById("Color").value;
    var textColor=document.getElementById("textColor").value;
    var Text=document.getElementById("Text").value;
    var addClass=document.getElementById("addClass").value;
    var addId=document.getElementById("addId").value;
    
    // var div="<div id='"+addId+"' class='bg-"+bgColor+" "+addClass+" text-"+textColor+"'>"+Text+"</div>";

    var div=document.createElement("div");
    div.setAttribute("id", addId);
    div.setAttribute("class", `${addClass} text-${textColor} bg-${bgColor}`);
    div.textContent=Text;

    
    return div;
}





function select(){
    var component=document.getElementById("component").value;

    if(component=="Button"){
        selectButtonShow();
    }
    else{
        selectButtonHide();
    }
}

function selectButtonHide(){
    document.getElementById("btnSize").style.display="none";
}
function selectButtonShow(){
    document.getElementById("btnSize").style.display="block";
}