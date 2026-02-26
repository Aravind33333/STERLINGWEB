import React from 'react';
import { ShieldCheck, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const Hero = ({ slides, currentSlide, setCurrentSlide, nextSlide, prevSlide }) => {
    return (
        <section className="relative h-screen min-h-[700px] overflow-hidden bg-[#050769aa]">
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                        }`}
                >
                    <div className="absolute inset-0 bg-[#050769aa]/80 mix-blend-multiply z-20"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050769aa] to-transparent opacity-80 z-20"></div>

                    <div
                        className="absolute inset-0 bg-cover bg-center transform scale-105 transition-transform duration-[10000ms]"
                        style={{ backgroundImage: `url(${slide.image})`, transform: index === currentSlide ? 'scale(1.1)' : 'scale(1)' }}
                    ></div>

                    <div className="relative z-30 h-full max-w-7xl mx-auto px-6 flex flex-col justify-center items-center text-center">
                        <div className={`transition-all duration-1000 transform flex flex-col items-center ${index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                            <div className="inline-flex items-center gap-2 px-4 py-2 border border-[#ffffff]/30 text-[#ffffff] text-[10px] font-bold tracking-[0.3em] uppercase mb-8 backdrop-blur-sm">
                                <ShieldCheck size={14} /> Global Chemical Solutions
                            </div>
                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-[#ffffff] leading-[1] mb-8 max-w-5xl uppercase tracking-tighter">
                                {slide.title}
                            </h1>
                            <p className="text-lg md:text-xl text-[#ffffff]/80 max-w-2xl mb-12 font-light leading-relaxed">
                                {slide.subtitle}
                            </p>
                            <button className="group px-10 py-5 bg-[#ffffff] text-[#050769aa] font-black uppercase tracking-widest text-[11px] flex items-center gap-4 hover:bg-[#dfdfdfe6] transition-all">
                                {slide.cta} <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>
                </div>
            ))}

            <div className="absolute bottom-10 left-0 right-0 z-40 flex justify-between items-center max-w-7xl mx-auto px-6">
                <div className="flex gap-3">
                    {slides.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrentSlide(i)}
                            className={`h-[2px] transition-all duration-500 ${i === currentSlide ? 'w-16 bg-[#ffffff]' : 'w-8 bg-[#ffffff]/30 hover:bg-[#ffffff]/60'}`}
                            aria-label={`Go to slide ${i + 1}`}
                        />
                    ))}
                </div>
                <div className="flex gap-2">
                    <button onClick={prevSlide} className="w-12 h-12 border border-[#ffffff]/30 text-[#ffffff] hover:bg-[#ffffff] hover:text-[#050769aa] transition-all flex items-center justify-center backdrop-blur-sm">
                        <ChevronLeft size={20} />
                    </button>
                    <button onClick={nextSlide} className="w-12 h-12 border border-[#ffffff]/30 text-[#ffffff] hover:bg-[#ffffff] hover:text-[#050769aa] transition-all flex items-center justify-center backdrop-blur-sm">
                        <ChevronRight size={20} />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
