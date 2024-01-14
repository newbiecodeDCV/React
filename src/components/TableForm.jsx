import Table from 'react-bootstrap/Table';
import { useEffect, useState } from 'react';
import { getGuestBill } from '../service/FeeService';
import { useData5 } from '../Context/UseContext';

const TableForm = () => {
    const { apartmentId, citizenId } = useData5();
    const [listFee, setListFee] = useState('');
    const [total, setTotal] = useState(0);
    const [totalMoney, setTotalMoney] = useState(0);
    useEffect(() => {
        //call API
        getGuest();
    }, []);

    const getGuest = async () => {
        try {
            let res = await getGuestBill(apartmentId, citizenId);
            console.log(res);
            setListFee(res.data.record);
            let totalMoney = 0;
            setTotal(res.data.total);
            for (const record of res.data.record) {
                totalMoney += record.amount;
            }
            setTotalMoney(totalMoney);
        } catch (e) {
            console.log(e);
        }
    };
    return (
        <>
            <div className="my-3 add-new">
                <span>
                    {' '}
                    <b>
                        Hóa đơn tháng {new Date().getMonth() + 1} năm{' '}
                        {new Date().getFullYear()}
                    </b>
                </span>
            </div>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Tên Phí</th>
                        <th>Tháng</th>
                        <th>Năm</th>
                        <th>Trạng Thái</th>
                        <th>Người nộp</th>
                        <th>Nộp ngày</th>
                        <th>Thành tiền</th>
                    </tr>
                </thead>
                <tbody>
                    {listFee &&
                        listFee.length > 0 &&
                        listFee.map((item, index) => (
                            <tr key={`user-${index}`}>
                                <td>{item.fee.name}</td>
                                <td>{item.month}</td>
                                <td>{item.year}</td>
                                <td>{item.status}</td>
                                <td>{item.payerName}</td>
                                <td>{item.payDay}</td>
                                <td>
                                    {item.amount.toLocaleString('vi', {
                                        style: 'currency',
                                        currency: 'VND',
                                    })}
                                </td>
                            </tr>
                        ))}
                </tbody>
            </Table>
            <div>
            <p style={{ fontWeight: 'bold' }}>
                    Tổng:{' '}
                    {totalMoney.toLocaleString('vi', {
                        style: 'currency',
                        currency: 'VND',
                    })}{' '}
                </p>
                <p style={{ fontWeight: 'bold' }}>
                    Còn phải đóng:{' '}
                    {total.toLocaleString('vi', {
                        style: 'currency',
                        currency: 'VND',
                    })}{' '}
                </p>
            </div>
        </>
    );
};
export default TableForm;
