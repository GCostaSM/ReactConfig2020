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
/*
    grid basics
    columns and rows

    grid container
    <div>
        <a>one</a>
        <a>two</a>
        <a>three</a>
    </div>

    div{
        display:grid;
        grid-template-columns: 1fr 1fr 1fr;
    }


    12 column grid
    selector{
        display: grid;
        grid-template-columns:repeat(12, 1fr);
    }

    .one{
        grid-column: 1/5;
    }

    .two{
        grid-column:6/9;
    }

    three{
        grid-column: 10/12;
        grid-row:2;
    }
*/ 

export const Leading = styled.section`
    font-size:1.1em;
`

export const Grid3c = styled.section`
    display:grid;
    grid-template-columns: repeat(12,1fr);
    a{
        text-align:center;
        padding:20px;
    }
    a:nth-child(1){
        grid-column: 2/6;
        grid-row:1;
    }
    a:nth-child(2){
        grid-column: 8/12;
        grid-row:1;
    }
    a:nth-child(3){
        grid-column: 5/9;
        grid-row:2;
    }

    img{
        width:100%;
    }
    gap:10px;
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

    
  