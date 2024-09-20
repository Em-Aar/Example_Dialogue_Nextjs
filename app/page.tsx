import Employee from "@/components/employee";
import { getData } from "@/lib/addEmployee";
import Button from "@/components/Button";
import Link from "next/link";
import { edata } from "@/sampleData";

export default async function Home() {
  // Data from localserver using fetch
  // const data = await getData();
  // console.log(data);

  // Data from within project (sampleData.ts)
  const data = edata;

  return (
    <section>
      {/* <h1 className="text-5xl font-bold text-gray-900 m-4">Employee Details</h1>
   
        <Link href={"/addEmployee"} className="flex justify-center my-4">
          <Button btnText="Add Employee"
          className="bg-gray-900 rounded-md px-4 py-2 text-slate-100" />
        </Link> */}

      <div className="flex justify-center px-6 items-center mx-auto flex-wrap gap-10  max-w-7xl">
        {data.map((employee: Employee) => (
          <Employee
            key={employee.id}
            id={employee.id}
            name={employee.name}
            gender={employee.gender}
            Department={employee.Department}
            salary={employee.salary}
            Designation={employee.Designation}
            email={employee.email}
            employee_status={employee.employee_status}
          />
        ))}
      </div>
    </section>
  );
}
