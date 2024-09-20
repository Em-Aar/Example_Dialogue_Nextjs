
export async function postData({
  EmployeeName,
  age,
  salary,
}: {
  EmployeeName: string;
  salary: string;
  age: string;
}) {
  const updateEmployee = {
    name: EmployeeName,
    salary: salary,
    age: age,
  };
  const res = await fetch("https://dummy.restapiexample.com/api/v1/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updateEmployee),
  });
  if (!res.ok) throw new Error("Failed to fetch data");
  const {status,data} = await res.json();
  return alert(`Update Status: ${status} Employee Name: ${data.name}, Salary: ${data.salary}, Age: ${data.age} updated successfully`);
}
