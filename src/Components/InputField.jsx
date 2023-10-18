import React from "react";
import styled from "@emotion/styled";

const TextFieldWrapper=styled.div`

    position:relative;
    width: ${props=>props?.width||"100%"};

    .inputField{
        height:25px;
        width:100%;
        border:none;
        border-bottom: 1px solid  ${props=>props?.borderColor||"brown"};
        background: transparent;
        outline:none;

        &:focus~label, &:valid~label{
            bottom:25px
        }
    }
    .label {
        position: absolute;
        bottom:1px;
        left:0;
        pointer-events: none;
        transition:all 300ms ease;
    }
    sup {
        color:red;
    }


`

export default function TextField({value="",label="", onChange, playerNumber, className, width, borderColor}){

    const handleInputValueChange=(e)=>{
        const {value,id}=e.target
        onChange(value,id)
    }
return (
    <TextFieldWrapper width={width} className={className} borderColor={borderColor}>
        <input className="inputField" value={value} onChange={handleInputValueChange} id={playerNumber} required/>
        <label className="label">{label}<sup>*</sup></label>
    </TextFieldWrapper>
)
}