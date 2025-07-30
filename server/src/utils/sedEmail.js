import nodemailer from 'nodemailer'

const sendEmail=async(to ,subject,mailBody)=>{
    try {
        const transpoter= nodemailer.createTransport({
            service:"gamil",
            auth:{
                user:process.env.GMAIL_USER,
                pass:process.env.GMAIL_PASSCODE,
            }
        });
        const mailOption={
            from:process.env.GMAIL_USER,
            to,
            subject,
            html:mailBody,
        };
        const result= await transpoter.sendMail(mailOption);
        console.log("Email Sent Successfully",result.messageId);
        return true;
        
    } catch (error) {

        console.error('Error sending Email',error);
        return false;
        
    }
};