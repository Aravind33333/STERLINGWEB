import React, { useState } from 'react';
import { Lock, User, ArrowRight, X } from 'lucide-react';

const Login = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/users');
            const users = await response.json();

            const user = users.find(u => u.username === username && u.password === password);

            if (user) {
                onLogin(user);
            } else {
                setError('Invalid credentials. Please try again.');
            }
        } catch (err) {
            setError('Could not connect to the auth server.');
        }
    };

    return (
        <div className="min-h-screen bg-[#050769aa] flex items-center justify-center p-6">
            <div className="bg-[#ffffff] w-full max-w-md p-10 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-[#050769aa]"></div>

                <div className="mb-10 text-center">
                    <h1 className="text-3xl font-black uppercase tracking-tighter text-[#050769aa] mb-2">Admin Login</h1>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#050769aa]/50">Authorized Personnel Only</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-[9px] font-black uppercase tracking-widest mb-2 text-[#050769aa]">Username</label>
                        <div className="relative">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#050769aa]/30">
                                <User size={16} />
                            </span>
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="w-full bg-[#dfdfdfe6]/30 border border-[#dfdfdfe6] p-4 pl-12 text-sm focus:outline-none focus:border-[#050769aa] transition-colors"
                                placeholder="Enter username"
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-[9px] font-black uppercase tracking-widest mb-2 text-[#050769aa]">Password</label>
                        <div className="relative">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#050769aa]/30">
                                <Lock size={16} />
                            </span>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full bg-[#dfdfdfe6]/30 border border-[#dfdfdfe6] p-4 pl-12 text-sm focus:outline-none focus:border-[#050769aa] transition-colors"
                                placeholder="••••••••"
                                required
                            />
                        </div>
                    </div>

                    {error && (
                        <div className="flex items-center gap-2 text-red-600 text-[10px] font-bold uppercase py-2">
                            <X size={14} /> {error}
                        </div>
                    )}

                    <button
                        type="submit"
                        className="w-full bg-[#050769aa] text-[#ffffff] py-4 font-black uppercase tracking-[0.2em] text-[10px] hover:bg-[#050769aa]/90 transition-colors flex justify-center items-center gap-2"
                    >
                        Sign In <ArrowRight size={14} />
                    </button>
                </form>

                <div className="mt-8 text-center">
                    <button
                        onClick={() => window.history.back()}
                        className="text-[9px] font-bold uppercase tracking-widest text-[#050769aa]/40 hover:text-[#050769aa] transition-colors"
                    >
                        Back to Website
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;
