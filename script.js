let products = [
    {href: 'product1.html', text: 'Organic Kitchen Маска-очищение для лица "Вечеринка на Марсе", 100 мл', images: ['b1.jpg','b2.jpg'], price: '157 &#8381', info: 'Ищете новых ощущений? Совершите виртуальный полет по нашей галактике!<br> Примите участие в косметической вечеринке на Марсе!'},
    {href: 'product2.html', text: 'Organic Kitchen Супер-блеск Масло для волос "Блестящие пайетки", 100 мл', images: ['b3.jpg', "b4.jpg"], price:'280 &#8381', info: 'Масло супер-блеск для волос сделает Ваши локоны неотразимыми,<br> словно россыпь блестящих пайеток, они ослепляют окружающих своим сиянием.'},
    {href: 'product3.html', text: 'Organic Kitchen Крем-мусс для укладки волос "Youtube star" by Kikido, 100 мл',images: ['b5.jpg',"b6.jpg"], price: '410 &#8381', info: 'Укладывай, текстурируй, формируй свою прическу как тебе нравится.<br> Крем-мусс для укладки волос "Youtube star" by Kikido воплотит любое настроение.' },
    {href: 'product4.html', text: 'Organic Kitchen ВВ крем-преображение для лица "Photoshop ", 100 мл',images: ['b7.jpg', "b8.jpg"], price: '133  &#8381', info: 'Ваша кожа, как картинка из гламурного журнала – абсолютно совершенна!<br> Крем-преображение, словно фотошоп - маскирует дефекты, заполняет морщинки,<br> стирает следы усталости, придает коже сияющий, здоровый вид.' },
    {href: 'product5.html', text: 'Organic Kitchen Маска-sos для лица "После вечеринки ", 100 мл',images:['b9.jpg','b10.jpg'], price: '141 &#8381', info: 'Утро после бурной вечеринки оставило след на Вашем лице?<br> Маска-SOS интенсивно увлажняет и в кратчайшие сроки возвращает коже свежий и здоровый вид!' },
    {href: 'product6.html', text: 'Organic Kitchen Тонизирующий скраб для тела "Желтая сенсация", 100 мл', images:['b11.jpg','b12.jpg'] , price: '157 &#8381', info: 'Не пропустите эксклюзивную желтую сенсацию! Яркий, бодрящий фреш для Вашей кожи!<br>Тонизирующий скраб бережно отшелушивает, смягчая и разглаживая кожу, придает свежесть и здоровое сияние.'},
    {href: 'product8.html', text: 'Organic Kitchen Маска-восстановление для волос "Радужный орех", 100 мл', images: ['b13.jpg','b14.jpg'], price: '157 &#8381', info: 'Подарите Вашим локонам радужное ореховое пробуждение! Восстанавливающая маска возвращает поврежденным волосам жизненную силу и энергию'},
    {href: 'product10.html', text: 'Organic Kitchen Питательный крем для тела "1.000.000 girl", 100 мл', images: ['b15.jpg','b16.jpg'], price: '157 &#8381', info: 'Выглядеть и чувствовать себя на миллион очень легко.<br>Роскошный крем подарит Вашей коже непревзойденное питание и пленительную красоту!'},
    {href: 'product11.html', text: 'Organic Kitchen Моделирующий крем для тела "90-60-90", 100 мл', images: ['b17.jpg','b18.jpg'], price: '118 &#8381', info: 'Примерьте нежный шлейф из звезд! Крем-духи для тела смягчают и увлажняют кожу, придавая ей интригующе мерцающее сияние.'},
    {href: 'product12.html', text: 'Organic Kitchen Разглаживающее масло для тела "Мимими", 100 мл', images: ['b19.jpg','b20.jpg'], price: '157 &#8381', info: 'Подарите Вашей коже невероятно нежное, «мимишное» преображение! Ваша кожа безупречна и достойна умиления!'},
    {href: 'product13.html', text: 'Organic Kitchen Увлажняющий скраб для тела "100% Богиня", 100 мл', images: ['b21.jpg','b22.jpg'], price: '157 &#8381', info: 'Почувствуйте себя настоящей богиней!<br> Роскошный скраб специально создан для придания Вашей коже безупречной красоты!'},
    {href: 'product14.html', text: 'Organic Kitchen Маска-блеск для волос "Макарена", 100 мл', images: ['b23.jpg','b24.jpg'], price: '157 &#8381', info: 'Задорная Макарена перенесет Вас атмосферу кокетства и флирта,<br> а захватывающая мелодия песни вовлекает в танец!<br>Маска-блеск подарит Вашим волосам кристальное сияние и мягкость. '},
    {href: 'product15.html', text: 'Organic Kitchen Смягчающий крем для тела "Богиня шоппинга", 100 мл', images: ['b25.jpg','b26.jpg'], price: '157 &#8381', info: 'Тонкое чувство стиля присуще только истинной богине шопинга.<br> Поэтому этот удивительный крем создан специально для тебя.'},
    {href: 'product16.html', text: 'Organic Kitchen bloggers Уплотняющая маска для волос «Сиреневый рай», 100 мл', images: ['b27.jpg','b28.jpg'], price: '262 &#8381', info: 'Уплотняющая маска для волос «Сиреневый рай» от артистки @kri_luna Кристина создала уплотняющую маску для волос'},
    {href: 'product17.html', text: 'Organic Kitchen Увлажняющий крем для тела "Must-have", 100 мл', images: ['b29.jpg','b30.jpg'], price: '157 &#8381', info: 'Незаменимое "Must have" средство в Вашей косметичке! '},
    {href: 'product18.html', text: 'Organic Kitchen Очищающий гель для умывания "Face Bestseller", 100 мл', images: ['b31.jpg','b32.jpg'], price: '157 &#8381', info: 'Настоящий культовый бестселлер эффективно удаляет загрязнения и очищает поры.'},
    {href: 'product19.html', text: 'Organic Kitchen Очищающий скраб для тела "Розовая мочалка", 100 мл', images: ['b33.jpg','b34.jpg'], price: '157 &#8381', info: 'Неповторимый и ароматный скраб для тела, как нежная розовая мочалка мягко очищает и обновляет Вашу кожу.'},
    {href: 'product20.html', text: 'Organic Kitchen Полирующий скраб для тела "Нахальная кукуруза", 100 мл', images: ['b35.jpg','b36.jpg'], price: '157 &#8381', info: 'Полирующий скраб подарит Вашей коже роскошное сияние и безупречную гладкость.'},
    {href: 'product21.html', text: 'Organic Kitchen Обновляющий скраб для тела "Банановый беспредел", 100 мл', images: ['b37.jpg','b38.jpg'], price: '157 &#8381', info: 'Устройте полезный банановый беспредел в своей ванной!<br> Нежный скраб деликатно очищает и полирует кожу, придает ей сияние и сладкое благоухание кожи.'},
    {href: 'product7.html', text: 'Organic Kitchen Маска-скраб для лица экспресс-увлажнение, 100 мл', images: ['b39.jpg','b40.jpg'], price: '358 &#8381', info: 'Бактерицидные компоненты широкого спектра монарды подавляют рост и разрушают болезнетворные микробы, грибы, мицеллы и вирусы.<br> Это обеспечивает иммуномоделирующее действие'},
];
 
 function showModal(messageText, buttonText) {
    //alert('Sorry, not ready yet...\nИзвинте, еще не готово...');
    let modal = document.getElementsByClassName('modal')[0];
    modal.style.visibility = 'visible';
    modal.style.opacity = '1';
    modal.style.top = '50px';
    modal.style.left = '47%';
    modal.style.transform = 'scale(01';
    
    
 
 
    let message = modal.getElementsByClassName('message')[0];
    message.innerHTML = messageText;
    let button = modal.getElementsByTagName('button')[0];
    button.innerHTML = buttonText;
 
    document.body.style.overflow = 'hidden';
    let = overlay = document.getElementsByClassName('overlay')[0];
    overlay.style.visibility = 'visible';
    overlay.style.opacity = '1';
    overlay.style.backgroundcolor = 'rgba(0, 100, 200, 0.3)';
 
    return false;
 
 
 }
 function hideModal() {
     let modal = document.getElementsByClassName('modal')[0];
     setTimeout(function(){
         modal.style.visibility = 'hidden'
     }, 350);
     modal.style.opacity = '0';
     modal.style.top = '100%';
     modal.style.transform = 'scale(0)';
 
     document.body.style.overflow = 'auto';
     let = overlay = document.getElementsByClassName('overlay')[0];
     setTimeout(function(){
         overlay.style.visibility = 'hidden';
     }, 200);
     overlay.style.opacity = '0';
     overlay.style.backgroundcolor = 'rgba(255, 0, 0, 0.3)';
 
     
 }
 function notReadyAlert(event) {
     showModal('Sorry, not ready yet!<br>Извинте, еще не готово!', 'Эх, жаль');
     event.preventDefault();
     return false;
     }
 
 function notReadyAlert1() {
     showModal('Звоните, если угадаете)))0))))','Прости, друг');
    return false;
 }
 function notReadyAlert2() {
     showModal('Это наш сайт', 'НеНаСтОяЩиЙ');
    return false;
 }
 function notReadyAlert3() {
     showModal('Хмм... или не прикол', 'Да ладно, не важно, что я там сказал');
    return false;
 }
 
 function search() {
    let cards = document.getElementsByClassName('card');
    let name = document.getElementById('search').value;
    let nameRegExp = new RegExp(name, 'i');
    for (let i = 0; i<products.length; i++) {
       let product = products[i];
       if(nameRegExp.test(product.text)) {
          let card = cards[i];
          card.style.border = '3px dashed red';
          card.style.backgroundcolor = 'yellow';
 
          setTimeout(function(){
             card.style.border = 'none';
             card.style.backgroundcolor = '';
          }, 2000);
          
       }
    }
 }
 function generateMenu() {
    let menu = document.querySelector('nav.main-menu ul');
    menu.innerHTML = '';
    let items = [
       {href: 'index.html', text: 'Товары'},
       {href: 'contacts.html', text: 'Контакты'},
       {href: 'discont.html', text: 'Акции'},
    ];
 
    for(let i = 0; i<items.length; i++){
       let link = document.createElement('a');
       link.innerText = items[i].text;
       link.href = items[i].href;
       if (items[i].href == '') {
          link.addEventListener('click', notReadyAlert);
       }
 
       let menuItem = document.createElement('li');
       menuItem.appendChild(link);
 
       menu.appendChild(menuItem);
    }
 }
 function showProductInfo(product) {
    let imagesList = '';
    for(let i=0; i<product.images.length; i++){
        imagesList = imagesList + `<div><img src="${product.images[i]}"></div>`
    }
        showModal(`Информация о товаре
            ${imagesList}
            <div>${product.text}</div>
            <div>${product.price}</div>
            <div><i>${product.info}</i></div>
            `, 'Спасибо');
        }
        function generateCard() {
            let main = document.querySelector('main');
            for(let i = 0; i<products.length; i++){
               let product = document.createElement('div');
               product.className= 'card';
               product.innerHTML = `
               <a href="#">
                  <div class="image"><img src="${products[i].images[0]}"></div>
                  <div class="product-name">"${products[i].text}"</div>
                  <div class="price" onmouseover="ColorPrice(this)" onmouseout="ColorPrice1(this)">${products[i].price}</div>
                  </a>
                  `;
               product.querySelector('a').addEventListener('click', function(){
                  showProductInfo(products[i]);
               });
         
               main.appendChild(product);
            }
         }
  function loaded() {
     let searchbox = document.getElementById('search');
     searchbox.addEventListener('keydown', function(key){
        if(key.key == 'Enter')
            search();
     });
 
     generateMenu();
     generateCard();
 
  }
  function ColorPrice(text){
     console.log('ПРивет');
     text.style.color = 'brown';
     text.style.fontWeight = 'blood';
  }
  function ColorPrice1(text){
     text.style.color = 'black';
     text.style.fontWeight = 'black';
  }


  