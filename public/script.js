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
             <label>Выполнена</label>
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

//повесил функцию на все чекбоксы
document.querySelectorAll('.order').forEach((element)=>{
    element.onclick = orderFunction;
});

function orderFunction() {
    let Checkclick = document.querySelector('.order')
    console.log(1)
    if(this.value == "clickON") {
        onlick="this.style.display='none' "

    }
}