import React from 'react';

const CorporateProfile = () => {
    return (
        <section className="py-24 lg:py-32 bg-[#ffffff] border-b border-[#dfdfdfe6]">
            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-16 items-center">
                <div className="lg:col-span-5 relative">
                    <div className="aspect-[3/4] bg-[#dfdfdfe6] relative z-10">
                        <div className="absolute inset-0 bg-cover bg-center grayscale mix-blend-multiply opacity-80" style={{ backgroundImage: 'url("images/corporate_profile.png")' }}></div>
                        <div className="absolute inset-0 bg-[#050769aa]/10"></div>
                    </div>
                    <div className="absolute -bottom-8 -right-8 lg:-right-16 bg-[#050769aa] text-[#ffffff] p-8 lg:p-12 z-20 border-4 border-[#ffffff]">
                        <div className="text-6xl font-black mb-2 tracking-tighter">30<span className="text-[#ffffff]/50">+</span></div>
                        <div className="text-[10px] font-bold uppercase tracking-[0.2em] leading-relaxed opacity-80">Years of<br />Excellence</div>
                    </div>
                </div>

                <div className="lg:col-span-7 lg:pl-12">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-[2px] bg-[#050769aa]"></div>
                        <span className="text-[10px] font-black tracking-[0.3em] uppercase text-[#050769aa]">Who We Are</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black mb-8 uppercase tracking-tighter leading-tight text-[#050769aa]">
                        Engineering the <br /> Molecules of Tomorrow
                    </h2>
                    <div className="space-y-6 text-[#050769aa]/80 text-lg font-light leading-relaxed mb-12">
                        <p>
                            Sterling Dye Chem is a globally recognized manufacturer of premium Dyestuffs and Specialty Auxiliaries. We bridge the gap between advanced chemical synthesis and practical industrial application.
                        </p>
                        <p>
                            Our rigorous R&D processes and commitment to sustainable manufacturing have made us the preferred partner for textile, leather, and polymer industries across 40+ countries.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-8 border-t border-[#dfdfdfe6]">
                        {[
                            { label: "Production Plants", val: "03" },
                            { label: "Global Presence", val: "40+" },
                            { label: "ISO Certified", val: "Yes" },
                        ].map((stat, i) => (
                            <div key={i}>
                                <div className="text-3xl font-black text-[#050769aa] mb-1">{stat.val}</div>
                                <div className="text-[9px] font-bold uppercase tracking-widest text-[#050769aa]/50">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CorporateProfile;
