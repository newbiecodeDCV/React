import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { useData3 } from '../Context/UseContext';
import { getPeeBill } from '../service/UserService';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import ModalPatchBill from './ModalPatchBill';
const TablePeeBillAprt = () => {
    const { apartmentId, month, year } = useData3();
    const [listRecord, setListRecord] = useState([]);
    const [isShowModalPatchBill,setIsShowModalPatchBill] = useState(false)
    const [total, setTotal] = useState(0);
    const navigate = useNavigate()
    useEffect(() => {
        //call API
        getpeebill();
    }, []);
    const getpeebill = async () => {
        let res = await getPeeBill(apartmentId, month, year);
        console.log(res);
        setListRecord(res.data.record);
        setTotal(res.data.total);
    };
    const handleClose3 = () =>{
        setIsShowModalPatchBill(false)
      }
      const handleOpen3 = () =>{
        setIsShowModalPatchBill(true)
      }
    return (
        <>
            <div className="my-3 add-new">
                <span>
                    {' '}
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
    show = {isShowModalPatchBill}
    handleClose = {handleClose3}
    getpeebill ={getpeebill}
    />
     
            <div>{total > 0 && <p>Tổng phải đóng: {total} đồng</p>}</div>
            <div className ="my-3 add-new">
           <span> <Button  variant="success"
           onClick={()=>navigate('/peePage/page2')}
           >Quay lại</Button></span>
        </div>     
        <div><Button  variant="success"
                    onClick={handleOpen3}
                    >
                      Đóng phí
                    </Button></div>
                  
        </>
    );
};
export default TablePeeBillAprt;
