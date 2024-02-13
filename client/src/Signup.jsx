import { useState } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function Signup(){
    const [fname, setFname] = useState();
    const [lname, setLname] = useState();
    const [mobile, setMobile] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [image, setImage] = useState('');
    const navigate = useNavigate();

    function convertToBase64(e){
      console.log(e);
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = () => {
        console.log(reader.result);
        setImage(reader.result)
      };
      reader.onerror = error => {
        console.log("Error: ",err);
      };
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/register', {fname, lname, mobile, email, password, image})
        .then(result => {console.log(result)
        navigate('/login')
        })
        .catch(err => console.log(err))
    }
  

    return (
      <div className="d-flex justify-content-center align-item-center bg-secondary mh-100">
        <div className="bg-white p-3 round w-25">
          <h2>Register</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="fname">
                <strong>First Name</strong>
              </label>
              <input
                type="text"
                placeholder="Enter First Name"
                autoComplete="off"
                name="fname"
                className="form-control rounded-0"
                onChange={(e) => setFname(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="lname">
                <strong>Last Name</strong>
              </label>
              <input
                type="text"
                placeholder="Enter Last Name"
                autoComplete="off"
                name="lname"
                className="form-control rounded-0"
                onChange={(e) => setLname(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="mobile">
                <strong>Mobile No</strong>
              </label>
              <input
                type="text"
                placeholder="Enter Mobile No"
                autoComplete="off"
                name="mobile"
                className="form-control rounded-0"
                onChange={(e) => setMobile(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email">
                <strong>Email</strong>
              </label>
              <input
                type="email"
                placeholder="Enter First Name"
                autoComplete="off"
                name="email"
                className="form-control rounded-0"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="password">
                <strong>Password</strong>
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                autoComplete="off"
                name="password"
                className="form-control rounded-0"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="image">
                <strong>Upload Image</strong>
              </label>
              <input
                type="file"
                accept="image/*"
                className="form-control rounded-0"
                onChange={convertToBase64}
              />
              {image=="" || image==null?"": <img width={100} height={100} src={image}/>}
            </div>

            <button type="submit" className="btn btn-success w-100 rounded-0">
                Register
            </button>
            </form>
            <p>Already Have an Account</p>
            <Link to="/login" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
                Login
            </Link>
          
        </div>
      </div>
    );
}

export default Signup;