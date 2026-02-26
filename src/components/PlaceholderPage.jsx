import React from 'react';

const PlaceholderPage = ({ title }) => (
    <div className="pt-48 pb-32 min-h-[70vh] flex flex-col items-center justify-center bg-[#dfdfdfe6]/20">
        <div className="text-center max-w-2xl px-6">
            <h1 className="text-5xl font-black uppercase tracking-tighter text-[#050769aa] mb-6">{title}</h1>
            <div className="w-16 h-1 bg-[#050769aa] mx-auto mb-8"></div>
            <p className="text-lg text-[#050769aa]/60 font-medium border-2 border-dashed border-[#050769aa]/20 p-12 rounded-lg bg-[#ffffff]">
                Content for the <span className="font-bold">{title}</span> page will be added here later.
            </p>
        </div>
    </div>
);

export default PlaceholderPage;
