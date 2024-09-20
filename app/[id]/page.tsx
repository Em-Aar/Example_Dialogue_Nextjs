import Employee from "@/components/employee";

export default async function Page({ params }:any) {
    const id = params.id
  const res = await fetch(`https://dummy.restapiexample.com/api/v1/employee/${id}`);
  if (!res.ok) throw new Error("Failed to fetch data");
  const { data } = await res.json();
  return (
    <div className="m-4">
      <Employee
        id={data.id}
        employee_name={data.employee_name}
        employee_age={data.employee_age}
        profile_image={data.profile_image}
        employee_salary={data.employee_salary}
      />
    </div>
  );
}
