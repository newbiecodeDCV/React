import Table from 'react-bootstrap/Table';
import ReactPaginate from 'react-paginate';
import { useEffect, useState } from 'react';
import { fetchAllApartMents } from '../service/ApartmentService';
import ModalAddNewApartment from './ModalAddNewApartment';
import Button from 'react-bootstrap/Button';
import ModalPatchApt from './ModalPatchApt';
import ModalDetailAprt from './ModalDetailAprt';

const TableApartments = () => {
    const [listApart, setListApart] = useState([]);
    const [totalPage, setTotalPage] = useState(0);
    const [totalApart, setTotalApart] = useState(0);
    const [isShowModaAddNew, setIsShowModaAddNew] = useState(false);
    const [data, setData] = useState('');
    const [isShowModaPatchApt, setIsShowModaPatchApt] = useState(false);
    const [isShowModalDetailAprt, setIsShowModalDetailAprt] = useState(false);
    const [isPatchSuccess, setIsPatchSuccess] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [isPostSuccess, setIsPostSuccess] = useState(false);
    const handleClose = () => {
        setIsShowModaAddNew(false);
    };
    const handle2Close = () => {
        setIsShowModaPatchApt(false);
    };
    const handle3Close = () => {
        setIsShowModalDetailAprt(false);
    };

    useEffect(() => {
        //call API
        getApartments(currentPage);
    }, [isPatchSuccess, isPostSuccess]);

    const getApartments = async (page) => {
        try {
            let res = await fetchAllApartMents(page);
            if (res && res.data) {
                console.log(res);
                setTotalPage(res.data.totalPage);
                setTotalApart(res.data.totalRecord);
                setListApart(res.data.apartmentList);
            }
        } catch (error) {
            console.log('🚀 ~ getApartments ~ error:', error);
        }
    };

    const handlePageClick = (event) => {
        setCurrentPage(event.selected + 1);
        getApartments(event.selected + 1);
    };
    return (
        <>
            <div className="my-3 add-new">
                <span>
                    {' '}
                    <b>Danh sách căn hộ</b>
                </span>
                <button
                    className="btn btn-success"
                    onClick={() => setIsShowModaAddNew(true)}
                >
                    Thêm căn hộ
                </button>
            </div>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Số phòng</th>
                        <th>Diện tích</th>
                        <th>Kiểu</th>
                        <th>Chủ </th>
                        <th>Tùy chọn</th>
                    </tr>
                </thead>
                <tbody>
                    {listApart &&
                        listApart.length > 0 &&
                        listApart.map((item, index) => (
                            <tr key={`user-${index}`}>
                                <td>{item.apartmentId}</td>
                                <td>{item.area}</td>
                                <td>{item.type}</td>
                                <td>
                                    {item.owner !== null ? (
                                        <>
                                            {item.owner.name}
                                            <div>
                                                <Button
                                                    onClick={() => {
                                                        setIsShowModalDetailAprt(
                                                            true
                                                        );
                                                        console.log(item);
                                                        setData(item);
                                                    }}
                                                >
                                                    Chi tiết
                                                </Button>
                                            </div>
                                        </>
                                    ) : (
                                        'Không có'
                                    )}
                                </td>
                                <td>
                                    <Button
                                        variant="warning"
                                        onClick={() => {
                                            setData(item);
                                            console.log(item);
                                            setIsShowModaPatchApt(true);
                                        }}
                                    >
                                        Thay đổi chủ sở hữu
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
            <ModalAddNewApartment
                show={isShowModaAddNew}
                handleClose={handleClose}
                onPostSuccess={setIsPostSuccess}
            />
            <ModalPatchApt
                show={isShowModaPatchApt}
                handle2Close={handle2Close}
                data={data}
                onPatchSuccess={setIsPatchSuccess}
            />
            <ModalDetailAprt
                show={isShowModalDetailAprt}
                handle3Close={handle3Close}
                data={data}
            />
        </>
    );
};
export default TableApartments;
