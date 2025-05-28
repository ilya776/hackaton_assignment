import { useState } from "react";
import { login,type LoginData } from "../services/logInService.ts";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const SignIn = () => {
    const [form, setForm] = useState<LoginData>({ email: "", password: "" });
    const [error, setError] = useState<string | null>(null);
    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);

        try {
            const data = await login(form);
            localStorage.setItem("accessToken", data.tokens.access);
            alert("Успішний вхід!");
            // Далі можна редірект або оновлення стану
        } catch (err: any) {
            setError(err.response?.data?.detail || "Сталася помилка");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#f6fff4] text-[#3d5c3d] py-4">
            <div className="w-full max-w-md bg-[#e4fbe1] p-10 rounded-3xl shadow-md">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold mb-3">Вхід до акаунту</h1>
                    <p className="text-[#6d8d6d] text-sm">
                        Увійдіть, використовуючи свої облікові дані
                    </p>
                </div>

                <form className="space-y-6" onSubmit={handleSubmit}>
                    <label className="block">
                        <span className="block text-sm font-medium text-[#6d8d6d] mb-1">Email</span>
                        <input
                            name="email"
                            type="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="you@example.com"
                            className="w-full px-4 py-3 bg-white text-[#3d5c3d] border border-[#bdeac2] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#a2e4a6] placeholder:text-[#a2b9a2]"
                            required
                        />
                    </label>

                    <label className="block relative">
                        <span className="block text-sm font-medium text-[#6d8d6d] mb-1">Пароль</span>
                        <input
                            name="password"
                            type={showPassword ? "text" : "password"}
                            value={form.password}
                            onChange={handleChange}
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

                    {error && <p className="text-red-600 mt-2 text-center">{error}</p>}
                </form>
            </div>
        </div>
    );
};

export default SignIn;
