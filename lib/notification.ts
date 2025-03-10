import nodemailer from 'nodemailer';

const sendNotification = async (email: string, subject: string, message: string) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'your-email@gmail.com',
      pass: 'your-email-password',
    },
  });

  const mailOptions = {
    from: 'your-email@gmail.com',
    to: email,
    subject: subject,
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Notification sent');
  } catch (error) {
    console.error('Error sending notification:', error);
  }
};

export default sendNotification;
