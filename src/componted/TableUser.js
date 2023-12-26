
import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { fetchAllUser } from '../service/UserService';
const TableUser = (props) =>{

    const [listUsers,setListUsers] = useState([]);
    useEffect(() =>{
         //call API
        getUser();
    },[])

    const getUser = async () => {

        let res = await fetchAllUser();
        if( res && res.data ){
          console.log(res)
          setListUsers(res.data)
        }
       
    }
    
    return (
      <>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {listUsers && listUsers.length > 0 &&
              listUsers.map((item, index) => (
                <tr key={`user-${index}`}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.nation}</td>
                  <td>{item.email}</td>
                </tr>
              ))}
          </tbody>
        </Table>
    
      </>
    );
    
}
export default TableUser;