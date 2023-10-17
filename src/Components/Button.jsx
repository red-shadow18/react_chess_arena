import styled from "@emotion/styled";

const buttonStyleMap={
    primary:{
        color:"#1795d4"
    },
    secondary:{
        color:"#ff661a"
    },
    tertiary:{
        color:"#7f19e6"
    },
    quaternanry:{
        color:"#e619a1",
    },
    success:{
        color:"#17bd17",
    },
    cancel:{
        color:"#d41717",
    }
}
const Button=styled.button`
color:${props=>buttonStyleMap[props.type].color};
background: #ffffff;
border:0.5px solid ${props=>buttonStyleMap[props.type].color};
transition: ease all 250ms;
border-radius: 4px;
font-size: ${props=>props.size || "12px"};;
cursor:${props=>props.disabled?"not-allowed":"pointer"};
opacity: ${props=>props.disabled?0.7:1};

&:hover {
    &:not([disabled]){
    color:white;
    background: ${props=>buttonStyleMap[props.type].color};
    border:0.5px solid ${props=>buttonStyleMap[props.type].color};
    }
}    
`

export default Button;