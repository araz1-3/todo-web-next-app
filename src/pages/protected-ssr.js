import Layout from '@/containers/Layout';
import React from 'react';
import { useSession ,getSession } from "next-auth/react"

const Protected = () => {
    const {data:session , status} = useSession()
    return (
        <Layout>
           <div>{session.user.name} , wellcome to protected ssr protected page</div> 
        </Layout>
    );
};

export default Protected;

export async function getServerSideProps(ctx){
    const session = await getSession(ctx)
    if(!session){
        return{
            redirect:{
                destination:"/api/auth/signin?callbackUrl=http://localhost:3000/protected-ssr",
                permanent:false,
            }
            
        }
    }
    return{
        props:{
            session,
        }
    }
}