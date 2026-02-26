import React from 'react';
import { FlaskConical, ArrowRight } from 'lucide-react';

const ProductCatalog = ({ categories, activeCategory, setActiveCategory, filteredProducts }) => {
    return (
        <section className="py-24 lg:py-32 bg-[#dfdfdfe6]/20">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div>
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-8 h-[2px] bg-[#050769aa]"></div>
                            <span className="text-[10px] font-black tracking-[0.3em] uppercase text-[#050769aa]">Our Inventory</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-[#050769aa]">Product Catalog</h2>
                    </div>

                    <div className="flex flex-wrap gap-2 md:gap-4">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-5 py-2 text-[10px] font-bold uppercase tracking-widest transition-all duration-300 border ${activeCategory === cat
                                    ? 'bg-[#050769aa] text-[#ffffff] border-[#050769aa]'
                                    : 'bg-transparent text-[#050769aa]/60 border-[#050769aa]/20 hover:border-[#050769aa] hover:text-[#050769aa]'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {filteredProducts.map((product, i) => (
                        <div key={i} className="group bg-[#ffffff] border border-[#dfdfdfe6] hover:border-[#050769aa]/50 transition-all duration-300 overflow-hidden flex flex-col h-full">
                            <div className="h-48 bg-[#dfdfdfe6]/30 flex items-center justify-center border-b border-[#dfdfdfe6] relative overflow-hidden">
                                <div className="absolute inset-0 bg-[#050769aa] opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                                <img src={product.image || "/images/products/reactive.png"} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                <span className="absolute top-3 right-3 text-[8px] font-black uppercase tracking-widest text-[#050769aa] bg-[#ffffff]/90 backdrop-blur-sm px-2 py-1 border border-[#dfdfdfe6] z-10">
                                    {product.category}
                                </span>
                            </div>

                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-lg font-black uppercase tracking-tight text-[#050769aa] mb-2">{product.name}</h3>

                                <div className="space-y-3 mt-auto pt-4 border-t border-[#dfdfdfe6]/50">
                                    <div className="flex justify-between items-center text-xs">
                                        <span className="text-[#050769aa]/50 font-bold uppercase tracking-widest text-[9px]">CAS No:</span>
                                        <span className="font-mono text-[#050769aa]">{product.cas}</span>
                                    </div>
                                    <div className="flex justify-between items-center text-xs">
                                        <span className="text-[#050769aa]/50 font-bold uppercase tracking-widest text-[9px]">Application:</span>
                                        <span className="text-[#050769aa] font-medium text-[10px] uppercase">{product.app}</span>
                                    </div>
                                </div>

                                <button className="mt-6 w-full py-3 bg-[#dfdfdfe6]/30 text-[#050769aa] text-[10px] font-black uppercase tracking-widest hover:bg-[#050769aa] hover:text-[#ffffff] transition-colors duration-300 flex items-center justify-center gap-2">
                                    Technical Specs <ArrowRight size={14} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductCatalog;
