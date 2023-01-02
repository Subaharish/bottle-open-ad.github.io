const textContentOne = document.querySelector('.text-content-1');
const textContentSecond = document.querySelector('.text-content-2');
const textContentThird = document.querySelector('.text-content-3');
const slideUp = document.querySelector('.slide-up');
const bottleFirst = document.querySelector('.bottle-1');
const bottleSecond = document.querySelector('.bottle-2');
const bottleThird = document.querySelector('.bottle-3');
const bottleForth = document.querySelector('.bottle-4');
const bgFirst = document.querySelector('.bg-img-1');
const bgSecond = document.querySelector('.bg-img-2');
const copy = document.querySelector('.copy');

textContentSecond.classList.add('hidden')
textContentThird.classList.add('hidden')
bottleSecond.classList.add('hidden')
bottleThird.classList.add('hidden')
bottleForth.classList.add('hidden')
bgSecond.classList.add('hidden')

slideUp.addEventListener('mouseup', ()=>{
    textContentOne.classList.add('hidden')
    slideUp.classList.add('hidden')
    bottleFirst.classList.add('bottle-click')
    setTimeout(()=>{
        bottleFirst.classList.add('hidden')
        bottleSecond.classList.remove('hidden')
    },2000)
    setTimeout(()=>{
        bottleSecond.classList.add('hidden')
        bgFirst.classList.add('hidden')
        bottleThird.classList.remove('hidden')
        bgSecond.classList.remove('hidden')
        textContentThird.classList.remove('hidden')
    },4000)
    setTimeout(()=>{
        bgSecond.classList.add('hidden')
        textContentThird.classList.add('hidden')
        bottleThird.classList.add('hidden')
        bgFirst.classList.remove('hidden')
        bottleForth.classList.remove('hidden')
        textContentSecond.classList.remove('hidden')
    },6000)
})

copy.addEventListener('click', ()=>{
    navigator.clipboard.writeText('MESSI-10')
})

console.log("script")
