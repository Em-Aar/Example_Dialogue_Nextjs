"use client";
import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";
import { Spinner } from "./Spinner";
import { revalidatePath } from "next/cache";
import action from "@/action";
export default function Edit({
  params: {
    id,
    name,
    email,
    gender,
    employee_status,
    salary,
    Designation,
    Department,
  },
  afterSave,
}: {
  params: Employee;
  afterSave: () => void;
}) {
  // const [userInput, setUserInput] = useState({
  //   name: name,
  //   salary: salary,
  //   email: email,
  //   id: id,
  // });

  const [saving, setSaving] = useState(false);

  //   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //     const { name, value } = e.target;
  //     setUserInput({
  //       ...userInput,
  //       [name]: value,
  //     });
  //   };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSaving(true);
    let data = Object.fromEntries(new FormData(e.currentTarget));
    console.log(data);
    const userInput = {
      name: data.name as string,
      salary: parseInt(data.salary as string),
      email: data.email as string,
      id: id,
      gender: gender,
      employee_status: employee_status,
      Designation: Designation,
      Department: Department,
    };
    await update(userInput);
    setSaving(false);
    afterSave();
    // revalidatePath('/')
    await action();
  };

  return (
    <section>
      {/* <form
        onSubmit={handleSubmit}
        className="space-y-6 mt-6"
      >
        <fieldset disabled={saving} className="group">
            <div className="group-disabled:opacity-50">
        <div>
        <label className="text-sm font-medium leading-6 text-gray-900">
          Employee Name:
          </label>
          <input
            type="text"
            name="name"
            value={userInput.name}
            placeholder="Enter full name"
            defaultValue={employee_name}
            autoFocus={true}
            onChange={handleChange}
            className="mt-2 block w-full rounded-md border border-gray-300 px-2 py-1.5 text-sm text-gray-900 shadow-sm sm:leading-6"
          />
          </div>
        <div>
        <label className="text-sm font-medium leading-6 text-gray-900">
          Age:
          </label>
          <input
            type="text"
            name="age"
            value={userInput.age}
            autoFocus={true}
            defaultValue={employee_age}
            placeholder="Enter age"
            onChange={handleChange}
            className="mt-2 block w-full rounded-md border border-gray-300 px-2 py-1.5 text-sm text-gray-900 shadow-sm sm:leading-6"
          />
        </div>
        <div>
        <label>
          Salary:
          </label>
          <input
            type="text"
            name="salary"
            value={userInput.salary}
            placeholder="Enter salary"
            defaultValue={employee_salary}
            autoFocus={true}
            onChange={handleChange}
            className="mt-2 block w-full rounded-md border border-gray-300 px-2 py-1.5 text-sm text-gray-900 shadow-sm sm:leading-6"
          />
          </div>
        
        <button
          type="submit"
          className=" inline-flex items-center justify-center bg-gray-900 text-slate-100 py-2 px-4 rounded-md mt-4"
        >
            <Spinner className="absolute h-4 group-enabled:opacity-0 group-disabled:pointer-events-none" />
          <span className="group-disabled:opacity-0">Submit</span>
        </button>
        </div>
        </fieldset>
      </form> */}

      <form onSubmit={handleSubmit}>
        <fieldset disabled={saving} className="group">
          <div className="mt-8 group-disabled:opacity-50">
            <div className="space-y-6">
              <div>
                <label className="text-sm font-medium text-gray-900">
                  Name
                </label>
                <input
                  autoFocus
                  className="mt-2 block w-full rounded-md border border-gray-300 px-2 py-1.5 text-sm text-gray-900 shadow-sm sm:leading-6"
                  type="text"
                  defaultValue={name}
                  name="name"
                />
              </div>

              <div>
                <label className="text-sm font-medium leading-6 text-gray-900">
                  Email
                </label>
                <input
                  className="mt-2 block w-full rounded-md border border-gray-300 px-2 py-1.5 text-sm text-gray-900 shadow-sm sm:leading-6"
                  type="text"
                  defaultValue={email}
                  name="email"
                />
              </div>

              <div>
                <label className="text-sm font-medium leading-6 text-gray-900">
                  Salary
                </label>
                <input
                  className="mt-2 block w-full rounded-md border border-gray-300 px-2 py-1.5 text-sm text-gray-900 shadow-sm sm:leading-6"
                  type="text"
                  defaultValue={salary}
                  name="salary"
                />
              </div>
            </div>
          </div>
          <div className="mt-8 space-x-6 text-right">
            <Dialog.Close className="rounded px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-600">
              Cancel
            </Dialog.Close>
            <button className="inline-flex items-center justify-center rounded bg-green-500 px-4 py-2 text-sm font-medium text-white hover:bg-green-600 group-disabled:pointer-events-none">
              <Spinner className="absolute h-4 group-enabled:opacity-0" />
              <span className="group-disabled:opacity-0">Submit</span>
            </button>
          </div>
        </fieldset>
      </form>
    </section>
  );
}

async function update({
  name,
  salary,
  email,
  id,
  gender,
  employee_status,
  Designation,
  Department,
}: Employee) {
  const updateData = {
    id: id,
    name: name,
    salary: salary,
    email: email,
    gender: gender,
    employee_status: employee_status,
    Designation: Designation,
    Department: Department,
  };
  console.log(updateData);
  const res = await fetch(`/api/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updateData),
  });
  if (!res.ok) {
    throw new Error("Failed to update data");
  }

  const { status, message } = await res.json();

  return alert(`status:${status} message:${message}`);
}
