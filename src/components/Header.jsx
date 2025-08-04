import styled from "@emotion/styled";

const HeaderWrap = styled.div`
  height: 120px;
  margin: 0 auto;
  gap: 10px;
  box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h1`
  display: flex;
  justify-content: center;
`;
const SubTitle = styled.span`
  display: flex;
  justify-content: center;
  color: #888;
`;
function Header() {
  //js

  //jsx
  return (
    <HeaderWrap>
      <Title>Beauty Product List</Title>
      <SubTitle>다양한 뷰티 제품을 한눈에 확인하세요.</SubTitle>
    </HeaderWrap>
  );
}

export default Header;
