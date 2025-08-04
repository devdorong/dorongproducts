import { useEffect, useState } from "react";
import { getProduct } from "../apis/productApi";
import styled from "@emotion/styled";
// window
const Wrap = styled.div`
  padding-top: 50px;
  margin: 0 auto;
`;
const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
const Li = styled.li`
  width: 720px;
  height: 170px;
  border: 1px solid #eaeaea;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  width: 74px;
  height: 74px;
  border: 1px solid #ddd;
  background-color: #f8f8f8;
  border-radius: 10px;
  margin-left: 10px;
  /* overflow: hidden; */
`;
const Img = styled.img`
  width: 100%;
  object-fit: cover;
`;
const TextWrap = styled.div`
  width: 552px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
`;
const Title = styled.p`
  font-size: 18px;
  color: #222;
  font-weight: 700;
`;
const Price = styled.p`
  color: #e91e63;
`;
const Desc = styled.p`
  color: #555;
  text-align: center;
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
            <ImgWrap>
              <Img src={item.thumbnail} alt="#" />
            </ImgWrap>
            <TextWrap>
              <Title>{item.title}</Title>
              <Price>${item.price}</Price>
              <Desc>{item.description}</Desc>
            </TextWrap>
          </Li>
        ))}
      </Ul>
    </Wrap>
  );
}

export default Product;
