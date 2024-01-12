import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { useData4 } from '../Context/UseContext';
import { getBill } from '../service/FeeService';
import ReactPaginate from 'react-paginate';
import { Button } from 'react-bootstrap';
import { useNavigate, useSearchParams } from 'react-router-dom';
const TableBill = () => {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const [month, setMonth] = useState(searchParams.get('month'));
    const [year, setYear] = useState(searchParams.get('year'));
    const [totalPage, setTotalPage] = useState('');
    const [paymentList, setPaymentList] = useState([]);
    const [totalRecord, setTotalRecord] = useState(0);
    const [totalPaid, setTotalPaid] = useState(0);
    const [isReload, setIsReload] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [status, setStatus] = useState(undefined);
    const [inComingStatus,setInComingStatus]= useState(undefined);
    useEffect(() => {
        //call API
        getbill(1);
    }, [isReload]);
    const getbill = async (page) => {
        try {
            let res = await getBill(page, month, year, status);
            setTotalPage(res.data.totalPage);
            setPaymentList(res.data.paymentList);
            setTotalRecord(res.data.totalRecord);
            setTotalPaid(res.data.totalPaid);
        } catch (e) {
            console.log(e);
        }
    };
    const handlePageClick = (event) => {
        setCurrentPage(event.selected + 1);
        console.log(event);
        getbill(event.selected + 1);
    };
    return (
        <>
            <div className="my-3 add-new">
                {!(paymentList && paymentList.length > 0) && (
                    <p>Không tìm thấy thông tin!!!</p>
                )}{' '}
                <span>
                    {' '}
                    <b>Hóa đơn</b>
                </span>
            </div>
            <div>
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
                <select
                    value={inComingStatus}
                    onChange={(event) => setInComingStatus(event.target.value)}
                >
                    <option value={undefined}>--</option>
                    <option value="Chưa nộp">Chưa nộp</option>
                    <option value="Đã nộp">Đã nộp</option>
                </select>{' '}
                <button
                    className="btn btn-success"
                    onClick={() => {
                        navigate(
                            `/feePage/fee/listBill?month=${month}&year=${year}`
                        );
                        setIsReload((prev) => !prev);
                        setCurrentPage(1);
                        setStatus(inComingStatus);
                    }}
                >
                    Lọc
                </button>
            </div>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Phòng</th>
                        <th>Tháng</th>
                        <th>Năm</th>
                        <th>Sô tiền </th>
                        <th>Trạng Thái</th>
                        <th>Ngày nộp</th>
                        <th>Tên người nộp</th>
                    </tr>
                </thead>
                <tbody>
                    {paymentList &&
                        paymentList.length > 0 &&
                        paymentList.map((item, index) => (
                            <tr key={`user-${index}`}>
                                <td>{item.bill_apartmentId}</td>
                                <td>{item.bill_month}</td>
                                <td>{item.bill_year}</td>
                                <td>
                                    {Number(item.total).toLocaleString('vi', {
                                        style: 'currency',
                                        currency: 'VND',
                                    })}
                                </td>
                                <td>{item.bill_status}</td>
                                <td>{item.bill_payDay}</td>
                                <td>{item.bill_payerName}</td>
                            </tr>
                        ))}
                </tbody>
            </Table>
            <ReactPaginate
                forcePage={currentPage - 1}
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={totalPage}
                previousLabel="< previous"
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                breakClassName="page-item"
                breakLinkClassName="page-link"
                containerClassName="pagination"
                activeClassName="active"
            />
            <div className="my-3 add-new">
                <span>
                    {(!status ||
                        status === '--') && (
                            <div style={{ fontWeight: 'bold' }}>
                                Đã nộp: {totalPaid}/{totalRecord} hộ
                            </div>
                        )}
                    {status === 'Đã nộp' && (
                        <div style={{ fontWeight: 'bold' }}>
                            Số hộ đã nộp: {totalRecord}
                        </div>
                    )}
                    {status === 'Chưa nộp' && (
                        <div style={{ fontWeight: 'bold' }}>
                            Số hộ chưa nộp: {totalRecord}
                        </div>
                    )}
                    <br></br>
                    <Button
                        variant="success"
                        onClick={() => navigate('/feePage')}
                    >
                        Quay lại
                    </Button>
                </span>
            </div>
        </>
    );
};
export default TableBill;
