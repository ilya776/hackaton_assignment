import { useGetUserQuery } from "@/modules/user/API/userApi";
import UserDashboard from "@/modules/user/components/UserDashboard";
import UserStatistic from "@/modules/user/components/UserStatistic";
import type { FC } from "react";

const ProfilePage: FC = () => {
  const { isSuccess, isLoading } = useGetUserQuery();

  if (isLoading) {
    return <div className="text-center text-gr-dark text-4xl mt-20">Завантаження...</div>;
  }

  if (!isSuccess) {
    return <div className="text-center text-gr-dark text-4xl mt-20">Ой щось пішло не так(</div>;
  }

  return (
    <div className="flex gap-10 w-full mx-auto p-5 pl-20">
      <UserDashboard />
      <UserStatistic />
    </div>
  );
};

export default ProfilePage;
