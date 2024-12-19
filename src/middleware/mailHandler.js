const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport(
    {
        service: 'gmail',
        auth: {
          user: 'YOUR_MAIL',
          pass: 'YOUR APP PASS KEY'
        }
      }
);

const mailOptions = {
    from:'YOUR_MAIL',
    to:['RECIVER MAIL 1','RECIVER MAIL 2'],
    subject:'test mail',
    text: 'This is a sample mail from node application'
}




transporter.sendMail(mailOptions,(err,info)=>{ 
    if(err){
        console.log(`error occured sending mail ${err.message}`);
        
    }
    else{
        console.log(`mail send successfully `);
        
    }
 });