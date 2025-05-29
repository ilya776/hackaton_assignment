import MainButton from "@/components/UI/MainButton";
import UserPreview from "./UserPreview";
import UserInfo from "./UserInfo";
import { useState } from "react";
import UserEditForm from "./UserEditForm";

const UserDashboard = () => {
  const [isEdit, setIsEdit] = useState(false);

  return (
    <section className="flex flex-col gap-6 bg-white rounded-3xl shadow-[0_1px_4px_rgba(0,0,0,0.05),_0_2px_6px_rgba(0,0,0,0.05),_inset_0_-1px_1px_rgba(255,255,255,0.1)] p-8 w-[600px] border border-gr-lightest">
      <h1 className="text-2xl font-bold text-gr-darkest">{isEdit ? "Редагування профілю" : "Профіль користувача"}</h1>
      {isEdit ? (
        <UserEditForm setIsOpen={setIsEdit} />
      ) : (
        <>
          <UserPreview />
          <UserInfo />
        </>
      )}

      {!isEdit && (
        <div className="mt-4 flex flex-col gap-4">
          <MainButton text="Редагувати профіль" onClick={() => setIsEdit(true)} />
          <MainButton text="Видалити профіль" />
        </div>
      )}
    </section>
  );
};

export default UserDashboard;
