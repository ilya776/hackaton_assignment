import MainButton from "@/components/UI/MainButton";
import React, { useState, type FC } from "react";
import { validateEmail } from "../utils/validateEmail";
import { useGetUserQuery, useSetUserDataMutation } from "../API/userApi";

type Props = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const UserEditForm: FC<Props> = ({ setIsOpen }) => {
  const { data: user } = useGetUserQuery();
  const initialData = {
    name: user?.name || "",
    email: user?.email || "",
    favoriteGenre: user?.favoriteGenre || "",
  }
  const [setUserData, { isLoading }] = useSetUserDataMutation();

  const [formData, setFormData] = useState(initialData);
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const isFormChanged = () => {
    return (
      formData.name !== initialData.name ||
      formData.email !== initialData.email ||
      formData.favoriteGenre !== initialData.favoriteGenre
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    const newErrors: typeof errors = {};

    if (!formData.name.trim()) newErrors.name = "Ім’я не може бути порожнім";

    if (!formData.email.trim()) {
      newErrors.email = "Email не може бути порожнім";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Невірний формат email";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    if (!isFormChanged()) {
      setSubmitError("Жодне поле не було змінено");
      return;
    }

    try {
      await setUserData({ id: user!.id, ...formData }).unwrap();
      setIsOpen(false);
    } catch (error) {
      console.error("Помилка при збереженні даних:", error);
      setSubmitError("Не вдалося зберегти дані. Спробуйте пізніше.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col gap-4 text-sm">
        <label>
          <span className="font-semibold block mb-1">Ім’я</span>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded-xl border border-gr-dark focus:outline-none focus:ring-2 focus:ring-gr-darkest"
          />
          {errors.name && <span className="text-red-500 text-xs mt-1 block">{errors.name}</span>}
        </label>

        <label>
          <span className="font-semibold block mb-1">Email</span>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded-xl border border-gr-dark focus:outline-none focus:ring-2 focus:ring-gr-darkest"
          />
          {errors.email && <span className="text-red-500 text-xs mt-1 block">{errors.email}</span>}
        </label>

        <label>
          <span className="font-semibold block mb-1">Улюблений жанр</span>
          <input
            type="text"
            name="favoriteGenre"
            value={formData.favoriteGenre}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded-xl border border-gr-dark focus:outline-none focus:ring-2 focus:ring-gr-darkest"
          />
        </label>

        {submitError && <div className="text-red-600 text-sm mt-2 font-medium">{submitError}</div>}
      </div>

      <div className="mt-6 flex gap-4 items-center">
        <MainButton text={isLoading ? "Збереження..." : "Зберегти зміни"} type="submit" disabled={isLoading} />
        <MainButton text="Скасувати" type="button" onClick={() => setIsOpen(false)} />
      </div>
    </form>
  );
};

export default UserEditForm;
