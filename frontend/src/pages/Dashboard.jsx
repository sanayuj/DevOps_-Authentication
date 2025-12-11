import Navbar from "../Components/Navbar";


export default function Dashboard() {
  return (
    <>
      <Navbar />
       <div className="h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="font-semibold">Welcome User</h2>
          <p className="text-gray-600 mt-2">This is your dashboard panel.</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="font-semibold">Stats</h2>
          <p className="text-gray-600 mt-2">User statistics will be shown here.</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="font-semibold">Settings</h2>
          <p className="text-gray-600 mt-2">Manage account settings here.</p>
        </div>
      </div>
    </div>
    </>
   
  );
}
