import { getBlogPosts } from './data.js'
import './style.css'
import HelloImg from './assets/image/111.webp'
import './test/add/PrintAdd.js'

const posts = getBlogPosts()
const ul = document.createElement('ul')
posts.forEach(blog => {
    const li = document.createElement('li')
    li.textContent = blog
    ul.appendChild(li)
})
document.body.appendChild(ul)

const img = document.createElement('img')
img.src = HelloImg
document.body.prepend(img)  //将图片插入到 body 元素的开头


