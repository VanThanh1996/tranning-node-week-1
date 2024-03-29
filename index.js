// khai báo import module express
const express = require('express');
// app này là 1 instance (1 thực thể của class express)
const app = express();

/*
1.	Khai báo 1 API với các yêu cầu sau:
-	Method API: GET
-	url (đường dẫn API hay còn gọi là router): localhost:3000/get-my-name
-	response trả về: {data: “tên mấy chú”}
*/
// 1 router
// request: 1 yêu cầu được gửi lên từ client (browser, postman)
// response: dữ liệu mà server trả về cho client
app.get('/get-my-name', function (req, res) {
  // khai báo biến name để lưu tên mấy chú
  var name = "lol";
  res.send({data: name});
})

/*
2.	Khai báo 1 API với các yêu cầu sau:
-	Method API: GET
-	url (đường dẫn API hay còn gọi là router): localhost:3000/get-time-now
-	response trả về: {data: “ngày giờ hiện tại (Sat Oct 26 2019 21:49:08 GMT+0700)”}

*/

app.get('/get-time-now',function (req,res) {
  // cần biết hàm lấy thời gian hiện tại trong node js
  var now = new Date();
  res.send({data: now});
})

/*
3.	Khai báo 1 API với các yêu cầu sau:
-	Method API: GET
-	url (đường dẫn API hay còn gọi là router): localhost:3000/get-year-now
-	response trả về: {data: “[năm hiện tại]”}
*/
app.get('/get-year-now',function (req,res) {
  var now = new Date();
  var year = now.getFullYear();
  res.send({data: year});
})

app.listen(3000, () => {
  console.log('app listen on port 3000 !');
})



// câu hỏi bài tập
//1. function call back trong nodejs là gì ?
//2. router trong express là gì ?
