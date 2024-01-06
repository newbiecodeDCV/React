import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { getFee } from '../service/FeeService';
import Button from 'react-bootstrap/Button';
import { toast } from 'react-toastify';
import ModalPatchFee from './ModalPatchFee';
import ModalAddFeeDV from './ModalAddFeeDV';
import ModalDeleteFee from './ModalDeleteFee';
const TableFeeDV = (props) => {
    const [isShowModalAddPeeDV, setIsShowModalAddPeeDV] = useState(false);
    const [listPee, setListPee] = useState([]);
    const [isModalPatchPeeDV, setIsModalPatchPee] = useState(false);
    const [isModalDeletePee, setIsModalDeletePee] = useState(false);
    const [id, setId] = useState('');

    useEffect(() => {
        //call API
        getFeeDV();
    }, []);

    const getFeeDV = async () => {
        try {
            let res = await getFee();
            if (res && res.data) {
                setListPee(res.data);
            }
        } catch (e) {
            console.log(e);
        }
    };

    const handledelete = (id) => {
        setIsModalDeletePee(true);
        setId(id);
    };
    const handlePatchPeeDV = (id) => {
        setId(id);
        setIsModalPatchPee(true);
    };
    const handleClose = () => {
        setIsModalPatchPee(false);
    };
    const handleClose1 = () => {
        setIsShowModalAddPeeDV(false);
    };
    const handleClose2 = () => {
        setIsModalDeletePee(false);
    };
    const handleOpen1 = () => {
        setIsShowModalAddPeeDV(true);
    };
    return (
        <>
            <div className="my-3 add-new">
                <span>
                    {' '}
                    <b>Danh sách phí dịch vụ</b>
                </span>
                <button className="btn btn-success" onClick={handleOpen1}>
                    Thêm phí
                </button>
            </div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Tên Phí</th>
                        <th>Giá</th>
                        <th>Tạo ngày</th>
                        <th>Cập nhập lúc</th>
                        <th>Tùy Chọn</th>
                    </tr>
                </thead>
                <tbody>
                    {listPee &&
                        listPee.length > 0 &&
                        listPee.map((item, index) => (
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
                                <td>
                                    <Button
                                        variant="danger mx-3"
                                        onClick={() => handledelete(item.id)}
                                    >
                                        Xóa
                                    </Button>
                                    <Button
                                        variant="warning"
                                        onClick={() =>
                                            handlePatchPeeDV(item.id)
                                        }
                                    >
                                        Sửa
                                    </Button>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </Table>
            <ModalPatchFee
                show={isModalPatchPeeDV}
                handleClose={handleClose}
                id={id}
                getPeeDV={getFeeDV}
            />
            <ModalAddFeeDV
                show={isShowModalAddPeeDV}
                handleClose={handleClose1}
                getPeeDV={getFeeDV}
            />
            <ModalDeleteFee
                show={isModalDeletePee}
                handleClose={handleClose2}
                id={id}
                getPeeDV={getFeeDV}
            />
        </>
    );
};

export default TableFeeDV;
