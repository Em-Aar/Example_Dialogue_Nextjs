import Delete from "@/lib/delete"

export default async function page({params:{id}}:{params:{id:string}}) {
    console.log(id)
  const data = await Delete(id)
  console.log(data.message)
  return (
    <div>
      Update
    </div>
  )
}
