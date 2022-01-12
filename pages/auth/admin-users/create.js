import axios from "axios";
import router from "next/router";
import { useState } from "react";
import MainLayout from "../../../components/layouts/layout";
import withAuth from "../../../components/layouts/withAuth";
import apiCall from "../../../services/api-call";

const CreateAdminUsers = (props) => {
  const [formInput, setformInput] = useState({
    name: "",
    email: "",
    passwod: "",
  });

  const updateFormInput = event => {
    event.persist()

    setformInput(prevState => ({...prevState, [event.target.name]: event.target.value}))
  }

  const createAdminUsersHandler = event => {
    event.preventDefault();
    
    apiCall().post("/api/create-admin-user", formInput).then(response => {
      if (response.data.error) {
        console.log(response.data.error);
      } else {
        router.push("/auth/admin-users")
      }
    });
  }

  return (
    <MainLayout>
      <div className="px-6 py-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-medium tracking-wide">
              Create Admin Users
            </h1>
            <p className="text-gray-400 ">User: UserName</p>
          </div>
          <button
            onClick={createAdminUsersHandler}
            className="text-gray-800 bg-green-300 rounded-lg h-9 w-36"
          >
            {/* <Link href="/">Save</Link> */}
            Save
          </button>
        </div>

        <div className="flex space-x-6 mt-9">
          <div className="w-3/4 px-8 overflow-y-scroll bg-white shadow-038-bs">
            <div className="grid grid-cols-2 gap-4 py-6">
              <div>
                <label htmlFor="name" className="leading-loose">
                  Name
                </label>
                <input
                  onChange={updateFormInput}
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  placeholder="Sales & Marketing Manager"
                  className="w-full px-3 py-2 mt-2 placeholder-gray-300 border border-gray-300 rounded-none appearance-none focus:outline-none focus:ring-blue-200 focus:border-blue-200 focus:z-10 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="email" className="leading-loose">
                  Email
                </label>
                <input
                  onChange={updateFormInput}
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="Sales & Marketing Manager"
                  className="w-full px-3 py-2 mt-2 placeholder-gray-300 border border-gray-300 rounded-none appearance-none focus:outline-none focus:ring-blue-200 focus:border-blue-200 focus:z-10 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="password" className="leading-loose">
                  Password
                </label>
                <input
                  onChange={updateFormInput}
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="password"
                  required
                  placeholder="Sales & Marketing Manager"
                  className="w-full px-3 py-2 mt-2 placeholder-gray-300 border border-gray-300 rounded-none appearance-none focus:outline-none focus:ring-blue-200 focus:border-blue-200 focus:z-10 sm:text-sm"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default withAuth(CreateAdminUsers);
