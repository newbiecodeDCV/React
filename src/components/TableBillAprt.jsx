import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { useData3 } from '../Context/UseContext';
import { getFeeBill } from '../service/FeeService';
import { Button } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import ModalPatchBill from './ModalPatchBill';
const TablePeeBillAprt = () => {
    const {userId} = useParams();
    console.log(userId)
    const { apartmentId, month, year } = useData3();
    const [listRecord, setListRecord] = useState([]);
    const [isShowModalPatchBill, setIsShowModalPatchBill] = useState(false);
    const [total, setTotal] = useState(0);
    const navigate = useNavigate();
    useEffect(() => {
        //call API console.log("check")
        getfeebill();
      
    }, []);
    const getfeebill = async () => {
        try {
            let res = await getFeeBill(apartmentId, month, year);
            setListRecord(res.data.record);
            setTotal(res.data.total);
        } catch (error) {
            console.log('🚀 ~ getpeebill ~ error:', error);
        }
    };
    const handleClose3 = () => {
        setIsShowModalPatchBill(false);
    };
    const handleOpen3 = () => {
        setIsShowModalPatchBill(true);
    };
    return (
        <>
            <div className="my-3 add-new">
                <span>
                    {!(listRecord && listRecord.length > 0) && (
                        <p>Không tìm thấy thông tin!!!</p>
                    )}{' '}
                    {listRecord && listRecord.length > 0 && (
                        <b>
                            Hóa đơn căn hộ {apartmentId} tháng {month} năm{' '}
                            {year}
                        </b>
                    )}
                </span>
            </div>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Tên phí</th>
                        <th>Giá</th>
                        <th>Trạng thái</th>
                        <th>Ngày nộp</th>
                        <th>Người nộp</th>
                    </tr>
                </thead>
                <tbody>
                    {listRecord &&
                        listRecord.length > 0 &&
                        listRecord.map((item, index) => (
                            <tr key={`user-${index}`}>
                                <td>{item.fee.name}</td>
                                <td>{item.amount}</td>
                                <td>{item.status}</td>
                                <td>{item.payDay}</td>
                                <td>{item.payerName}</td>
                            </tr>
                        ))}
                </tbody>
            </Table>
            <ModalPatchBill
                show={isShowModalPatchBill}
                handleClose={handleClose3}
                getFeebill={getfeebill}
            />

            <div>{total > 0 && <p>Tổng phải đóng: {total} đồng</p>}</div>
            <div className="my-3 add-new">
                <span>
                    {' '}
                    <Button
                        variant="success"
                        onClick={() => navigate('/feePage')}
                    >
                        Quay lại
                    </Button>
                </span>
            </div>
            <div>
                {listRecord && listRecord.length > 0 && (
                    <Button variant="success" onClick={handleOpen3}>
                        Đóng phí
                    </Button>
                )}
            </div>
        </>
    );
};
export default TablePeeBillAprt;
