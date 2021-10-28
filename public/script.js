

let taskList = [
    'Task 1: Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, asperiores necessitatibus, libero minus adipisci temporibus est consequuntur et obcaecati, excepturi cum! Quidem iste repellat pariatur quo veritatis quae, quas recusandae!',
    'Task 2: Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, asperiores necessitatibus, libero minus adipisci temporibus est consequuntur et obcaecati, excepturi cum! Quidem iste repellat pariatur quo veritatis quae, quas recusandae!',
    'Task 3: Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, asperiores necessitatibus, libero minus adipisci temporibus est consequuntur et obcaecati, excepturi cum! Quidem iste repellat pariatur quo veritatis quae, quas recusandae!',
    'Task 4: Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, asperiores necessitatibus, libero minus adipisci temporibus est consequuntur et obcaecati, excepturi cum! Quidem iste repellat pariatur quo veritatis quae, quas recusandae!',
    'Task 5: Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, asperiores necessitatibus, libero minus adipisci temporibus est consequuntur et obcaecati, excepturi cum! Quidem iste repellat pariatur quo veritatis quae, quas recusandae!',
]

let tasksElement = document.querySelector ('.tasks')
console.log(tasksElement);

/*for (const task  of taskList) {
    console.log(task);
}*/

let taskListHtml = ''

taskList.forEach(function(task, index) {
    const taskHtml = `
    <li class="task-card" name="task-card-${index}">
      <div class="card-task">
      <div class="task-name"><p>Task</p></div>
      <div class = "task-card__info">
        <div class="pretty p-switch p-fill">
            <input type="checkbox" class="order"  data-index="${index}" value="clickOn" />
             <div class="state">
                 <label class="label">Не Выполнена</label>
             </div>
        </div>
       </div> 
       
        <div class="cardPreview" id="$task-name-${index}"><p>${task}</p></div>
        <div class="cardBtn">
          <button class="edit">Edit</button> <button class="delete">Delete</button>
         </div>
</div>
</li>`
taskListHtml += taskHtml //=tasklistHtml+taskhtml
})


// обработчик на li
//tasksElement.onclick= function(event) {
//console.log(event.target);
//}

tasksElement.addEventListener('click',function (event) { 
    const checkInputElem = event.target.closest('.order[type=checkbox]');//для нескольких обработчиков 
    if (checkInputElem) {
        console.log(checkInputElem.dataset.index);
        if (checkInputElem.checked) {
            console.log('checked');
        }else {
            console.log('unchecked');
        }
    }
} /*, { once: true }*/)




console.log(taskListHtml);
tasksElement.innerHTML = taskListHtml;


// получаю объект body
const bodyElement=document.body;
// коллецкция childNodes содержит список всех детей объекта
const childNodes = bodyElement.childNodes;
//console.log(childNodes);
const firstChild = bodyElement.firstElementChild;
//console.log(firstChild);

const elemesOne = document.querySelectorAll('.tasks');
const childElemesOne = elemesOne.childNodes;
console.log(childElemesOne);






//повесил функцию на все чекбоксы
document.querySelectorAll('.order').forEach((element)=>{
    element.onclick = orderFunction;
});

//нажатие зачеркивает 
function orderFunction() {
    let Checkclick = document.querySelectorAll('.order')
    console.log(1);

if(this.checked) {

//Зачеркнутый текст через CSS
const text = document.querySelector('.cardPreview');

text.style.textDecoration='line-through';
const htmlText =  text.innerHTML;

//Зачеркнутый текст через HTML <s>
//text.innerHTML = `<s>${htmlText}</s>`
//console.log(text.innerHTML);
//htmlText == text.innerHTML;

//нахожу label
const label = document.querySelector('.label');
//получаю HTML код объекта 
const htmlLabel =  label.innerHTML;
//вывожу в консоль 
console.log(htmlLabel);

//меняет на  выполнено 
label.innerHTML = `Выполнена`;
console.log (label);
htmlLabel == label.innerHTML;

} 
else   {
//Зачеркнутый текст через CSS
const text = document.querySelector('.cardPreview');

text.style.textDecoration='none';
const htmlText =  text.innerHTML;

//находим label
const label = document.querySelector('.label');
//получаю HTML код объекта 
const htmlLabel =  label.innerHTML;
//вывожу в консоль 
console.log(htmlLabel);

//меняет на  выполнено 
label.innerHTML = `Не выполнена`;
console.log (label);
htmlLabel == label.innerHTML;

}
}

    //if(this.value == "clickON") {
      //  console.log(1);
     // const card = document.querySelector('.cardPreview');
      //card.style.color = "white";
    //cardPreview.setAttribute ('style','color:white');
    


