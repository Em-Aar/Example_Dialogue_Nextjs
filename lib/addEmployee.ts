// Importing Data from Database

export async function getData(){
    const res = await fetch('https://dummy.restapiexample.com/api/v1/employees');
    if(!res.ok) throw new Error ('Failed to fetch data');
    return res.json();

}


// export async function getData(){
//     const res = await fetch('http://localhost:3001/employees',{
//         headers: {
            
//             'Authorization': 'Bearer '+'apikeyofrehan'
//         },
    
//     });
//     if(!res.ok) throw new Error ('Failed to fetch data');
//     const data = await res.json();
//     return data

// }
