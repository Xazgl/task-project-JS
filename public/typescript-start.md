## шаг 1 установка node js 
`$ node -v`

## шаг 2 инициализация npm пакет (создает package.json)
`$ npm init -y` 

## шаг 3  установка через npm typescript 

`$ npm i -D typescript`

## шаг 4 инициализация tsconfig.json (настройка компиляции typescript)  

`$ npx tsc --init`

## шаг 5 создать задачу (скрипт) в  package.json для запуска typescript в watch режиме 
```json
...
"scripts": {
    "tsc":"tsc --watch"
  },
...
```
 
## шаг 6 запуск команды 

`$ npm run tsc`