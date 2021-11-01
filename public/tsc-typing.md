```ts
//создание переменной 
let a: number

a = 1 

const str:string = `hello`
//Преобрахование элементов
//previousElementSibling! имеет по умолчаню значие Element | null 
const statusElem =  const  textElement= textElem.previousElementSibling!.firstElementChild as HTMLDivElement
// или так 
const statusElem = <HTMLDivElement>checbox.nextElementSibling

//типизация параметров функции 
function toggleCheckbox(textElem: HTMLDivElement) {}

```

