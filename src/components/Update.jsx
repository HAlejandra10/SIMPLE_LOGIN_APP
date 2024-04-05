import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { updateUser } from '../redux/UserReducers';

const Update = () => {
    const dispatch = useDispatch();
    const users =useSelector((state) => state.users)

    const handleChange = (e) =>{
       dispatch(updateUser(e.target.value));
    }

  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
    <div className="w-50 border bg-secondary text-white p-5">
      <h3>Update User</h3>
      <form>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" className="form-control" id="name"  placeholder='Enter Name' value={users.name}  onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="lastname">Lastname:</label>
          <input type="text" className="form-control" id="lastname" placeholder='Enter Lastname' value={users.lastname}  />
        </div> <br />
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" className="form-control" id="email" placeholder='Enter Email' value={users.email}  />
        </div> <br />
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" className="form-control" id="password" placeholder='Enter Password' value={users.password} />
        </div> <br />
        <div>
          <label htmlFor="number">Number:</label>
          <input type="number" className="form-control" id="number" placeholder='Enter Phone Number' value={users.number}  />
        </div> <br />
        <button className="btn btn-info">Update</button>
      </form>
    </div>
  </div>
  )
}

export default Update