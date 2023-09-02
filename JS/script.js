let slideLeftBut = document.querySelector(".leftChavron")
let slideRightBut = document.querySelector(".rightChavron")
let slide = document.querySelector(".slide")
let slideLefSize = 0
let slideRightSize = 0

let imgsBlock = document.querySelector('.imgs_block_img');
let zoomBlock = document.querySelector(".imgs__zoom_block")
let body = document.querySelector(".body")
let main = document.querySelector('.main')
let html = document.querySelector(".html")

let zoomSlideLeftBut = document.querySelector(".zoom_slider_left_block img")
let zoomSlideRightBut = document.querySelector(".zoom_slider_right_block img")
let zoomSlide = document.querySelector(".zoom__slide__imgs")
let zoomSlideLefSize = 0
let zoomSlideRightSize = 0
let firstImg;


let DiplomZoomBlock = document.querySelector(".imgs__zoom_block_diplom")
let zoomDiplomLeftBut = document.querySelector(".zoom_diplom_slider_left_block")
let zoomDiplomRightBut = document.querySelector(".zoom_diplom_slider_right_block")
let zoomDilomSlide = document.querySelector('.zoom__diplom_slide__imgs')
let zoomDiplomSlideLeftSize = 0


let discussOrder = document.querySelector(".discuss__order")
let closeOrder = document.querySelector(".close_order")
let orderOpenBut = document.querySelector(".order")
let orderForm = document.querySelector(".order__form")
let OrderNoCorrect = document.querySelector(".no_corect_input_order")
let corect = false

orderOpenBut.addEventListener('click', () => {
    discussOrder.style.display = 'block'
})

closeOrder.addEventListener('click', () => {
    discussOrder.style.display = 'none'
})

function gg(x){
    if(x.inpName.value === ''){
        x.inpName.style.border = '2px solid red'
        OrderNoCorrect.style.display = 'block'
    }

    if(x.inpNum.value === ''){
        x.inpNum.style.border = '2px solid red'
        OrderNoCorrect.style.display = 'block'
    }

    if(x.inpNum.value !== '' && x.inpName.value !== ''){
        OrderNoCorrect.style.display = 'block'
        OrderNoCorrect.style.backgroundColor = 'green'
        OrderNoCorrect.innerHTML = 'Данные успешно отправлены'
        x.inpNum.style.border = '1px solid white'
        x.inpName.style.border = '1px solid white'
        setTimeout(() => {
            discussOrder.style.display = 'none'
        },'2000')
    }


}

function OpenZoomBlock(item){
    zoomBlock.style.display = 'block'
    main.style.display = 'none'
    body.style.height = 'auto'
    console.log(item);

    if(item.src === 'file:///C:/Users/ARTUR/Desktop/mangalchuiko/images/chel_img_1.jpg'){
        zoomSlideLefSize = 0
        zoomSlide.style.right = zoomSlideLefSize + '%'
    }
    if(item.src === 'file:///C:/Users/ARTUR/Desktop/mangalchuiko/images/chel_img_2.jpg'){
        zoomSlideLefSize = 100
        zoomSlide.style.right = zoomSlideLefSize + '%'
    }
    if(item.src === 'file:///C:/Users/ARTUR/Desktop/mangalchuiko/images/chel_img_3.jpg'){
        zoomSlideLefSize = 200
        zoomSlide.style.right = zoomSlideLefSize + '%'
    }
    if(item.src === 'file:///C:/Users/ARTUR/Desktop/mangalchuiko/images/chel_img_4.jpg'){
        zoomSlideLefSize = 300
        zoomSlide.style.right = zoomSlideLefSize + '%'
    }
    if(item.src === 'file:///C:/Users/ARTUR/Desktop/mangalchuiko/images/chel_img_5.png'){
        zoomSlideLefSize = 400
        zoomSlide.style.right = zoomSlideLefSize + '%'
    }
}

function CloseZoomBlock(){
    zoomBlock.style.display = 'none'
    DiplomZoomBlock.style.display = 'none'
    main.style.display = 'block'
}


slideLeftBut.addEventListener('click', () => {
    if(slideLefSize !== 0){
        slideLefSize = slideLefSize -  100
        slide.style.right = slideLefSize + '%'
    }
    else if(slideLefSize === 0){
        slideLefSize = 500
        slide.style.right = slideLefSize + '%'
    }
 
})

slideRightBut.addEventListener('click', () => {
    if(slideLefSize !== 500){
        slideLefSize += 100
        slide.style.right = slideLefSize + '%'
    }
    else if( slideLefSize === 500){
        slideLefSize = 0
        slide.style.right = slideLefSize + '%'
    }
})




zoomSlideLeftBut.addEventListener('click', () => {
    if(zoomSlideLefSize !== 0){
        zoomSlideLefSize = zoomSlideLefSize -  100
        zoomSlide.style.right = zoomSlideLefSize + '%'
    }
    else if(zoomSlideLefSize === 0){
        zoomSlideLefSize = 400
        zoomSlide.style.right = zoomSlideLefSize + '%'
    }
 
})

zoomSlideRightBut.addEventListener('click', () => {
    if(zoomSlideLefSize !== 400){
        zoomSlideLefSize += 100
        zoomSlide.style.right = zoomSlideLefSize + '%'
    }
    else if( zoomSlideLefSize === 400){
        zoomSlideLefSize = 0
        zoomSlide.style.right = zoomSlideLefSize + '%'
    }
})

function OpenDiplomZoomBlock(item){
    DiplomZoomBlock.style.display = 'block'
    main.style.display = 'none'
    body.style.height = 'auto'
    console.log(item);

    if(item.src === 'file:///C:/Users/ARTUR/Desktop/mangalchuiko/images/images/diplom1.jpeg'){
        zoomSlideLefSize = 0
        zoomSlide.style.right = zoomSlideLefSize + '%'
    }
    if(item.src === 'file:///C:/Users/ARTUR/Desktop/mangalchuiko/images/images/diplom2.jpeg'){
        zoomSlideLefSize = 100
        zoomSlide.style.right = zoomSlideLefSize + '%'
    }
}


zoomDiplomLeftBut.addEventListener('click', () => {
    if(zoomDiplomSlideLeftSize !== 0){
        zoomDiplomSlideLeftSize  = zoomDiplomSlideLeftSize  -  100
        zoomDilomSlide .style.right = zoomDiplomSlideLeftSize  + '%'
    }
    else if(zoomDiplomSlideLeftSize  === 0){
        zoomDiplomSlideLeftSize  = 100
        zoomDilomSlide.style.right = zoomDiplomSlideLeftSize  + '%'
    }
 
})

zoomDiplomRightBut.addEventListener('click', () => {
    if(zoomDiplomSlideLeftSize  !== 100){
        zoomDiplomSlideLeftSize += 100
        zoomDilomSlide.style.right = zoomDiplomSlideLeftSize + '%'
    }
    else if( zoomDiplomSlideLeftSize  === 100){
        zoomDiplomSlideLeftSize;
        zoomDilomSlide.style.right = zoomDiplomSlideLeftSize + '%'
    }
})