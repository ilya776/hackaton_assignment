import UserDashboard from "@/modules/user/components/UserDashboard";
import UserStatistic from "@/modules/user/components/UserStatistic";
import type { FC } from "react";

const ProfilePage: FC = () => {
  return (
    <div className="flex gap-10 w-full mx-auto p-5 pl-20">
      <UserDashboard />
      <UserStatistic />
    </div>
  );
};

export default ProfilePage;
