import React from 'react'
import styled from 'styled-components'

const Card = ({title, text, icon, border})=>{
    return(
        <Container>
            <Wrapper border={border}>
                <General>
                    <Title>{title}</Title>
                    <Content>{text}</Content>
                    <Icon>
                        <img src={icon} alt=""/>
                    </Icon>
                </General>
            </Wrapper>
        </Container>
    )
}

export default Card;

const Container = styled.div`
    
`;

const Wrapper = styled.div`
    width: 280px;
    height: 200px;
    background-color: rwhite;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    border-top: 3px solid ${({border})=>border};
    box-shadow: 0 3px 6px 0 black;
    margin: 20px;
`;

const General = styled.div`
    width: 230px;
    height: 200px;
    background-color: white;

`

const Title = styled.div`
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 10px;
    margin-top: 10px;
`;
const Content = styled.div`
    color: #aaa;
    font-weight: 500;
    font-size: 15PX;   
    margin-bottom: 40px;
`;
const Icon = styled.div`
    // background-color: green;
    display: flex;
    justify-content: end;
    img{
        width: 50px;
    }
`;
