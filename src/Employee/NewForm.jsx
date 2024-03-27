
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { file } from "@babel/types";




const NewForm = () => {
let [empname,setEmpname]=useState('');
let [empid,setEmpid]=useState('');
let [empemail,setEmpemail]=useState('');
let [nomname,setNomname]=useState('');
let [nomid,setNomid]=useState('');
let [nomemail,setNomemail]=useState('');
// let [nomrel,setNomrel]=useState('');
let[state,setState]=useState(true);
let[pdf,setPdf]=useState('');
let [what,setWhat]=useState('');
let [how,setHow]=useState('');
let [benefits,setBenefits]=useState('');
let [myphoto,setMyphoto]=useState('');



let navigate=useNavigate()



let handleSubmit = async(e) => {
    e.preventDefault();
    navigate('/review')
    try {
      await axios.post('http://localhost:8000/',{
        empname,empid,empemail,nomname,nomid,nomemail,what,how,benefits,myphoto,pdf
      })
    } catch (error) {
      console.log(error);
    }
  }

let updateProfilePic = (element) => {
  let file = element.currentTarget.files[0];
  console.log(file);
  let reader = new FileReader();
  reader.onloadend = function() {
      console.log('RESULT', reader.result);
      setMyphoto(reader.result); 
  }
  reader.readAsDataURL(file);

  // Reset the form after selecting a file
  element.currentTarget.form.reset();
}

let updateProfilePics = (element) => {
  let file = element.currentTarget.files[0];
  console.log(file);
  let reader = new FileReader();
  reader.onloadend = function() {
      console.log('RESULT', reader.result);
      setPdf(reader.result); 
  }
  reader.readAsDataURL(file);

  // Reset the form after selecting a file
  element.currentTarget.form.reset();
}

    return (
        <section className="authBlock">
        <article>
        <div className="main-head">
        <h2>Employee Nominee Form</h2>
        </div>
          <form action="POST">
    <div className="main-form-div">
    <div className="form-group">
              <label htmlFor="name"><span>Nominator Name</span></label>
              <input
                type="text"
                id="name"
                name="empname"
                onChange={(e)=>setEmpname(e.target.value)}
                value={empname} required
              />
              <label id="aria-showelemslabel-Name1" elname="formSubInfoText" class="formSubInfoText">Name</label>
            </div>
        
            <div className="form-group form-group1">
              <label htmlFor="ID"><span>Nominator ID</span></label>
              <input
                type="text"
                id="ID"
                name="empid"
                onChange={(e)=>setEmpid(e.target.value)}
                value={empid}
                required
              />
                  <label id="aria-showelemslabel-Name1" elname="formSubInfoText" class="formSubInfoText">ID</label>
            </div>
            <div className="form-group form-group2">
              <label htmlFor="email"><span>Nominator Email</span></label>
              <input
                type="email"
                id="email"
                name="empemail"
                onChange={(e)=>setEmpemail(e.target.value)}
                value={empemail}
                required
                minLength={13}
              />
                  <label id="aria-showelemslabel-Name1" elname="formSubInfoText" class="formSubInfoText">Email</label>
            </div>
    </div>
    <div className="main-form-div">
     
               <div className="form-group form-group3">
              <label htmlFor="name"><span>Nominee Name</span></label>
              <input
                type="text"
                id="name"
                name="nomname"
                onChange={(e)=>setNomname(e.target.value)}
                value={nomname}
                required
              />
                  <label id="aria-showelemslabel-Name1" elname="formSubInfoText" class="formSubInfoText">Name</label>
            </div>
            <div className="form-group form-group4">
              <label htmlFor="ID"><span>Nominee ID</span></label>
              <input
                type="text"
                id="ID"
                name="nomid"
                onChange={(e)=>setNomid(e.target.value)}
                value={nomid}
                required
              />
                  <label id="aria-showelemslabel-Name1" elname="formSubInfoText" class="formSubInfoText">ID</label>
            </div>
            <div className="form-group form-group5">
              <label htmlFor="email"><span>Nominee Email</span></label>
              <input
                type="email"
                id="email"
                name="nomemail"
                onChange={(e)=>setNomemail(e.target.value)}
                value={nomemail}
                minLength={13}
                required
              />
                  <label id="aria-showelemslabel-Name1" elname="formSubInfoText" class="formSubInfoText">Email</label>
            </div>
            </div>
           <div className="main-form-div">
            {/* <div className="form-group form-group6">
              <label htmlFor="Education">Nominee Relation</label>
              <select
                name="nomrel"
                id="Education"
                onChange={(e)=>setNomrel(e.target.value)}
              >
                <option value="">Choose Nominee Relation</option>
                <option value="father">Father</option>
                <option value="mother">Mother</option>
                <option value="brother">Brother</option>
                <option value="sister">Sister</option>
              </select>
            </div> */}
            </div>
            <div className="form-group form-group7">
              <label htmlFor="email">What did you do?</label>
              <textarea id="what" name="what" rows="4" cols="50"  value={what} onChange={(e)=>setWhat(e.target.value)}>
</textarea>
              </div>
              <div className="form-group form-group8">
              <label htmlFor="email">How did you do?</label>
              <textarea id="how" name="how" rows="4" cols="50"  value={how} onChange={(e)=>setHow(e.target.value)}>
</textarea>
              </div>
              <div className="form-group form-group9">
              <label htmlFor="email">What Benefits does it bring?</label>
              <textarea id="benefits" name="benefits" rows="4" cols="50"  value={benefits} onChange={(e)=>setBenefits(e.target.value)}>
</textarea>
              </div>
              <div className="main-form-div1">
              <div className="form-group form-group10">
              <label htmlFor="myphoto">Select Photo</label>
              <input type="file" id="myphoto" name="myphoto" accept="/image/*" value={file} onChange={updateProfilePic}/>
            {myphoto==""?myphoto==null:<img src={myphoto} alt="" width={100} height={100} style={{marginTop:"20px",marginLeft:"20px",borderRadius:"10px"}} />}
            </div>
            <div className="form-group form-group11">
              <label htmlFor="myfile">Select File</label>
              <input type="file" id="myfile" name="myfile" accept=".pdf,.doc,.docx" onChange={updateProfilePics} value={file} />

           {pdf==""?pdf==null:<iframe src={pdf} alt="" width={100} height={100} style={{marginTop:"20px",marginLeft:"20px",borderRadius:"10px"}}></iframe>}
            </div>
                </div>
            <div className="form-group form-group-btn">
              <button onClick={handleSubmit}>
            <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 265 63.6">
                <rect width="265" height="63.6"/>
                <line class="cls-1" y1="2.5" x2="214" y2="2.5"/>
            </svg>
            <a href="">Submit</a></button>
            </div>
            </form>
            </article>
            </section>
    );
  };

  export default NewForm;