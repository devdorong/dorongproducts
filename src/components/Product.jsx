import { useEffect, useState } from "react";
import { getProduct } from "../apis/productApi";
import styled from "@emotion/styled";
// window
const Wrap = styled.div`
  padding-top: 50px;
  margin: 0 auto;
  padding-bottom: 50px;
  max-width: 1300px;
`;
const Ul = styled.ul`
  flex-wrap: wrap;
  display: flex;
  justify-content: center;
  gap: 20px;
`;
const Li = styled.li`
  width: 300px;
  border: 1px solid #eaeaea;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: space-between; */
  border-radius: 12px;
  box-shadow: 0 2px 8px #00000014;
  transform: 0.2;
  cursor: pointer;
  padding: 18px 24px;
  transition: transform 0.3s ease;
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
    background-color: #fafafa;
  }
`;
const ImgWrap = styled.div`
  position: relative;
  width: 150px;
  height: 150px;
  border: 1px solid #ddd;
  background-color: #f8f8f8;
  border-radius: 10px;
  margin-left: 10px;
  margin-top: 20px;
  margin-bottom: 50px;

  /* overflow: hidden; */
`;
const Img = styled.img`
  width: 100%;
  object-fit: cover;
`;
const Title = styled.span`
  font-size: 18px;
  color: #222;
  font-weight: 700;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1; /* 2줄 이상일땐 숫자를 변경 */
  -webkit-box-orient: vertical;
  word-break: break-all;
`;
const Price = styled.p`
  color: #e91e63;
`;
const Desc = styled.p`
  color: #555;
  /* text-align: center; */
`;
const PriceWrap = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  transform: translateY(100%);
  display: flex;
  justify-content: space-between;
  width: 150px;
  padding: 10px;
`;
const Id = styled.span`
  font-weight: 700;
`;

function Product() {
  //js
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const data = await getProduct();
        setProducts(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchdata();
  }, []);
  //jsx
  return (
    <Wrap>
      <Ul>
        {products.map(item => (
          <Li key={item.id}>
            <Title>{item.title}</Title>
            <ImgWrap>
              <Img src={item.thumbnail} alt="#" />
              <PriceWrap>
                <Id>ID : {item.id}</Id>
                <Price>${item.price}</Price>
              </PriceWrap>
            </ImgWrap>
            <Desc>{item.description}</Desc>
          </Li>
        ))}
        <Li></Li>
        <Li></Li>
      </Ul>
    </Wrap>
  );
}

export default Product;
