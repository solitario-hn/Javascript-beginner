const list=[
    {'task':'maggie',
    'dueDate':'25-08-2021'},
    {'task':'chop garlic',
    'dueDate':'9-09-2024'}
    ];

function enter(event){
    if(event.key==='Enter'){
        add();       
    }
}
function rendertodo(){
    const htmlelement=document.querySelector('.js-todo-list');
    let innertext='';
    for(let i=0;i<list.length;i++){
        const todoObj=list[i];
        // const todoTask=todoObj.task;
        // const todoDate=todoObj["dueDate"];
        const {task,dueDate}=todoObj;
        const html=`
        <div>${task}</div>  
        <div>${dueDate}</div>                  
            <button class="delete-button" onclick="list.splice(${i},1); rendertodo()">  Delete</button>`
        innertext+=html;
    }
    htmlelement.innerHTML=innertext;
}
rendertodo();

function add(){
    let task=document.body.querySelector('.js-task');
    let date=document.querySelector('.js-date');
    const newObj={
        'task':task.value,
        'dueDate':date.value,
    }
    list.push(newObj);
    console.log(list);
    task.value="";
    date.value="";

    rendertodo();
}
