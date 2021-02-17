
//Đối tượng `Validator`
function Validator(options) {
    
    //Hàm thực hiện validate
    function validate(inputElement, rule) {

        //lấy value: inputElement.value
        //Lấy test func: inputElement.test
        var errorElement = inputElement.parentElement.querySelector(options.errorSelector)
        var errorMessage = rule.test(inputElement.value)
        
        if(errorMessage) {
            errorElement.innerText = errorMessage
            inputElement.parentElement.classList.add('invalid')
        }
        else {
            errorElement.innerText = ''
            inputElement.parentElement.classList.remove('invalid')

        }
    }
    //Lấy element của form cần validate
    var formElement = document.querySelector(options.form)
    if(formElement) {

        options.rules.forEach(function(rule) {
            var inputElement = formElement.querySelector(rule.selector)
            
            if(inputElement) {
                //Xử lý trường hợp blur khỏi input
                inputElement.onblur = function() {

                    validate(inputElement, rule)

                }
                //Xử lí khi người dùng nhập thì dòng message lỗi không hiện nữa
                inputElement.oninput = function() {
                    var errorElement = inputElement.parentElement.querySelector(options.errorSelector)
                    errorElement.innerText = ''
                    inputElement.parentElement.classList.remove('invalid')
                }
            }
        })
    }
}


//Định nghĩa rules
Validator.isRrequired = function(selector) {
    return {
        selector: selector,
        test: function (value) {
            return value.trim() ? undefined : 'Vui lòng nhập trường này'
        }
    }
}
Validator.isEmail = function(selector) {
    return {
        selector: selector,
        test: function (value) {
            var regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
            return regex.test(value) ? undefined : 'Vui lòng nhập chuẩn cấu trúc email'
        }
    }
}

Validator.minLength = function(selector, min) {
    return {
        selector: selector,
        test: function (value) {
            return value >= min ? undefined : `Vui lòng nhập tối thiểu ${min} ký tự`
        }
    }
}