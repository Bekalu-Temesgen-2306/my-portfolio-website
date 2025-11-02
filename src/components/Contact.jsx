import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, Instagram, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [errors, setErrors] = useState({});

  // Initialize EmailJS with environment variables or provided fallbacks
  useEffect(() => {
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || '6sYhEQTUf-hL0qlsT';
    emailjs.init(publicKey);
  }, []);

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Bekalu-Temesgen-2306', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/Bekalu-Temesgen2306', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/bekalu_tem2123', label: 'Twitter' },
    { icon: Instagram, href: 'https://instagram.com/bek_dad2306', label: 'Instagram' },
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'bekalutemesgen74@gmail.com',
      href: 'mailto:bekalutemesgen74@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+251 (992) 721-492',
      href: 'tel:+251992721492'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Bahir Dar University, Bahirdar, Ethiopia',
      href: 'https://maps.google.com/?q=Bahir+Dar+University'
    }
  ];

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitError('');

    try {
      // EmailJS template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'bekalutemesgen74@gmail.com',
        reply_to: formData.email,
        timestamp: new Date().toLocaleString()
      };

      // Get EmailJS credentials from environment variables or use provided fallbacks
      const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID || 'service_2phw778';
      const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'kAwN8pcWoAyxDBHfVL6mh';

      // Basic validation to catch common misconfiguration early
      if (!serviceId || !templateId) {
        throw new Error('EmailJS configuration invalid. Please set a valid Service ID and Template ID.');
      }

      // Send email using EmailJS
      // Some environments need the public key passed directly to send()
      const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || '6sYhEQTUf-hL0qlsT';
      const response = await emailjs.send(serviceId, templateId, templateParams, publicKey);

      if (response.status === 200) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      }
    } catch (error) {
      console.error('Email send error:', error);

      // Normalize error to a string message safely
      const errMsg =
        (typeof error === 'string' && error) ||
        (error && (error.message || error.text)) ||
        '';

      // Provide helpful error messages
      if (errMsg && errMsg.includes('not configured')) {
        setSubmitError('Email service not configured. Please contact me directly at bekalutemesgen74@gmail.com');
      } else if (errMsg && (errMsg.includes('Service not found') || errMsg.includes('service'))) {
        setSubmitError('Email service configuration error. Please contact me directly.');
      } else if (errMsg && (errMsg.includes('template') || errMsg.includes('Template'))){
        setSubmitError('Email template not found or invalid. Please contact me directly.');
      } else {
        setSubmitError(errMsg ? `Failed to send: ${errMsg}` : 'Failed to send message. Please try again or contact me directly via email.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Get In Touch</h2>
          <p className="text-lg text-text-muted max-w-3xl mx-auto">
            I'm always interested in new opportunities and exciting projects. 
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>
        </motion.div>

        <div className="grid grid-2 gap-8 items-start">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
              <p className="text-text-muted mb-8">
                I'm currently available for freelance work and full-time opportunities. 
                Let's discuss how we can work together to bring your ideas to life.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  target={info.label === 'Location' ? '_blank' : undefined}
                  rel={info.label === 'Location' ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="info-item flex items-center gap-4 p-4 rounded-lg transition-all duration-300 group"
                >
                  <div className="icon-circle bg-gradient-to-r from-primary to-secondary text-white group-hover:scale-110 transition-transform duration-300">
                    <info.icon size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">{info.label}</h4>
                    <p className="text-text-muted">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Me On: </h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    whileHover={{ y: -3, scale: 1.1 }}
                    className="social-link"
                  >
                    <social.icon size={24} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="card"
          >
            <h3 className="text-2xl font-bold mb-6">Send Message</h3>
            
            {/* Success Message */}
            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="success-message mb-6"
              >
                <div className="flex items-center gap-3 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                  <CheckCircle size={24} className="text-green-600 dark:text-green-400" />
                  <div>
                    <h4 className="font-semibold text-green-800 dark:text-green-200">Message Sent Successfully!</h4>
                    <p className="text-green-700 dark:text-green-300 text-sm">Thank you for reaching out. I'll get back to you soon!</p>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Error Message */}
            {submitError && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="error-message mb-6"
              >
                <div className="flex items-center gap-3 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                  <AlertCircle size={24} className="text-red-600 dark:text-red-400" />
                  <div>
                    <h4 className="font-semibold text-red-800 dark:text-red-200">Message Failed to Send</h4>
                    <p className="text-red-700 dark:text-red-300 text-sm">{submitError}</p>
                  </div>
                </div>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`form-input ${errors.name ? 'error' : ''}`}
                    placeholder="Your name"
                  />
                  {errors.name && <span className="error-text">{errors.name}</span>}
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`form-input ${errors.email ? 'error' : ''}`}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && <span className="error-text">{errors.email}</span>}
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`form-input ${errors.subject ? 'error' : ''}`}
                  placeholder="What's this about?"
                />
                {errors.subject && <span className="error-text">{errors.subject}</span>}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className={`form-textarea ${errors.message ? 'error' : ''}`}
                  placeholder="Tell me about your project or question..."
                />
                {errors.message && <span className="error-text">{errors.message}</span>}
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn btn-primary w-full"
              >
                {isSubmitting ? (
                  <>
                    <div className="spinner"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 