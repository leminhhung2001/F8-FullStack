
//Đối tượng `Validator`
function Validator(options) {
    //Hàm này để lấy ra được cha nhất của một thẻ input
    //element là dữ liệu đầu vào (đây là thẻ input con)
    //rồi sẽ tìm để lấy thẻ cha
    //selector để xác định được thẻ cha nhất
    function getParent(element, selector) {
        while(element.parentElement) {
            if(element.parentElement.matches(selector)){
                return element.parentElement
            }
            element = element.parentElement
        }
    }

    var selectorRules = {}


    //Hàm thực hiện validate
    function validate(inputElement, rule) {

        // var errorElement = getParent(inputElement, '.form-group')

        //lấy value: inputElement.value
        //Lấy test func: inputElement.test
        var errorElement = getParent(inputElement, options.formGroup).querySelector(options.errorSelector)
        var errorMessage
        
        //Lấy ra các rule của selector
        var rules = selectorRules[rule.selector]

        //Lặp qua từng rule và kiểm tra
        for(var i=0; i<rules.length; i++) {

            switch (inputElement.type) {
                case 'checkbox':
                case 'radio':
                    errorMessage = rules[i]( //Đây thực chất là hàm test của từng rule
                        formElement.querySelector(rule.selector + ':checked')
                    )
                    break
                default: 
                    errorMessage = rules[i](inputElement.value)
            }
            if(errorMessage) break;
        }

        if(errorMessage) {
            errorElement.innerText = errorMessage
            getParent(inputElement, options.formGroup).classList.add('invalid')
        }
        else {
            errorElement.innerText = ''
            getParent(inputElement, options.formGroup).classList.remove('invalid')

        }
        //Trả về giá trị true hoặc false
        return !errorMessage
    }
    //Lấy element của form cần validate
    var formElement = document.querySelector(options.form)
    if(formElement) {

        formElement.onsubmit = function(e) {
            e.preventDefault()

            var isFormValid = true

            //Lặp qua từng rule và validate chúng
            options.rules.forEach(function(rule) {
                var inputElement = formElement.querySelector(rule.selector)


                //Lưu lại giá trị boolean của hàm trả về
                var isValid = validate(inputElement, rule)

                if(!isValid) {
                    isFormValid = false
                }
            })


            //Kiểm tra xem form có lỗi hay không khi đã lặp qua từng thành phần
            if(isFormValid) {
                // console.log('Không có lỗi')
                if(typeof options.onSubmit === 'function') {

                    //Lấy ra tất cả các element của các thẻ
                    //Lấy những element(cụ thể bài này là các thẻ input) mà nó có thuộc tính là name và không bị disabled
                    var enableInputs = formElement.querySelectorAll('[name]:not([disabled])')

                    //Biến enableInputs đang ở dạng Nodelist
                    //khởi tạo biến để  dùng phương thức Array để convert từ Nodelist sang mảng 
                    //từ đó dễ dàng truy xuất vào từng phần tử
                    //Chỗ  return này có nghĩa là khi người dùng nhập vào mà có giá trị thì return 
                    //sẽ trả và values: là giá trị của input ấy
                    var formValues = Array.from(enableInputs).reduce(function(values, input) {

                        switch(input.type) {
                            case 'radio':
                            case 'checkbox':
                                values[input.name] = formElement.querySelector('input[name = "' + input.name + '"]:checked').value
                                break;
                            case 'file':
                                values[input.name] = input.files
                                break
                            default: 
                                    values[input.name] = input.value
                        }
                            

                        return values
                    }, {})

                    
                    options.onSubmit(formValues)
                }
            }
        }

        //Lặp qua mỗi rule và xử lý (lắng nghe sự kiện blur, input, ...)
        options.rules.forEach(function(rule) {

            //Lưu lại các rules cho mỗi input
            if(Array.isArray(selectorRules[rule.selector])) {
                selectorRules[rule.selector].push(rule.test)
            }
            else {
                selectorRules[rule.selector] = [rule.test]
            }

            var inputElements = formElement.querySelectorAll(rule.selector)
            
            Array.from(inputElements).forEach(function(inputElement) {
                if(inputElement) {
                    //Xử lý trường hợp blur khỏi input
                    inputElement.onblur = function() {
    
                        validate(inputElement, rule)
    
                    }
                    //Xử lí khi người dùng nhập thì dòng message lỗi không hiện nữa
                    inputElement.oninput = function() {
                        var errorElement = getParent(inputElement, options.formGroup).querySelector(options.errorSelector)
                        errorElement.innerText = ''
                        getParent(inputElement, options.formGroup).classList.remove('invalid')
                    }
                }
            })

            
        })

    }
}


//Định nghĩa rules
Validator.isRrequired = function(selector, message) {
    return {
        selector: selector,
        test: function (value) {
            return value? undefined : message || 'Vui lòng nhập trường này'
        }
    }
}

Validator.isEmail = function(selector, message) {
    return {
        selector: selector,
        test: function (value) {
            var regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
            return regex.test(value) ? undefined : message || 'Vui lòng nhập chuẩn cấu trúc email'
        }
    }
}

Validator.minLength = function(selector, min, message) {
    return {
        selector: selector,
        test: function (value) {
            return value.length >= min ? undefined : message || `Vui lòng nhập tối thiểu ${min} ký tự`
        }
    }
}


Validator.isConfirmed = function(selector, getConfirmValue, message) {
    return {
        selector: selector,
        test: function(value) {
            return value === getConfirmValue() ? undefined : message || 'Mật khẩu không khớp'
        }
    }
}