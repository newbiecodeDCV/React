import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { fetchAllPeople } from '../service/PeopleService';
import ReactPaginate from 'react-paginate';
import Button from 'react-bootstrap/Button';
import ModalDetail from './ModalDetail';
import { toast } from 'react-toastify';
import ModalRegisterAbsent from './ModalRegisterAbsent';
import { registerAbsent } from '../service/PeopleService';
const AddAbsent = (props) => {
    const [listUsers, setListUsers] = useState([]);
    const [totalUsers, setToatalUsers] = useState(0);
    const [totalPage, setTotalPage] = useState(0);
    const [isShowModalRegister, setIsShowModalRegister] = useState(false);
    const [isShowModalDetail, setIsShowModalDetail] = useState(false);
    const [data, setData] = useState([]);
    const [id, setId] = useState(undefined);
    const [form, setForm] = useState({});
    const [isReload, setIsReload] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [nameFilter, setNameFilter] = useState(undefined);
    // const handleClose = () => {
    //     setIsShowModaAddNew(false);
    // };
    const setField = (key, value) => {
        setForm({ ...form, [key]: value });
    };
    const handle2Close = () => {
        setIsShowModalDetail(false);
    };

    useEffect(() => {
        //call API
        getPeople(currentPage, nameFilter);
    }, [isReload]);

    const getPeople = async (page, name) => {
        try {
            let res = await fetchAllPeople(page, name);
            if (res && res.data) {
                setListUsers(res.data.peopleList);
                setToatalUsers(res.data.totalRecord);
                setTotalPage(res.data.totalPage);
            }
        } catch (error) {
            console.log('🚀 ~ getPeople ~ error:', error);
        }
    };

    const handlePageClick = (event) => {
        setCurrentPage(event.selected + 1);
        getPeople(event.selected + 1, nameFilter);
    };
    const handleCT = (data) => {
        setIsShowModalDetail(true);
        setData(data);
    };
    const handleAddAbsent = async (id, form) => {
        try {
            await registerAbsent(id, form);
            toast.success('Thêm tạm vắng thành công');
            setId(undefined);
            setForm({});
            setIsReload((prev) => !prev);
            setIsShowModalRegister(false);
        } catch (error) {
            console.log(error);
        }
    };
    const handleClickAdd = (id, email) => {
        setId(id);
        setIsShowModalRegister(true);
    };
    const handleFilter = () => {
        setCurrentPage(1);
        setIsReload((prev) => !prev);
    };
    return (
        <>
            <div className="my-3 add-new">
                <span>
                    {' '}
                    <b>Danh sách cư dân</b>
                </span>
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
                                    {item.status !== 'Tạm vắng' && (
                                        <Button
                                            variant="primary"
                                            onClick={() =>
                                                handleClickAdd(
                                                    item.id,
                                                    item.email
                                                )
                                            }
                                        >
                                            Đăng ký tạm vắng
                                        </Button>
                                    )}{' '}
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
            <ModalDetail
                show={isShowModalDetail}
                handle2Close={handle2Close}
                data={data}
            />
            <ModalRegisterAbsent
                show={isShowModalRegister}
                id={id}
                submit={handleAddAbsent}
                handleClose={() => {
                    setIsShowModalRegister(false);
                    setForm({});
                }}
                setForm={setField}
                form={form}
            ></ModalRegisterAbsent>
        </>
    );
};
export default AddAbsent;
