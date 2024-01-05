import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { fetchAllUser } from '../service/UserService';
import ReactPaginate from 'react-paginate';
import ModalAddNew from './ModalAddNewApartment';
import Button from 'react-bootstrap/Button';
import ModalDetail from './ModalDetail';
import { deleteHousehold, deletePeople } from '../service/PeopleService';
import { toast } from 'react-toastify';
import VerifyModal from './VerifyModal';
import { getHousehold } from '../service/PeopleService';
const HouseHold = (props) => {
    const [listPeople, setListPeople] = useState([]);
    const [isShowDeleteButton, setIsShowDeleteButton] = useState(false);
    const [totalPage, setTotalPage] = useState(0);
    const [isShowModaAddNew, setIsShowModaAddNew] = useState(false);
    const [isShowModalDetail, setIsShowModalDetail] = useState(false);
    const [isShowModalVerify, setIsShowModalVerify] = useState(false);
    const [data, setData] = useState([]);
    const [idToDelete, setIdToDelete] = useState('');
    const [isReload, setIsReload] = useState(false);
    const [apartmentId, setApartmentId] = useState(undefined);
    const [apartmentIdToDelete, setApartmentIdDelete] = useState(undefined);
    const handleClose = () => {
        setIsShowModaAddNew(false);
    };

    const handle2Close = () => {
        setIsShowModalDetail(false);
    };

    useEffect(() => {
        //call API
        handleGetHousehold(apartmentId);
    }, [isReload]);

    const handleGetHousehold = async (apartmentId) => {
        let res = await getHousehold(apartmentId);
        console.log(res);
        if (res && res.data) {
            setListPeople(res.data);
            if (res.data.length === 0)
                toast.error('Không có người trong hộ hoặc hộ không tồn tại');
        } else setListPeople([]);
    };

    const handleCT = (data) => {
        setIsShowModalDetail(true);
        console.log(data);
        setData(data);
    };
    const handleDeleteHousehold = async (apartmentId) => {
        try {
            const res = await deleteHousehold(apartmentId);
            console.log(res);
            if (res.data?.status === 'Fail' || res.data?.status === 'Error')
                toast.error(res.data.message);
            else {
                toast.success('Xóa thành công');
                setIsShowModalVerify(false);
                setListPeople([]);
                setIdToDelete('');
            }
        } catch (error) {
            console.log(error);
        }
    };
    const handleClickDelete = () => {
        setIdToDelete(apartmentId);
        setIsShowModalVerify(true);
    };
    const handleFilter = () => {
        setIsReload((prev) => !prev);
        setApartmentIdDelete(apartmentId);
        setIsShowDeleteButton(true);
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
                Nhập số hiệu căn hộ{' '}
                <input
                    type="text"
                    onChange={(event) => setApartmentId(event.target.value)}
                />{' '}
                <button
                    className="btn btn-success"
                    onClick={() => handleFilter()}
                >
                    Lọc
                </button>{' '}
                {isShowDeleteButton && listPeople.length !== 0 && (
                    <Button
                        variant="danger"
                        onClick={() => handleClickDelete()}
                    >
                        Xóa hộ {apartmentIdToDelete}
                    </Button>
                )}
            </div>
            <br></br>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Họ Tên</th>
                        <th>Ngày sinh</th>
                        <th>Giới tính</th>
                        <th>Quê quán</th>
                        <th>Trạng Thái</th>
                        <th>Quan hệ với chủ hộ</th>
                        <th>Tùy Chọn</th>
                    </tr>
                </thead>
                <tbody>
                    {listPeople &&
                        listPeople.length > 0 &&
                        listPeople.map((item, index) => (
                            <tr key={`user-${index}`}>
                                <td>{item.name}</td>
                                <td>{item.dateOfBirth}</td>
                                <td>{item.gender}</td>
                                <td>{item.hometown}</td>
                                <td>{item.status}</td>
                                <td>{item.relationWithHouseholder}</td>
                                <td>
                                    <Button
                                        variant="info"
                                        onClick={() => handleCT(item)}
                                    >
                                        Chi tiết
                                    </Button>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </Table>
            <ModalAddNew show={isShowModaAddNew} handleClose={handleClose} />
            <ModalDetail
                show={isShowModalDetail}
                handle2Close={handle2Close}
                data={data}
            />
            <VerifyModal
                show={isShowModalVerify}
                onVerify={handleDeleteHousehold}
                idToDelete={apartmentIdToDelete}
                onClose={() => setIsShowModalVerify(false)}
            ></VerifyModal>
        </>
    );
};
export default HouseHold;
