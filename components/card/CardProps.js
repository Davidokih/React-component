import React from 'react'
import styled from 'styled-components'
import Card from './Card'
import Icon1 from '../../images/byjus.jpeg'
import Icon2 from '../../images/tttttt.webp'
import Icon3 from '../../images/ttttt2.webp'
import Icon4 from '../../images/award-twillywig.png'


const CardProps = ()=>{
    return(
        <Wrapper>
            <Card title="Supervisor" text="Monitor activities from every divice" icon={Icon1} border="orange"/>
            <General>
                <Card title="Team" text="Building a team that will help our development grow" icon={Icon2} border="blue"/>
                <Card title="Karma" text="Monitor activities from every divice" icon={Icon3} border="green"/>
            </General>
            <Card title="Calculator" text="Will train people in different stages of development to understand" icon={Icon4} border="red"/>
        </Wrapper>
    )
}

export default CardProps;

const Wrapper = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
`
const General = styled.div`
    margin: 50px;
    // background-color: red;
`;