
const UserPreview = () => {
  return (
    <div className="flex items-center gap-6">
      <img
        src="https://www.imgonline.com.ua/examples/bee-on-daisy.jpg"
        alt="User Avatar"
        className="w-24 h-24 rounded-full border-4 border-gr-light"
      />
      <div className="">
        <h2 className="text-2xl font-bold">Tralala</h2>
        <p className="text-sm text-gr-dark">lalala@example.com</p>
      </div>
    </div>
  );
};

export default UserPreview;
