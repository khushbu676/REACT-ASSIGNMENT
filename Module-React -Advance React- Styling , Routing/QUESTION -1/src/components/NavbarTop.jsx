import React from 'react';
import styled from 'styled-components';

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 50px;
  background-color: #f5f5f5;
`;

const LeftSection = styled.div`
  display: flex;
  gap: 20px;
  font-size: 14px;
`;

const RightSection = styled.div`
  display: flex;
  gap: 20px;
  font-size: 14px;
`;

const NavbarTop = () => {
  return (
    <NavbarContainer>
      <LeftSection>
        <div>About Us</div>
        <div>My Account</div>
        <div>Wishlist</div>
        <div>Order Tracking</div>
      </LeftSection>
      <RightSection>
        <div>Need Help? Call Us: 1900-888</div>
        <div>English</div>
        <div>USD</div>
      </RightSection>
    </NavbarContainer>
  );
};

export default NavbarTop;
