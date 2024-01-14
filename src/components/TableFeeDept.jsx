import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { getFeeDebt } from '../service/FeeService';
import ReactPaginate from 'react-paginate';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
const TableFeeDept = (props) => {
    const navigate = useNavigate();
    const [listPeeDept, setListPeeDept] = useState([]);
    const [totalPage, setTotalPage] = useState(0);
    const [totalRecord, setTotalRecord] = useState(undefined);
    useEffect(() => {
        //call API
        getFeedebt(1);
    }, []);

    const getFeedebt = async (page) => {
        try {
            let res = await getFeeDebt(page);
            if (res && res.status === 'Success') {
                console.log(res);
                setListPeeDept(res.data.deptList);
                setTotalPage(res.data.totalPage);
                setTotalRecord(res.data.totalRecord);
            }
        } catch (error) {
            console.log('🚀 ~ getpeedept ~ error:', error);
        }
    };
    const handlePageClick = (event) => {
        console.log(event);
        getFeedebt(event.selected + 1);
    };

    return (
        <>
            <div className="my-3 add-new">
                <span>
                    {' '}
                    <b>Thống kê nợ</b>
                </span>
            </div>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Số hiệu căn hộ</th>
                        <th>Tháng</th>
                        <th>Năm</th>
                        <th>Tổng nợ</th>
                        <th>Tùy chọn</th>
                    </tr>
                </thead>
                <tbody>
                    {listPeeDept &&
                        listPeeDept.length > 0 &&
                        listPeeDept.map((item, index) => (
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
                                <td>
                                    <Button
                                        variant="info"
                                        onClick={() => {
                                            navigate(
                                                `/feePage/fee/billOfApartment/${item.bill_apartmentId}?month=${item.bill_month}&year=${item.bill_year}`
                                            );
                                        }}
                                    >
                                        Chi tiết hóa đơn tháng
                                    </Button>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </Table>
            <ReactPaginate
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
                    <div style={{ fontWeight: 'bold' }}>
                        Tổng số hóa đơn nợ: {totalRecord}
                    </div>
                    <br></br>{' '}
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
export default TableFeeDept;
