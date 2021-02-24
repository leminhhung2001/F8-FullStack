//Đây là một chuỗi JSON thể hiện kiểu boolean
var json = 'false'
//Đây là một chuỗi JSON thể hiện kiểu Number
var json2 = '1'

//Đây là môt chuỗi JSON thể hiện kiểu Array
var json3 = '["Javascript", "19"]'


//Đây là môt chuỗi JSON thể hiện kiểu Object
var json4 = '{"name":"Hung", "age":18}'


// var object = JSON.parse(json4)

// console.log(object)



// console.log(JSON.stringify( {
//     name: 'Hung',
//     age: 18
// }))




///PROMISE


//Callback hell: Thằng đằng sau thì cần kq trả về của thằng đằng trước để thực thi
// setTimeout(function() {
//     console.log(1)
//     setTimeout(function() {
//         console.log(2)
//         setTimeout(function() {
//             console.log(3)
//             setTimeout(function() {
//                 console.log(4)
//                 setTimeout(function() {
//                     console.log(5)
//                 }, 1000)
//             }, 1000)
//         }, 1000)
//     }, 1000)
// }, 1000)


//->Để giải quyết callback hell thì PROMISE ra đời

//Promise có 3 trạng thái 
//1. Pending: Chờ
//2. Fulfilled: Thành công
//3. Rejected: Thất bại
// var promise = new Promise(
//     //Executor
//     function(resolve, reject) {
//         //Logic: Chúng ta sẽ viết logic ở đây và phải biết khi nào thành công, khi nào thất bại
//         //Thành công: resolve()
//         //Thất baij: reject()


//         //Fake call API
//         // resolve([{
//         //     name: 'Javascript',
//         //     age: 18
//         // }])

//         resolve()



//     }
// )

// promise
//     .then(function() {//Được thực hiện khi resolve() thực hiện xong
//         return 1;
//     })
//     .then(function(data) {//Thằng .then() đằng sau sẽ lấy return trả về của thằng thứ nhất để in ra kq
//          console.log(data) //Nếu mà thằng đằng trước return về một promise thì thằng đằng sau phải đợi thằng
//          return 2;          //promise ở chỗ return ấy thực hiện xong thì mới được thực hiện                 
//         })
//     .then(function(data) {
//         console.log(data)
//         return 3;
//     })
//     .then(function(data) {
//         console.log(data)
//         return 4;
//     })
//     .then(function(data) {
//         console.log(data)
//     })
//     .catch(function(error) {//Được thực hiện khi reject() thực hiện xong. Để bắt lỗi
//         console.log(error)
//     })
//     .finally(function() {//Luôn được thực hiện ở lần cuối cùng khi resolve() hay reject()thực hiện xong
//         console.log('Done')
//     })



// Tìm hiểu kĩ hơn về promise
// function sleep(ms) {
//     return new Promise(function(resolve) {
//         setTimeout(resolve, 1000)
//     })
// }

// sleep(1000)
//     .then(function() {
//         console.log(1)
//         return sleep(1000);
//     })
//     .then(function() {
//         console.log(2)
//         return sleep(1000);
//     })
//     .then(function() {
//         console.log(3)
//         return new Promise(function(resolve, reject) {
//             reject('Co loi')
//         })
//     })
//     .then(function() {
//         console.log(4)
//         return sleep(1000);
//     })
//     .then(function() {
//         console.log(5)
//         return sleep(1000);
//     })
//     .catch(function(data) {
//         console.log(data)
//     })


//Cách tạo nhanh một Promise.Resolve(), Promise.Reject(), Promise.All()
// var promise = Promise.reject('Le Minh Hung')

// promise
//     .catch(function(data) {
//         console.log(data)
//     })

//Promise.All(): Sử dụng trong trường hợp có nhiều promise mà chúng không phụ thuộc nhau, như vậy sử dụng all() để c
               //chạy song song nhiều promise -> Tổng thời gian chạy sẽ được tối ưu
               //Nếu chỉ cần một trong các thành phần của all() mà reject thì code sẽ không chạy đâu nhé
//VD: ghep 2 mang
// var promise1 = new Promise(function(resolve) {
//     setTimeout(function() {
//         resolve([1])
//     }, 1000)
// })

// var promise2 = new Promise(function(resolve) {
//     setTimeout(function() {
//         resolve([2, 3])
//     }, 3000)
// })

// Promise.all([promise1, promise2])
//     .then(function(result) {
//         var result1 = result[0]
//         var result2 = result[1]
//         console.log(result1.concat(result2))
//     })


//Học promise qua ví dụ
// var users = [
//     {
//         id: 1,
//         name: 'Le Minh Hung'
//     },
//     {
//         id: 2,
//         name: 'Le Minh Nguyen'
//     },
//     {
//         id: 3,
//         name: 'Le Tuan Kiet'
//     },
//     //...
// ]

// var comments = [
//     {
//         id: 1,
//         user_id: 1,
//         content: 'Toi chi nguoi ta vai bai voi Nguyen oi'
//     },
//     {
//         id: 2,
//         user_id: 2,
//         content: 'Ok em oi'
//     },
//     {
//         id: 2,
//         user_id: 1,
//         content: 'Ok ^^'
//     }
// ]

//1. Lay comments
//2. Tu comments lay user_id, tu user_id lay ra user tuong ung



//Fake API: Chung ta se mo phong goi API qua mot ham ma back-end tra ve
// function getComments() {
//     return new Promise(function(resolve) {
//         setTimeout(function() {
//             resolve(comments);
//         })
//     }, 1000)
// }

// getComments()
//     .then(function(comments) {
//         var userIds = comments.map(function(comment) {
//             return comment.user_id
//         })

//         //Trả về một promise
//         return getUserByIds(userIds)
//             .then(function(users) {
//                 return {
//                     users: users,
//                     comments: comments
//                 }
//             })
//     })

//     .then(function(data) {
//         var commentBlock = document.getElementById('users-block')
//         var html = ''
//         data.comments.forEach(function(comment) {
//             var user = data.users.find(function(user) {
//                 return user.id === comment.user_id
//             })
//             html += `<li>${user.name}: ${comment.content}</li>` 
//         })
//         commentBlock.innerHTML = html
//     })

// function getUserByIds(userIds) {
//     return new Promise(function(resolve) {
//         var result = users.filter(function(user) {
//             return userIds.includes(user.id)
//         })
//         setTimeout(function() {
//             resolve(result)
//         }, 1000)
//     })
// }



//Backend -> API -> Fetch -> JSON/XML -> JSON.parse() -> Javascript types -> gender ra giao dien nguoi dung  
//Tim hieu ve fetch()

// var postAPI = 'https://jsonplaceholder.typicode.com/posts'

// fetch(postAPI)
//     .then(function(response) {
//         return response.json()
//         //Ở bước này thì nó như là JSON.parse(): Từ JSON -> Javascript types
//     })
//     //then() o tren dang tra ve mot promise

//     .then(function(posts) {
//          var htmls = posts.map(function(post) {
//              return `<li>
//                 <h2>${post.title}</h2>
//                 <p>${post.body}</p>
//              </li>`
//          })
//          var html = htmls.join('')
//          document.getElementById('post-block').innerHTML = html
//     })
//     .catch(function(error){
//         console.log('Co Loi Kia')
//     })



//JSON server: Dùng để fake API server/Mock API như thật luôn

// var courseAPI = 'http://localhost:3000/cources'

// fetch(courseAPI)
//     .then(function(response) {
//         return response.json()
//     })

//     .then(function(courses) {
//         console.log(courses)
//     })



//CRUD
// C: Create: Tạo mới - POST
// R: Đọc, lấy dữ liệu - GET
// U: Chỉnh sửa - PUT/PATCH
// D: Delete: Xóa - DELETE

// Postman: Là công cụ để thao tác 4 chức năng trên với API một cách dễ dàng





//VD Thuc te ve POST, PUT, DELETE, GET

var courseAPI = 'http://localhost:3000/cources'


function start() {
    // getCourses(function(courses) {
    //     genderCourses(courses)
    // })
    //Hàm getCourses trả về courses và genderCourses cần lấy courses để gender nên 
    //ta có thể viết gọn 2 hàm trên thành
    //Đây là truyền function chứ không phải gọi function
    //Lúc này thì genderCourses sẽ được truyền dưới dạng callback
        getCourses(genderCourses)

        handleCreateCourses()
   
}
//Khi web bat dau chay thi ham starts() se chay dau tien
start();

//Lay cac khoa hoc
function getCourses(callback) {
    fetch(courseAPI)
        .then(function(response) {
            return response.json()
        })
        .then(callback)
}

//Ham tao ra khoa hoc thay vi phai dung postman
function createCourses(data, callback) {
    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    fetch(courseAPI, options)
        .then(function(response) {
            return response.json()
        })
        .then(callback)
}


//Ham quan ly xoa khoa hoc
function handleDeleteCourse(id) {
    var options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    }
    fetch(courseAPI + '/' + id, options)
        .then(function(response) {
            return response.json()
        })
        .then(function() {
            var courseItem = document.querySelector('.course-item-' + id)
            if(courseItem) {
                courseItem.remove()
            }
        })
}

//Dua cac khoa hoc ra trinh duyet
function genderCourses(courses) {
    var listCoursesBlock = document.querySelector('#list-courses')
    var htmls = courses.map(function(course) {
        return `
            <li class="course-item-${course.id}">
                <h4>${course.name}</h4>
                <p>${course.description}</p>
                <button onclick="handleDeleteCourse(${course.id})">Xóa</button>
                <button onclick="handleUpdateCourse(${course.id})">Sửa</button>
            </li>
        `
    })

    listCoursesBlock.innerHTML = htmls.join('')
}

function handleCreateCourses() {
    var createBtn = document.querySelector('#create')

    createBtn.onclick = function() {
        var name = document.querySelector('input[name = "name"]').value
        var description = document.querySelector('input[name = "description"]').value
        
        var formData = {
            name: name,
            description: description
        }

        createCourses(formData)
    }
}


//Chỉnh sửa khóa học
function UpdateCourse(data, id, callback) {
    var options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    fetch(courseAPI + '/' + id, options)
        .then(function(response) {
            return response.json()
        })
        .then(callback)
}

function handleUpdateCourse(id, callback) {
    var getCourseItem = document.querySelector('.course-item-' + id)
    var getValueName = getCourseItem.querySelector('h4').innerText
    var getValueDescription = getCourseItem.querySelector('p').innerText

    var name = document.querySelector('input[name="name"]')
    var description = document.querySelector('input[name="description"]')

    name.value = getValueName
    description.value = getValueDescription

    if(!document.querySelector('#update')) {
        document.querySelector('#create').id = 'update'
    }

    document.querySelector('#update').innerText = 'Lưu'
    var getBtn = document.querySelector('#update')

    getBtn.onclick = function() {
        var formData = {
            name: name.value,
            description: description.value
        }
        UpdateCourse(formData, id, callback)

    }

}
