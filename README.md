## https://recipe-app-swart-six.vercel.app/  recipe-app 
## ЛИМИТ API Не бесконечный, если вы увидите ErrorPage Вместо данных просто откройте app на следущий день =)
## Данный проэкт создавался только в целях обучения!

# stack: 
- [base] ***React***
- [routing] ***React-router*** 
- [state managment] ***Redux-toolkit (RTK query+)*** 
- [compiler] ***es-build(VITE)***
- [typing] ***TypeScript***
- [auth-service] ***Firebase***
- [CSS preproc] ***SASS*** + styles.modules
- [API] ***https://spoonacular.com/food-api***
- [another libr] Classnames, generate-react-cli, react-icons, react-loader-spinner, country-flag-icons 

# Цели проекта: 
1. Прежде всего хотелось изучить работу RTK query и специфику обработки всех данных на backend с последующим получением на клиент.
Иначе говоря как можно больше логики нужно было перенести на back, и при помощи запросов получать необходимфе данные. 
- **Что из этого получилось?** Используемое API дает нам возможности:
  1. Получать случайные рецепты в нужном колличестве: На основе этого запроса реализован query: getRandom() - данные в слайдере на главной странице.
  2. Получать рецепты отфильтрованные по странам: Реальзовал getByCountryName(name) name брал из хука useParams() и передавал в query запрос, 
  в соответствии на странице какой страны мы находимся, получаем нужные данные.
  3. Получать данные на освове введенного значения: getBySearchValue(name) где name передается значение контролируемого input, запрос проиходит только при submit,
  таким способом реализован поиск
  4. Получать данные по id: getById(id) id так же назначена на динамический путь React-router'a и по итогу мы получаем нужную странницу и из хука useParams() 
  берем  этот id и передаем в наш query запрос, по итогу получаем информацию о конкретном рецепте, так реальзованна страница RepiceDetails
  5. Получить  данные по diet рецепта: getByDiet(name), здесь все просто, передаю в name 'захаркоженные' Данные с нужным типом диеты, и вывожу их на соответствующих
  страницах.
- **Что не получилось?** К сожалению способов проверить метод ***mutation*** (это методы POST и DELETE к примеру) не было, так как API не позваляет
 ( **p.s** Для изучения мутации данных на сервере практиковался с JSON.server и локально игрался с данными, добавлял, удалял. Есть свои моменты, в частности что нужно
  кроме как поменять данные на сервере, еще нужно обновить их на клиенте, для этого есть специальная функция с указаниями что и когда вернуть. По сути не сложно.) 
  Так же логику добавления и удаления в избранное пришлось пилить по старинке, создал favoriteSlice в Redux-toolkit. createAsynkThank'ом получал конкретный рецепт по     ID (выше метод описан) и потом в extraReducers по fulfilled thunk'a добавлял все необходимое в store. Ну и обычных reducers: создал action deleteFavorite()
  c помощью которого фильтровал state и перезаписывал, ну и менял сount. 

2. Так же хотелось по изучать работу с VITE и его es-build под капотом, ибо настрока компилятора es-build руками не проще wtbpack'а, интересно конечно изучить это но пока есть темы важнее, и поэтому VITE как компромис. Сам сборщик очень понравился, работает шустро, есть встроенная возможность поглядеь deploy версию проекта на локальном сервере, что очень удобно. По сути единственной траблой явилось то, что на gh-pages так и не смог задеплоить этот проект, потратил пару часов, гайдом много в интернетах, попробовав 3 разных способа так и не добился результата, все деплоилось но по ссылке была пустая страцица, хотя и base: в vite.config добавлен, и Actions создавал и он успешно выполнялся, и даже через библиотеку gh-pages было по итогу все также - пустая страница с ошибками о том что он не видет файлы css и js хотя физически они есть! И находятся на нужной вложенности, как вышел из ситуации? Разобрался за 5 минут как деплоить на ***Vercel*** И благополучно задеплоил.

3. Добавил валидацию форм. Все таки добил я **react-hook-form** если в прошлом проекте пришлось писать хуки для кастомной валидации, ибо не получалось кастомные Input 
валидировать react-hook-form'ом. Разобрал всю документацию, и при помощи встроенного компанента ***Controler*** все таки настроил полностью валидацию на стороне клиента! Итак, получил на выходе, проверка поля email по регулярному вырожению, проврка пароля на колличество символов, disabled кнопки при наличии ошибок, ну и required поля понятное дело. Получилось красиво но еще есть над чем работать, в документации куча примеров да и есть пара мыслишек потестить кастомные патерны для валидации сложных форм, ну и со сторонними библиотеками, на вроде react-select или даже с формами MUI и ChakraUI. На стороне сервера firebase так же позволяет catch'ить обишки при запросе на сервер, и потому на несуществуещего пользователя так же сделан вывод информации о том что пользователь не найден.

4. Сделал responsive-adaptive, добавил mobile-menu. Элементы прятал в menu постепенно. 

***Вывод:***
- В основном цели, поставленные на проэкт, выполнены, в дальнейшем хотелось бы еще больше по практиковаться с RTK Query ну и c ReactQuery который я тоже начал изучать, так же в дальнейшем я буду старатся по чаще использовать VITE чтобы найти как можно больше "Подводных камней" и изучить способы их победить. Очень подробно ознакомился с документацией react-hook-form, прогресс не плохой, но нужно поработать с интеграцией со сторонними библиотеками ну и формы по сложнее по валидировать. 
- Как и все проекты до этого, этот я не буду забрасывать, проект будет допиливатся согласно TODO снизу, оставшиеся фичи уже мною делались не однакратно, потому проблем быть не должно, кратко опишу все дополнения по мере их поступления. 

TODO:
1. ~~Валидация форм на стороне клиента~~ **RDY**
2. Добавить анимации
3. ~~Adaptive~~ **RDY**
4. Accessability


#p.s p.s Орфография может страдать =)
