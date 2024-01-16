import { Table } from 'react-bootstrap';
import ReactPaginate from 'react-paginate';
import { getVehicle } from '../service/PeopleService';
import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import ModalDeleteVehicle from './ModalDeleteVehicle';
const TableVehice = () => {
    const [totalRecord,setTotalRecord] = useState(0);
    const [totalPage,setTotalPage] = useState(0)
    const [vehicleList,setVehicleList] = useState([])
    const [isshowModalDelete,setIsShowModalDelete] = useState(false)
    const [numberPlate,setNumberPlate] = useState('')
    const [isReload, setIsReload] = useState(false);
    const [filterPlate,setFilterPlate] = useState('')
    const handlePageClick = (event) => {
        getCF(event.selected + 1);
    };
    const handleClose = () =>{
      setIsShowModalDelete(false)

    }
    const handleFilter = () =>{
        console.log(filterPlate)
        setIsReload((prev) => !prev);
       
    }
    useEffect(() => {
        //call API
        getCF(1,filterPlate);
    }, [isReload]);

    const getCF = async (page,filterPlate) => {
        try {
            let res = await getVehicle(page,filterPlate);
            console.log(res)
            if(res.data?.totalPage) {
            setTotalPage(res.data.totalPage);
            setTotalRecord(res.data.totalRecord);
            }
            if(filterPlate){
                if(res.data){setTotalRecord(1);
                setVehicleList([res.data])
                setTotalPage(1)
                }
                else {setVehicleList([]);setTotalPage(0);setTotalRecord(0)}
            }else{
            setVehicleList(res.data.vehicleList)
            }
       
        } catch (error) {
            console.log('🚀 ~ getCP ~ error:', error);
        }
    };
    return (
        <>
            <div className="my-3 add-new">
                <span>
                    {' '}
                    <b>Danh sách phương tiện</b>
                </span>
            </div>
            <div>
                Nhập biển số xe{' '}
                <input
                    type="text"
                    onChange={(event) => setFilterPlate(event.target.value)}
                />{' '}
                <button
                    className="btn btn-success"
                    onClick={handleFilter}
                >
                    Lọc
                </button>{' '}
                
            </div>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Biển số</th>
                        <th>Loại xe</th>
                        <th>Chủ sở hữu</th>
                        <th>Tùy chọn</th>
                    </tr>
                </thead>
                <tbody>
                {vehicleList &&
                        vehicleList.length > 0 &&
                        vehicleList.map((item, index) => (
                            <tr key={`manager-${index}`}>
                                <td>{item?.numberPlate}</td>
                                <td>{item?.type}</td>
                                <td>{item?.owner.name}</td>
                                <td>
                               <Button variant="danger"
                               onClick={()=>{
                                setIsShowModalDelete(true)
                                setNumberPlate(item.numberPlate)
                               }}
                               >

                               Xóa
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
             <div style={{fontWeight:'bold'}}>Tổng số xe: {totalRecord}</div>
            <ModalDeleteVehicle
             show = {isshowModalDelete}
             handleClose ={handleClose}
             numberPlate={numberPlate}
             getCF = {getCF}
            />
            
        </>
    );
};
export default TableVehice;
