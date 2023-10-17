
import styled from "@emotion/styled"

//expected props are size and color

const headingStyleMap={
    h1:{
        fontSize:"2rem",
    },
    h2:{
        fontSize:"1.5rem",
    },
    h3:{
        fontSize:"1.33rem",
    },
    h4:{
        fontSize:"1.1rem",
    },
    h5:{
        fontSize:"0.83rem",
    },
    h6:{
        fontSize:"0.67rem",
    },
}

const Heading=styled.p`

font-size: ${props=>props.type ? headingStyleMap[props.type]["fontSize"] : "1rem"};
font-weight: bold;
color: ${props=>props.color ? headingStyleMap[props.color] : "black"};
text-align: ${props=> props.textAlign || "left"};
`

export default Heading