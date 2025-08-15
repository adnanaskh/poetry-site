const router = require('express').Router();
const nodemailer = require('nodemailer');
router.post('/', async (req, res) => {
  const { name, email, message } = req.body;
  try {
    let transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS }
    });
    let mailOptions = {
      from: email,
      to: process.env.EMAIL_RECEIVER,
      subject: `New message from ${name}`,
      text: message
    };
    await transporter.sendMail(mailOptions);
    res.status(200).json({ msg: 'Message sent successfully!' });
  } catch (error) {
    res.status(500).json({ msg: 'Server Error' });
  }
});
module.exports = router;