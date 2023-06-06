/*

So how is the routing in next. js app
    
    =>File-system based routing mechanism
        
        ==> When a file is added to the pages folder in a project,
                by default all the files becomes available as a route.

*/



// http://localhost:3000/home

const index = () => {
    return (
      <>
      <h1> Hello World In My Homee .. . . . . </h1>
      </>
    )
  }
  
  export default index;