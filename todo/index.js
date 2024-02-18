const item=document.querySelector("#item");
const toDoBox=document.querySelector(".to-do-box");

item.addEventListener('keyup',function(event){
    if(event.key==="Enter"){
    todo(this.value);
    this.value=""
    }
})
const todo=(item)=>{
    const itemListener=document.createElement("li");
    itemListener.innerHTML=`${item} 
    <i class="fa-solid fa-xmark" onclick =' removeItem(this)'></i>`;
    toDoBox.appendChild(itemListener)
}
function removeItem(elmt){
const itemList=elmt.parentElement;
toDoBox.removeChild(itemList)
}