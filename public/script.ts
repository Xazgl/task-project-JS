//@ts-check

function $(selector:string){
    return  document.querySelector(selector)
}

let taskList = [
    'Task 1: Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, asperiores necessitatibus, libero minus adipisci temporibus est consequuntur et obcaecati, excepturi cum! Quidem iste repellat pariatur quo veritatis quae, quas recusandae!',
    'Task 2: Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, asperiores necessitatibus, libero minus adipisci temporibus est consequuntur et obcaecati, excepturi cum! Quidem iste repellat pariatur quo veritatis quae, quas recusandae!',
    'Task 3: Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, asperiores necessitatibus, libero minus adipisci temporibus est consequuntur et obcaecati, excepturi cum! Quidem iste repellat pariatur quo veritatis quae, quas recusandae!',
    'Task 4: Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, asperiores necessitatibus, libero minus adipisci temporibus est consequuntur et obcaecati, excepturi cum! Quidem iste repellat pariatur quo veritatis quae, quas recusandae!',
    'Task 5: Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, asperiores necessitatibus, libero minus adipisci temporibus est consequuntur et obcaecati, excepturi cum! Quidem iste repellat pariatur quo veritatis quae, quas recusandae!',
]

let tasksElement = document.querySelector ('.tasks') as HTMLDivElement
console.log(tasksElement);

/*for (const task  of taskList) {
    console.log(task);
}*/

let taskListHtml = ''

taskList.forEach(function(task, index) {
    const taskHtml = `
    <li class="task-card" name="task-card-${index}">
      <div class="card-task">
      <div class = "task-card_info">
    
          <div class="pretty p-switch p-fill">
            <input type="checkbox" class="order"  data-index="${index}" value="clickOn" />
                <div class="state">
                     <label class="label"></label>
                </div>
          </div>
          
        <div class="cardPreview" data-index="${index}">${task}</div>
        </div>

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

if (tasksElement) {
tasksElement.addEventListener('click',function (event) { 
    if (!event.target) return
    const target= event.target as Element
    const checkInputElem = target.closest<HTMLInputElement>('.order[type=checkbox]');//для нескольких обработчиков 
     //зачеркивание текста на большой экране 
    if (checkInputElem) {
       
        const textElem = checkInputElem.parentElement!.nextElementSibling as HTMLDivElement // вынес выше if для того , что бы на оба блока кинуть 
        if (checkInputElem.checked) {

           textElem.style.textDecoration ='line-through';
        } else {

           textElem.style.textDecoration=''; 
        }
        return
    }
// зачеркивание на маленькое экране 
if (window.matchMedia("(max-width: 400px)").matches)  {
    if(!event.target) return
    const targetElem = event.target as Element
     const taskNameElem = targetElem.closest<HTMLDivElement>('.cardPreview') 
    if (taskNameElem) { 
        toggleCheckbox(taskNameElem)
         }
    }


} /*, { once: true }*/)
}

/*
$(document)ready.(function() { 
    $('.order').click (fucnction (checkInputElem)) {
        if $( '.order' ).prop( "checked", true ) {
        $('.cardPreview' ).css([ "textDecoration,"line-through"]) 
        } else {
        ( '.order' ).prop( "checked", false ) {
        $('.cardPreview' ).css([ "textDecoration,"null"]) 
        }
        
    }



*/


console.log(taskListHtml);
tasksElement.innerHTML = taskListHtml;

// функция для зачеркивания 
function toggleCheckbox(textElem: HTMLDivElement) {

   const  textElement= textElem.previousElementSibling!.firstElementChild as HTMLDivElement
    const checkbox =  textElement as HTMLInputElement
   
    if (textElem.style.textDecoration) {
        textElem.style.textDecoration = ``
        checkbox.checked = false
    } else {
        textElem.style.textDecoration = 'line-through'
        checkbox.checked = true
    }
}


/*
$(document).ready.(function() { 
    $(.'$textElem').is('textDecoration','null') {
        $checkbox.checked(false);
    }else {
      ( ($textElem).is('textDecoration','line-through') )
       $checkbox.checked(true);
  }







function  toggleCheckbox($textElem){

  let checbox = $("document.querySelectorAll ('.order[type=checkbox]')
  if (($textElem).is('textDecoration','null') {
      $checkbox.checked(false);
  } else {
      ( ($textElem).is('textDecoration','line-through') )
       $checkbox.checked(true);
  }

}
}










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
    


*/