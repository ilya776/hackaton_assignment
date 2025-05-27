import { useState } from "react";
import type { FC } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const SignIn: FC = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#f6fff4] text-[#3d5c3d] py-4">
            <div className="w-full max-w-md bg-[#e4fbe1] p-10 rounded-3xl shadow-md">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold mb-3">Вхід до акаунту</h1>
                    <p className="text-[#6d8d6d] text-sm">
                        Увійдіть, використовуючи свої облікові дані
                    </p>
                </div>

                <form className="space-y-6">
                    <label className="block">
                        <span className="block text-sm font-medium text-[#6d8d6d] mb-1">Email</span>
                        <input
                            type="email"
                            placeholder="you@example.com"
                            className="w-full px-4 py-3 bg-white text-[#3d5c3d] border border-[#bdeac2] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#a2e4a6] placeholder:text-[#a2b9a2]"
                            required
                        />
                    </label>

                    <label className="block relative">
                        <span className="block text-sm font-medium text-[#6d8d6d] mb-1">Пароль</span>
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="********"
                            className="w-full px-4 py-3 pr-12 bg-white text-[#3d5c3d] border border-[#bdeac2] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#a2e4a6] placeholder:text-[#a2b9a2]"
                            required
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-[38px] text-[#6d8d6d] hover:text-[#3d5c3d] transition-colors"
                            aria-label={showPassword ? "Сховати пароль" : "Показати пароль"}
                        >
                            {showPassword ? (
                                <AiFillEyeInvisible size={20} />
                            ) : (
                                <AiFillEye size={20} />
                            )}
                        </button>
                    </label>

                    <button
                        type="submit"
                        className="w-full py-3 bg-[#a2e4a6] hover:bg-[#8fd793] rounded-xl text-[#3d5c3d] font-semibold transition-colors"
                    >
                        Увійти
                    </button>

                    <div className="text-center text-sm text-[#6d8d6d] mt-4">
                        <p>Не маєте акаунту?</p>
                        <a href="#" className="text-[#3d5c3d] font-medium hover:underline">
                            Зареєструватися
                        </a>
                    </div>

                    <div className="relative mt-6">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-[#bdeac2]" />
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="bg-[#e4fbe1] px-3 text-[#6d8d6d]">або</span>
                        </div>
                    </div>

                    <button className="mt-4 w-full py-3 bg-[#d4e5d1] hover:bg-[#a9c6a6] rounded-xl text-[#3d5c3d] font-semibold transition-colors">
                        Увійти через Google
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SignIn;
