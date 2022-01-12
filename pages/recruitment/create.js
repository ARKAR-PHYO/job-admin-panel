import { LinkIcon } from "@heroicons/react/solid";
import Link from "next/link";
import QuillWrapper from "../../components/Quill/quill-wrapper";
import slugify from "slugify";
import { useState } from "react";
import MainLayout from "../../components/layouts/layout";
import withAuth from "../../components/layouts/withAuth";

const regions = [
  { value: "Yangon" },
  { value: "Mandalay" },
  { value: "Nay Pyi Taw" },
  { value: "Mawlamyine" },
  { value: "Pyay" },
];

const categories = [
  { value: "Sales & Customer Services" },
  { value: "Admin & HR" },
  { value: "Finance" },
  { value: "Business Development" },
  { value: "IT & Engineering" },
  { value: "Media & PR" },
  { value: "Driver" },
  { value: "Healthcare" },
];

const genders = [{ value: "M/F" }, { value: "M" }, { value: "F" }];

const jobCodes = [
  { value: "JCN00001" },
  { value: "JCN00002" },
  { value: "JCN00007" },
];

const CreateJobPosts = (props) => {
  const [position, setposition] = useState("");
  const [slug, setSlug] = useState("");
  const Slug = slugify(position, { lower: true });

  return (
    <MainLayout>
      <div className="px-6 py-8 ">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-medium tracking-wide">
              Create An Entry
            </h1>
            <p className="text-gray-400 ">User: UserName</p>
          </div>
          <button className="text-gray-800 bg-green-300 rounded-lg h-9 w-36">
            <Link href="/">Save</Link>
          </button>
        </div>

        <div className="flex space-x-6 mt-9">
          <div className="w-3/4 px-8 overflow-y-scroll bg-white shadow-038-bs">
            {/* box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px; */}
            <div className="grid grid-cols-2 gap-4 py-6">
              <div>
                <label htmlFor="position" className="leading-loose">
                  Position
                </label>
                <input
                  id="position"
                  name="position"
                  type="text"
                  autoComplete="position"
                  required
                  placeholder="Sales & Marketing Manager"
                  onInput={(inputData) => setposition(inputData.target.value)}
                  className="w-full px-3 py-2 mt-2 placeholder-gray-300 border border-gray-300 rounded-none appearance-none focus:outline-none focus:ring-blue-200 focus:border-blue-200 focus:z-10 sm:text-sm"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="slug" className="leading-loose">
                  Slug
                </label>
                <div className="relative text-gray-400 focus-within:text-gray-600">
                  <input
                    id="slug"
                    name="slug"
                    type="text"
                    autoComplete="slug"
                    required
                    disabled
                    value={Slug}
                    onInput={(inputData) => setSlug(inputData.target.slug)}
                    placeholder="This field is VIEW ONLY"
                    className="w-full py-2 pl-10 pr-4 mt-2 placeholder-gray-300 border border-gray-200 rounded-none appearance-none focus:outline-none focus:ring-blue-200 focus:border-blue-200 focus:z-10 sm:text-sm"
                  />
                  <div className="absolute left-3 top-4 ">
                    <LinkIcon className="w-6 " />
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="region" className="leading-loose ">
                  Region
                </label>
                <select className="w-full px-3 py-2 mt-2 border border-gray-200 rounded-none appearance-none focus:outline-none focus:ring-blue-200 focus:border-blue-200 focus:z-10 sm:text-sm">
                  {regions.map((region) => (
                    <option key={region.value} value={region.value}>
                      {region.value}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="region" className="leading-loose ">
                  Category
                </label>
                <select className="w-full px-3 py-2 mt-2 border border-gray-200 rounded-none appearance-none focus:outline-none focus:ring-blue-200 focus:border-blue-200 focus:z-10 sm:text-sm">
                  {categories.map((category) => (
                    <option key={category.value} value={category.value}>
                      {category.value}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="region" className="leading-loose ">
                  Vacant
                </label>
                <input
                  id="vacant"
                  name="vacant"
                  type="number"
                  autoComplete="vacant"
                  required
                  placeholder="1"
                  className="w-full px-3 py-2 mt-2 border border-gray-200 rounded-none appearance-none focus:outline-none focus:ring-blue-200 focus:border-blue-200 focus:z-10 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="region" className="leading-loose ">
                  Gender
                </label>
                <select className="w-full px-3 py-2 mt-2 border border-gray-200 rounded-none appearance-none focus:outline-none focus:ring-blue-200 focus:border-blue-200 focus:z-10 sm:text-sm">
                  {genders.map((gender) => (
                    <option key={gender.value} value={gender.value}>
                      {gender.value}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="py-6 space-y-2">
              <label htmlFor="job-description" className="leading-loose ">
                Job Desctiption
              </label>
              <QuillWrapper />
            </div>
            <div className="py-6 space-y-2">
              <label htmlFor="job-requirements" className="leading-loose ">
                Job Requirements
              </label>
              <QuillWrapper />
            </div>
          </div>

          <div className="w-1/4 ">
            <div className="grid grid-cols-1 gap-4 ">
              <div className="px-4 py-6 bg-white shadow-038-bs">
                <h1 className="text-lg leading-loose">Job Code</h1>
                <select className="w-full px-3 py-2 mt-2 border border-gray-200 rounded-none appearance-none focus:outline-none focus:ring-blue-200 focus:border-blue-200 focus:z-10 sm:text-sm">
                  {jobCodes.map((jobCode) => (
                    <option key={jobCode.value} value={jobCode.value}>
                      {jobCode.value}
                    </option>
                  ))}
                </select>
              </div>

              <div className="px-4 py-6 bg-white shadow-038-bs">
                <h1 className="text-lg leading-loose">Information</h1>
                <p className="flex items-center justify-between text-gray-400">
                  <span>Last Edited</span>
                  <span>-</span>
                </p>
                <p className="flex items-center justify-between text-gray-400">
                  <span>By</span>
                  <span>-</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default withAuth (CreateJobPosts);
