"use client";
import { useState } from "react";
export default function Page({ params: { id } }: { params: { id: string } }) {
  const [userInput, setUserInput] = useState({
    name: "",
    salary: "",
    age: "",
    id: id,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserInput({
      ...userInput,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await update(userInput);
    setUserInput({
      name: "",
      salary: "",
      age: "",
      id: id,
    });
  };

  return (
    <section>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col max-w-3xl justify-start items-center gap-4 bg-gray-100 mx-auto p-6 rounded-md"
      >
        <label>
          Employee Name:
          <input
            type="text"
            name="name"
            value={userInput.name}
            placeholder="Enter full name"
            onChange={handleChange}
            className="text-xs italic ml-5 border py-2 px-4 rounded-md w-auto"
          />
        </label>
        <label>
          Age:
          <input
            type="text"
            name="age"
            value={userInput.age}
            placeholder="Enter age"
            onChange={handleChange}
            className="text-xs italic ml-5 border py-2 px-4 rounded-md w-auto"
          />
        </label>
        <label>
          Salary:
          <input
            type="text"
            name="salary"
            value={userInput.salary}
            placeholder="Enter salary"
            onChange={handleChange}
            className="text-xs italic ml-5 border py-2 px-4 rounded-md w-auto"
          />
        </label>
        <button
          type="submit"
          className="bg-gray-900 text-slate-100 py-2 px-4 rounded-md"
        >
          Submit
        </button>
      </form>
    </section>
  );
}

async function update({ name, salary, age, id }: any) {
  const updateData = {
    name: name,
    salary: salary,
    age: age,
  };
  const res = await fetch(
    `https://dummy.restapiexample.com/api/v1/update/${id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateData),
    }
  );

  const { status, data } = await res.json();
  return alert(`status:${status} name:${data.name}, salary:${data.salary}, age:${data.age} updated successfully`);
}
