//alert('Hello JavaScript basic')

// setInterval(function() {
//     console.log("Le Minh Hung")
// }, 1000)

// var myFunction = function() {
//     alert('Le minh hung')
// }

// myFunction();


// var myObject = {
//     name: 'Hung',
//     age: 20,
//     address: 'Thanh Hoa'
// }
// console.log('myObject: ', myObject)

// var myArray = [
//     'le minh hung',
//     'DHCNHN',
//     19
// ]

// console.log(typeof myArray)

/**
 * Toán tử so sánh thì trả về giá trị là true hoặc false
 * Còn toán tử logic thì không trả về  như vậy. Sở dĩ chúng ta thấy
 * chúng trả về true hoặc false thì đó là kết của một trong 2 vế của nó
 */

// var firstName = 'Hung'
// var lastName = 'Le Minh'

// console.log(`Toi la: ${lastName} ${firstName}`)


// var ten = [
//     'le minh hung',
//     'le minh nguyen',
//     'le minh phat',
//     'le minh kiet',
// ]

// console.log(ten)

// function run(animals) {

//     if(animals.length == 0){
//         animals.push('Cat', 'Mouse')
//     }
//     else if(animals.length == 1){
//         animals.unshift('Elephant')
//     }
//     else if(animals.length > 2){
//         animals.splice(1, 1, 'Monkey', 'Tiger')
//     }
//     return animals;
// }

// function writeLog() {
//     var str
//     for(var k of arguments){
//         str += `${k} - `
//     }
//     console.log(str)
// }

// writeLog(55555, 'hung', 'jfkdhfghfd')

// function show() {
//     console.log('hung1')
// }

// function show() {
//     console.log('hung2')
// }

// function show() {
//     console.log('hung3')
// }

// show()



//expression function

// var hung = function() {

// }


// var email = 'email'

// var myObject = {
//     name: 'hung',
//     age: 20,
//     status: 'single',
//     [email]: 'leminhhungtabletennis@gmail.com',
//     getName: function() {
//         return this.name
//     }
// }



// console.log(myObject.getName())


/**Constructor */

// function User(firstName, lastName, avatar) {
//     this.firstName = firstName
//     this.lastName = lastName
//     this.avatar = avatar
//     this.getName = function() {
//         return `${this.firstName} ${this.lastName}`
//     }
// }


// User.prototype.className = 'F8'
// User.prototype.getClassName = function() {
//     return this.className
// }

// var person1 = new User('Le', 'Minh Hung', 'Facebook')
// var person2 = new User('Le', 'Minh Nguyen', 'Facebook')

// person1.title = 'ahhiii'
// person2.title = 'uuututututu'

// console.log(person1)
// console.log(person1.getClassName())



/**Date object */
//  var date = new Date();

//  var year = date.getFullYear();
//  var month = date.getMonth() + 1;
//  var day = date.getDay();

//  console.log(`${month}/${day}/${year}`)


/**Toan tu 3 ngoi */

// var course = {
//     name: 'Javascript',
//     cost: 250
// }

// var result = course.cost > 0 ? `${course.cost} Coins`  : 'Mien phi'

// console.log(result)


/**For in */
// var course = {
//         name: 'Javascript',
//         cost: 250,
//         time: '11111'
//     }

// for(var v of Object.values(course)){
//     console.log(v)
// }


var formValues = [
    {
        field: 'name',
        value: 'Sơn Đặng',
        coin:  320
    },
    {
        field: 'age',
        value: 18,
        coin: 420
    },
    {
        field: 'address',
        value: 'Hà Nội',
        coin: 520
    }
]

/**Map() method: Để làm thay đổi giá trị đầu ra của một mảng mới theo điều kiện*/

// function values(course, index) {
//     return {
//         field: course.field,
//         value: course.value,
//         coin: course.coin + 4,
//         name: `Hung: ${course.value}`,
//         index: index,
//         originArray: course
//     };
// }
// var print = formValues.map(values)

// console.log(print)


/**Reduce() method: có thể lấy chi tiết từng thành phần của mảng con trong mảng lớn và ghép chúng thành một chuỗi */
// var i = 0
// function coinHandler(accumulator, currentValue, currentIndex, originArray) {
//     var total = accumulator + currentValue.coin
//     console.table({
//         'Lượt chaỵ': i++,
//         'Biến tích trữ': accumulator,
//         'Giá khóa học': currentValue.coin,
//         'Tích trữ được': total
//     })
//    return total
// }

// var result = formValues.reduce(coinHandler, 0)

// console.log(result)
// var i = 0
// var totalCoin = formValues.reduce(function(total, currentValue) {
//     console.log(i++, total, currentValue)
//     return total + currentValue.coin
// })

// var number = [100, 200, 300, 400, 500]

// var result = number.reduce(function(sum, v) {
//     return sum + v
// }, 0)

// console.log(result)


/**BT: Lam phang mang */

// var depthArray = [1, 2 ,[3 , 4], 5, [6, 7, 8], 9]

// var flatArray = depthArray.reduce(function(flatOutPut, value) {
//     return flatOutPut.concat(value)
// }, [])

// console.log(flatArray)



/**Includes method: Dùng để kiểm tra một chuỗi con hay một phần tử con của mảng có tồn tại trong chuỗi lớn hay
 * mảng tổng thể hay không
 */

// var title = 'responsive web design'

// console.log(title.includes('responsive'))


// var key = [3, 'iiii', 3456.9]
// console.log(key.includes(3))//tim xem co 3 trong mang hay khong


/**Math object: la doi tuong duoc cho san (built-in) trong javascript */

//var random = Math.floor(Math.random() * 100)

// var bonus = [
//     '10 coin',
//     '20 coin',
//     '30 coin',
//     '40 coin',
//     '50 coin',
// ]
// console.log(bonus[random])

// if(random < 50) console.log('Cường hóa thành công')



/**Callback */

// function myFunction(param) {
//     param('le minh hung')
// }

// function myCallback(value) {
//     console.log('value:', value)
// }

// myFunction(myCallback)

/**Giải thích cách hoạt động của map() method dựa vào callback */
// Array.prototype.map2 = function(callback) {
//     var l = this.length
//     var output = []
//     for(var i = 0; i<l; i++){
//         var v = callback(this[i])
//         output.push(v)
//     }
//     return output
// }

// var courses = [
//     'Javascript',
//     'PHP',
//     'Ruby',
//     'HTML, CSS'
// ]

// var htmls = courses.map2(function(course) {
//     return `<h2>${course}</h2>`
// })
// console.log(htmls)


/**Tự định nghĩa phương thức forEach() */
// Array.prototype.forEach2 = function(callback) {
//     var arrLength = this.length
//     var newArr = []
//     for(var i = 0; i<arrLength; i++){
//         var v = callback(this[i])
//         newArr.push(v)
//     }
//     return newArr
// }

// var courses = [
//     'Javascript',
//     'PHP',
//     'Ruby',
//     'HTML, CSS'
// ]

// var htmls = courses.forEach2(function(value) {
//     return value
// })

// console.log(htmls)


/**Tự định nghĩa phương thức find()  */


// Array.prototype.find2 = function(callback) {
//     var arrLength = this.length
//     var newArr = []
//     for(var i = 0; i<arrLength; i++){
//         var v = callback(this[i])
//         if(v == true){
//             console.log(this[i])
//         } 
//     }
// }

// var formValues = [
//     {
//         field: 'name',
//         value: 'Sơn Đặng',
//         coin:  320
//     },
//     {
//         field: 'age',
//         value: 18,
//         coin: 420
//     },
//     {
//         field: 'address',
//         value: 'Hà Nội',
//         coin: 520
//     }
// ]


// var result = formValues.find2(function(v) {
//     return v.value === 18
// })

/**Tự định nghĩa phương thức filter()  */


// Array.prototype.filter2 = function(callback) {
//     var arrLength = this.length
//     var newArr = []
//     for(var i = 0; i<arrLength; i++){
//         var v = callback(this[i])
//         if(v == true){
//             console.log(this[i])
//         } 
//     }
// }

// var formValues = [
//     {
//         field: 'name',
//         value: 'Sơn Đặng',
//         coin:  320
//     },
//     {
//         field: 'age',
//         value: 18,
//         coin: 420
//     },
//     {
//         field: 'address',
//         value: 18,
//         coin: 520
//     }
// ]


// var result = formValues.filter2(function(v) {
//     return v.value === 18
// })



/**Tự định nghĩa phương thức reduce()  */



// Array.prototype.reduce2 = function(callback, initialValue) {
//     var arrLength = this.length
//     var total = initialValue;
//     for(var i=0; i<arrLength; i++){
//         total = callback(total, this[i])
//     }
//     return total
// }
// var formValues = [
//     {
//         field: 'name',
//         value: 'Sơn Đặng',
//         coin:  320
//     },
//     {
//         field: 'age',
//         value: 18,
//         coin: 420
//     },
//     {
//         field: 'address',
//         value: 18,
//         coin: 520
//     }
// ]

// var result = formValues.reduce2(function(sum, currentValue) {
//     return sum + currentValue.coin
// }, 0)

// console.log(result)






/**TÌM HIỂU SÂU HƠN VỀ MẢNG */

// var courses = [
//     'Javascript',
//     'Ruby',
//     'C++'
// ]

// courses.length = 10

/**Chúng ta thường hay tận dụng tính chất của vòng để  duyệt mảng nhưng nếu trong trường hợp mà 
 * mảng chỉ có 3 phần tử mà ta gán chiều dài là 10 thì nó sẽ bị dư thừa nên là không đúng bản chất
 * Vì thế chúng ta sẽ sử dụng for in để giải quyết vấn đề này
 */

// for(var index in courses){
//     console.log(courses[index])
// }




/**Tim hieu sau ve phuong thuc forEach() 
 * -Day la vong lap lap qua tung phan tu cua mang va khong co gia tri tra ve
 * -Co the nhan 2 tham so truyen vao, tham so thu nhat la callback, tham so thu 2 la cai j day
*/

//Array dinh nghia ra mot phuong thuc forEach2()


// Array.prototype.forEach2 = function(callback) {
//     for(var index in this){
//         if(this.hasOwnProperty(index)){
//             callback(this[index], index, this)
//         }
//     }
// }

// var courses = new Array(100)

// courses.push('Javascript', 'Ruby')
// var courses = [
//     // 'Javascript',
//     // 'Ruby',
//     // 'C++'
// ]


// courses.forEach2(function(course, index, array) {
//     console.log(course, index, array)
// })





/** Tim hieu sau ve phuong thuc filter()*/

Array.prototype.filter2 = function(callback) {
    var arrLength = this.length;
    var newArr = [];
    for(var index in this){
        if(this.hasOwnProperty(index)){
            var v = callback(this[index], index, this)
            if(v){
                newArr.push(this[index])
            }
        }
    }
    return newArr
}

var formValues = [
        {
            field: 'name',
            value: 'Sơn Đặng',
            coin:  320
        },
        {
            field: 'age',
            value: 18,
            coin: 420
        },
        {
            field: 'address',
            value: 18,
            coin: 520
        }
    ]

var result = formValues.filter2(function(infor, index, array) {
    return infor.coin > 400
})

console.log(result)