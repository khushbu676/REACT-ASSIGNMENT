import React from 'react';
import styled from 'styled-components';

// Importing images for the categories with corrected names
import cakeMilkImage from '../assets/images/cake_milk.png'; // Renamed
import organicKiwiImage from '../assets/images/organic_kiwi.png';
import peachImage from '../assets/images/peach.png';
import redAppleImage from '../assets/images/red_apple.png';
import snacksImage from '../assets/images/snacks.png';
import vegetablesImage from '../assets/images/vegetables.png';
import strawberryImage from '../assets/images/strawberry.png';

const CategorySection = styled.section`
  padding: 2rem;
  background-color: #fff;
  text-align: center;
`;

const CategoryList = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
`;

const CategoryItem = styled.div`
  background-color: #f5f5f5;
  padding: 1rem;
  width: 100px;
  border-radius: 8px;
  text-align: center;
  transition: transform 0.3s;
  &:hover {
    transform: scale(1.05);
  }
`;

const CategoryImage = styled.img`
  width: 100px;
  height: 100px;
`;

const CategoryName = styled.p`
  margin-top: 0.5rem;
  color: #27ae60;
  font-weight: bold;
`;

const Categories = () => {
  return (
    <CategorySection>
      <h2>Featured Categories</h2>
      <CategoryList>
        <CategoryItem>
          <CategoryImage src={cakeMilkImage} alt="Cake & Milk" /> {/* Category Image */}
          <CategoryName>Cake & Milk</CategoryName>
          <p>11 items</p>
        </CategoryItem>

        <CategoryItem>
          <CategoryImage src={organicKiwiImage} alt="Organic Kiwi" /> {/* Category Image */}
          <CategoryName>Organic Kiwi</CategoryName>
          <p>6 items</p>
        </CategoryItem>

        <CategoryItem>
          <CategoryImage src={peachImage} alt="Peach" /> {/* Category Image */}
          <CategoryName>Peach</CategoryName>
          <p>6 items</p>
        </CategoryItem>

        <CategoryItem>
          <CategoryImage src={redAppleImage} alt="Red Apple" /> {/* Category Image */}
          <CategoryName>Red Apple</CategoryName>
          <p>10 items</p>
        </CategoryItem>

        <CategoryItem>
          <CategoryImage src={snacksImage} alt="Snacks" /> {/* Category Image */}
          <CategoryName>Snacks</CategoryName>
          <p>11 items</p>
        </CategoryItem>

        <CategoryItem>
          <CategoryImage src={vegetablesImage} alt="Vegetables" /> {/* Category Image */}
          <CategoryName>Vegetables</CategoryName>
          <p>6 items</p>
        </CategoryItem>

        <CategoryItem>
          <CategoryImage src={strawberryImage} alt="Strawberry" /> {/* Category Image */}
          <CategoryName>Strawberry</CategoryName>
          <p>10 items</p>
        </CategoryItem>

        {/* Add more categories as needed */}
      </CategoryList>
    </CategorySection>
  );
};

export default Categories;