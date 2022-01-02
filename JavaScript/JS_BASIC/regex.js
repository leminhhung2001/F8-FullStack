// []: min: 1, max: 1
// \: ép nó là ký tự bình thường
// {1,10}: min: 1, max: 10
// {1,}: min: 1, max: vô cực
// {10}: min: 10, max: 10
// *: min: 0, max: vô cực = {0,}
// +: min: 1, max: vô cực = {1,}
// ?: min: 0, max: 1 = {0,1}
// ^: bắt đầu chuỗi
// $: kết thúc chuỗi
// \w: [a-zA-Z0-9]
// \W: [^a-zA-Z0-9] (ngược lại vs \w)
// \d: [0-9]
// \D: [^0-9] (ngược lại vs \d)
// .: mọi ký tự
// (ab|dc): ab hoặc dc

// VD: Nhập số tuổi (<200)
// Thông thường: /^[1-9]$|^[1-9][0-9]$|^1\d{2}$/mg
// Tối ưu: /^[1-9][0-9]?$|^1\d{2}$/gm; or /^(?:[1-9][0-9]?|1[0-9][0-9])$/mg

// VD: Điểm (0-10, số thập phân, sau dấu chấm hoặc phẩy có tối đa 2 chữ số)
// test
// --------Hợp lệ---------------
// 0;
// 10;
// 0.5;
// 5.9;
// 0.25;
// 5.75;
// 3.03;
// 5,5
// 5,67

// --------Không hợp lệ---------
// 5.0;
// 3.333;
// 11;
// 10.5;
// 3.3;

// ----------Giải pháp-------------
// Thông thường: /^(?:10|[0-9]|[0-9]\[.,][1-9]|[0-9]\.[0-9][1-9])$/mg
// Tối ưu: /^(?:10|[0-9](?:\[.,][1-9])?|[0-9]\.[0-9][1-9])$/mg
// Tối ưu: /^(?:10|[0-9](?:\[.,][0-9]?[1-9])?)$/mg

// Nhập tên khách hàng
// --------Hợp lệ---------------
// Le Minh Hung
// Nguyen Binh
// Nguyen B
// Nguyen Binh Minh Hung

// --------Không hợp lệ---------
// le
// le  minh hung
// le Minh hung
// Nguyen Binh
// Nguyen Binh Minh hung

// ----------Giải pháp-------------
// Thông thường: /^[A-Z][a-z]+(?: [A-Z][a-z]*)+$/gm

// --------------------------------------------------------

//Introduce
// ----------------------------------------------------------------------------------------
// let message = 'Hi, are you there? hi, HI...';
// const regex = /hit/ig

// Check trong chuổi có khớp với pattern
// const check = regex.test(message)

// Search và trả về một mảng giá trị nếu khớp pattern, nếu không có trả về null
// const check = message.match(regex)

// Thay thế chuỗi (thêm -i, -g thì sẽ không phân biệt chữ hoa-thường, và tìm kiếm toàn cục)
// const repl = message.replace(/hi/ig, 'hung')

// console.log(repl)
// -----------------------------------------end--------------------------------------------------

// Regular Expression: Character Classes
// -------------------------------------------------------------------------------------------
// 1. \d which matches any single digit
// let phone = '+1-(408)-555-0105';
// const regex = /\d/g
// const arrayNumber = phone.match(regex) //=> array of numbers
// const phoneNumber = arrayNumber.join('')
// console.log(phoneNumber)
// -----------------------------------------end-----------------------------------------------

// Regular Expression: Anchors
// -------------------------------------------------------------------------------------------
// ^ – The caret anchor matches the beginning of the text.
// $ – The dollar anchor matches the end of the text.
// let string = 'Javascript'
// console.log(/^J/.test(string)) //true
// console.log(/^K/.test(string)) //false
// console.log(/t$/.test(string)) //false
// ------------------------------------------end----------------------------------------------

// Regular Expression: Quantifiers
// -------------------------------------------------------------------------------------------

// let str = 'ECMAScript 2020';
// let re = /\d{4}/;

// let result = str.match(re);
// console.log(result);

// global
// let numbers = '+1-(408)-555-0105'.match(/\d{1,}/g);
// console.log(numbers);
// -----------------------------------------end-----------------------------------------------

// Regular Expression: Sets and Ranges
// ------------------------------------------------------------------------------------------
// sets [..]
// let str = 'How cats, rats, and bats became Halloween animals';
// let re = /[cbr]ats/g;
// let results = str.match(re);
// console.log(results);

// Ranges [..-..]
let result = "It is 🍎".match(/[🍎🍅🍓]/u);

console.log(result);

// -----------------------------------------end-----------------------------------------------
