import styled from 'styled-components';

export const MainContainer = styled.div`
  margin: 0;
  padding: 0,
  width: 100%;
`;

export const Comment = styled.div`
    padding: 10px 0 0 50px;
    border: 20;
    color: #FFFAFADD;
    font-size: 2.0em;
`;

export const CategoryContainer = styled.div`
    margin: 10px auto; 
    padding: 0;
    border: 0;
    box-sizing: border-box;
    width: 80%;
`;

export const CategoryItem = styled.div`
    display: inline-flex;
    flex-direction: column;
    margin: 50px;
    height: 200px;
    width: 200px;
    cursor: pointer;
    color: #FFFAFADD;
    font-size: 1.2em;
    background: #4B1C6D;
    border-radius: 50%;
    justify-content: center;
    align-items: center;
`;