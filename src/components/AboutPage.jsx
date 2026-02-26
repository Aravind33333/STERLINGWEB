import React from 'react';
import CorporateProfile from './CorporateProfile';
import Infrastructure from './Infrastructure';

const AboutPage = () => {
    return (
        <div className="pt-24">
            <div className="bg-[#050769aa] py-24 text-[#ffffff]">
                <div className="max-w-7xl mx-auto px-6">
                    <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6">Our Journey</h1>
                    <p className="text-xl opacity-80 max-w-2xl font-light leading-relaxed">
                        Since 1996, Sterling Dye Chem has been at the forefront of chemical innovation,
                        transforming industrial manufacturing with a focus on precision and sustainability.
                    </p>
                </div>
            </div>

            <CorporateProfile />

            <section className="py-24 bg-[#dfdfdfe6]/20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl font-black uppercase tracking-tighter text-[#050769aa] mb-8">Vision & Mission</h2>
                            <div className="space-y-8">
                                <div className="p-8 bg-[#ffffff] border-l-4 border-[#050769aa] shadow-sm">
                                    <h3 className="text-xl font-black uppercase mb-3 text-[#050769aa]">Our Vision</h3>
                                    <p className="text-[#050769aa]/70 leading-relaxed font-light">
                                        To be the most trusted global manufacturer of specialty chemicals,
                                        defined by our commitment to molecular excellence and ecological stewardship.
                                    </p>
                                </div>
                                <div className="p-8 bg-[#ffffff] border-l-4 border-[#050769aa] shadow-sm">
                                    <h3 className="text-xl font-black uppercase mb-3 text-[#050769aa]">Our Mission</h3>
                                    <p className="text-[#050769aa]/70 leading-relaxed font-light">
                                        To empower the textile, leather, and polymer industries with high-performance
                                        auxiliaries and dyes while minimizing the environmental footprint of industrial chemistry.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="relative aspect-video bg-[#050769aa]/10 overflow-hidden">
                            <img
                                src="/images/hero_2.png"
                                alt="Innovation"
                                className="w-full h-full object-cover grayscale opacity-50"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <Infrastructure />
        </div>
    );
};

export default AboutPage;
