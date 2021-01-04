import styled from "styled-components";
let colorPrimary = '#FFC636'

export const Background = styled.div`
    background-color:${colorPrimary};
`

export const P = styled.p`
    margin: 0;
    padding: 0;
    text-decoration:none;
`

export const A = styled.a`
    margin: 0;
    padding: 0;
    text-decoration:none;
`

export const UL = styled.ul`
    margin: 0;
    padding: 0;
    text-decoration:none;
`

export const LI = styled.li`
    margin: 0;
    padding: 0;
    text-decoration:none;
    list-style-type:none;
`

export const Button = styled.button`
    background:none;
    border:2px solid ${colorPrimary};
    color:${colorPrimary};
    padding:6px 12px;
    border-radius:20px;
    text-transform:uppercase;
    box-shadow: 1px 2px 3px rgba(0,0,0,0.6);
    display:inline-block;
    &:hover{
        color:#222;
        background-color:${colorPrimary};
    }
`

export const Leading = styled.section`
    font-size:1.1em;
        
`

export const Input = styled.input`
    background: rgba(255,255,255,0.05);
    padding: 10px 16px;
    border-radius:20px;
    border: 2px solid  #9893d8;
`

export const TextArea = styled.input`
    background: rgba(255,255,255,0.05);
    padding: 10px 16px;
    border-radius:20px;
    border: 2px solid  #9893d8;
`
export const H1 = styled.h1`
    color:#DDD;
    font-weight:normal;
    font-size:1em;
`

    
  