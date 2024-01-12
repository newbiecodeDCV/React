import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { fetchAllPeople } from '../service/PeopleService';
import ReactPaginate from 'react-paginate';
import ModalAddNew from './ModalAddNewApartment';
import Button from 'react-bootstrap/Button';
import ModalDetail from './ModalDetail';
import { deletePeople, patchPeople } from '../service/PeopleService';
import { toast } from 'react-toastify';
import VerifyModal from './VerifyModal';
import ModalPatchPeople from './ModalPatchPeople';
import { useData6 } from '../Context/UseContext';
import { useNavigate } from 'react-router-dom';
const TablePeople = (props) => {
    const {setAndRedirect} = useData6()
    const [listUsers, setListUsers] = useState([]);
    const [totalUsers, setToatalUsers] = useState(0);
    const [totalPage, setTotalPage] = useState(0);
    const [isShowModaAddNew, setIsShowModaAddNew] = useState(false);
    const [isShowModalDetail, setIsShowModalDetail] = useState(false);
    const [isShowModalVerify, setIsShowModalVerify] = useState(false);
    const [data, setData] = useState({});
    const [idToDelete, setIdToDelete] = useState('');
    const [idToPatch, setIdToPatch] = useState(undefined);
    const [isReload, setIsReload] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [nameFilter, setNameFilter] = useState(undefined);
    const [newData, setNewData] = useState({});
    const [form, setForm] = useState({});
    const setField = (field, value) => {
        setForm({ ...form, [field]: value });
    };
    const [isShowModalPatch, setIsShowModalPatch] = useState(false);
    const navigate = useNavigate();
    const handleClickPatch = (data) => {
        setIdToPatch(data.id);
        setNewData(data);
        setData(data);
        setIsShowModalPatch(true);
    };
    const handlePatch = async (id, form) => {
        try {
            if (Object.keys(form).length === 0)
                return toast.error('Bạn chưa thay đổi gì!!!');
            await patchPeople(id, form);
            toast.success('Thay đổi thành công');
            setForm({});
            setNewData({});
            setIdToPatch(undefined);
            setIsShowModalPatch(false);
            setIsReload((prev) => !prev);
            return true;
        } catch (error) {
            console.log('🚀 ~ handlePatch ~ error:', error);
        }
    };
    const handleClose = () => {
        setIsShowModaAddNew(false);
    };

    const handle2Close = () => {
        setIsShowModalDetail(false);
    };

    useEffect(() => {
        //call API
        getPeople(currentPage, nameFilter);
    }, [isReload]);

    const getPeople = async (page, name) => {
        let res = await fetchAllPeople(page, name);
        if (res && res.data) {
            setListUsers(res.data.peopleList);
            setToatalUsers(res.data.totalRecord);
            setTotalPage(res.data.totalPage);
        }
    };

    const handlePageClick = (event) => {
        setCurrentPage(event.selected + 1);
        console.log(event);
        getPeople(event.selected + 1, nameFilter);
    };
    const handleCT = (data) => {
        setIsShowModalDetail(true);
        console.log(data);
        setData(data);
    };
    const handleDeletePeople = async (id) => {
        try {
            const res = await deletePeople(id);
            if (res.data.status === 'Fail' || res.data.status === 'Error')
                toast.error(res.data.message);
            else {
                toast.success('Xóa thành công');
                setIsShowModalVerify(false);
                setIsReload((prev) => !prev);
                setIdToDelete('');
            }
        } catch (error) {
            console.log(error);
        }
    };
    const handleClickDelete = (id, data) => {
        setData(data);
        setIdToDelete(id);
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
                                        onClick={() => {
                                            navigate('/display', {
                                            state: { params: {item} },
                                            replace: false, 
                                           });
                                            console.log(item)
                                        }}
                                    >
                                        Chi tiết
                                    </Button>{' '}
                                    <Button
                                        variant="primary"
                                        onClick={() => handleClickPatch(item)}
                                    >
                                        Chỉnh sửa
                                    </Button>{' '}
                                    <Button
                                        variant="danger"
                                        onClick={() =>
                                            handleClickDelete(item.id, item)
                                        }
                                    >
                                        Xóa
                                    </Button>
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
            <div style={{fontWeight:'bold'}}>Tổng số nhân khẩu: {totalUsers}</div>
            <ModalAddNew show={isShowModaAddNew} handleClose={handleClose} />
            <ModalDetail
                show={isShowModalDetail}
                handle2Close={handle2Close}
                data={data}
            />
            <VerifyModal
                show={isShowModalVerify}
                onVerify={handleDeletePeople}
                idToDelete={idToDelete}
                onClose={() => setIsShowModalVerify(false)}
            >
                <div>Nhân khẩu: {data.name}</div>
                <div>Mã số hộ: {data.apartmentId}</div>
            </VerifyModal>
            <ModalPatchPeople
                show={isShowModalPatch}
                handleClose={() => {
                    setIsShowModalPatch(false);
                    setForm({});
                    setNewData({});
                    setIdToPatch(undefined);
                }}
                form={form}
                onVerify={handlePatch}
                id={idToPatch}
                data={data}
                setField={setField}
                setNewData={setNewData}
                newData={newData}
            ></ModalPatchPeople>
        </>
    );
};
export default TablePeople;
