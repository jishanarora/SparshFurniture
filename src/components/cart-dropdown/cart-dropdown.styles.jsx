import styled from 'styled-components'
import { CustomButtonContainer } from '../custom-button/custom-button.styles'

export const CartDrowndownContainer=styled.div`
position: absolute;
    width: 280px;
    height: 340px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 1px solid black;
    background-color: white;
    top: 90px;
    right: 40px;
    z-index: 5;

    ::-webkit-scrollbar-track
    {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    background-color: #F5F5F5;
    }
    
    ::-webkit-scrollbar
    {
    width: 10px;
    background-color: #F5F5F5;
    }
    
    ::-webkit-scrollbar-thumb
    {
    background-color: #000000;
    border: 2px solid #555555;
    }    
`

export const EmptyMessageContainer=styled.div`
font-size: 18px;
margin:50px auto;
`

export const CartItemContainer=styled.div`
height: 240px;
display: flex;
flex-direction: column;
overflow: auto;
`

export const AddButton=styled(CustomButtonContainer)`
margin-top: auto;
`