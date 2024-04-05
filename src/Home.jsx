import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import { Link } from 'react-router-dom'
// import Login from './components/Login'
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { addUser } from './redux/UserReducers'

const Home = () => {
  const users =useSelector((state) => state.users)
  const dispatch = useDispatch()

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
     .then((res) => res.json())
     .then((data) =>  dispatch(addUser(data))
       //console.log(data)
      )
     .catch((err) => console.log(err)
)
  }, [])
  return (
    <>
    <Navbar />

    <div className="container">
        <h2>REDUX APP WITH JSON SERVER</h2>
        <Link to="/create" className='btn btn-success my-3'>Create +</Link> 
        <table className='table'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Lastname</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Number</th>
                </tr>
            </thead>
            <tbody>
            
                <tr>
                  <td>{users.id}</td>
                  <td>{users.name}</td>
                  <td>{users.lastname}</td>
                  <td>{users.email}</td>
                  <td>{users.password}</td>
                  <td>{users.number}</td>
                  <td>
                       <Link to={`/edit/${users.id}`} className='btn btn-sm btn-primary'>Edit</Link> 
                      <button  className='btn btn-sm btn-danger ms-2'>Delete</button>
                  </td>
                </tr>
      
            </tbody>
        </table>

    </div>
    </>
  )
}

export default Home