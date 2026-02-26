import React from 'react';
import { Mail, Phone, ArrowRight } from 'lucide-react';

const Contact = () => {
    return (
        <section className="py-24 lg:py-32 bg-[#050769aa] text-[#ffffff] relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#ffffff" strokeWidth="1" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
            </div>

            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
                <div>
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-[2px] bg-[#ffffff]"></div>
                        <span className="text-[10px] font-black tracking-[0.3em] uppercase">Connect With Us</span>
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-black uppercase tracking-tighter mb-8 leading-tight">
                        Request Technical Data & Samples
                    </h2>
                    <p className="text-lg opacity-80 mb-12 font-light leading-relaxed max-w-lg">
                        Our technical engineering team is ready to assist you with safety data sheets (SDS), technical specifications, and custom formulation requests.
                    </p>

                    <div className="space-y-6">
                        <div className="flex items-center gap-6">
                            <div className="w-12 h-12 border border-[#ffffff]/30 flex items-center justify-center">
                                <Mail size={20} className="text-[#ffffff]" />
                            </div>
                            <div>
                                <div className="text-[9px] font-bold uppercase tracking-widest opacity-60">General Inquiries</div>
                                <div className="font-bold text-lg tracking-wide">sales@sterlingdyechem.com</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-6">
                            <div className="w-12 h-12 border border-[#ffffff]/30 flex items-center justify-center">
                                <Phone size={20} className="text-[#ffffff]" />
                            </div>
                            <div>
                                <div className="text-[9px] font-bold uppercase tracking-widest opacity-60">Direct Support</div>
                                <div className="font-bold text-lg tracking-wide">+91 (22) 2345 6789</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-[#ffffff] p-8 lg:p-12 text-[#050769aa]">
                    <h3 className="text-2xl font-black uppercase mb-8 tracking-tighter">Business Inquiry</h3>
                    <div className="space-y-5">
                        <div className="grid grid-cols-2 gap-5">
                            <div>
                                <label className="block text-[9px] font-black uppercase tracking-widest mb-2 opacity-60">First Name</label>
                                <input type="text" className="w-full bg-[#dfdfdfe6]/30 border border-[#dfdfdfe6] p-3 text-sm focus:outline-none focus:border-[#050769aa] transition-colors" />
                            </div>
                            <div>
                                <label className="block text-[9px] font-black uppercase tracking-widest mb-2 opacity-60">Last Name</label>
                                <input type="text" className="w-full bg-[#dfdfdfe6]/30 border border-[#dfdfdfe6] p-3 text-sm focus:outline-none focus:border-[#050769aa] transition-colors" />
                            </div>
                        </div>
                        <div>
                            <label className="block text-[9px] font-black uppercase tracking-widest mb-2 opacity-60">Corporate Email</label>
                            <input type="email" className="w-full bg-[#dfdfdfe6]/30 border border-[#dfdfdfe6] p-3 text-sm focus:outline-none focus:border-[#050769aa] transition-colors" />
                        </div>
                        <div>
                            <label className="block text-[9px] font-black uppercase tracking-widest mb-2 opacity-60">Product Interest</label>
                            <select className="w-full bg-[#dfdfdfe6]/30 border border-[#dfdfdfe6] p-3 text-sm focus:outline-none focus:border-[#050769aa] transition-colors rounded-none appearance-none">
                                <option>Select a Category</option>
                                <option>Reactive Dyes</option>
                                <option>Acid Dyes</option>
                                <option>Specialty Pigments</option>
                                <option>Auxiliary Chemicals</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-[9px] font-black uppercase tracking-widest mb-2 opacity-60">Message / Requirements</label>
                            <textarea rows="4" className="w-full bg-[#dfdfdfe6]/30 border border-[#dfdfdfe6] p-3 text-sm focus:outline-none focus:border-[#050769aa] transition-colors resize-none"></textarea>
                        </div>
                        <button className="w-full bg-[#050769aa] text-[#ffffff] py-4 font-black uppercase tracking-[0.2em] text-[10px] hover:bg-[#050769aa]/90 transition-colors flex justify-center items-center gap-2 mt-2">
                            Submit Request <ArrowRight size={14} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
