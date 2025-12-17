import React from 'react';
import { Mail, MessageCircle, Linkedin, Github } from 'lucide-react';

const ContactMe = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-6 text-white font-sans">
            {/* Section Header */}
            <div className="text-center mb-12">
                <h2 className="text-5xl font-bold text-slate-400 mb-2">Get In Touch</h2>
                <div className="flex justify-center gap-1">
                    <div className="h-1 w-12 bg-blue-500 rounded-full"></div>
                    <div className="h-1 w-3 bg-green-400 rounded-full"></div>
                    <div className="h-1 w-3 bg-purple-500 rounded-full"></div>
                </div>
            </div>

            {/* Main Card */}
            <div className="w-full max-w-4xl bg-gray-800 border border-slate-800 rounded-3xl p-8 md:p-16 shadow-2xl flex flex-col items-center">

                <div className="text-center mb-8">
                    <h3 className="text-xl md:text-2xl font-medium text-slate-300 mb-2">
                        Interested in collaborating or just want to say hi?
                    </h3>
                    <p className="text-2xl md:text-3xl font-bold text-white">
                        Feel free to reach out.
                    </p>
                </div>

                {/* Decorative Divider */}
                <div className="flex items-center w-full max-w-xs mb-10">
                    <div className="flex-1 h-1px bg-slate-700"></div>
                    <div className="mx-4 w-2 h-2 bg-indigo-500 rounded-full shadow-[0_0_10px_#6366f1]"></div>
                    <div className="flex-1 h-1px  bg-slate-700"></div>
                </div>

                {/* Social Icons */}
                <div className="flex gap-4 mb-10">
                    <a href='https://www.linkedin.com/in/kerolos-fayez-bb49361b1/' target='_blank' className="p-4 bg-slate-800/50 hover:bg-slate-700 rounded-full transition-all border border-slate-700">
                        <Linkedin size={24} className="text-slate-300 " />
                    </a>
                    <a href='https://github.com/kero1019?tab=repositories' target='_blank' className="p-4 bg-slate-800/50 hover:bg-slate-700 rounded-full transition-all border border-slate-700">
                        <Github size={24} className="text-slate-300" />
                    </a>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col md:flex-row gap-4 w-full justify-center mb-12">
                    <a href='mailto:kerolosfayez30@gmail.com' target='_blank' className="flex items-center justify-center gap-3 bg-[#5842f4] cursor-pointer hover:bg-[#4731d3] px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg shadow-indigo-500/20">
                        <Mail size={20} />
                        Send Me an Email
                    </a>

                    <a href='https://wa.me/20112943059' target='_blank' className="text-(--white-color) flex items-center justify-center gap-3 bg-[#00d95a] cursor-pointer hover:bg-[#00c250] px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg shadow-emerald-500/20">
                        <MessageCircle size={20} />
                        Message on WhatsApp
                    </a>
                </div>

                {/* Footer Info */}
                <div className="pt-8 border-t border-slate-800 w-full text-center">
                    <p className="text-slate-400 font-medium mb-2">
                        Available for freelance projects and full-time opportunities
                    </p>
                    <div className="flex items-center justify-center gap-2">
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                        </span>
                        <span className="text-sm text-slate-300 font-semibold uppercase tracking-wider">
                            Usually responds within 24 hours
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactMe;