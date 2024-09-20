import * as Dialog from "@radix-ui/react-dialog";
import { Pencil1Icon } from "@radix-ui/react-icons";

export default function Modal() {
  return (
    <div className="">
      <Dialog.Root>
        <Dialog.Trigger>
          <Pencil1Icon />
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/50 data-[state=open]:animate-[overlayOpen_200ms_ease_0s_1_normal_forwards] data-[state=closed]:animate-[overlayClose_200ms_ease_0s_1_reverse_backwards] " />
          <Dialog.Content className="data-[state=open]:animate-[myAnimOpen_200ms_ease_0s_1_normal_forwards] data-[state=closed]:animate-[myAnimClose_200ms_ease_0s_1_normal_forwards] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-gray-900 rounded-md p-8 shadow-lg w-full max-w-2xl">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Edit Employee</h2>
              <Dialog.Close className="text-lg text-gray-400 hover:text-gray-500">
                X
              </Dialog.Close>
            </div>
            {/* <Edit
              params={{ id, employee_name, employee_age, employee_salary }}
            /> */}
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}
