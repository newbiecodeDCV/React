import { Table } from 'react-bootstrap';
import ReactPaginate from 'react-paginate';
import { getCharityFee } from '../service/CharityService';
import { useData1 } from '../Context/UseContext';
import { useEffect, useState } from 'react';
const TableCharityPee = () => {
    const { data, setAndRedirect } = useData1();
    const [totalPage, setTotalPage] = useState(0);
    const [sum, setSum] = useState(0);
    const [listDonator, setListDonator] = useState([]);
    const handlePageClick = (event) => {
        getCF(event.selected + 1);
    };
    useEffect(() => {
        //call API
        getCF(1);
    }, []);

    const getCF = async (page) => {
        try {
            let res = await getCharityFee(page, data);
            console.log(res);
            setListDonator(res.data.fund);
            setTotalPage(res.data.totalPage);
            setSum(res.data.sum);
        } catch (error) {
            console.log('🚀 ~ getCP ~ error:', error);
        }
    };
    return (
        <>
            <div className="my-3 add-new">
                <span>
                    {' '}
                    <b>Thống kê</b>
                </span>
            </div>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Họ Tên</th>
                        <th>Số Phòng</th>
                        <th>Số tiền ủng hộ</th>
                    </tr>
                </thead>
                <tbody>
                    {listDonator &&
                        listDonator.length > 0 &&
                        listDonator.map((item, index) => (
                            <tr key={`user-${index}`}>
                                <td>{item.donator}</td>
                                <td>{item.apartmentid}</td>
                                <td>
                                    {Number(item.total).toLocaleString('vi', {
                                        style: 'currency',
                                        currency: 'VND',
                                    })}
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
                    {' '}
                    <b>
                        Tổng:{' '}
                        {sum.toLocaleString('vi', {
                            style: 'currency',
                            currency: 'VND',
                        })}
                    </b>
                </span>
            </div>
        </>
    );
};
export default TableCharityPee;
