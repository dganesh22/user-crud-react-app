import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'

const url = 'https://user-api-aw1m.onrender.com'

function Home() {
  const [users, setUsers] = useState([])

  const readUser = async () => {
    await axios.get(`${url}/api/users`)
      .then(res => {
        console.log(`users =`, res)
        setUsers(res.data)
      })
      .catch(err => toast.error(err.message))
  }

  useEffect(() => {
    readUser()
  }, [])


  return (
    <div className='container'>
      <div className="row">
        <div className="col-md-12">
          <table className="table table-bordered table-striped table-hover text-center">
            <thead>
              <tr>
                <th colSpan={5}>
                  <h6 className="text-success display-6">Users Data</h6>
                </th>
              </tr>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Age</th>
                <th>IsAdmin</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {
                users.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td> {item.name} </td>
                      <td> {item.email} </td>
                      <td> {item.age} years </td>
                      <td> {item.isAdmin ? "Admin" : "User"} </td>
                      <td>
                        <button className="btn btn-info btn-sm me-2">
                          <i className="bi bi-pencil"></i>
                        </button>
                        <button className="btn btn-sm btn-danger">
                          <i className="bi bi-trash"></i>
                        </button>
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Home
