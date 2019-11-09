// khai báo import module express
const express = require('express');
// app này là 1 instance (1 thực thể của class express)
const app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
var morgan = require('morgan');
app.use(morgan('combined'));
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
// 3.	Khai báo 1 API với các yêu cầu sau:
//     -	Method API: POST
// -	url (đường dẫn API): localhost:3000/add-two-number
// -	body (dữ liệu mà cilent (post man gửi lên trong body)): {number_1: “1312312”, number_2: “2312312”}
// -	response trả về: {data: “kết quả của phép cộng 2 số trên”}
app.post('/add-two-number',function (req,res) {
  //post man gửi lên trong body?
  //console.log(req)
  var body = req.body;
  var number_1 = body.number_1;
  var number_2 = body.number_2;
  var kq= number_1 + number_2;
  res.send({data: kq});
})
// -	Method API: POST
// -	url (đường dẫn API): localhost:3000/increment-item-in-array
// -	body (dữ liệu mà cilent (post man gửi lên trong body)): {array_data: [1,2,3,4,5]}
// -	response trả về: {data: “trả về array mà mỗi phần tử được cộng thêm 5 ([6,7,8,9,10])”}
app.post('/increment-item-in-array',function (req,res) {
  var body = req.body;
  var array_data = body.array_data;
  array_data.reverse();
  res.send({data:array_data });
  //console.log(array_data)
})

// 5.	Khai báo 1 API với các yêu cầu sau:
//     -	Method API: GET
// -	url (đường dẫn API): localhost:3000/:first_name/return-my-name?last_name=”tên mấy chú”
// -	response trả về: {data: “tên được lấy ra từ params và query trong url get ở trên”}
// localhost:3000/nguyendang/return-my-name?last_name=sang  nguyendang sang

app.get('/:first_name/return-my-name',function (req,res) {
  // params là gi??, lấy data trong params
  var name = req.params.first_name;
  var name2 = req.query.last_name;
  var kq= name + " " + name2;
  res.send({data: kq});
})
app.listen(3000, () => {
  console.log('app listen on port 3000 !');
})

// sang nguyen code here
