import React, { useState } from 'react';
import { Plus, Trash2, Package, LogOut, Loader2, Image as ImageIcon } from 'lucide-react';

const AdminPanel = ({ products, onAdd, onDelete, onLogout }) => {
    const [isAdding, setIsAdding] = useState(false);
    const [newProduct, setNewProduct] = useState({
        name: '',
        category: 'Reactive Dyes',
        cas: '',
        app: '',
        image: '/images/products/reactive.png'
    });
    const [selectedFile, setSelectedFile] = useState(null);
    const [loading, setLoading] = useState(false);

    const categories = ['Reactive Dyes', 'Acid Dyes', 'Pigments', 'Auxiliaries', 'Direct Dyes', 'Disperse Dyes'];

    const handleAdd = async (e) => {
        e.preventDefault();
        setLoading(true);

        let finalImageUrl = newProduct.image;

        // Upload image first if a file is selected
        if (selectedFile) {
            const formData = new FormData();
            formData.append('image', selectedFile);

            try {
                const uploadRes = await fetch('http://localhost:5000/api/upload', {
                    method: 'POST',
                    body: formData
                });
                const uploadData = await uploadRes.json();
                finalImageUrl = uploadData.url;
            } catch (err) {
                console.error("Upload failed", err);
                setLoading(false);
                return; // Stop further execution if upload fails
            }
        }

        await onAdd({ ...newProduct, image: finalImageUrl });

        setLoading(false);
        setIsAdding(false);
        setSelectedFile(null);
        setNewProduct({
            name: '',
            category: 'Reactive Dyes',
            cas: '',
            app: '',
            image: '/images/products/reactive.png'
        });
    };

    return (
        <div className="pt-24 min-h-screen bg-[#dfdfdfe6]/20">
            <div className="bg-[#ffffff] border-b border-[#dfdfdfe6] py-12">
                <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                    <div>
                        <h1 className="text-4xl font-black uppercase tracking-tighter text-[#050769aa]">Inventory Management</h1>
                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#050769aa]/50 flex items-center gap-2 mt-2">
                            <Package size={14} /> {products.length} Products Active
                        </p>
                    </div>
                    <div className="flex gap-4">
                        <button
                            onClick={() => setIsAdding(!isAdding)}
                            className="bg-[#050769aa] text-[#ffffff] px-6 py-3 text-[10px] font-black uppercase tracking-widest flex items-center gap-2 hover:bg-[#050769aa]/90 transition-colors"
                        >
                            <Plus size={16} /> {isAdding ? 'Cancel' : 'Add Product'}
                        </button>
                        <button
                            onClick={onLogout}
                            className="border-2 border-[#050769aa] text-[#050769aa] px-6 py-3 text-[10px] font-black uppercase tracking-widest flex items-center gap-2 hover:bg-[#050769aa] hover:text-[#ffffff] transition-all"
                        >
                            <LogOut size={16} /> Logout
                        </button>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-12">
                {isAdding && (
                    <form onSubmit={handleAdd} className="bg-[#ffffff] p-8 border border-[#050769aa] mb-12 animate-in slide-in-from-top duration-500">
                        <h2 className="text-xl font-black uppercase text-[#050769aa] mb-8 border-b pb-4">New Product Details</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div>
                                <label className="block text-[9px] font-black uppercase tracking-widest mb-2 text-[#050769aa]/60">Product Name</label>
                                <input
                                    required
                                    className="w-full bg-[#dfdfdfe6]/30 border border-[#dfdfdfe6] p-3 text-sm focus:outline-none focus:border-[#050769aa]"
                                    value={newProduct.name}
                                    onChange={e => setNewProduct({ ...newProduct, name: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className="block text-[9px] font-black uppercase tracking-widest mb-2 text-[#050769aa]/60">Category</label>
                                <select
                                    className="w-full bg-[#dfdfdfe6]/30 border border-[#dfdfdfe6] p-3 text-sm focus:outline-none focus:border-[#050769aa] rounded-none appearance-none"
                                    value={newProduct.category}
                                    onChange={e => {
                                        let img = '/images/products/reactive.png';
                                        if (e.target.value === 'Acid Dyes') img = '/images/products/acid.png';
                                        if (e.target.value === 'Pigments') img = '/images/products/pigments.png';
                                        if (e.target.value === 'Auxiliaries') img = '/images/products/auxiliaries.png';
                                        setNewProduct({ ...newProduct, category: e.target.value, image: img });
                                    }}
                                >
                                    {categories.map(c => <option key={c} value={c}>{c}</option>)}
                                </select>
                            </div>
                            <div>
                                <label className="block text-[9px] font-black uppercase tracking-widest mb-2 text-[#050769aa]/60">CAS Number</label>
                                <input
                                    required
                                    className="w-full bg-[#dfdfdfe6]/30 border border-[#dfdfdfe6] p-3 text-sm focus:outline-none focus:border-[#050769aa]"
                                    value={newProduct.cas}
                                    onChange={e => setNewProduct({ ...newProduct, cas: e.target.value })}
                                />
                            </div>
                            <div className="lg:col-span-1">
                                <label className="block text-[9px] font-black uppercase tracking-widest mb-2 text-[#050769aa]/60">Application / Uses</label>
                                <input
                                    required
                                    className="w-full bg-[#dfdfdfe6]/30 border border-[#dfdfdfe6] p-3 text-sm focus:outline-none focus:border-[#050769aa]"
                                    value={newProduct.app}
                                    onChange={e => setNewProduct({ ...newProduct, app: e.target.value })}
                                />
                            </div>
                            <div className="lg:col-span-2">
                                <label className="block text-[9px] font-black uppercase tracking-widest mb-2 text-[#050769aa]/60">Upload Product Image (Recommended)</label>
                                <div className="flex gap-4">
                                    <input
                                        type="file"
                                        accept="image/*"
                                        className="hidden"
                                        id="product-image-upload"
                                        onChange={e => setSelectedFile(e.target.files[0])}
                                    />
                                    <label
                                        htmlFor="product-image-upload"
                                        className="flex-1 bg-[#dfdfdfe6]/30 border-2 border-dashed border-[#dfdfdfe6] p-3 text-sm flex items-center justify-center gap-3 cursor-pointer hover:border-[#050769aa] transition-colors"
                                    >
                                        <ImageIcon size={18} />
                                        {selectedFile ? selectedFile.name : 'Choose local image file...'}
                                    </label>
                                    <div className="w-12 h-12 bg-[#dfdfdfe6]/30 border border-[#dfdfdfe6] flex items-center justify-center text-[8px] uppercase font-bold text-[#050769aa]/30">
                                        {selectedFile ? 'Ready' : 'Icon'}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button
                            disabled={loading}
                            className="mt-10 bg-[#050769aa] text-[#ffffff] px-12 py-4 text-[10px] font-black uppercase tracking-widest flex items-center gap-2 hover:opacity-90 disabled:opacity-50"
                        >
                            {loading ? <Loader2 className="animate-spin" size={16} /> : <Plus size={16} />}
                            Publish to Catalog
                        </button>
                    </form>
                )}

                <div className="bg-[#ffffff] border border-[#dfdfdfe6] overflow-hidden">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-[#050769aa] text-[#ffffff] text-[10px] font-black uppercase tracking-widest">
                                <th className="p-5">Product</th>
                                <th className="p-5">Category</th>
                                <th className="p-5">CAS No.</th>
                                <th className="p-5 text-right">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-[#dfdfdfe6]">
                            {products.map(product => (
                                <tr key={product.id} className="hover:bg-[#dfdfdfe6]/20 transition-colors">
                                    <td className="p-5">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 bg-[#dfdfdfe6]/30 overflow-hidden border border-[#dfdfdfe6]">
                                                <img src={product.image} className="w-full h-full object-cover" />
                                            </div>
                                            <span className="font-bold text-[#050769aa] uppercase">{product.name}</span>
                                        </div>
                                    </td>
                                    <td className="p-5">
                                        <span className="text-[10px] font-black uppercase tracking-widest bg-[#dfdfdfe6]/50 px-2 py-1 text-[#050769aa]/70 border border-[#dfdfdfe6]">
                                            {product.category}
                                        </span>
                                    </td>
                                    <td className="p-5 font-mono text-sm text-[#050769aa]/60">{product.cas}</td>
                                    <td className="p-5 text-right">
                                        <button
                                            onClick={() => onDelete(product.id)}
                                            className="text-red-400 hover:text-red-600 transition-colors p-2"
                                        >
                                            <Trash2 size={18} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AdminPanel;
