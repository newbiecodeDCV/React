import Table from 'react-bootstrap/Table';
import { useEffect, useState } from 'react';
import { fetchAllAdminForGuest } from '../service/UserService';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../Context/UseContext';
import { useContext } from 'react';
const TableAdminForGuest = () => {
    const {user} = useContext(UserContext)
    const navigate = useNavigate();
    const [listAdmin, setListAdmin] = useState([]);
    useEffect(() => {
        //call API
        getAdmin();
    }, []);

    const getAdmin = async () => {
        try {
            let res = await fetchAllAdminForGuest();
            setListAdmin(res.data);
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <>
            <div className="my-3 add-new">
                <span>
                    {' '}
                    <b>Danh sách ban quản trị</b>
                </span>
            </div>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Họ Tên</th>
                        <th>Số Phòng</th>
                        <th>Email liên hệ</th>
                    </tr>
                </thead>
                <tbody>
                    {listAdmin &&
                        listAdmin.length > 0 &&
                        listAdmin.map((item, index) => (
                            <tr key={`manager-${index}`}>
                                <td>{item.people?.name}</td>
                                <td>{item.people?.apartmentId}</td>
                                <td>{item.email}</td>
                            </tr>
                        ))}
                </tbody>
            </Table>
        </>
    );
};
export default TableAdminForGuest;
