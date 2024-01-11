import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { getFee } from '../service/FeeService';
import Button from 'react-bootstrap/Button';
import { toast } from 'react-toastify';
import ModalPatchFee from './ModalPatchFee';
import ModalAddFeeDV from './ModalAddFeeDV';
import ModalDeleteFee from './ModalDeleteFee';
import { UserContext } from '../Context/UseContext';
import { useContext } from 'react';
const TableFeeDV = (props) => {
    
    const {user} = useContext(UserContext)
    const [isShowModalAddFeeDV, setIsShowModalAddFeeDV] = useState(false);
    const [listFee, setListFee] = useState([]);
    const [isModalPatchFeeDV, setIsModalPatchFee] = useState(false);
    const [isModalDeleteFee, setIsModalDeleteFee] = useState(false);
    const [id, setId] = useState('');

    useEffect(() => {
        //call API
        getFeeDV();
    }, []);

    const getFeeDV = async () => {
        try {
            let res = await getFee();
            if (res && res.data) {
                setListFee(res.data);
            }
        } catch (e) {
            console.log(e);
        }
    };

    const handledelete = (id) => {
        setIsModalDeleteFee(true);
        setId(id);
    };
    const handlePatchFeeDV = (id) => {
        setId(id);
        setIsModalPatchFee(true);
    };
    const handleClose = () => {
        setIsModalPatchFee(false);
    };
    const handleClose1 = () => {
        setIsShowModalAddFeeDV(false);
    };
    const handleClose2 = () => {
        setIsModalDeleteFee(false);
    };
    const handleOpen1 = () => {
        setIsShowModalAddFeeDV(true);
    };
    return (
        <>
            <div className="my-3 add-new">
                <span>
                    {' '}
                    <b>Danh sách phí dịch vụ</b>
                </span>
               {user.role ==='Quản lý'&& <button className="btn btn-success" onClick={handleOpen1}>
                    Thêm phí
                </button>}
            </div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Tên Phí</th>
                        <th>Giá(/m2)</th>
                        <th>Tạo ngày</th>
                        <th>Cập nhập lúc</th>
                     {user.role ==='Quản lý' &&   <th>Tùy Chọn</th>}
                    </tr>
                </thead>
                <tbody>
                    {listFee &&
                        listFee.length > 0 &&
                        listFee.map((item, index) => (
                            <tr key={`user-${index}`}>
                                <td>{item.name}</td>
                                <td>
                                    {item.unitPrice.toLocaleString('vi', {
                                        style: 'currency',
                                        currency: 'VND',
                                    })}
                                </td>
                                <td>{item.createdAt}</td>
                                <td>{item.updatedAt}</td>
                                {user.role ==='Quản lý' &&     <td>
                                    <Button
                                        variant="danger mx-3"
                                        onClick={() => handledelete(item.id)}
                                    >
                                        Xóa
                                    </Button>
                                    <Button
                                        variant="warning"
                                        onClick={() =>
                                            handlePatchFeeDV(item.id)
                                        }
                                    >
                                        Sửa
                                    </Button>
                                </td>}
                            </tr>
                        ))}
                </tbody>
            </Table>
            <ModalPatchFee
                show={isModalPatchFeeDV}
                handleClose={handleClose}
                id={id}
                getPeeDV={getFeeDV}
            />
            <ModalAddFeeDV
                show={isShowModalAddFeeDV}
                handleClose={handleClose1}
                getPeeDV={getFeeDV}
            />
            <ModalDeleteFee
                show={isModalDeleteFee}
                handleClose={handleClose2}
                id={id}
                getPeeDV={getFeeDV}
            />
        </>
    );
};

export default TableFeeDV;
