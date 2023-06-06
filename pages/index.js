
/*
// Control Working :   package lock json -->  __app.js  --> index.js 

const index = () => {
  return (
    <>
    <h1> Hello World </h1>
    </>
  )
}

export default index;


*/




/*

import Link from "next/link";

const index = () => {
  return (
        
        <nav >

            <ul className= "menu">

                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>
                <Link href="/blog">Blog</Link>

            </ul>

       </nav>
  )
}

export default index;


*/




/*


//  lec   12 , 13 _routing_using_events 

import { useRouter } from "next/router";
import {useEffect} from "react";



const index = () => {

  const router = useRouter();

  const handleInput = () => {
    router.push('/blog');
  };


  useEffect(() =>{

      // router.push("/");  // it means whenever u open any error page , it will redirected to home page defaultyly 

      setTimeout(() => {   // it means after 3sec  it will redirect to home page 
        router.push('/blog');
      }, 3000);

  }, [] );

  return (
        
        <nav >

            <ul className= "menu">

                 <a onClick={()=> {router.push('/')}}> Home Page </a>      
                 <a onClick={()=> {router.push('/blog')}}> Blog Page </a>    

               <a onClick={handleInput}>Blog Page</a>

            </ul>
       </nav>
  )
}

export default index;

*/




/*

// lec - 14 , understanding  componenets 

import Navbar from "../components/Navbar.js";


const index = () => {
  return (
    <>
      <Navbar/>
      <Navbar/>
      <Navbar/>
      
    </>
  )
}

export default index;

*/






/*

// lec - 15,16,17,18 ,  global css , module css , inline css , styled jsx 

import Navbar1 from "../components/Navbar1.js";


const index = () => {
  return (
    <>
      <Navbar1/>
      <Navbar1/>
      <Navbar1/>

      <h1> Hello World </h1>
      <p className="para1"> this is first para teg</p>
      <p> this is second para teg</p>

            
            
            <style jsx>
              {
                `
                  h1{
                    color : red;
                  }

                  .para1{
                    color:blue;
                  }
                `
              }

            </style>
      
      
    </>
  )
}

export default index;

*/






/*


import Image from "next/image";     // next/image

// Internal img
// External

 
// for external image   , Error   u have to specify the domain of  images where u getting it , for eg  pexels    in next.nextConfig.js   file 
   
// u have to write in next.configure.js file 

//images : {
 // domains : ["images.pexels.com" , "images.unsplash.com"]
// }

const index = () => {
  return (
    <>
     

      <h1> Hello World </h1>
      <p className="para1"> this is first para teg</p>
      <p> this is second para teg</p>

          
      <Image src="/demo.jpg" width="500" height="400"></Image>    Internal  

      <Image src="https://images.pexels.com/photos/1183099/pexels-photo-1183099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
      width="500"
      height="400">

      </Image>   



      <Image src="https://images.unsplash.com/photo-1685877596988-18f654f1138f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
      width="700"
      height="500">

      </Image>   

  
    </>
  )
}

export default index;

*/





import Head from "next/head";

const index = () => {
  
    return (
    
      <>  

        <Head>
            <title> Home Page</title>

            <meta charset="UTF-8"/>
            <meta name="description" content="Free Web tutorials"/>
            <meta name="keywords" content="HTML, CSS, JavaScript"/>
            <meta name="author" content="John Doe"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

        </Head>

      <h1> Hello World </h1>
      <p className="para1"> this is first para teg</p>
      <p> this is second para teg</p>
     

      </>

    )

}

export default index;
