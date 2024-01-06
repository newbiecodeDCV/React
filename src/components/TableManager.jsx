import Table from 'react-bootstrap/Table';
import { useEffect, useState } from 'react';
import { fetchAllAdmin } from '../service/UserService';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import ModalDelete from './ModalDelete';
const TableManager = () => {
    const navigate = useNavigate();
    const [listManager, setListManager] = useState([]);
    const [isShowModalDelete, setIsShowModalDelete] = useState(false);
    const [id, setID] = useState('');
    const handleClose2 = () => {
        setIsShowModalDelete(false);
    };
    const handledelete = (id) => {
        setIsShowModalDelete(true);
        setID(id);
    };
    useEffect(() => {
        //call API
        getAdmin();
    }, []);

    const getAdmin = async () => {
        try {
            let res = await fetchAllAdmin();
            setListManager(res.data);
            console.log('Check', res);
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
                <button
                    className="btn btn-success"
                    onClick={() => navigate('/admin/addAdmin')}
                >
                    Thêm quản trị
                </button>
            </div>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Họ Tên</th>
                        <th>Số Phòng</th>
                        <th>Email tài khoản</th>
                        <th>Số điện thoại</th>
                        <th> Tùy Chọn</th>
                    </tr>
                </thead>
                <tbody>
                    {listManager &&
                        listManager.length > 0 &&
                        listManager.map((item, index) => (
                            <tr key={`manager-${index}`}>
                                <td>{item.people?.name}</td>
                                <td>{item.people?.apartmentId}</td>
                                <td>{item.email}</td>
                                <td>{item.people?.phoneNumber}</td>
                                <td>
                                    <Button
                                        variant="primary"
                                        onClick={() => handledelete(item.id)}
                                    >
                                        Xóa
                                    </Button>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </Table>
            <ModalDelete
                show={isShowModalDelete}
                handleClose={handleClose2}
                id={id}
                getManager={getAdmin}
            />
        </>
    );
};
export default TableManager;
