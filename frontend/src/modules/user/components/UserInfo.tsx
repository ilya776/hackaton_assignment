import { UserIcon, EnvelopeIcon, CalendarIcon, StarIcon } from "@heroicons/react/24/solid";
import { useGetUserQuery } from "../API/userApi";

const UserInfo = () => {
  // const { data: user } = useGetUserQuery();
  // if (!user) return null;

    const user = {
    id: "1",
    name: "John Doe",
    email: "",
    favoriteGenre: "Science Fiction",
    createdAt: "2023-01-01T00:00:00Z",
  }

  return (
    <div className="bg-gr-light p-6 rounded-2xl shadow-sm">
      <h3 className="text-lg font-semibold mb-4 text-gr-darkest">Твої дані</h3>
      <ul className="text-sm space-y-4">
        <li className="flex items-center gap-3">
          <UserIcon className="w-5 h-5 text-gr-dark" />
          <span>
            <span className="font-semibold">Ім'я:</span>
            {user.name}
          </span>
        </li>
        <li className="flex items-center gap-3">
          <EnvelopeIcon className="w-5 h-5 text-gr-dark" />
          <span>
            <span className="font-semibold">Email:</span>
            {user.email}
          </span>
        </li>
        <li className="flex items-center gap-3">
          <CalendarIcon className="w-5 h-5 text-gr-dark" />
          <span>
            <span className="font-semibold">Приєднався:</span>
            {user.createdAt}
          </span>
        </li>
        <li className="flex items-center gap-3">
          <StarIcon className="w-5 h-5 text-gr-dark" />
          <span>
            <span className="font-semibold">Улюблений жанр:</span>
            {user.favoriteGenre}
          </span>
        </li>
      </ul>
    </div>
  );
};

export default UserInfo;
