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









let pad = document.querySelector(".main-container");
    pad.addEventListener("touchstart", handleTouchStart);
    pad.addEventListener("touchend", handleTouchEnd);

    let startX, startY, endX, endY, moved;

    pad.addEventListener("mousedown", (e) => {
      moved = false;
      startX = e.clientX;
      startY = e.clientY;
    });
    pad.addEventListener("mousemove", (e) => {
      moved = true;
    });
    pad.addEventListener("mouseup", (e) => {
      endX = e.clientX;
      endY = e.clientY;
      if (startX && startY && moved) {
        if (endX - startX > endY - startY) {
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

            
    //     let heroText = document.querySelector('.content h1');
    // let content = document.querySelector('.content')
    // let bottle = document.querySelector('.bottle-img');
    // let mainContainer = document.querySelector('.main-container')
    // let bottle1 = document.querySelector('.bottle-1');
    // let bottle2 = document.querySelector('.bottle-2');

    
    
    //     content.style.animation = `fadeup 0.5s linear`;
    //     content.style.animationIterationCount = `1`;
    //     setTimeout(()=>{
    //         bottle.style.animation = `moveup 0.5s linear`;
    //         bottle.style.animationIterationCount = `1`;
    //     },100)

        
    //     setTimeout(()=>{

    //         content.style.display = `none`;
    //         bottle.style.top = `20%`;
    //     },350)

    // setTimeout(()=>{
    //     bottle.style.animation = `bounceup 1s ease`;
    //     // mainContainer.style.opacity = `0`;
    //     mainContainer.style.animation = `changetobg2 1s ease`;
    //     setTimeout(()=>{
    //         bottle.style.top = `40%`
    //         mainContainer.style.background = `url('./Images/bg-img2.png') #D91567`;
    //         content.innerHTML = `<h1>Celebrate the World Cup with a Kombucha!</h1>`
    //         content.style.animation = `none`;
    //         content.style.display = `flex`;
    //         content.style.position = `absolute`;
    //         content.style.top = `10%`;
    //         content.style.opacity = `1`;
            
            
    //        setTimeout(()=>{
    //            bottle.setAttribute('src','./Images/bottle-open.png')
    //        },100) 
            
    //         setTimeout(()=>{
    //         content.innerHTML = `<h1>Get 20% off everytime your favorite team wins any WC knock-out matches!</h1>
    //         <div class="copy-container">
    //   <div class="code">PELE-10</div>
    //   <img src="./Images/copy.png" alt="copy" class="copy-code" />
    // </div>
    //         `;
    //         bottle.style.top = `45%`;
    //         bottle.setAttribute('src','./Images/bottle.png');
    //         bottle1.style.opacity = `1`;
    //         bottle2.style.opacity = `1`;
    //         setTimeout(()=>{
    //             let copy_btn = document.querySelector(".copy-code");
    //         let code = document.querySelector('.code').textContent;
    //         copy_btn.addEventListener("click", () => {
    //         navigator.clipboard.writeText(code);
    //         copy_btn.setAttribute('src','./Images/check.png');
    // });
    //         })

            
    //     },2000)
            
    //     },600)
    // },2000)




        }
      }
    });

    function handleTouchStart(e) {
      let landingTouch = e.changedTouches[0];
      startX = landingTouch.pageX;
      startY = landingTouch.pageY;
    }

    function handleTouchEnd(e) {
      let landingTouch = e.changedTouches[0];
      endX = landingTouch.pageX;
      endY = landingTouch.pageY;
      if (endX - startX > endY - startY) {
        




    let heroText = document.querySelector('.content h1');
    let content = document.querySelector('.content')
    let bottle = document.querySelector('.bottle-img');
    let mainContainer = document.querySelector('.main-container')

    
    
        content.style.animation = `fadeup 0.5s linear`;
        content.style.animationIterationCount = `1`;
        setTimeout(()=>{
            bottle.style.animation = `moveup 0.5s linear`;
            bottle.style.animationIterationCount = `1`;
        })

        
        setTimeout(()=>{

            content.style.display = `none`;
            bottle.style.top = `20%`;
        },350)

      }
    }
