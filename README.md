# Owl Notify (ON) v1.0.0
Простейшее окно уведомления вызывающееся по событию на js. Основано на jQuery и требует обязательное подключение этой библиотеки. Не требует подключения css файлов, весь внешний вид прописан через js.

Представляется из себя прямоугольный элемент с текстом выплывающий из верхней части документа и пропадающий по таймауту.

Принимает в себя 2 параметра такие как:
* Текст сообщения 
* JSON с настройками (необязательный параметр)

### Настройки (config)
Настройки не обязательны.
* timeout - время показа уведомления (по умолчанию 5000мс)
* backgroundColor - цвет фона уведомления (по умолчанию #ffffff)
* fontColor - цвет текста сообщения (по умолчанию #000000)

### Методы
* OwlNotify.setConfig(config) - дает возможность указать общие настройки для всех уведомлений, которые могут быть вызваны
* show.setConfig(message,config) - Вызов уведомления, первый параметр - сообщение уведомления, второй опциональный - конфиг для конкретного уведомления
* 
### Переменные
* config - json
* message - string

### Пример
```$(document).ready(function(){
  $('button').on('click',function(){
    OwlNotify.setConfig({timeout:2000,});
    OwlNotify.show('Notify 1',{
      'backgroundColor':'rgb(241, 207, 239)'
    });
    setTimeout(function(){
      OwlNotify.show('Notify 2',{timeout:5000});
    },2200);
  });
});```
