// const sgMail = require("@sendgrid/mail");

// console.log(process.env.SG_KEY);

// sgMail.setApiKey(process.env.SG_KEY);

// const sendSGMail = async ({
  // to,
  // sender,
  // subject,
  // html,
  // attachments,
  // text,
// }) => {
//   try {
//     const from = "shreyanshshah242@gmail.com";

//     const msg = {
//       to: to, // Change to your recipient
//       from: from, // Change to your verified sender
//       subject: subject,
//       html: html,
//       // text: text,
//       attachments,
//     };

//     console.log(msg);
    
//     return sgMail.send(msg);
//   } catch (error) {
//     console.log(error);
//   }
// };

// exports.sendEmail = async (args) => {
//   if (!process.env.NODE_ENV === "development") {
//     return Promise.resolve();
//   } else {
//     return sendSGMail(args);
//   }
// };

/*
const ElasticEmail = require('@elasticemail/elasticemail-client');
const apiKey = process.env.ELASTIC_EMAIL_API_KEY;

const sendEmail = async ({   
  to,
  subject,
  body,
  attachments
}) => {
  try {
    // Assuming there's a send function in your Elastic Email API client
    const response = await ElasticEmail.send(apiKey, {
      to: to,
      subject: subject,
      body: body,
      attachments: attachments
    });

    console.log('Email sent:', response);
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

exports.sendEmail = async (args) => {
  if (process.env.NODE_ENV === 'development') {
    return sendEmail(args);
  } else {
    return Promise.resolve();
  }
};
*/
const ElasticEmail = require("@elasticemail/elasticemail-client");
const dotenv = require("dotenv");

// Load environment variables from .env file
dotenv.config();

// Get API key from environment variable
const apiKey = process.env.ELASTIC_EMAIL_API_KEY;

const sendEmail = async ({
  to,
  subject,
  bodyHtml,
  bodyText,
  attachments,
}) => {
  try {
    // Create an instance of ElasticEmail client
    const client = new ElasticEmail.Client(apiKey);

    // Send email using ElasticEmail API
    const response = await client.Api.TransactionalEmails.send({
      apiKey: apiKey,
      subject: subject,
      from: "ak7032003@gmail.com",
      to: to,
      bodyHtml: bodyHtml,
      bodyText: bodyText,
      attachments: attachments,
    });

    console.log("Email sent:", response);
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

exports.sendEmail = async (args) => {
  if (process.env.NODE_ENV === "development") {
    return sendEmail(args);
  } else {
    return Promise.resolve();
  }
};

// const ElasticEmail = require('@elasticemail/elasticemail-client');
// const apiKey = process.env.ELASTIC_EMAIL_API_KEY; // Use the correct environment variable name

// const sendEmail = async ({ to, subject, html, attachments }) => {
//   try {
//     const from = 'ak7032003@gmail.com'; // Replace with your verified sender email

//     const emailParams = {
//       to: to,
//       from: from,
//       subject: subject,
//       bodyHtml: html,
//       attachments: attachments,
//     };

//     const elasticEmailClient = new ElasticEmail({ apiKey }); // Create an instance here

//     const response = await elasticEmailClient.send(emailParams);
//     console.log('Email sent successfully:', response);
//     return response;
//   } catch (error) {
//     console.error('Error sending email:', error);
//     throw error;
//   }
// };

// exports.sendEmail = async (args) => {
//   if (process.env.NODE_ENV !== 'development') {
//     return Promise.resolve();
//   } else {
//     return sendEmail(args);
//   }
// };
