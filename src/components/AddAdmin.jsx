import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { addAdmin, fetchAllUser } from '../service/UserService';
import ReactPaginate from 'react-paginate';
import ModalAddNew from './ModalAddNewApartment';
import Button from 'react-bootstrap/Button';
import ModalDetail from './ModalDetail';
import { deletePeople } from '../service/PeopleService';
import { toast } from 'react-toastify';
import VerifyModal from './VerifyModal';
import VerifyAddModal from './VerifyAddModal';
const AddAdmin = (props) => {
    const [listUsers, setListUsers] = useState([]);
    const [totalUsers, setToatalUsers] = useState(0);
    const [totalPage, setTotalPage] = useState(0);
    const [isShowModaAddNew, setIsShowModaAddNew] = useState(false);
    const [isShowModalDetail, setIsShowModalDetail] = useState(false);
    const [isShowModalVerify, setIsShowModalVerify] = useState(false);
    const [data, setData] = useState([]);
    const [idToDelete, setIdToDelete] = useState('');
    const [id, setId] = useState(undefined);
    const [email, setEmail] = useState(undefined);
    const [isReload, setIsReload] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [nameFilter, setNameFilter] = useState(undefined);
    const handleClose = () => {
        setIsShowModaAddNew(false);
    };

    const handle2Close = () => {
        setIsShowModalDetail(false);
    };

    useEffect(() => {
        //call API
        getUser(currentPage, nameFilter);
    }, [isReload]);

    const getUser = async (page, name) => {
        let res = await fetchAllUser(page, name);
        console.log(res);
        if (res && res.data) {
            console.log(res);
            setListUsers(res.data.peopleList);
            setToatalUsers(res.data.totalRecord);
            setTotalPage(res.data.totalPage);
            console.log(listUsers);
        }
    };

    const handlePageClick = (event) => {
        setCurrentPage(event.selected + 1);
        console.log(event);
        getUser(event.selected + 1, nameFilter);
    };
    const handleCT = (data) => {
        setIsShowModalDetail(true);
        console.log(data);
        setData(data);
    };
    const handleAddAdmin = async (id, email) => {
        try {
            const res = await addAdmin(id, email);
            console.log(res)
            if (res.data?.status === 'Fail' || res.data?.status === 'Error')
                toast.error(res.data.message);
            else {
                toast.success('Thêm thành công');
                setIsShowModalVerify(false);
                setId(undefined);
                setEmail(undefined);
                // setIsReload((prev) => !prev);
                // setIdToDelete('');
            }
        } catch (error) {
            console.log(error);
        }
    };
    const handleClickAdd = (id, email) => {
        setId(id);
        setEmail(email);
        setIsShowModalVerify(true);
    };
    const handleFilter = () => {
        setCurrentPage(1);
        console.log(nameFilter);
        setIsReload((prev) => !prev);
        // setCurrentPage(1);
    };
    return (
        <>
            <div className="my-3 add-new">
                <span>
                    {' '}
                    <b>Danh sách cư dân</b>
                </span>
                {/* <button
                    className="btn btn-success"
                    onClick={() => setIsShowModaAddNew(true)}
                >
                    Thêm cư dân
                </button> */}
            </div>
            <div>
                Lọc theo tên{' '}
                <input
                    type="text"
                    onChange={(event) => setNameFilter(event.target.value)}
                />{' '}
                <button
                    className="btn btn-success"
                    onClick={() => handleFilter()}
                >
                    Lọc
                </button>
            </div>
            <br></br>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Họ Tên</th>
                        <th>Số Phòng</th>
                        <th>Ngày sinh</th>
                        <th>Giới tính</th>
                        <th>Quê quán</th>
                        <th>Trạng Thái</th>

                        <th>Tùy Chọn</th>
                    </tr>
                </thead>
                <tbody>
                    {listUsers &&
                        listUsers.length > 0 &&
                        listUsers.map((item, index) => (
                            <tr key={`user-${index}`}>
                                <td>{item.name}</td>
                                <td>{item.apartmentId}</td>
                                <td>{item.dateOfBirth}</td>
                                <td>{item.gender}</td>
                                <td>{item.hometown}</td>
                                <td>{item.status}</td>
                                <td>
                                    <Button
                                        variant="info"
                                        onClick={() => handleCT(item)}
                                    >
                                        Chi tiết
                                    </Button>{' '}
                                    <Button
                                        variant="primary"
                                        onClick={() =>
                                            handleClickAdd(item.id, item.email)
                                        }
                                    >
                                        Thêm làm ban quản trị
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
            <ModalAddNew show={isShowModaAddNew} handleClose={handleClose} />
            <ModalDetail
                show={isShowModalDetail}
                handle2Close={handle2Close}
                data={data}
            />
            <VerifyAddModal
                show={isShowModalVerify}
                onVerify={handleAddAdmin}
                id={id}
                onClose={() => setIsShowModalVerify(false)}
                email={email}
            ></VerifyAddModal>
        </>
    );
};
export default AddAdmin;
