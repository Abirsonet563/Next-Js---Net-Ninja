import React from 'react'
import Link from 'next/link'
import { useEffect } from 'react';
import { useRouter } from 'next/router';

function NotFound() {
    const router = useRouter();
    useEffect(() => {
        setTimeout(()=>{
//  router.go(1)
    router.push('/')
        }, 3000)
         }, [])

    return (
    <div className='not-found'> 
    <h1>oppps.....</h1>
    <h1>That page is not found.</h1>
    <p>Go Back To Home Page <Link href="/">Home Page</Link></p>
    </div>
  )
}

export default NotFound;