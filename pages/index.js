import Head from 'next/head'
// import Image from 'next/image'
import {useSession,signIn} from 'next-auth/react'

import styles from '@/styles/Home.module.css'


 
export default function Home() {

const session = useSession();
console.log('Session',session)
 
if(session.data == null ){
  return <button onClick={signIn}>Login</button>
}

  return (
    <>
     <Head>
        <title>Getdevkit</title>
      </Head>
       
    
    </>
  )
}
