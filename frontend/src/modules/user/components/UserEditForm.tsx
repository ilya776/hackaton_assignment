import MainButton from "@/components/UI/MainButton";
import React, { useState, type FC } from "react";

type Props = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const UserEditForm:FC<Props> = ({setIsOpen}) => {
  const [name, setName] = useState("Tralala");
  const [email, setEmail] = useState("lalala@example.com");
  const [genre, setGenre] = useState("Фантастика");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col gap-4 text-sm">
        <label>
          <span className="font-semibold block mb-1">Ім’я</span>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 rounded-xl border border-gr-dark focus:outline-none focus:ring-2 focus:ring-gr-darkest"
          />
        </label>

        <label>
          <span className="font-semibold block mb-1">Email</span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 rounded-xl border border-gr-dark focus:outline-none focus:ring-2 focus:ring-gr-darkest"
          />
        </label>

        <label>
          <span className="font-semibold block mb-1">Улюблений жанр</span>
          <input
            type="text"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            className="w-full px-3 py-2 rounded-xl border border-gr-dark focus:outline-none focus:ring-2 focus:ring-gr-darkest"
          />
        </label>
      </div>

      <div className="mt-6 flex gap-4">
        <MainButton text="Зберегти зміни" type="submit" />
        <MainButton text="Скасувати" type="button" onClick={() => setIsOpen(false)}/>
      </div>
    </form>
  );
};

export default UserEditForm;
