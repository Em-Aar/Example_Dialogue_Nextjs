export default async function Delete(id: string) {

  const res = await fetch(
    `https://dummy.restapiexample.com/api/v1/delete/${id}`
  );

  return res.json();
}
