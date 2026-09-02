import React from 'react';
import { Mail, MessageCircle, Linkedin, Github } from 'lucide-react';

const ContactMe = () => {
    return (
        <section id="contact" className="flex min-h-screen flex-col items-center justify-center px-4 py-16 text-(--white-color) font-sans scroll-mt-28 sm:p-6">
            {/* Section Header */}
            <div className="mb-8 text-center sm:mb-12">
                <h2 className="mb-2 text-3xl font-bold text-(--white-color) sm:text-5xl">Get In Touch</h2>
                <div className="flex justify-center gap-1">
                    <div className="h-1 w-12 bg-blue-500 rounded-full"></div>
                    <div className="h-1 w-3 bg-green-400 rounded-full"></div>
                    <div className="h-1 w-3 bg-purple-500 rounded-full"></div>
                </div>
            </div>

            {/* Main Card */}
            <div className="flex w-full max-w-4xl flex-col items-center rounded-2xl border border-(--surface-border-color) bg-(--second-background-color) p-6 shadow-2xl sm:rounded-3xl sm:p-8 md:p-16">

                <div className="text-center mb-8">
                    <h3 className="mb-2 text-lg font-medium text-(--text-color) sm:text-xl md:text-2xl">
                        Interested in collaborating or just want to say hi?
                    </h3>
                    <p className="text-xl font-bold text-(--white-color) sm:text-2xl md:text-3xl">
                        Feel free to reach out.
                    </p>
                </div>

                {/* Decorative Divider */}
                <div className="flex items-center w-full max-w-xs mb-10">
                    <div className="flex-1 h-px bg-(--divider-color)"></div>
                    <div className="mx-4 w-2 h-2 bg-indigo-500 rounded-full shadow-[0_0_10px_#6366f1]"></div>
                    <div className="flex-1 h-px bg-(--divider-color)"></div>
                </div>

                {/* Social Icons */}
                <div className="flex gap-4 mb-10">
                    <a href='https://www.linkedin.com/in/kerolos-fayez-bb49361b1/' target='_blank' rel="noopener noreferrer" aria-label="Visit Kerolos Fayez on LinkedIn" className="rounded-full border border-(--surface-border-color) bg-(--interactive-background-color) p-4 transition-all hover:bg-(--interactive-hover-color)">
                        <Linkedin size={24} className="text-(--text-color)" />
                    </a>
                    <a href='https://github.com/kero1019?tab=repositories' target='_blank' rel="noopener noreferrer" aria-label="Visit Kerolos Fayez on GitHub" className="rounded-full border border-(--surface-border-color) bg-(--interactive-background-color) p-4 transition-all hover:bg-(--interactive-hover-color)">
                        <Github size={24} className="text-(--text-color)" />
                    </a>
                </div>

                {/* Action Buttons */}
                <div className="mb-10 flex w-full flex-col justify-center gap-4 sm:mb-12 md:flex-row">
                    <a href='mailto:kerolosfayez30@gmail.com' className="flex items-center justify-center gap-3 rounded-full bg-[#5842f4] px-6 py-4 text-base font-bold text-white shadow-lg shadow-indigo-500/20 transition-all hover:bg-[#4731d3] sm:px-8 sm:text-lg">
                        <Mail size={20} />
                        Send Me an Email
                    </a>

                    <a href='https://wa.me/20112943059' target='_blank' rel="noopener noreferrer" className="flex items-center justify-center gap-3 rounded-full bg-[#00d95a] px-6 py-4 text-base font-bold text-white shadow-lg shadow-emerald-500/20 transition-all hover:bg-[#00c250] sm:px-8 sm:text-lg">
                        <MessageCircle size={20} />
                        Message on WhatsApp
                    </a>
                </div>

                {/* Footer Info */}
                <div className="pt-8 border-t border-(--surface-border-color) w-full text-center">
                    <p className="text-(--text-color) font-medium mb-2">
                        Available for freelance projects and full-time opportunities
                    </p>
                    <div className="flex items-center justify-center gap-2">
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                        </span>
                        <span className="text-sm text-(--text-color) font-semibold uppercase tracking-wider">
                            Usually responds within 24 hours
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactMe;
