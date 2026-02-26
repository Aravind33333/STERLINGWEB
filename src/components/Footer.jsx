import React from 'react';
import { FlaskConical, Globe, ExternalLink } from 'lucide-react';

const Footer = ({ navigateTo }) => {
    return (
        <footer className="bg-[#ffffff] pt-20 pb-10 border-t border-[#dfdfdfe6]">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
                    <div className="lg:col-span-4">
                        <div className="flex items-center gap-3 mb-6 cursor-pointer" onClick={() => navigateTo('HOME')}>
                            <div className="w-10 h-10 flex items-center justify-center">
                                <img src="/logo.jpeg" alt="Sterling Dye Chem" className="h-full w-auto object-contain rounded" />
                            </div>
                            <span className="text-2xl font-black uppercase tracking-tighter text-[#050769aa]">STERLING DYE CHEM</span>
                        </div>
                        <p className="text-sm font-light text-[#050769aa]/80 leading-relaxed pr-4">
                            Setting global standards in Dyestuff manufacturing through technical innovation, molecular precision, and ecological responsibility.
                        </p>
                    </div>

                    <div className="lg:col-span-2 lg:col-start-6">
                        <h4 className="font-black text-[10px] uppercase tracking-[0.2em] mb-6 text-[#050769aa]">Divisions</h4>
                        <ul className="space-y-3 text-xs font-bold uppercase tracking-wider text-[#050769aa]/60">
                            <li><a href="#" className="hover:text-[#050769aa] transition-colors">Textiles</a></li>
                            <li><a href="#" className="hover:text-[#050769aa] transition-colors">Leather</a></li>
                            <li><a href="#" className="hover:text-[#050769aa] transition-colors">Paper & Ink</a></li>
                            <li><a href="#" className="hover:text-[#050769aa] transition-colors">Plastics</a></li>
                        </ul>
                    </div>

                    <div className="lg:col-span-2">
                        <h4 className="font-black text-[10px] uppercase tracking-[0.2em] mb-6 text-[#050769aa]">Company</h4>
                        <ul className="space-y-3 text-xs font-bold uppercase tracking-wider text-[#050769aa]/60">
                            <li><button onClick={() => navigateTo('ABOUT US')} className="hover:text-[#050769aa] transition-colors text-left">About Us</button></li>
                            <li><button onClick={() => navigateTo('PRINCIPLES')} className="hover:text-[#050769aa] transition-colors text-left">Principles</button></li>
                            <li><button onClick={() => navigateTo('PRODUCT')} className="hover:text-[#050769aa] transition-colors text-left">Products</button></li>
                            <li><button onClick={() => navigateTo('CONTACT US')} className="hover:text-[#050769aa] transition-colors text-left">Contact</button></li>
                        </ul>
                    </div>

                    <div className="lg:col-span-3">
                        <h4 className="font-black text-[10px] uppercase tracking-[0.2em] mb-6 text-[#050769aa]">Global Office</h4>
                        <p className="text-xs text-[#050769aa]/60 leading-relaxed font-bold uppercase tracking-wider mb-4">
                            124 Industrial Estate,<br />
                            Mumbai, Maharashtra,<br />
                            India - 400001
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-8 h-8 border border-[#dfdfdfe6] flex items-center justify-center text-[#050769aa]/60 hover:text-[#050769aa] hover:border-[#050769aa] transition-all"><Globe size={14} /></a>
                            <a href="#" className="w-8 h-8 border border-[#dfdfdfe6] flex items-center justify-center text-[#050769aa]/60 hover:text-[#050769aa] hover:border-[#050769aa] transition-all"><ExternalLink size={14} /></a>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-[#dfdfdfe6] flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-[9px] font-black uppercase tracking-[0.2em] text-[#050769aa]/40">© 2026 STERLING DYE CHEM.</p>
                    <div className="flex gap-6 text-[9px] font-black uppercase tracking-[0.2em] text-[#050769aa]/40">
                        <a href="#" className="hover:text-[#050769aa] transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-[#050769aa] transition-colors">Terms of Use</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
