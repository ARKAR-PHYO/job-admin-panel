import Link from "next/link";

import {
  FolderAddIcon,
  HomeIcon,
  MenuIcon,
  UsersIcon,
} from "@heroicons/react/outline";
import GTGLogoTextWhite from "../logos/logo-text-white";
import GlobalTelLogo from "../logos/globalTel-logo";
import GlobalTelAllLogo from "../logos/global-tel-all-logo";

const Sidebar = (props) => {
  return (
    <aside className="flex flex-col w-1/6 bg-blue-900">
      <Link href="/">
        <a className="px-6 py-4">
          {/* <GTGLogoTextWhite className="w-auto " /> */}
          {/* <GlobalTelLogo className="w-auto " /> */}
          <GlobalTelAllLogo className="w-auto " />
        </a>
      </Link>

      <div className="px-6 py-8 space-y-8 text-sm tracking-wide text-white">
        <div className="">
          <h1 className="mb-4 text-lg">Recreutments</h1>
          <div className="ml-5 space-y-4">
            <div>
              <Link href="/recruitment">
                <a>
                  <div className="flex items-center space-x-3">
                    <FolderAddIcon className="w-5" />
                    <span>Job Recruitment</span>
                  </div>
                </a>
              </Link>
            </div>
            <div>
              <Link href="#">
                <a>
                  <div className="flex items-center space-x-3">
                    <UsersIcon className="w-5" />
                    <span>Interview</span>
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </div>

        <div className="">
          <h1 className="mb-4 text-lg">Admin</h1>
          <div className="ml-5 space-y-4">
            <div>
              <Link href="/auth/admin-users">
                <a>
                  <div className="flex items-center space-x-3">
                    <FolderAddIcon className="w-5" />
                    <span>Create Admin Users</span>
                  </div>
                </a>
              </Link>
            </div>
            <div>
              <Link href="/">
                <a>
                  <div className="flex items-center space-x-3">
                    <UsersIcon className="w-5" />
                    <span>Settings</span>
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
