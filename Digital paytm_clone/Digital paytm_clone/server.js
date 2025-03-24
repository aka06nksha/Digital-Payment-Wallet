const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "your-email@gmail.com",
        pass: "your-password"
    }
});

app.post("/send-otp", (req, res) => {
    let { email } = req.body;
    let otp = Math.floor(1000 + Math.random() * 9000);
    
    let mailOptions = {
        from: "your-email@gmail.com",
        to: email,
        subject: "Your OTP",
        text: `Your OTP is ${otp}`
    };

    transporter.sendMail(mailOptions, (err, info) => {
        if (err) return res.status(500).send(err);
        res.send({ otp });
    });
});

app.listen(3000, () => console.log("Server running on port 3000"));
