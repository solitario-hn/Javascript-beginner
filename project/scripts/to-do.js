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
    list.forEach((todoObj,index)=>{
        const {task,dueDate}=todoObj;
        const html=`
        <div>${task}</div>  
        <div>${dueDate}</div>                  
            <button class="delete-button js-delete-button">Delete</button>`
        innertext+=html;
    });
    htmlelement.innerHTML=innertext;
    document.querySelectorAll('.js-delete-button').forEach((deleteButton,index)=>{
        deleteButton.addEventListener('click',()=>{
        list.splice(index,1); 
        rendertodo();
    })}); //forAll selects all the html tags with the query and puts them in an array so we used forEach array and wrote this after html.innerhtml because before that no delete button was added and it would have showed an error.
};

    //for(let i=0;i<list.length;i++){
        //const todoObj=list[i];
        // const todoTask=todoObj.task;
        // const todoDate=todoObj["dueDate"];
        //const {task,dueDate}=todoObj;
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

document.querySelector('.js-add-button').addEventListener('click',add);

document.querySelector('.js-task').addEventListener('keydown',(event)=>{
    if(event.key==='Enter'){
        add();
    }  //example to use when cursor is in input box and you press enter add is called , same as the add box onkeydown enter calls the enter function.
})