import { useState, type FC, type FormEvent } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router";
import { useLogInMutation, useSignUpMutation } from "../API/authApi";
import type { SignInData, SignUpData } from "../types/authTypes";

type AuthMode = "login" | "register";

const AuthForm: FC = () => {
  const navigate = useNavigate();
  const [mode, setMode] = useState<AuthMode>("login");
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState<SignUpData>({
    name: "",
    email: "",
    password: "",
  });

  const [login, { isLoading: isLoggingIn }] = useLogInMutation();
  const [registerUser, { isLoading: isRegistering }] = useSignUpMutation();

  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    try {
      if (mode === "login") {
        const { email, password } = form;
        await login({ email, password } as SignInData).unwrap();
      } else {
        await registerUser(form).unwrap();
      }
      navigate("/");
    } catch (err: any) {
      console.log(err);
      const message =
        err?.data?.detail || err?.data?.message || err?.data?.email || err?.data?.non_field_errors || "Сталася помилка";
      setErrorMessage(message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gr-lightest text-gr-darkest py-4">
      <div className="w-full max-w-md bg-gr-light p-10 rounded-3xl shadow-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-3">{mode === "login" ? "Вхід до акаунту" : "Створіть акаунт"}</h1>
          <p className="text-gr-dark text-sm">
            {mode === "login"
              ? "Увійдіть, використовуючи свої облікові дані"
              : "Заповніть форму нижче, щоб зареєструватися"}
          </p>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          {mode === "register" && (
            <label className="block">
              <span className="block text-sm font-medium text-gr-dark mb-1">Ім'я користувача</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Ваше ім'я користувача"
                className="w-full px-4 py-3 bg-white text-gr-darkest border border-[#bdeac2] rounded-xl focus:outline-none focus:ring-2 focus:ring-gr-main placeholder:text-gr-main"
                required
                minLength={3}
              />
            </label>
          )}

          <label className="block">
            <span className="block text-sm font-medium text-gr-dark mb-1">Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full px-4 py-3 bg-white text-gr-darkest border border-[#bdeac2] rounded-xl focus:outline-none focus:ring-2 focus:ring-gr-main placeholder:text-gr-main"
              required
            />
          </label>

          <label className="block relative">
            <span className="block text-sm font-medium text-gr-dark mb-1">Пароль</span>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="********"
              className="w-full px-4 py-3 pr-12 bg-white text-gr-darkest border border-[#bdeac2] rounded-xl focus:outline-none focus:ring-2 focus:ring-gr-main placeholder:text-gr-main"
              required
              minLength={6}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-[38px] text-gr-dark hover:text-gr-darkest transition-colors"
              aria-label={showPassword ? "Сховати пароль" : "Показати пароль"}
            >
              {showPassword ? <AiFillEyeInvisible size={20} /> : <AiFillEye size={20} />}
            </button>
          </label>

          {errorMessage && <p className="text-red-600 text-center">{errorMessage}</p>}

          <button
            type="submit"
            disabled={isLoggingIn || isRegistering}
            className="w-full py-3 bg-gr-main hover:bg-[#8fd793] rounded-xl text-gr-darkest font-semibold transition-colors disabled:opacity-50"
          >
            {isLoggingIn || isRegistering ? "Обробка..." : mode === "login" ? "Увійти" : "Зареєструватися"}
          </button>

          <div className="text-center text-sm text-gr-dark mt-4">
            {mode === "login" ? (
              <>
                <p>Не маєте акаунту?</p>
                <button
                  type="button"
                  onClick={() => setMode("register")}
                  className="text-gr-darkest font-medium hover:underline"
                >
                  Зареєструватися
                </button>
              </>
            ) : (
              <>
                <p>Вже маєте акаунт?</p>
                <button
                  type="button"
                  onClick={() => setMode("login")}
                  className="text-gr-darkest font-medium hover:underline"
                >
                  Увійти
                </button>
              </>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default AuthForm;
