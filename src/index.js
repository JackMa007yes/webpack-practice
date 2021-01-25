import x from './x.js'
import png from './assets/a.png'  //引入图片

import './x.scss'
import './z.styl'

const div = document.getElementById('app')

div.innerHTML = `<img src='${png}'>`

const button = document.createElement('button')
button.innerText='懒加载'

button.onclick = () =>{
    const promise = import ('./lazy.js')   //import()动态的import 这样会得到一个promise
    promise.then((module)=>{
        const fn = module.default  //default是模块的默认值
        fn()
    },()=>{
        console.log('模块加载错误')
    })
}

document.body.appendChild(button)