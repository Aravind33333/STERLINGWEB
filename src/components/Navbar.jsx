import React from 'react';
import { FlaskConical, ChevronDown, Menu, X, Phone, Mail, MapPin, Globe } from 'lucide-react';

const Navbar = ({ isScrolled, currentPage, navLinks, navigateTo, mobileMenuOpen, setMobileMenuOpen }) => {
    return (
        <>
            {/* --- TOP BAR --- */}
            {/* <div className="hidden lg:block bg-[#050769aa] text-[#ffffff] py-2 border-b border-[#ffffff]/10">
                <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-[10px] font-bold uppercase tracking-widest">
                    <div className="flex gap-8">
                        <span className="flex items-center gap-2 hover:text-[#dfdfdfe6] transition-colors cursor-pointer"><Phone size={12} /> +91 (22) 2345 6789</span>
                        <span className="flex items-center gap-2 hover:text-[#dfdfdfe6] transition-colors cursor-pointer"><Mail size={12} /> sales@sterlingdyechem.com</span>
                    </div>
                    <div className="flex gap-6">
                        <span className="flex items-center gap-2"><MapPin size={12} /> Mumbai, India</span>
                        <span className="flex items-center gap-2 cursor-pointer hover:text-[#dfdfdfe6] transition-colors"><Globe size={12} /> ISO 9001:2026</span>
                    </div>
                </div>
            </div> */}

            {/* --- NAVIGATION --- */}
            <nav className={`fixed w-full z-50 transition-all duration-700 top-0 ${isScrolled || currentPage !== 'HOME'
                    ? 'bg-[#ffffff]/80 backdrop-blur-md py-4 shadow-xl border-b border-[#050769aa]/10'
                    : 'bg-transparent py-8'
                }`}>
                <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">

                    {/* LOGO */}
                    <div className="flex items-center gap-4 cursor-pointer" onClick={() => navigateTo('HOME')}>
                        <div className="flex items-center justify-center transition-all duration-500">
                            <img src="/logo.jpeg" alt="Sterling Dye Chem" className="h-10 w-auto object-contain rounded" />
                        </div>
                        <div className="flex flex-col">
                            <span className={`text-2xl font-black tracking-tight uppercase leading-none ${isScrolled || currentPage !== 'HOME' ? 'text-[#050769aa]' : 'text-[#ffffff]'}`}>
                                STERLING <span className="font-light">DYE CHEM</span>
                            </span>
                        </div>
                    </div>

                    {/* DESKTOP MENU */}
                    <div className="hidden xl:flex items-center text-[12px] font-medium tracking-widest uppercase">
                        {navLinks.map((link, index) => (
                            <React.Fragment key={link.name}>
                                <div
                                    className={`relative group px-6 py-2 flex items-center gap-1 cursor-pointer transition-colors ${(isScrolled || currentPage !== 'HOME') ? 'text-[#050769aa]/80 hover:text-[#050769aa]' : 'text-[#ffffff]/90 hover:text-[#ffffff]'
                                        } ${currentPage === link.name ? ((isScrolled || currentPage !== 'HOME') ? 'font-black text-[#050769aa]' : 'font-black text-[#ffffff]') : ''}`}
                                    onClick={() => navigateTo(link.name)}
                                >
                                    {link.name}
                                    {link.hasDropdown && <ChevronDown size={14} className="ml-1 opacity-70" />}
                                    <span className={`absolute bottom-0 left-6 right-6 h-[2px] transition-all duration-300 scale-x-0 group-hover:scale-x-100 ${isScrolled || currentPage !== 'HOME' ? 'bg-[#050769aa]' : 'bg-[#ffffff]'}`}></span>
                                </div>
                                {index < navLinks.length - 1 && (
                                    <div className={`w-[1px] h-4 ${isScrolled || currentPage !== 'HOME' ? 'bg-[#dfdfdfe6]' : 'bg-[#ffffff]/30'}`}></div>
                                )}
                            </React.Fragment>
                        ))}
                    </div>

                    <div className="flex items-center gap-6">
                        <button
                            className={`hidden sm:flex items-center gap-2 text-[10px] font-black uppercase tracking-widest border-2 px-4 py-2 transition-all ${isScrolled || currentPage !== 'HOME'
                                ? 'border-[#050769aa] text-[#050769aa] hover:bg-[#050769aa] hover:text-[#ffffff]'
                                : 'border-[#ffffff] text-[#ffffff] hover:bg-[#ffffff] hover:text-[#050769aa]'
                                }`}
                            onClick={() => navigateTo('LOGIN')}
                        >
                            Admin
                        </button>
                        <button className={`xl:hidden ${isScrolled || currentPage !== 'HOME' ? 'text-[#050769aa]' : 'text-[#ffffff]'}`} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            {mobileMenuOpen && (
                <div className="fixed inset-0 z-[100] bg-[#ffffff] flex flex-col p-6 animate-in slide-in-from-top duration-300">
                    <div className="flex justify-between items-center mb-12">
                        <span className="text-xl font-black uppercase tracking-tighter text-[#050769aa]">STERLING DYE CHEM</span>
                        <button className="text-[#050769aa]" onClick={() => setMobileMenuOpen(false)}>
                            <X size={32} />
                        </button>
                    </div>
                    <div className="flex flex-col gap-8 text-2xl font-black uppercase tracking-tighter text-[#050769aa]">
                        {navLinks.map(link => (
                            <button
                                key={link.name}
                                className="border-b border-[#dfdfdfe6] pb-4 text-left flex items-center justify-between"
                                onClick={() => navigateTo(link.name)}
                            >
                                {link.name}
                                {link.hasDropdown && <ChevronDown size={20} className="opacity-50" />}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;
