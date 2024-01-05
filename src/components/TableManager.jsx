import Table from 'react-bootstrap/Table';
import { useEffect, useState } from 'react';
import { fetchAllManager } from '../service/UserService';
import ModalAddManager from './ModalPostManager';
import { useNavigate } from 'react-router-dom';

const TableManager = () => {
    const navigate = useNavigate();
    const [listManager, setListManager] = useState([]);
    const [isShowModalManager, setIsShowModalManager] = useState(false);

    const handleClose = () => {
        setIsShowModalManager(false);
    };
    useEffect(() => {
        //call API
        getManager();
    }, []);

    const getManager = async () => {
        try {
            let res = await fetchAllManager();
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
                            </tr>
                        ))}
                </tbody>
            </Table>

            <ModalAddManager
                show={isShowModalManager}
                handleClose={handleClose}
                getManager={getManager}
            />
        </>
    );
};
export default TableManager;
