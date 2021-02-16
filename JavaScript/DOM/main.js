/**Thiet lap va lay attribute cho element */

// var result = document.querySelector('div')
// result.setAttribute('id', 'hung')
// result.setAttribute('kk', 'hung')
// result.setAttribute('class', 'lmh')
// console.log(result.getAttribute('kk'))
// console.log(result.id)



/**Su khac biet giua innerText va textContent
 * innerText: Se tra ve nhung gi ma ta nhin thay tren devTool hien thi
 * textContent: Tra ve noi dung chi tiet hon
*/

// var result = document.querySelector('.box-1')

// console.log(result.innerText)
// console.log(result.textContent)

// result.innerText = '<i>nghieng</i>'


/**Tim hieu ve inner HTML propertype */

// var k = document.querySelector('.box')

// k.innerHTML = '<h1 title="le">Le Minh Hung</h1>'
// console.log([k])


/**DOM CSS */

// var k = document.querySelector('.box')
// Object.assign(k.style, {
//     width: '100px',
//     height: '120px',
//     backgroundColor: 'black'
    
// }


/**ClassList property 
 * add: Them class cho element
 * contains: Kiem tra xem co class mong muon hay khong
 * remove: 
 * toggle
*/

// var boxElement = document.querySelector('.box')
// // boxElement.classList.add('red')

// setInterval(() => {
//     boxElement.classList.toggle('red')
// }, 1000)


/**   Tim hieu ve DOM events: la mot su kien hay hanh vi ma nguoi su dung hay trinh duyet tac dong len elment
      va chung ta co the lay duoc du lieu nguoi dung khi ho dang nhap tai khoan
* Attribute events: la cach lang nghe hanh vi tac dong len
 * Assign events using the element node: De gan gia tri hanh vi cho function
 */

//  var k = document.querySelectorAll('h1')
 

//  for(var i=0; i<k.length; i++){
//      k[i].onclick = function(mouseEvent) {
//          console.log(mouseEvent.target)
//      }
//  }

// var inputElement = document.querySelector('select')
// inputElement.onchange = function(e) {
//     console.log(e.target.value)
// }



/** DOM event
 * preventDefaulf(): Ngan chan thuoc tinh boi trinh duyet tren HTML
 * stopPropagation(): Ngan chan su nổi bột từ thành phần con
*/
//VD1
// var aElements = document.links
// for(var i=0; i<aElements.length; i++){
//     aElements[i].onclick = function(e) {
//         if(!e.target.href.startsWith('https://f8.edu.vn')){
//             e.preventDefault();
//         }
//     }
// }

//VD2
// var ulElement = document.querySelector('ul')

// ulElement.onmousedown = function(mouseEvent) {
//     mouseEvent.preventDefault()
// }

// ulElement.onclick = function(e) {
//     console.log(e.target)
// }


//VD3 
// document.querySelector('div').onclick = function(e) {
//     console.log('DIV')
// }

// document.querySelector('button').onclick = function(e) {
//     e.stopPropagation()
//     console.log('Click me!')
// }





/** DOM Event \ Event Listener 
 * 1. Xử lí nhiều sự việc khi một event xảy ra
 * 2. Lắng nghe / Hủy bỏ lắng nghe
*/


//1. Có thể chia thành nhiều chức năng để giải quyết nhiều công việc
var btn = document.querySelector('button')

function Viec1() {
    console.log('Viec 1')
}
function Viec2() {
    console.log('Viec 2')
}
function Viec3() {
    console.log('Viec 3')
}
btn.addEventListener('click', Viec1)
btn.addEventListener('click', Viec2)
btn.addEventListener('click', Viec3)

//2. Hủy bỏ lắng nghe

setTimeout(function() {
    btn.removeEventListener('click', Viec1)
    btn.removeEventListener('click', Viec2)
    //btn.removeEventListener('click', Viec3)
}, 3000)