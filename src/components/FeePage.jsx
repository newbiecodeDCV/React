// Page1.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container,Row,Col } from 'react-bootstrap';
import { Collapse } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import ModalBillPhong from './ModalBillPhong';
const Page = () => {
    const navigate = useNavigate();
    const [feeCard, setFeeCard] = useState(false);
    const [optionalFeeCard, setOptionalFeeCard] = useState(false);
    const [isShowModalBillPhong,setIsShowModalBillPhong] = useState(false);
    const handleClickFeeCard = () => {
        setFeeCard((prev) => !prev);
    };
    const handleClickOptionalFeeCard = () => {
        setOptionalFeeCard((prev) => !prev);
    };
    const listParentCard = [
        {
            id: '1',
            title: 'Phí định kỳ',
            text: `Phí thu chung, hàng tháng cho các hộ gia đình`,
            onClick: handleClickFeeCard,
        },
        {
            id: '2',
            title: 'Phí từ thiện',
            text: `Phí thu thiện nguyện, không bắt buộc`,
            onClick: handleClickOptionalFeeCard,
        },
    ];
    const listChildCard = [
        {
            id: '1',
            parentId: '2',
            title: 'Quản lý phí và quỹ từ thiện',
            text: `Xem danh sách, thống kê và thêm người ủng hộ phí thu từ thiện của chung cư`,
            link: '/feePage/charity/listFee',
            img: '/charity.png',
        },
        {
            id: '2',
            parentId:'1',
            title: 'Danh sách phí dịch vụ',
            text: 'Xem danh sách các khoản phí dịch vụ hiện tại của chung cư',
            link: '/feePage/fee/listFee',
            img: '/fee.png',
        },
        {
            id: '3',
            parentId:'1',
            title: 'Danh sách hóa đơn',
            text: `Danh sách tổng hóa đơn của tháng bất kì của tất cả căn hộ`,
            link: `/feePage/fee/listBill?month=${new Date().getMonth()+1}&year=${new Date().getFullYear()}`,
            img: '/listBill.png',
        },
        {
            id: '4',
            parentId:'1',
            title: 'Danh sách nợ',
            text: 'Danh sách tất cả các hóa đơn nợ tính đến hiện đại của chung cư',
            link: '/feePage/fee/debtBill',
            img: '/debt.png',
        },
        {
          id: '5',
          parentId:'1',
          title: 'Tra cứu hóa đơn hộ',
          text: 'Xem thông tin chi tiết và thêm nộp tiền cho 1 hộ bất kì',
          img: '/billOfApartment.png',
      },
    ];

    return (
        <Container className="text-center mt-5">
            <h1>Quản lý phí thu</h1>
            <div>
                <div className="home-container">
                    {listParentCard.map((item, index) => (
                        <div>
                            <Card key={item.id} onClick={item.onClick}>
                                {/* <Link className='cards__item__link' to={'/Form'}> */}
                                <Card.Body>
                                    <Card.Title>{item.title}</Card.Title>
                                    <Card.Text>{item.text}</Card.Text>
                                </Card.Body>
                                {/* </Link> */}
                            </Card>
                            <Collapse
                                in={item.id === '1' ? feeCard : optionalFeeCard}
                            >
                                <Container className="text-center mt-5">
        
            <div>
                <div className="home-container">
                <Row>
                  {listChildCard.filter((record)=>record.parentId===item.id && record.id!=='5').map((item)=>
                    <Col xs={1} md={2} lg={3} xl={4}>
                  <Card style={{ width: '18rem',height:'27rem' }} key={item.id} onClick={() => navigate(item.link)}>
                  <Card.Title style={{fontSize:'1.8rem'}}>{item.title}</Card.Title>
                  <Card.Img variant="right" src={ item.img } style={{ width: '100%', height: '70%' }}/>
                  {/* <Link className='cards__item__link' to={'/Form'}> */}
                  <Card.Body>
                      
                      <Card.Text>
                          {item.text}
                      </Card.Text>
                  </Card.Body>
                  {/* </Link> */}
              </Card>
              </Col>
                  )}
                  {item.id==='1' && <Col xs={1} md={2} lg={3} xl={4}>
                  <Card style={{ width: '18rem',height:'27rem' }} key={listChildCard[4].id} onClick={() => {setIsShowModalBillPhong(true)}}>
                  <Card.Title style={{fontSize:'1.8rem'}}>{listChildCard[4].title}</Card.Title>
                  <Card.Img variant="right" src={ listChildCard[4].img } style={{ width: '100%', height: '70%' }}/>
                  {/* <Link className='cards__item__link' to={'/Form'}> */}
                  <Card.Body>
                      
                      <Card.Text>
                          {listChildCard[4].text}
                      </Card.Text>
                  </Card.Body>
                  {/* </Link> */}
              </Card>
              </Col>}
                  </Row>
                </div>
            </div>
        </Container>
                            </Collapse>
                        </div>
                    ))}
                </div>
            </div>
            <ModalBillPhong show={isShowModalBillPhong} handleClose={()=>setIsShowModalBillPhong(false)}></ModalBillPhong>
        </Container>
    );
};
//(
//   <Container className="text-center mt-5">
//     <h1>Các khoản phí</h1>
//     <div className="d-flex flex-column align-items-center">
//       <Link to="/feePage/charity" className="mb-3">
//         <button  className="func-card func1">Phí đóng góp từ thiện</button>
//       </Link>
//       <Link to="/feePage/fee" className="mb-3">
//         <button className="func-card func2">Phí dịch vụ</button>
//       </Link>
//     </div>
//   </Container>
// );

export default Page;
