import { CogIcon, PencilAltIcon, TrashIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { getAllJobs } from "../../recruitment-details";
import MainLayout from "../../components/layouts/layout";
import withAuth from "../../components/layouts/withAuth";
import Table, { TableCell, TableRow } from "../../components/ui/table";

const Recruitment = (props) => {
  const jobPosts = getAllJobs();
  return (
    <MainLayout>
      <div className="px-6 py-8">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-semibold tracking-wide">Job Posts</h1>
          <div className="flex items-center space-x-3">
            <button className="px-6 py-2 text-gray-800 bg-indigo-300 rounded-lg ">
              <Link href="/recruitment/create">Add New Posts</Link>
            </button>
            <Link href="/recruitment/setting">
              <a>
                <CogIcon className="w-6" />
              </a>
            </Link>
          </div>
        </div>
        <div className="flex flex-col mt-8">
          <Table>
            <thead>
              <TableRow>
                <TableCell isHeader={true}>Position</TableCell>
                <TableCell isHeader={true}>Job Code</TableCell>
                <TableCell isHeader={true}>Region</TableCell>
                <TableCell isHeader={true}>Category</TableCell>
                <TableCell isHeader={true}>Vacant</TableCell>
                <TableCell isHeader={true}></TableCell>
              </TableRow>
            </thead>
            <tbody>
              {jobPosts.map((jobpost, i) => (
                <TableRow key={jobpost.id} isEven={(i + 1) % 2 === 0}>
                  <TableCell>{jobpost.position}</TableCell>
                  <TableCell>{jobpost.job_code}</TableCell>
                  <TableCell>{jobpost.region}</TableCell>
                  <TableCell> {jobpost.category}</TableCell>
                  <TableCell>{jobpost.vacant}</TableCell>
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

export default withAuth(Recruitment);
