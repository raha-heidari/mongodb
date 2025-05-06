
const baseURL = "http://localhost:3000/member"; // Write down the base URL of the created API.


///////////////////////////////////////////////////
const getAllUser = async () => {
try {
    const response=await fetch(`${baseURL}`,{ method:"GET"});
          
if (!response.ok) {
    throw new Error(`Error : ${response.status}`)
}

       const data=await response.json();
       return data;
      
} catch (error) {
    console.log(error);
    
}
};
//////////////////////////////////////
const createUser = async (userData) => {

try {

const response=await fetch(`${baseURL}`,{

    method:"POST",
    headers:{

    "Content-Type":"application/json"

    },
    body: JSON.stringify(

     userData

    )
})


const data=await response.json();

return { res: data, error: null };

} catch (error) {
    console.log(error);
    return { res: null, error: error.message };
    
}

};



//////////////////////////////////////////////
const deleteUser = async (id) => {

try {
    
    const response=await fetch(`${baseURL}/${id}`,{
        method:"DELETE",
        headers:{
            "Content-Type":"application/json"
        }
    })


    if (!response.ok) {
        
        throw new Error(`Error:${response.status}`);
         
    }

    const data=await response.json();
    return data;

} catch (error) {
    console.log(error);
    
}

};

///////////////////////////////////////////////////

const updateUser =async(id,userData)=>{

try {
    
const res=await fetch(`${baseURL}/${id}`,{


    method:"PATCH",
    headers:{

        "Content-Type":"application/json"
    },
    body:JSON.stringify(
     
        userData

    )
})



if (!res.ok) {
    throw new Error(`Error:${res.status}`);
}


const data=await res.json();
return data;

} catch (error) {
    console.log(error);
    
}
}

/////////////////////////////////////////////////////
export { getAllUser, deleteUser, createUser ,updateUser};


