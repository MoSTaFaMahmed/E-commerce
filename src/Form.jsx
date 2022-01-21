import { useContext, useState } from "react";
import { languageContext } from "./languagecontext";

export default function Form() {
const{lang,setLang}=useContext(languageContext);

const togllang=()=>{
  setLang(lang=="en"?"ar":"en")
}




  const [user, setUser] = useState({
    name: "",
    email: "",
    uname: "",
    password: "",
    cpassword: "",
  });
 /*Name Validation*/
 var regex = /^[a-zA-Z]{3,}$/;
 /*Passowrd Validation*/
 var passwordregex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
 /*Email Validation*/
 var mregex = /^[a-zA-Z]{3,}(@)[a-zA-Z]{5,}(.)(com|net|edu|org).eg$/;
  const [errors,  setErrors] = useState({
     nameErrors: null,
    emailErrors: null,
    unameErrors: null,
    passwordErrors: null,
    cpasswordErrors: null,
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });

    if (e.target.name=="name") {
      setErrors({
        ...errors,
        nameErrors:    
        regex.test(e.target.value) == false
            ? "this field is required"
            :  null,
      });
    }

    if (e.target.name=="email") {
     setErrors({
       ...errors,
       emailErrors:    
       mregex.test(e.target.value) == false
           ? "Email Not Match"
           :  null,
     });
     
   }
   if (e.target.name=="password") {
       
     setErrors({
       ...errors,
       passwordErrors:    
       passwordregex.test(e.target.value) == false
           ? "password Error"
           :  null,
           
     });
     
   }

   if (e.target.name=="cpassword") {
     setErrors({
          ...errors,
          cpasswordErrors 
           
        :e.target.value!=user.password

              ? "password Not Match"
              :  null,
        });
            
   }
    //  console.log(e.target.value,e.target.name);
    //       if(e.target.name=="name"){
    //            setUser({...user,
    //           name:e.target.value
    //      })
    // }
    //      else if(e.target.name=="email"){
    //           setUser({...user,
    //              email:e.target.value
    //      })
    //      }
  };
  return (
    <>
      <div className="container mt-5" dir={lang=="en"?"ltr":"rtl"}>
        <form>
          <div className="mb-3">
            <label for="exampleInputName" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputName"
              value={user.name}
              name="name"
              onChange={(e) => {
                handleChange(e);
              }}
            />
            <small className="text-danger">{errors.nameErrors}</small>
          </div>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              value={user.email}
              name="email"
              onChange={(e) => {
                handleChange(e);
              }}
            />
             <small className="text-danger">{errors.emailErrors}</small>
          </div>
          <div className="mb-3">
            <label for="exampleInputUName" className="form-label">
              User Name
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputUName"
              value={user.uname}
              name="uname"
              onChange={(e) => {
                handleChange(e);
              }}
            />
           
          </div>

          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              value={user.password}
              name="password"
              onChange={(e) => {
                handleChange(e);
              }}
            />
             <small className="text-danger">{errors.passwordErrors}</small>
          </div>

          <div className="mb-3">
            <label for="exampleInputCPassword1" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputCPassword1"
              value={user.cpassword}
              name="cpassword"
              onChange={(e) => {
                handleChange(e);
              }}
            />
               <small className="text-danger">{errors.cpasswordErrors}</small>
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>

         
        </form>
      </div>
      <p onClick={()=>togllang()} className="btn btn-success m-5">Toogl</p>
    </>
  );
}
