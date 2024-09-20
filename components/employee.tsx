"use client";
import * as Dialog from "@radix-ui/react-dialog";
import { Pencil2Icon } from "@radix-ui/react-icons";
import Image from "next/image";
import { useState } from "react";
import Edit from "./Edit";

export default function Employee({
  id,
  name,
  email,
  gender,
  employee_status,
  salary,
  Designation,
  Department,
}: Employee) {
  const [open, setOpen] = useState(false);
  // setOpen(!open)
  return (
    <div className=" bg-gray-100 rounded-lg shadow-lg ">
      <div className="bg-gray-200 flex justify-between items-center gap-x-3 w-full p-6 rounded-lg">
        <Image
          src={"/profile.png"}
          width={80}
          height={80}
          alt={"profile picture"}
          className="rounded-full "
        />
        <div>
          <h3 className=" text-xl text-gray-900 font-semibold"> {name}</h3>
          <h4 className=" text-base text-gray-700">{Designation}</h4>
          <span
            className={`text-xs font-medium mr-2 px-2.5 py-0.5 rounded ${
              employee_status === "Deleted"
                ? "bg-red-200 text-red-700 "
                : "bg-purple-200 text-purple-700 "
            }`}
          >
            {employee_status}
          </span>
        </div>

        {/* Edit Dialog Box */}
        <div className="self-end">
          <Dialog.Root open={open} onOpenChange={setOpen}>
            <Dialog.Trigger>
              <Pencil2Icon className="bg-green-100 stroke-green-600 shadow-inner" />
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-[2px] data-[state=open]:animate-[overlayOpen_200ms_ease_0s_1_normal_forwards] data-[state=closed]:animate-[overlayClose_200ms_ease_0s_1_reverse_backwards] " />
              <Dialog.Content className="data-[state=open]:animate-[myAnimOpen_200ms_ease_0s_1_normal_forwards] data-[state=closed]:animate-[myAnimClose_200ms_ease_0s_1_normal_forwards] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-gray-900 rounded-md p-8 shadow-lg w-full max-w-2xl">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold">Edit Employee</h2>
                  <Dialog.Close className="text-lg text-gray-400 hover:text-gray-500">
                    x
                  </Dialog.Close>
                </div>

                {/* Form Edit Component being */}
                <Edit
                  params={{
                    id,
                    name,
                    email,
                    gender,
                    employee_status,
                    salary,
                    Designation,
                    Department,
                  }}
                  afterSave={() => setOpen(false)}
                />
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      </div>

      
      
      
      <div className="p-8">
        <div className="flex gap-x-3   items-center ">
          <p className="text-gray-900 font-bold">Gender:</p>
          <p className="text-gray-700 ">{gender}</p>
        </div>
        <div className="flex gap-x-3   items-center ">
          <p className="text-gray-900 font-bold">Email:</p>
          <p className="text-gray-700 ">{email}</p>
        </div>
        <div className="flex gap-x-3   items-center ">
          <p className="text-gray-900 font-bold">Department:</p>
          <p className="text-gray-700 ">{Department}</p>
        </div>
        <div className="flex gap-x-3   items-center ">
          <p className="text-gray-900 font-bold">Salary:</p>
          <p className="text-gray-700 ">${salary}</p>
        </div>
      </div>
    </div>





    //   {/* <div className="">
    //   <Dialog.Root>
    //     <Dialog.Trigger>
    //       <Pencil2Icon />
    //     </Dialog.Trigger>
    //     <Dialog.Portal>
    //       <Dialog.Overlay className="fixed inset-0 bg-black/50 data-[state=open]:animate-[overlayOpen_200ms_ease_0s_1_normal_forwards] data-[state=closed]:animate-[overlayClose_200ms_ease_0s_1_reverse_backwards] " />
    //       <Dialog.Content className="data-[state=open]:animate-[myAnimOpen_200ms_ease_0s_1_normal_forwards] data-[state=closed]:animate-[myAnimClose_200ms_ease_0s_1_normal_forwards] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-gray-900 rounded-md p-8 shadow-lg w-full max-w-2xl">
    //         <div className="flex justify-between items-center">
    //           <h2 className="text-2xl font-bold">Edit Employee</h2>
    //           <Dialog.Close className="text-lg text-gray-400 hover:text-gray-500">
    //             X
    //           </Dialog.Close>
    //         </div>
    //         <Edit params={{ id,employee_name,employee_age,employee_salary }}  />
    //       </Dialog.Content>
    //     </Dialog.Portal>
    //   </Dialog.Root>
    // </div> */}
  );
}
