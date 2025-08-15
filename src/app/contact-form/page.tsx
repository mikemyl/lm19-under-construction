'use client';

import {useState} from 'react';
import emailjs from '@emailjs/browser';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Link from "next/link";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            // EmailJS configuration - you'll need to replace these with your actual values
            const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'your_service_id';
            const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'your_template_id';
            const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'your_public_key';

            const templateParams = {
                name: formData.name,
                email: formData.email,
                message: formData.message,
                to_email: 'info@lm19.gr',
            };

            console.log(templateParams);
            await emailjs.send(serviceId, templateId, templateParams, publicKey);

            setSubmitStatus('success');
            setFormData({name: '', email: '', message: ''});
        } catch (error) {
            console.error('EmailJS error:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-white">
            <Header/>

            {/* Contact Form Content */}
            <section className="pt-16 px-6 lg:px-8 max-w-4xl mx-auto">
                <div className="mb-8">
                    <Link
                        href="/contact"
                        className="text-[#2B292A] hover:opacity-70 transition-opacity inline-flex items-center"
                        style={{fontFamily: 'N27, sans-serif'}}
                    >
                        ← Back to Contact
                    </Link>
                </div>

                <h1 className="text-4xl lg:text-7xl text-[#2B292A] mb-12 text-center"
                    style={{fontFamily: 'N27, sans-serif', fontWeight: 900}}>
                    get in touch
                </h1>

                <div className="max-w-2xl mx-auto">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Name Field */}
                        <div>
                            <label htmlFor="name" className="block text-lg font-bold text-[#2B292A] mb-2"
                                   style={{fontFamily: 'N27, sans-serif'}}>
                                Full Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                                className="w-full px-4 py-3 border border-gray-300 focus:border-[#2B292A] focus:outline-none text-lg"
                                style={{fontFamily: 'N27, sans-serif'}}
                                placeholder="Your full name"
                            />
                        </div>

                        {/* Email Field */}
                        <div>
                            <label htmlFor="email" className="block text-lg font-bold text-[#2B292A] mb-2"
                                   style={{fontFamily: 'N27, sans-serif'}}>
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                                className="w-full px-4 py-3 border border-gray-300 focus:border-[#2B292A] focus:outline-none text-lg"
                                style={{fontFamily: 'N27, sans-serif'}}
                                placeholder="your.email@example.com"
                            />
                        </div>

                        {/* Message Field */}
                        <div>
                            <label htmlFor="message" className="block text-lg font-bold text-[#2B292A] mb-2"
                                   style={{fontFamily: 'N27, sans-serif'}}>
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                required
                                rows={6}
                                className="w-full px-4 py-3 border border-gray-300 focus:border-[#2B292A] focus:outline-none text-lg resize-vertical"
                                style={{fontFamily: 'N27, sans-serif'}}
                                placeholder="Tell us about your project or any questions you have..."
                            />
                        </div>

                        {/* Submit Button */}
                        <div className="text-center pt-4">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="bg-[#2B292A] text-white px-12 py-4 text-lg font-bold hover:opacity-90 transition-opacity disabled:opacity-50"
                                style={{fontFamily: 'N27, sans-serif'}}
                            >
                                {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
                            </button>
                        </div>

                        {/* Status Messages */}
                        {submitStatus === 'success' && (
                            <div className="text-center text-green-600 font-bold"
                                 style={{fontFamily: 'N27, sans-serif'}}>
                                Thank you! Your message has been sent successfully.
                            </div>
                        )}
                        {submitStatus === 'error' && (
                            <div className="text-center text-red-600 font-bold" style={{fontFamily: 'N27, sans-serif'}}>
                                Sorry, there was an error sending your message. Please try again.
                            </div>
                        )}
                    </form>
                </div>
            </section>

            {/* Vertical divider line */}
            <div className="flex justify-center p-6 pb-0 mt-12">
                <div className="w-px h-16 lg:h-32 bg-[#2B292A]"></div>
            </div>

            <Footer/>
        </div>
    );
}