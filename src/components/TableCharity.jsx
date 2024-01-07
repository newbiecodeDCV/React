import Table from 'react-bootstrap/Table';
import { useEffect, useState } from 'react';
import { fetchAllCharity } from '../service/CharityService';
import { useData1 } from '../Context/UseContext';
import { Button } from 'react-bootstrap';
import ModalAddCharity from './ModalAddCharity';
import ModalCharity from './ModalCharity';
import { getDate } from '../utils/getDate';
import { useNavigate } from 'react-router-dom';
const TableCharity = () => {
    const [isShowModalCharity, SetIsShowModalCharity] = useState(false);
    const [feeId, setFeeId] = useState(undefined);
    const handleClose2 = () => {
        SetIsShowModalCharity(false);
    };
    const handleModalCharityClick = () => {
        SetIsShowModalCharity(true);
    };

    const [isShowModalAdd, setIsShowModalAdd] = useState(false);
    const navigate = useNavigate();
    const [data1, setData1] = useState([]);
    const handleClose = () => {
        setIsShowModalAdd(false);
    };
    const handleOpen = (param) => {
        setIsShowModalAdd(true);
        setFeeId(param)
    };

    const getCharity = async () => {
        let res = await fetchAllCharity();
        console.log(res);
        setData1(res.data);
    };
    useEffect(() => {
        //call API
        getCharity();
    }, []);

    const handleButtonClick = (param) => () => {
        navigate(`/feePage/charity/fund/${param}`)
    };

    return (
        <>
            <div className="my-3 add-new">
                <span>
                    {' '}
                    <b>Danh sách các phí từ thiện</b>
                </span>
                <button
                    className="btn btn-success"
                    onClick={handleModalCharityClick}
                >
                    Thêm phí từ thiện
                </button>
            </div>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Tên Quỹ</th>
                        <th>Ngày bắt đầu</th>
                        <th>Ngày kết thúc</th>
                        <th>Tùy Chọn</th>
                    </tr>
                </thead>
                <tbody>
                    {data1 &&
                        data1.map((item, index) => (
                            <tr>
                                <td>{item.name}</td>
                                <td>{getDate(item.startDate)}</td>
                                <td>{getDate(item.endDate)}</td>
                                <td>
                                    <Button
                                        variant="info mx-3"
                                        onClick={handleButtonClick(item.id)}
                                    >
                                        Thống kê quỹ
                                    </Button>
                                    {new Date(item.endDate).getTime() >
                                        Date.now() &&
                                        new Date(item.startDate).getTime() <
                                            Date.now() && (
                                            <Button
                                                variant="success"
                                                onClick={() =>
                                                    handleOpen(item.id)
                                                }
                                            >
                                                Đóng góp
                                            </Button>
                                        )}
                                </td>
                            </tr>
                        ))}
                </tbody>
            </Table>
            <ModalAddCharity feeId={feeId} show={isShowModalAdd} handleClose={handleClose} />
            <ModalCharity
                show={isShowModalCharity}
                handleClose={handleClose2}
                getCharity={getCharity}
            />
        </>
    );
};
export default TableCharity;
