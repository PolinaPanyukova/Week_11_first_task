# Week_11_first_task

Задание: Создание простого ToDo List

Ваша задача - создать простой ToDo List (список задач) с использованием HTML, CSS и JavaScript. Вам необходимо создать интерфейс, который позволит пользователям добавлять задачи и отмечать их выполнение.

Шаги для выполнения задания:

Создайте HTML-разметку, включающую следующие элементы:
Заголовок страницы "ToDo List"
Поле ввода для добавления новых задач
Кнопку "Добавить" для добавления задачи в список
Список (<ul>) для отображения задач
Каждая задача должна быть представлена в виде элемента списка (<li>)
Добавьте необходимые атрибуты и идентификаторы для элементов, с которыми вы будете взаимодействовать с помощью JavaScript
Создайте CSS-стили для страницы
Используя JavaScript, реализуйте следующую функциональность:
Напишите функцию, которая будет вызываться при клике на кнопку "Добавить". Функция должна получать значение из поля ввода и добавлять новую задачу в список.
Напишите функцию, которая будет вызываться при клике на задачу в списке. Функция должна отмечать задачу как выполненную путём изменения её класса.


Алгоритм действий
Находим необходимые элементы DOM и записываем в переменные
Создаем функцию createTask(). Внутри функции:
Создаем новый элемент списка с помощью метода (createElement)
Присваиваем текст из поля ввода в качестве содержимого новой задачи (textContent)
Добавляем новую задачу в список с помощью метода (append)
Очищаем поле ввода
Создаем функцию checkTask(). Внутри функции:
Проверяем, что кликнули на элемент списка (event.target)
Если условие выполняется, то переключаем состояние выполнения задачи, добавляя или удаляя класс у элемента списка (element.classList.toggle)
Добавляем функцию-обработчик к событию клика на кнопку (addEventListener)
Добавляем функцию-обработчик к событию клика на список задач (addEventListener)
     4.Протестируйте ваш ToDo List, добавляя задачи и отмечая их выполнение. Убедитесь, что все функции работают корректно.