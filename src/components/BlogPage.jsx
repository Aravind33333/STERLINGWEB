import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';

const BlogPage = () => {
    const posts = [
        {
            title: "The Shift Toward Carbon-Neutral Dyes",
            date: "Feb 24, 2026",
            category: "Sustainability",
            excerpt: "Exploring the next generation of bio-based dyestuffs that reduce the carbon footprint of the textile industry."
        },
        {
            title: "Optimizing High-Concentration Reactive Dyes",
            date: "Jan 15, 2026",
            category: "Technical",
            excerpt: "Technical analysis on achieving deeper shades with 30% less water usage in industrial dyeing processes."
        },
        {
            title: "Global Supply Chain Resilience in 2026",
            date: "Dec 10, 2025",
            category: "Market News",
            excerpt: "How Sterling Dye Chem is navigating global logistics challenges to ensure timely delivery to 40+ countries."
        }
    ];

    return (
        <div className="pt-24 bg-[#ffffff]">
            <div className="py-24 border-b border-[#dfdfdfe6]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-[2px] bg-[#050769aa]"></div>
                        <span className="text-[10px] font-black tracking-[0.3em] uppercase text-[#050769aa]">Industry Insights</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-[#050769aa]">Technical Blog</h1>
                </div>
            </div>

            <section className="py-24">
                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-16">
                    <div className="lg:col-span-8 space-y-20">
                        {posts.map((post, i) => (
                            <article key={i} className="group">
                                <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.2em] text-[#050769aa]/40 mb-4">
                                    <span className="text-[#050769aa]">{post.category}</span>
                                    <span>•</span>
                                    <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                                </div>
                                <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-[#050769aa] mb-6 group-hover:text-[#050769aa]/70 transition-colors">
                                    {post.title}
                                </h2>
                                <p className="text-lg text-[#050769aa]/70 font-light leading-relaxed mb-8 max-w-2xl">
                                    {post.excerpt}
                                </p>
                                <button className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-[#050769aa] pb-1 border-b-2 border-[#050769aa] hover:gap-5 transition-all">
                                    Read Analysis <ArrowRight size={14} />
                                </button>
                            </article>
                        ))}
                    </div>

                    <div className="lg:col-span-4 space-y-12">
                        <div className="relative aspect-square bg-[#050769aa]/10 overflow-hidden">
                            <img
                                src="images/blog_news.png"
                                alt="Newsletter"
                                className="w-full h-full object-cover grayscale opacity-50"
                            />
                            <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-[#050769aa] to-transparent">
                                <h3 className="text-xl font-black uppercase text-[#ffffff] mb-4">Subscribe to Technical Reports</h3>
                                <div className="flex">
                                    <input
                                        type="email"
                                        placeholder="Corporate Email"
                                        className="bg-[#ffffff] px-4 py-3 text-sm focus:outline-none w-full"
                                    />
                                    <button className="bg-[#050769aa] text-[#ffffff] px-6 transition-colors hover:bg-[#050769aa]/80">
                                        <ArrowRight size={20} />
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="p-8 border border-[#dfdfdfe6]">
                            <h3 className="text-lg font-black uppercase text-[#050769aa] mb-6">Categories</h3>
                            <ul className="space-y-4 text-sm font-bold uppercase tracking-widest text-[#050769aa]/60">
                                {['Technical Analysis', 'Sustainability', 'Market Reports', 'Case Studies'].map(cat => (
                                    <li key={cat} className="hover:text-[#050769aa] cursor-pointer flex justify-between">
                                        <span>{cat}</span>
                                        <span className="text-[10px] opacity-30">05</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BlogPage;
