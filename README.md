# tms-layout

node --v (14) gulp --v (4)

2️⃣ gulpfile.js should be at the root dir of the project 📍notice: packagge.json should be initialized already, or initialize it at this step when create a new gulp-builded app

3️⃣ adjusted file pathes

4️⃣ in package.json the value of the "main" key is "gulpfile.js", added the keyword-value pair "type": "module", script commands can be added, start script was added

5️⃣ npm i

6️⃣ gulp

7️⃣ прописываем в пакейдж джсоне команду-скрипт для старта, она обычно так и называется start 📍для этого смотрим на ключ scripts в пакейдж джсоне, на пару ключ-значение внутри скриптов, по аналогии с уже существующей строчкой вписываем команду gulp в качестве значения для скрипта start

8️⃣ тестируем запуск проекта при помощи npm start Ожидаемый результат:

запускается локальный сервер
все вводимые изменения автоматически появляются в приложении без перезагрузки страницы
пишем только в сцсс, цсс сам генерится где нужно и картинки копируются куда нужно 😬 внимательно смотрим чтобы к тому моменту когда вы собираетесь писать npm start в dist были папки css и img
