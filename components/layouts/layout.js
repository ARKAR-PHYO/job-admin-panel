import Sidebar from "./sidebar";
import TopRightHeader from "./top-right-header";
import withAuth from "./withAuth";

const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-row h-screen">
      <Sidebar />

      <div className="flex flex-col w-full">
        <div className="flex-none">
          <TopRightHeader />
        </div>

        <main className="flex-auto overflow-y-auto">
          <div className="h-screen bg-gray-100">{children}</div>
        </main>
      </div>
    </div>
  );
};
export default withAuth(MainLayout);
