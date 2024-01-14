import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import ModalAddNew from './ModalAddNewApartment';
import Button from 'react-bootstrap/Button';
import ModalDetail from './ModalDetail';
import {
    changeHouseholder,
    deleteHousehold,
    deletePeople,
    patchPeople,
} from '../service/PeopleService';
import { toast } from 'react-toastify';
import VerifyModal from './VerifyModal';
import { getHousehold,getVehiceHousehold } from '../service/PeopleService';
import ModalPatchRelation from './ModalPatchRelation';
import ModalChangeHouseholder from './ModalChangeHouseholder';
import ModalPostVehicle from './ModalPostVehicle';


const HouseHold = (props) => {
    const [listPeople, setListPeople] = useState([]);
    const [isShowDeleteButton, setIsShowDeleteButton] = useState(false);
    const [isShowModaAddNew, setIsShowModaAddNew] = useState(false);
    const [isShowModalDetail, setIsShowModalDetail] = useState(false);
    const [isShowModalPatch, setIsShowModalPatch] = useState(false);
    const [isShowModalVerify, setIsShowModalVerify] = useState(false);
    const [isShowModalPostVehicle,setIsShowModalPostVehicle]= useState(false);
    const [data, setData] = useState([]);
    const [ownerId,setOwnerId]=useState('');
    const [idToPatch, setIdToPatch] = useState(undefined);
    const [idToDelete, setIdToDelete] = useState('');
    const [isReload, setIsReload] = useState(false);
    const [apartmentId, setApartmentId] = useState(undefined);
    const [listVehicle,setListVehice] = useState([])
    const [apartmentIdToDelete, setApartmentIdDelete] = useState(undefined);
    const [isShowModalChangeHouseholder, setIsShowModalChangeHouseholder] =
        useState(false);
    const handleClose = () => {
        setIsShowModaAddNew(false);
    };

    const handle2Close = () => {
        setIsShowModalDetail(false);
    };
    const handle3Close = () =>{
        setIsShowModalPostVehicle(false);
    }

    useEffect(() => {
        //call API
        handleGetHousehold(apartmentId);
        handleGetVHousehold(apartmentId)
    }, [isReload]);

    const handleGetHousehold = async (apartmentId) => {
        try {
            let res = await getHousehold(apartmentId);
            console.log(res)
            if (res && res.data) {
                setListPeople(res.data);
                if (res.data.length === 0)
                    toast.error(
                        'Không có người trong hộ hoặc hộ không tồn tại'
                    );
            } else setListPeople([]);
        } catch (error) {
            console.log('🚀 ~ handleGetHousehold ~ error:', error);
        }
    };
    const handleGetVHousehold = async (apartmentId) => {
        try {
            let res = await getVehiceHousehold(apartmentId);
            console.log(res)
            if (res && res.data) {
                setListVehice(res.data);
                if (res.data.length === 0)
                    toast.error(
                        'Hộ dân chưa đăng ký xe'
                    );
            } else setListPeople([]);
        } catch (error) {
            console.log('🚀 ~ handleGetHousehold ~ error:', error);
        }
    };

    

    const handleCT = (data) => {
        setIsShowModalDetail(true);
        setData(data);
    };
    const handleClickPatch = (id) => {
        setIsShowModalPatch(true);
        setIdToPatch(id);
    };
    const handleClickChange = () => {
        setIsShowModalChangeHouseholder(true);
    };
    const handlePatch = async (id, newRelation) => {
        try {
            await patchPeople(id, { relationWithHouseholder: newRelation });
            toast.success('Thay đổi thành công');
            setIsShowModalPatch(false);
            setIdToPatch(undefined);
            setIsReload((prev) => !prev);
            return true;
        } catch (error) {
            console.log('🚀 ~ handlePatch ~ error:', error);
            return false;
        }
    };
    const handleChangeHouseholder = async (apartmentId, form) => {
        try {
            await changeHouseholder(apartmentId,form);
            toast.success('Thay đổi thành công');
            setIsShowModalChangeHouseholder(false);
            setIsReload((prev) => !prev);
            return true;
        } catch (error) {
            console.log("🚀 ~ handleChangeHouseholder ~ error:", error)
            return false;
        }
    };
    const handleClosePatch = () => {
        setIsShowModalPatch(false);
        setIdToPatch(undefined);
    };
    const handleDeleteHousehold = async (apartmentId) => {
        try {
            const res = await deleteHousehold(apartmentId);
            toast.success('Xóa thành công');
            setIsShowModalVerify(false);
            setListPeople([]);
            setIdToDelete('');
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
                        variant="primary"
                        onClick={() => handleClickChange()}
                    >
                        Thay đổi chủ hộ
                    </Button>
                )}{' '}
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
                                    </Button>{' '}
                                    <Button
                                        variant="primary"
                                        onClick={() =>
                                            handleClickPatch(item.id)
                                        }
                                    >
                                        Thay đổi quan hệ với chủ hộ
                                    </Button>{' '}
                                    <Button
                                        variant="success"
                                       onClick={
                                        ()=>{setIsShowModalPostVehicle(true)
                                             setOwnerId(item.id)
                                        }
                                       }
                                    >
                                        Đăng ký biển gửi xe
                                    </Button>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </Table>
            <div><b>Danh sách xe của hộ</b></div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Biển số</th>
                        <th>Loại xe</th>
                        <th>Chủ sở hữu</th>
                        
                    </tr>
                </thead>
                <tbody>
                {listVehicle &&
                        listVehicle.length > 0 &&
                        listVehicle.map((item, index) => (
                            <tr key={`user1-${index}`}>
                                <td>{item.vehicle_numberPlate}</td>
                                <td>{item.vehicle_type}</td>
                                <td>{item.owner_name}</td>      
                            </tr>
                        ))}
                </tbody>
            </Table>
            <ModalChangeHouseholder
                show={isShowModalChangeHouseholder}
                handleClose={() => setIsShowModalChangeHouseholder(false)}
                apartmentId={apartmentId}
                submit={handleChangeHouseholder}
                data={listPeople}
            ></ModalChangeHouseholder>
            <ModalPatchRelation
                show={isShowModalPatch}
                handleClose={handleClosePatch}
                submit={handlePatch}
                id={idToPatch}
            ></ModalPatchRelation>
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
            >
                <div>Toàn bộ nhân khẩu trong hộ {apartmentIdToDelete}</div>
            </VerifyModal>
            <ModalPostVehicle
            show={isShowModalPostVehicle}
            handleClose={handle3Close}
            ownerId ={ownerId}
        />
        </>
       
    );
};
export default HouseHold;
