const Dashboard = () => {
  return (
    <div className="p-4">
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-3 md:col-span-2 w-full min-h-[450px] bg-base-200 rounded-xl p-4">
          a
        </div>
        <div className="col-span-3 md:col-span-1 min-h-[250px] bg-base-200 rounded-xl p-4">
          b
        </div>
        <div className="col-span-3 bg-base-200 min-h-[250px] rounded-xl p-4">
          c
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
