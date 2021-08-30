const inp = document.querySelector('input');
const btn = document.getElementById('add');
const list = document.getElementById('list');

btn.addEventListener('click',()=>{

    const li = document.createElement('li');
    const div = document.createElement('div');
    li.appendChild(div);
    div.setAttribute("class","div");
    li.setAttribute("class","list-items");

    const divText = document.createElement('div');
    div.appendChild(divText)

    const work = inp.value;
     inp.value ="";
     divText.innerHTML= work;
     divText.setAttribute("class","divText")


    const divBtn = document.createElement('div');
    div.appendChild(divBtn);
    divBtn.setAttribute("class","divBtn");

    const del = document.createElement('button');
    del.innerHTML = '<i class="fas fa-trash-alt"></i>';
    divBtn.appendChild(del);
    del.setAttribute("class","funcBtn");

    
    const edit = document.createElement('button');
    edit.innerHTML = '<i class="fas fa-pen-square"></i>';
    divBtn.appendChild(edit);
    edit.setAttribute("class","funcBtn");

    const moveUp = document.createElement('button');
    moveUp.innerHTML = '<i class="fas fa-sort-up"></i>';
    divBtn.appendChild(moveUp);
    moveUp.setAttribute("class","funcBtn");

    const moveDown= document.createElement('button');
    moveDown.innerHTML = '<i class="fas fa-sort-down"></i>';
    divBtn.appendChild(moveDown);
    moveDown.setAttribute("class","funcBtn");

    
    

    list.append(li);
    
    del.addEventListener('click',()=>{
       
        li.remove();
      })

    edit.addEventListener('click',()=>{

        const editText = document.createElement('input');
        editText.value = divText.innerHTML;
        divText.innerHTML="";
        divText.appendChild(editText);
        editText.setAttribute("class","editTask");
        editText.focus();
        
        editText.addEventListener('keypress',(e)=>{

            if(e.which==13){
                divText.innerHTML = editText.value;
               
            }
        })

    })

    moveUp.addEventListener('click',()=>{

    if ( li=== list.firstChild)
       list.append(li);
    else
        list.insertBefore(li,li.previousSibling);
    })

    moveDown.addEventListener('click',()=>{

        if(li=== list.lastChild){
           list.insertBefore(li,list.firstChild)
        }
        else{

            list.insertBefore(li,li.nextSibling.nextSibling);
        }
    })
    
   
})