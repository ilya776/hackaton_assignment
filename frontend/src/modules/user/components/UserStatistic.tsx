
const UserStatistic = () => {
  return (
    <div className="bg-[#fff] p-7 rounded-2xl h-fit w-auto">
      <h3 className="text-2xl font-semibold mb-2">Статистика</h3>
      <p className="text-xl text-[#6d8d6d] text-nowrap">
        Прочитано: <span className="font-medium text-[#3d5c3d]">24 книги</span>
      </p>
      <p className="text-xl text-[#6d8d6d]">
        В обране: <span className="font-medium text-[#3d5c3d]">12 книг</span>
      </p>
    </div>
  );
};

export default UserStatistic;
