//used to delet new delete in the added version of todo app 
//by using event bubling we can solve this 
//this is complex one understand carefully
let btn=document.querySelector("button");
let ul=document.querySelector("ul");
let inp=document.querySelector("input");

btn.addEventListener("click",function(){
    let item=document.createElement("li");
    item.innerText=inp.value; 


    let delbtn=document.createElement("button");
    delbtn.innerText="delete";
    delbtn.classList.add("delete");

    item.appendChild(delbtn);
    ul.appendChild(item);
    inp.value="";
}); 
ul.addEventListener("click",function(event){
    //using event bubling
    console.dir(event.target.nodeName); 
    //here we can see target node  
    if(event.target.nodeName=="BUTTON"){
                let listItem=event.target.parentElement;
                listItem.remove();
    }
    console.log("clicked now");

});

