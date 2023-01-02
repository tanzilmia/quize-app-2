import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const { user,loginWithRedirect} = useAuth0();
    return (
        <div className='text-center'>
             
            <h2>Improve Your Skills With Quize Game </h2>
            <h2 className='text-lime-500 text-3xl'>EveryDay You Can Give 50 Answer </h2>
             {
                user ? 
                <Link className='btn btn-primary my-5' to ='/quize'> Play Now </Link>
                :
                <li>
              {" "}
              <button className='btn btn-primary my-5' onClick={() => loginWithRedirect()}>Log In For Play</button>{" "}
            </li>

             }
             

        </div>
    );
};

export default Home;