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

taskList.forEach(function(task) {
    const taskHtml = `
    <li>
    <div class="card-task">
        <div class="task-name"><p>Task 5</p></div>
        <div class="pretty p-switch p-fill">
            <input type="checkbox" class="order" value="clickOn" />
            <div class="state">
             <label class="label">Не Выполнена</label>
            </div>
        </div>
        <div class="cardPreview"><p>${task}</p></div>
        <div class="cardBtn">
          <button class="edit">Edit</button> <button class="delete">Delete</button>
         </div>
</div>
</li>`
taskListHtml += taskHtml //=tasklistHtml+taskhtml


})

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


function orderFunction() {
    let Checkclick = document.querySelector('.order')
    console.log(1);
if(this.checked) {

const text = document.querySelector('.cardPreview');
//получаю HTML код объекта 
const htmlText =  text.innerHTML;
//вывожу в консоль 
console.log(htmlText);

//получаю зачеркнутый текст
text.innerHTML = `<s>${htmlText}</s>`
console.log(text.innerHTML);
htmlText == text.innerHTML;

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
else if (!this.checked) {
    htmlText == htmlText  
}

}

    //if(this.value == "clickON") {
      //  console.log(1);
     // const card = document.querySelector('.cardPreview');
      //card.style.color = "white";
    //cardPreview.setAttribute ('style','color:white');
    


