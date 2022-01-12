import { PencilAltIcon, TrashIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { useEffect, useState } from "react";
import MainLayout from "../../../components/layouts/layout";
import withAuth from "../../../components/layouts/withAuth";
import Table, { TableCell, TableRow } from "../../../components/ui/table";
import apiCall from "../../../services/api-call";

const CreateAdminUsersIndex = ({ user }) => {
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    apiCall()
      .get("/api/get-admin-users")
      .then((response) => {
        setAllUsers(response.data);
      });
  }, [user]);

  return (
    <MainLayout>
      <div className="px-6 py-8">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-semibold tracking-wide">Admin Users</h1>
          <button className="px-6 py-2 text-gray-800 bg-indigo-300 rounded-lg ">
            <Link href="/auth/admin-users/create">Add New Admin Users</Link>
          </button>
        </div>
        <div className="flex flex-col mt-8">
          <Table>
            <thead>
              <TableRow>
                <TableCell isHeader={true}>Name</TableCell>
                <TableCell isHeader={true}>Email</TableCell>
                <TableCell isHeader={true}>Created At</TableCell>
                <TableCell isHeader={true}></TableCell>
              </TableRow>
            </thead>
            <tbody>
              {allUsers.map((user, i) => (
                <TableRow key={user.id} isEven={(i + 1) % 2 === 0}>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.created_at}</TableCell>
                  <TableCell className="inline-flex items-center space-x-3">
                    <PencilAltIcon className="w-5" />
                    <TrashIcon className="w-5 text-red-500" />
                  </TableCell>
                </TableRow>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </MainLayout>
  );
};

export default withAuth(CreateAdminUsersIndex);
