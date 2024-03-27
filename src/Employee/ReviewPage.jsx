import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const ReviewPage = ({}) => {

    let navigate=useNavigate()
    const[collection,setCollection]=useState([]);
   

 
    useEffect(()=>{
        axios.get('http://localhost:8000/review/')
        .then(collection=>setCollection(collection.data))
        .catch(err=>console.log(err))
       
         },[])

      // Fetch data from the API when the component mounts
  // useEffect(() => {
  //   fetchData();
  // }, []);



  // const fetchData = () => {
  //   axios.get('http://localhost:8000/review/')
  //     .then(response => {
  //       setCollection(response.data);
  //     })
  //     .catch(error => {
  //       console.error('Error fetching data:', error);
  //     });
  // };


  const handleDelete =() => {
    // axios.delete(`http://localhost:8000/review/${id}`)
    //   .then(() => {
    //     fetchData();
    //   })
    //   .catch(error => {
    //     console.error('Error deleting item:', error);
    //   });
    navigate('/update')
  };
let handleSubmit = e => {
    navigate('/')
}



    return ( 

        <section className="authBlock1">
        <article>
      <table className="authTable" id="authTable">
        <thead>
            <tr>
            <td>Nominator ID <span>&#8595;&#8593;</span></td>
                <td>Nominator Name <span>&#8595;&#8593;</span></td>
                <td>Nominator Email <span>&#8595;&#8593;</span></td>
                <td>Nominee ID <span>&#8595;&#8593;</span></td>
                <td>Nominee Name <span>&#8595;&#8593;</span></td>
                <td>Nominee Email <span>&#8595;&#8593;</span></td>
                {/* <td>Nominee Relation</td> */}
                {/* <td>What did you do?</td>
                <td>How did you do?</td>
                <td>Benefits</td> */}
                <td>Photo <span>&#8595;&#8593;</span></td>
                {/* <td>File</td> */}
                <td>Review <span>&#8595;&#8593;</span></td>
            </tr>
        </thead>
        <tbody>
           {collection.map((col)=>{
            return(
                <tr key={col._id}>
                      <td>{col.empid}</td>
                    <td>{col.empname}</td>
                    <td>{col.empemail}</td>
                    <td>{col.nomid}</td>
                    <td>{col.nomname}</td>
                    <td>{col.nomemail}</td>
                    {/* <td>{col.nomrel}</td> */}
                    {/* <td>{col.what}</td>
                    <td>{col.how}</td>
                    <td>{col.benefits}</td> */}
                    <td ><img src={col.myPhoto} alt="acff" /></td>
                    {/* <td>{col.pdf}</td> */}
                    <td>  <div className="form-group">
              <button onClick={handleDelete}>review</button>
            </div></td>
                </tr>
            )
           })}
        </tbody>
      </table>
 
        </article>
        <div className="form-group1">
            <button onClick={handleSubmit}>Log Out</button>
            </div>
        </section>
     );
}
 
export default ReviewPage;