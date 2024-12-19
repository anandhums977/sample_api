const jwt = require('jsonwebtoken');

// const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJ0b20iLCJyb2xlIjoiQVVUSE9SIiwiaWF0IjoxNzMwNDMyNTgwLCJleHAiOjE3MzA0MzYxODB9.QQlxdESJldY7M40qWhDv_lAJhoB_Cu-wnBXYCXVlpqI";
const secretKey = 'my_secretkey@123';
const options = {
    expiresIn:'1h'
}
const payload = {
    id:1,
    username:"tom",
    role:"AUTHOR"
};

const token = jwt.sign(payload, secretKey, options);

console.log(token);

// jwt.verify(token, secretKey,(err, data) => {

//     if(err){
//         console.log(`error is ->> ${err}`);
        
//     }
//     else{
//         console.log(`token is valid and data is ${JSON.stringify(data)}`);
        
//     }
// })






`

request
   |
middleware 1 (json parse)
   |
middleware 2 (jpg,png,jpeg,pdf, 1mb)
   |
midleware 3 (jwt token)
   
`