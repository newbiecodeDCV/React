import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { getFeeBill, patchSingleBill } from '../service/FeeService';
import { Button } from 'react-bootstrap';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import ModalPatchBill from './ModalPatchBill';
import ModalPatchSingleBill from './ModalPatchSIngle';
import { toast } from 'react-toastify';
const TablePeeBillAprt = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [month, setMonth] = useState(searchParams.get('month'));
    const [year, setYear] = useState(searchParams.get('year'));
    const { apartmentId: firstApartmentId } = useParams();
    const [apartmentId, setApartmentId] = useState(firstApartmentId);
    const [inComingApartmentId, setInComingApartmentId] =
        useState(firstApartmentId);
    const [isReload, setIsReload] = useState(false);
    const [listRecord, setListRecord] = useState([]);
    const [isShowModalPatchBill, setIsShowModalPatchBill] = useState(false);
    const [total, setTotal] = useState(0);
    const [id, setId] = useState(undefined);
    const navigate = useNavigate();
    const [isShowModalPatchSingle, setIsShowModalPatchSingle] = useState(false);
    useEffect(() => {
        //call API console.log("check")
        getfeebill();
    }, [isReload]);
    const getfeebill = async () => {
        try {
            let res = await getFeeBill(apartmentId, month, year);
            console.log(res);
            setListRecord(res.data.record);
            setTotal(res.data.total);
        } catch (error) {
            console.log('🚀 ~ getpeebill ~ error:', error);
        }
    };
    const handlePatchSingleBill = async (id, payMoney, payerName) => {
        try {
            await patchSingleBill(id, payMoney, payerName);
            toast.success('Nộp thành công');
            setIsReload((prev) => !prev);
            setId(undefined);
            return true;
        } catch (error) {
            return false;
        }
    };
    const handleClickPatchSingleBill = (id) => {
        setId(id);
        setIsShowModalPatchSingle(true);
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
            <div>
                Căn hộ số{' '}
                <input
                    type="text"
                    value={inComingApartmentId}
                    onChange={(event) =>
                        setInComingApartmentId(event.target.value)
                    }
                />{' '}
                Tháng{' '}
                <input
                    type="text"
                    value={month}
                    onChange={(event) => setMonth(event.target.value)}
                />{' '}
                Năm{' '}
                <input
                    type="text"
                    value={year}
                    onChange={(event) => setYear(event.target.value)}
                />{' '}
                <button
                    className="btn btn-success"
                    onClick={() => {
                        navigate(
                            `/feePage/fee/billOfApartment/${inComingApartmentId}?month=${month}&year=${year}`
                        );
                        setApartmentId(inComingApartmentId);
                        setIsReload((prev) => !prev);
                    }}
                >
                    Lọc
                </button>
            </div>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Tên phí</th>
                        <th>Giá</th>
                        <th>Trạng thái</th>
                        <th>Ngày nộp</th>
                        <th>Người nộp</th>
                        <th>Người thu</th>
                        <th>Tùy chọn</th>
                    </tr>
                </thead>
                <tbody>
                    {listRecord &&
                        listRecord.length > 0 &&
                        listRecord.map((item, index) => (
                            <tr key={`user-${index}`}>
                                <td>{item.fee.name}</td>
                                <td>
                                    {item.amount.toLocaleString('vi', {
                                        style: 'currency',
                                        currency: 'VND',
                                    })}
                                </td>
                                <td>{item.status}</td>
                                <td>{item.payDay}</td>
                                <td>{item.payerName}</td>
                                <td>{item.billCollector}</td>
                                <td>
                                    {item.status === 'Chưa nộp' && (
                                        <Button
                                            variant="info mx-3"
                                            onClick={() => {
                                                handleClickPatchSingleBill(
                                                    item.id
                                                );
                                            }}
                                        >
                                            Đóng phí
                                        </Button>
                                    )}
                                </td>
                            </tr>
                        ))}
                </tbody>
            </Table>
            <ModalPatchBill
                show={isShowModalPatchBill}
                handleClose={handleClose3}
                getFeebill={getfeebill}
            />

            <div>
                {total > 0 && (
                    <p style={{ fontWeight: 'bold' }}>
                        Còn phải đóng:{' '}
                        {total.toLocaleString('vi', {
                            style: 'currency',
                            currency: 'VND',
                        })}{' '}
                    </p>
                )}
            </div>
            <div>
                {listRecord &&
                    listRecord.length > 0 &&
                    listRecord.find(
                        (record) => record.status === 'Chưa nộp'
                    ) && (
                        <Button variant="info" onClick={handleOpen3}>
                            Đóng toàn bộ
                        </Button>
                    )}
            </div>
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
            <ModalPatchSingleBill
                show={isShowModalPatchSingle}
                id={id}
                handleClose={() => setIsShowModalPatchSingle(false)}
                handleSubmit={handlePatchSingleBill}
            ></ModalPatchSingleBill>
        </>
    );
};
export default TablePeeBillAprt;
