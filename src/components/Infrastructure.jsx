import React from 'react';
import { Microscope, Settings, ShieldCheck } from 'lucide-react';

const Infrastructure = () => {
    return (
        <section className="py-24 lg:py-32 bg-[#ffffff] border-t border-[#dfdfdfe6]">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto mb-20">
                    <span className="text-[10px] font-black tracking-[0.3em] uppercase text-[#050769aa] block mb-4">Infrastructure</span>
                    <h2 className="text-4xl font-black uppercase tracking-tighter text-[#050769aa]">Precision Manufacturing</h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        {
                            title: "R&D Laboratory",
                            desc: "Equipped with advanced spectrometers and color-matching software for bespoke synthesis.",
                            icon: Microscope
                        },
                        {
                            title: "Production Units",
                            desc: "High-capacity, automated reactor vessels ensuring batch-to-batch consistency.",
                            icon: Settings
                        },
                        {
                            title: "Quality Assurance",
                            desc: "Strict adherence to ISO 9001 and environmental compliance at every stage.",
                            icon: ShieldCheck
                        }
                    ].map((item, i) => (
                        <div key={i} className="group p-10 border border-[#dfdfdfe6] hover:border-[#050769aa] transition-colors duration-500 relative bg-[#ffffff]">
                            <div className="absolute top-0 left-0 w-0 h-1 bg-[#050769aa] group-hover:w-full transition-all duration-500"></div>
                            <div className="w-16 h-16 bg-[#dfdfdfe6]/30 flex items-center justify-center mb-8 text-[#050769aa] group-hover:bg-[#050769aa] group-hover:text-[#ffffff] transition-colors duration-500">
                                <item.icon size={28} />
                            </div>
                            <h3 className="text-xl font-black uppercase mb-4 tracking-tighter text-[#050769aa]">{item.title}</h3>
                            <p className="text-sm text-[#050769aa]/70 font-light leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Infrastructure;
