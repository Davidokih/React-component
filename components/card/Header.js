import React from 'react'
import styled from 'styled-components'

const Header = () => {
  return (
      <Container>
          <Wrapper>
              <div>Reliable, efficient delivery</div>
              <span>Powered by Technology</span>
              <p>Our Artificial inteligence is a power tool that assist us in in our day to day work</p>
          </Wrapper>
      </Container>
  )
}

export default Header

const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Wrapper = styled.div`
width: 300px;
display: flex;
flex-direction: column;
align-items: center;
    // font-family: san-serif;
    div{
        text-align: center;
        // margin-bottom: 3px;
        font-size: 20px;
        color: #aaa;
    }
    span{
        font-size: 20px;
        font-weight: 700;
    }
    p{
        font-size: 13px;
        color: #aaa;
        text-align: center;
        width: 270px;
    }
`;

