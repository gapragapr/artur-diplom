// работа с якорями, перемещение к форме отравки данных
const anchors = Array.from(document.querySelectorAll('.anchor-button'));
const anchorEnd = document.querySelector('footer');

for (let anchor of anchors){
    anchor.addEventListener('click', () => {
        anchorEnd.scrollIntoView({
            behavior: "smooth",
            block: 'start'
        })
    })
}

//слайдер контента

const sectionBtns = Array.from(document.querySelectorAll('.section-button'));
const sectionContent = document.querySelector('#cardWithSlider').lastElementChild;
const sectionLayerWithImg = document.querySelector('#cardWithSlider').firstElementChild;
sectionContent.style.transition = 'all 0.5s'
sectionLayerWithImg.style.transition = 'all 0.5s'
console.log(sectionLayerWithImg)

sectionBtns.forEach(item => {
    item.addEventListener('click', () => {
        document.querySelector('.section-button__active').classList.remove('section-button__active');
        item.classList.add('section-button__active');
        sectionContent.style.opacity = 0
        sectionLayerWithImg.style.opacity = 0
        
        setTimeout(() => {
            switch(item.dataset.id){
                case 'buy':
                    sectionContent.innerHTML = `
                        <div class="layer-block">
                            <p class="card-title">Гарантия выкупа
                            </p>
                            <p class="card-content">Гарантированный выкуп электроэнергии государством - прописано в НКРЕ №447 </p>
                        </div>
                        <div class="layer-block">
                            <p class="card-title">Долгосрочно
                            </p>
                            <p class="card-content">это проект, поддерживаемый международными инвестиционными организациями</p>
                        </div>
                        <div class="layer-block">
                            <p class="card-title">Вид вложения
                            </p>
                            <p class="card-content">Альтернатива банковским депозитам, окупаемость - от 16% до 18% годовых</p>
                        </div>
                        <div class="layer-block">
                            <p class="card-title">Высокая ставка
                            </p>
                            <p class="card-content">Самая высокая тарифная ставка в европе - 0,16 евро</p>
                        </div>
                    `;
                    sectionLayerWithImg.innerHTML = `
                        <div class="card-layer_column">
                            <img src="./img/Rectangle 9.jpg" alt="">
                        </div>
                        <div class="card-layer_column">
                            <p class="card-content">Цена, по которой домохозяйства могут продать электроэнергию, более чем в 10 раз превышает цену, по которой они ее покупают для своих нужд — 0,16 Евро/кВт (продажа).</p>
                        </div>
                    `;
                    
                    break;
                case 'connection':
                    sectionContent.innerHTML = `
                        <div class="layer-block">
                            <p class="card-title">Крыша
                            </p>
                            <p class="card-content">Закрепление солнечных батарей на крыше – очевидное, но не всегда лучшее решение для частного дома.</p>
                        </div>
                        <div class="layer-block">
                            <p class="card-title">Стены
                            </p>
                            <p class="card-content">Если стена «смотрит» на юг – она отлично подходит для размещения на ней солнечных батарей.</p>
                        </div>
                        <div style="width: 100%" class="layer-block">
                            <p class="card-title">Свободное размещение
                            </p>
                            <p class="card-content">Самый эффективный вариант размещения солнечных батарей, но требует свободной площади во дворе.</p>
                        </div>
                    `;
                    sectionLayerWithImg.innerHTML = `
                        <div class="card-layer_column">
                            <img src="./img/panel2.jpg" alt="">
                        </div>
                        <div class="card-layer_column">
                            <p class="card-content">Средний срок окупаемости комплекса панелей ~ 5 лет. Срок службы самих панелей - около 20-25 лет, однако менять в них батареи придется гораздо чаще, раз в 5-7 лет.</p>
                        </div>
                    `;
                    break;
                case 'alarms':
                    sectionContent.innerHTML = `
                        <div class="layer-block">
                            <p class="card-title">Отсутсвие затемнения
                            </p>
                            <p class="card-content">Панели необходимо монтировать так, чтобы на них не падала тень от посторонних предметов и конструкций.</p>
                        </div>
                        <div class="layer-block">
                            <p class="card-title">Простота в обслуживании
                            </p>
                            <p class="card-content">Необходимо обеспечить свободный доступ к любой панели комплекса.</p>
                        </div>
                        <div style="width: 100%" class="layer-block">
                            <p class="card-title">Площадь
                            </p>
                            <p class="card-content">Необходимо много места для размещение технического оснащения комплекса, иначе эта затея будет попросту не выгодна.</p>
                        </div>
                    `;
                    sectionLayerWithImg.innerHTML = `
                        <div class="card-layer_column">
                            <img src="./img/panel.jpg" alt="">
                        </div>
                        <div class="card-layer_column">
                            <p class="card-content">Идея установки солнечных панелей на своём участке предъявляет высокие требования, как к самому участку, так и к бюджету инициатора. Участок должен быть большим, открытым, без лишних построек в предполагаемой области установки панелей, так же играет роль наклон земли на участке, его расположение относительно сторон света. На закупку необходимого оборудование может уйти около 3-х миллионов рублей.</p>
                        </div>
                    `;
                    break;
            }
        }, 500)

        setTimeout(() => {
            sectionContent.style.opacity = 1
            sectionLayerWithImg.style.opacity = 1
        }, 500)

    })
})

//слайдер клиентов

const slider = document.querySelector('.slider');
const arrows = document.querySelectorAll('.slider-arrow');

arrows.forEach(item => {
    item.addEventListener('click', () => {
        if (item.classList.contains('right-arrow')){
            slider.scrollBy({
                left: slider.offsetWidth,
                behavior: "smooth"
            })
        } else if (item.classList.contains('left-arrow')) {
            slider.scrollBy({
                left: -slider.offsetWidth,
                behavior: "smooth"
            })
        }
    })
})