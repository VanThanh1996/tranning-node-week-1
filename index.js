// khai báo import module express
const express = require('express');
// app này là 1 instance (1 thực thể của class express)
const app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
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
//bai3 word
app.post('/add-two-number' ,function(req,res){
    var body = req.body;
    var number_1 = req.body.number_1;
    var number_2 = req.body.number_2;
    var kq = number_1+number_2;
    res.send('number_1 + '+'number_2:='+ kq);
});
//bai4
app.post('/increment-item-in-array', function(req,res){
    var Mang = req.body.Mang;
    // let arr = Mang.map(item =>{
    //     return item + 5;
    // });
    Mang.forEach((item,index) => {
        Mang[index] = item + 5;
    });

    res.send(Mang);
});
//bai5
app.get('/:first_name/return-my-name', function (req,res){
    console.log(req.params.first_name);
    console.log(req.query.last_name);
    res.sendStatus(200);
});
//bai6
app.post('/turn-array',function (req,res){
    var arr = req.body.arr;
    // var mang = [];
    // for (let i = arr.length - 1; i >= 0; i--) {
    //     mang.push(arr[i])};
    var mang = arr.reverse();
    res.send({data: mang});
});
app.listen(3000, () => {
  console.log('app listen on port 3000 !');
});
//bai7
app.get('/uppercase-my-name',function (req,res){
    console.log(req.query.last_name.toUpperCase());

    res.sendStatus(200);
});
//bai8
app.get('/tolowercase-my-name',function (req,res){
    console.log(req.query.last_name.toLowerCase());

    res.sendStatus(200);
});
//bai9
app.get('/:number/round-up-number',function(req,res){
    console.log(Math.round(req.params.number));
    res.sendStatus(200);
});
app.get('/:number/round-down-number',function(req,res){
    console.log(Math.floor(req.params.number));
    res.sendStatus(200);
})
// Văn Phước GP Code Here

