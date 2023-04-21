import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// 注册插件
gsap.registerPlugin(ScrollTrigger)

// to api
gsap.to(document.querySelector('#to'), { x: 300, y: 100, duration: 1, ease: 'back' })
// from api 
gsap.from(document.querySelector('#from'), { x: 300, duration: 1, delay: 1 })
// fromTo api
gsap.fromTo(document.querySelector('#fromTo'), { x: 300, y: 100 }, { x: 100, y: 50, duration: 2 })
// keyframes api
gsap.to(document.querySelector('#keyframes'), { keyframes: [{ x: 300 }, { y: -200 }, { x: 0 }, { y: 0 }] })

// gsap hook
gsap.to(document.querySelector('#hook'), {
  width: '300px',
  repeat: 3,
  repeatDelay: 0.5,
  yoyo: true,
  esas: 'back',
  onRepeatParams: [1, '2', 3],
  onRepeat() {
    console.log('重复执行的回调')
    console.log('回调的参数：', arguments)
  },
  onComplete() {
    console.log('动画执行完成')
  },
  onStart() {
    console.log('动画从起始位置开始执行，即repeat会重复触发')
  }
})

// timeline
const tl_1 = document.querySelector('#tl_1')
const tl_2 = document.querySelector('#tl_2')
const tl_3 = document.querySelector('#tl_3')

const tl = gsap.timeline({ repeat: 2, repeatDelay: 2 })
tl.to(tl_1, { x: 200, duration: 2 })
tl.to(tl_2, { x: 400, duration: 1 })
tl.to(tl_3, { x: 400 })


// page1
const tl1 = gsap.timeline({
  scrollTrigger: {
    trigger: '#page1 .relative_box',
    start: 'top 500px',
    end: 'bottom 500px',
    scrub: 0.1,
    // markers: true
  }
})

tl1.to('#page1 .img1', { x: 100, opacity: 0 })
tl1.fromTo('#page1 .img2', { x: 100, opacity: 0 }, { x: 300, opacity: 1 })

// page2 pin
gsap.timeline({
  scrollTrigger: {
    trigger: '#page2',
    start: 'top top',
    end: 'bottom top',
    scrub: 0.1,
    pin: true,
  }
})
const tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: '#page2 .target2',
    start: 'top top',
    end: 'bottom top',
    scrub: 0.1,
    markers: true
  }
})

tl2.fromTo('#page2 .img3', { x: 0 }, { x: 600, rotateZ: 360, borderRadius: "50%" })
tl2.fromTo('#page2 .img4', { x: 800, width: 0, opacity: 0 }, { width: 250, x: 400, y: 200, opacity: 1 })
tl2.fromTo('#page2 .img5', { x: 500, y: 350, width: 0 }, { width: 1000, x: 0, y: 100 })
tl2.to('#page2 .img5', { x: 100, y: 600, width: 300, borderRadius: '50%' })

