# 📧 Email Notification Setup Guide

This guide will help you set up email notifications for your portfolio contact form using EmailJS.

## 🚀 Quick Setup (3 Steps)

### Step 1: Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/) and sign up for a free account
2. Verify your email address

### Step 2: Set Up Email Service
1. **Add Email Service:**
   - Go to EmailJS Dashboard → Email Services
   - Click "Add New Service"
   - Choose "Gmail" (or your preferred email provider)
   - Connect your email account (bekalutemesgen74@gmail.com)
   - Note down the **Service ID** (e.g., `service_abc123`)

2. **Create Email Template:**
   - Go to EmailJS Dashboard → Email Templates
   - Click "Create New Template"
   - Use this template:

```html
Subject: New Contact Form Message from {{from_name}}

Hello Bekalu,

You have received a new message from your portfolio website:

**From:** {{from_name}} ({{from_email}})
**Subject:** {{subject}}

**Message:**
{{message}}

---
This message was sent from your portfolio contact form.
```

3. **Save the template** and note down the **Template ID** (e.g., `template_xyz789`)

### Step 3: Update Your Code
Replace the placeholder values in `src/components/Contact.jsx`:

```javascript
// Line 25: Replace 'YOUR_PUBLIC_KEY'
emailjs.init('YOUR_PUBLIC_KEY');

// Line 95-96: Replace with your actual IDs
const response = await emailjs.send(
  'YOUR_SERVICE_ID',    // e.g., 'service_abc123'
  'YOUR_TEMPLATE_ID',   // e.g., 'template_xyz789'
  templateParams
);
```

## 🔧 Detailed Configuration

### Finding Your Keys:
1. **Public Key:** Dashboard → Account → API Keys → Public Key
2. **Service ID:** Dashboard → Email Services → Your Service → Service ID
3. **Template ID:** Dashboard → Email Templates → Your Template → Template ID

### Advanced Template (Optional):
For a more professional email template:

```html
Subject: New Portfolio Contact: {{subject}}

Hi Bekalu,

A new message has been submitted through your portfolio contact form:

**Contact Details:**
- Name: {{from_name}}
- Email: {{from_email}}
- Subject: {{subject}}

**Message:**
{{message}}

---
Sent from: {{from_email}}
Time: {{timestamp}}
```

## 🎯 Alternative Solutions

### Option 1: Formspree (Easier)
If EmailJS seems complex, try [Formspree](https://formspree.io/):
1. Sign up at Formspree.io
2. Create a new form
3. Replace the form action with your Formspree endpoint

### Option 2: Netlify Forms (If hosting on Netlify)
Add `netlify` attribute to your form:
```html
<form netlify name="contact" method="POST">
```

### Option 3: Backend API
For more control, create a simple backend:
- Node.js + Express + Nodemailer
- Python + Flask + SMTP
- PHP + PHPMailer

## 🔒 Security Notes

1. **Never expose private keys** in client-side code
2. **Use environment variables** for sensitive data
3. **Enable CORS** if using a backend API
4. **Add rate limiting** to prevent spam

## 🧪 Testing

1. Fill out the contact form on your website
2. Submit the form
3. Check your email (bekalutemesgen74@gmail.com)
4. Verify the email contains all form data

## 🚨 Troubleshooting

### Common Issues:
- **"Service not found"**: Check your Service ID
- **"Template not found"**: Check your Template ID  
- **"Public key invalid"**: Verify your Public Key
- **No emails received**: Check spam folder, verify email service connection

### Debug Mode:
Add this to see detailed logs:
```javascript
emailjs.init('YOUR_PUBLIC_KEY', undefined, {
  useGlobal: true,
  debug: true
});
```

## 📱 Mobile Testing

Test the form on:
- ✅ Desktop browsers
- ✅ Mobile browsers
- ✅ Different screen sizes
- ✅ Slow internet connections

## 🎉 Success!

Once configured, you'll receive instant email notifications whenever someone contacts you through your portfolio!

---

**Need Help?** Check EmailJS documentation or contact their support team.
