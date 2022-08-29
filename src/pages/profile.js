import Layout from '@/containers/Layout';
import React from 'react';
import { useSession , signIn } from "next-auth/react"


const profile = () => {
    const { data:session , status } = useSession({
        required: true,
        onUnauthenticated() {
          signIn()
        },
      })
      if(status === "loading"){
        return(
            <Layout>
            <div>
               loading...
           </div>
          </Layout>
        )
   
      }
    return (
       <Layout>
        <h1>{session.user.name},Wellcome to Profile page</h1>
       </Layout>
    );
};

export default profile;