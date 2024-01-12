import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import ReactPaginate from 'react-paginate';
import Button from 'react-bootstrap/Button';
import { toast } from 'react-toastify';
import ModalText from './ModalText';
import { endAbsent, getAbsent } from '../service/PeopleService';
import { getDate } from '../utils/getDate';
import EndAbsentModal from './ModalEndAbsent';
const TableAbsent = (props) => {
    const [listAbsent, setListAbsent] = useState([]);
    const [totalAbsent, setTotalAbsent] = useState(0);
    const [totalPage, setTotalPage] = useState(0);
    const [isReload, setIsReload] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [isShowReason, setIsShowReason] = useState(false);
    const [reason, setReason] = useState(undefined);
    const [id, setId] = useState(undefined);
    const [destinationAddress, setDestinationAddress] = useState(undefined);
    const [isShowEndAbsentModal, setIsShowEndAbsentModal] = useState(false);
    useEffect(() => {
        //call API
        getAbsentList(currentPage);
    }, [isReload]);

    const getAbsentList = async (page) => {
        try {
            let res = await getAbsent(page);
            if (res && res.data) {
                console.log(res);
                setListAbsent(res.data.absentList);
                setTotalAbsent(res.data.totalRecord);
                setTotalPage(res.data.totalPage);
            }
        } catch (error) {
            console.log('🚀 ~ getAbsentList ~ error:', error);
        }
    };
    const handleClickDetails = (reason, destinationAddress) => {
        setDestinationAddress(destinationAddress);
        setReason(reason);
        setIsShowReason(true);
    };
    const handlePageClick = (event) => {
        setCurrentPage(event.selected + 1);
        getAbsentList(event.selected + 1);
    };
    const handleClickEndAbsent = (id) => {
        setId(id);
        setIsShowEndAbsentModal(true);
    };
    const handleEndAbsent = async (id) => {
        try {
            console.log(await endAbsent(id));
            toast.success('Kết thúc tạm vắng thành công');
            setIsShowEndAbsentModal(false);
            setIsReload((prev) => !prev);
            // setCurrentPage(1);
        } catch (error) {
            console.log('🚀 ~ handleEndAbsent ~ error:', error);
        }
    };
    return (
        <>
            <div className="my-3 add-new">
                <span>
                    {' '}
                    <b>Danh sách tạm vắng</b>
                </span>
                {/* <button
                    className="btn btn-success"
                    onClick={() => setIsShowModaAddNew(true)}
                >
                    Thêm cư dân
                </button> */}
            </div>
            <br></br>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Họ Tên</th>
                        <th>Số Phòng</th>
                        <th>Số điện thoại</th>
                        <th>Ngày bắt đầu</th>
                        <th>Ngày kết thúc</th>
                        <th>Tùy Chọn</th>
                    </tr>
                </thead>
                <tbody>
                    {listAbsent &&
                        listAbsent.length > 0 &&
                        listAbsent.map((item, index) => (
                            <tr key={`user-${index}`}>
                                <td>{item.people?.name}</td>
                                <td>{item.people?.apartmentId}</td>
                                <td>{item.people?.phoneNumber}</td>
                                <td>{getDate(item.startDate)}</td>
                                <td>{getDate(item.endDate)}</td>
                                <td>
                                    <Button
                                        variant="info"
                                        onClick={() =>
                                            handleClickDetails(
                                                item.reason,
                                                item.destinationAddress
                                            )
                                        }
                                    >
                                        Chi tiết
                                    </Button>{' '}
                                    <Button
                                        variant="success"
                                        onClick={() =>
                                            handleClickEndAbsent(
                                                item.people?.id
                                            )
                                        }
                                    >
                                        Kết thúc tạm vắng
                                    </Button>{' '}
                                </td>
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
            <div style={{fontWeight:'bold'}}>Tổng số tạm vắng: {totalAbsent}</div>
            <ModalText
                header="Thông tin chi tiết tạm vắng"
                show={isShowReason}
                onClose={() => setIsShowReason(false)}
            >
                Lý do tạm vắng: {reason}
                <br></br>
                Địa chỉ nơi đến: {destinationAddress}
            </ModalText>
            <EndAbsentModal
                show={isShowEndAbsentModal}
                onClose={() => setIsShowEndAbsentModal(false)}
                id={id}
                onVerify={handleEndAbsent}
            ></EndAbsentModal>
        </>
    );
};
export default TableAbsent;
