import { LinkIcon } from "@heroicons/react/solid";
import router from "next/router";
import { useEffect, useState } from "react";
import slugify from "slugify";
import apiCall from "../../services/api-call";
import Table, { TableCell, TableRow } from "../ui/table";

const CategoriesSetting = (props) => {
  const [allCategories, setAllCategories] = useState([]);
  const [user, setUser] = useState();

  const [category, setCategory] = useState("");
  const [slug, setSlug] = useState("");
  const Slug = slugify(category, { lower: true });

  const formInput = {
    category_name: category,
    category_slug: Slug,
    user_id: user,
  };

  const saveHandaler = (event) => {
    event.preventDefault();
    apiCall()
      .get("/api/get-authenticated-user")
      .then((res) => {
        if (res.status === 200) {
          setUser(res.data.id);
          // console.log("USR", formInput);
          apiCall().post("/api/recruit-categories", formInput);
        }
      });
  };

  useEffect(() => {
    const getData = apiCall()
      .get("/api/recruit-categories")
      .then((res) => {
        setAllCategories(res.data);
      });
    return () => {
      // clearInterval(getData);
      clearImmediate(getData);
    };
  }, []);
  return (
    <div className="flex justify-between space-x-6">
      <div className="w-1/2">
        <h1 className="text-xl leading-loose">Categories Setting</h1>
        <p className="text-sm">
          Text Power Tools is an all-in-one text manipulation extension for VS
          Code inspired by TextFX for Notepad++ and Filter Lines and Text Pastry
          for Sublime Text. All commands supports multiple selections where it
          is applicable, and many of them can target new documents, so the
          original source remains unchanged.
        </p>
      </div>

      <div className="w-1/2 bg-white shadow-038-bs">
        <div className="flex flex-col px-6 space-y-5">
          <div className="mt-2">
            <label htmlFor="position" className="leading-loose">
              Category
            </label>
            <input
              id="position"
              name="position"
              type="text"
              autoComplete="position"
              required
              placeholder="Sales & Marketing Manager"
              onInput={(inputData) => setCategory(inputData.target.value)}
              className="w-full px-3 py-2 mt-2 placeholder-gray-300 border border-gray-300 rounded-none appearance-none focus:outline-none focus:ring-blue-200 focus:border-blue-200 focus:z-10 sm:text-sm"
            />
          </div>
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
          <Table className="">
            <thead>
              <TableRow>
                <TableCell isHeader={true}>Category</TableCell>
                <TableCell isHeader={true}>Created At</TableCell>
              </TableRow>
            </thead>
            <tbody>
              {allCategories.map((category, i) => (
                <TableRow key={category.id} isEven={(i + 1) % 2 === 0}>
                  <TableCell>{category.category_name}</TableCell>
                  <TableCell>{category.created_at}</TableCell>
                </TableRow>
              ))}
            </tbody>
          </Table>
        </div>
        <div className="flex justify-end px-6 py-4 bg-gray-100">
          <button
            onClick={saveHandaler}
            className="px-6 py-1 text-white bg-blue-900 rounded-md "
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoriesSetting;
