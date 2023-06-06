/*

import { useRouter } from "next/router";

//// http://localhost:3000/blog/blog43
////     output : my blog43 Content


const pageno = () => {

    const router = useRouter();
    const cblog = router.query.pageno;

  return (
   
            <>
                <h1> my {cblog} Content </h1>
            </>

  )

}

export default pageno;

*/






// getStaticPaths  : Specify dynamic routes to pre-render pages based on data 



export const getStaticPaths = async() => {

    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();



    const paths = data.map((currele) => {
        return {
            params : {
                pageno : currele.id.toString(),
            }
        }
    })

    return {
        paths,
        fallback:false
    }
}



export const getStaticProps = async(context) => {

    const id = context.params.pageno;
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await res.json();


    return {
      props : {
        data
      }
    }
  }




const mydata = ({data}) => {
    return (
        
        <>
           <div className="ssr-styles ssr-styles-inside">
               
                <h3>{data.id}</h3> 

                <h2>{data.title}</h2>
                <p>{data.body}</p>
              
            </div>

        </>
    
    )
}

export default mydata;
