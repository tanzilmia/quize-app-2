import { useAuth0 } from '@auth0/auth0-react';
import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AdminPanel = () => {
    const { user, isLoading, } =
    useAuth0();
    
    const {data:admindata = []} = useQuery({
        queryKey : ['alluserinfo'],
        queryFn : async ()=>{
          const res = await fetch(`https://server-five-gold.vercel.app/alluserinfo`)
          const data = await res.json()
          return data
        }
      })

      console.log(admindata)

    return (
        <div>
        {
         admindata.length > 0 ?
         <>
          <div className="total_info">
         <h2> Total  : {admindata.length} user </h2>
         
         </div>
         <div className="overflow-x-auto">
           <table className="table w-full">
             <thead>
               <tr>
                 <th>Serial</th>
                 <th>Date</th>
                 <th>user Email</th>
                 <th>Correct Ans</th>
                 <th>Wrong Ans</th>
                 <th>TotalQuize</th>
               </tr>
             </thead>
             <tbody>
               {admindata.map((userinfo, index) => (
                 <tr key={index}>
                   <th>{index + 1}</th>
                   <th>{userinfo.date}</th>
                   <th>{userinfo.email}</th>
                   <th>{userinfo.score}</th>
                   <th>{userinfo.wrongAns}</th>
                   <th> {userinfo.currentQuestion}</th>
                 </tr>
               ))}
             </tbody>
           </table>
         </div>
         </>
         :
         <>
         
         <div className="text-center">
         <h2 className="text-2xl text-primary"> Currectly No User Is Available </h2>
         
         </div>
   
         </>
        }
       </div>
    );
};

export default AdminPanel;