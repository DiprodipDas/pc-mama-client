const { useState, useEffect } = require("react")

const useAdmin=email=>{
    const[isAdmin,setIsAdmin]=useState(false)
    useEffect(()=>{
        if(email){
            fetch(`https://pc-mama-server.vercel.app/users/admin/${email}`)
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                setIsAdmin(data.isAdmin);
            })
        }
    },[email])
    return [isAdmin]
}

export default useAdmin;