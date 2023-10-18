import styled from "@emotion/styled"

const IndividualAvatar=styled.img`
    height:50px;
    aspect-ratio: 1;;
    border-radius: 50%;
    border:1px solid ${props=>props.borderColor || "#dddbdb"};
    filter:drop-shadow(1px 1px 1px black);
    box-sizing: border-box;
`

export default IndividualAvatar