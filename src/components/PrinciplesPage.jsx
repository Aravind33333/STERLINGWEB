import React from 'react';
import { Shield, Leaf, Award } from 'lucide-react';

const PrinciplesPage = () => {
    return (
        <div className="pt-24">
            <div className="bg-[#ffffff] pt-24 pb-16">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-[2px] bg-[#050769aa]"></div>
                        <span className="text-[10px] font-black tracking-[0.3em] uppercase text-[#050769aa]">Core Philosophy</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-[#050769aa] mb-12">Principles of <br /> Excellence</h1>
                </div>
            </div>

            <section className="relative h-[500px] overflow-hidden">
                <img
                    src="/images/principles.png"
                    alt="Sustainability"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#050769aa]/60 flex items-center">
                    <div className="max-w-7xl mx-auto px-6">
                        <p className="text-3xl font-light text-[#ffffff] max-w-3xl leading-relaxed">
                            "We believe that industrial progress must not come at the cost of our planet's future.
                            Our chemistry is built on a foundation of responsibility."
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-[#ffffff]">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">
                    {[
                        {
                            title: "Sustainability",
                            desc: "Implementing ZDHC standards to eliminate hazardous chemicals from the global supply chain.",
                            icon: Leaf
                        },
                        {
                            title: "Quality Control",
                            desc: "Every batch undergoes rigorous HPLC testing ensuring 99.9% consistency in hue and stability.",
                            icon: Shield
                        },
                        {
                            title: "Ethics",
                            desc: "Full transparency in our supply chain and commitment to fair labor practices globally.",
                            icon: Award
                        }
                    ].map((item, i) => (
                        <div key={i} className="flex flex-col gap-6">
                            <div className="w-16 h-16 bg-[#050769aa]/10 flex items-center justify-center text-[#050769aa]">
                                <item.icon size={32} />
                            </div>
                            <h3 className="text-2xl font-black uppercase tracking-tight text-[#050769aa]">{item.title}</h3>
                            <p className="text-[#050769aa]/70 font-light leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="py-24 bg-[#dfdfdfe6]/20 border-t border-[#dfdfdfe6]">
                <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
                    <h2 className="text-3xl font-black uppercase tracking-tight text-[#050769aa] mb-8">Compliance & Certifications</h2>
                    <div className="flex flex-wrap justify-center gap-12 grayscale opacity-60">
                        {['ISO 9001:2026', 'ZDHC Level 3', 'OEKO-TEX', 'REACH Compliant'].map(cert => (
                            <div key={cert} className="text-xl font-black tracking-widest uppercase border-2 border-[#050769aa] px-6 py-2">
                                {cert}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PrinciplesPage;
