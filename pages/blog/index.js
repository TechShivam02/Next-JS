
// to render   http://localhost:3000/blog     // bcz of named index.js    it will render 

import Link from "next/link";

// but file name must be index.js   // if inside the folder   // else Error 


// comp name can be anything 

/*
const blog = () => {
    return (
      <>
      <h1> Hello World In My Blog Page .. . . . . </h1>
      </>
    )
  }
  
  export default blog;

  */




    




  /*

  // getStaticProps // Fetch the data at runtime 


  export const getStaticProps = async() => {  
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();


    return {
      props : {
        data
      }
    }
  }


  const blog = ({data}) => {
    return (
      <>
      <h1> Hello World In My Blog Page .. . . . . </h1>

      {data.slice(0,5).map((currEle) => {
          return (
            <div key = {currEle.id} className="ssr-styles">
               
               <h3>{currEle.id}</h3> 

              
                      <h2>{currEle.title}</h2>
            

            </div>
          )
        })
      }
      </>
    )
  }
  
  export default blog;




*/




  
  // getStaticPaths // Fetch the data at runtime 


  export const getStaticProps = async() => {  
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();


    return {
      props : {
        data
      }
    }
  }


  const blog = ({data}) => {
    return (
      <>
      <h1> Hello World In My Blog Page .. . . . . </h1>

      {data.slice(0,5).map((currEle) => {
          return (
            <div key = {currEle.id} className="ssr-styles">
               
               <h3>{currEle.id}</h3> 

               <Link href={`/blog/${currEle.id}`}>
                      <h2>{currEle.title}</h2>
               </Link>
              

            </div>
          )
        })
      }
      </>
    )
  }
  
  export default blog;
