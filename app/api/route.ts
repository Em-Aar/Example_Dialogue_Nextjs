// import { NextResponse } from "next/server";

// export async function PUT(request:Request) {

//     if(!request.body){
//         return NextResponse.json({ message: "No body" });
//     }

//     const userData = await request.json()
//     console.log(userData)
    


//     const res = await fetch(`http://localhost:3001/employees/${userData.id}`, {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(userData),
//     });
//     if (!res.ok) {
//       throw new Error('Failed to fetch data');
//     }
//     const data = await res.json();
    



//   return NextResponse.json(data);
// }