// import { useGetUserQuery } from "../API/userApi";

const UserPreview = () => {
  // const { data: user } = useGetUserQuery();
  // if (!user) return null;

  const user = {
    id: "1",
    name: "John Doe",
    email: "",
    favoriteGenre: "Science Fiction",
    createdAt: "2023-01-01T00:00:00Z",
  };

  return (
    <div className="flex items-center gap-6">
      <img
        src="https://www.imgonline.com.ua/examples/bee-on-daisy.jpg"
        alt="User Avatar"
        className="w-24 h-24 rounded-full border-4 border-gr-light"
      />
      <div className="">
        <h2 className="text-2xl font-bold">{user.name}</h2>
        <p className="text-sm text-gr-dark">{user.email}</p>
      </div>
    </div>
  );
};

export default UserPreview;
