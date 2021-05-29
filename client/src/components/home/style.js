import styled from 'styled-components';

export const MainContainer = styled.div`
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    width: 100%;
    background: #61248C;
`;

export const CategoryContainer = styled.div`
    width: 80%;
    margin: 20px auto;
    color: white;
    font-size: 1.5em;
    margin-bottom: 50px;
    cursor: pointer;
`;

export const SearchContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: 20px;
    flex-direction: column;
`;

export const SearchBox = styled.input`
    padding: 7px 14px;
    width: 80%;
    border-radius: 10px;
    border: none;
    background: #f9c6f9;
    font-size: 14px;
    font-weight: bold;
    place-self: center;
`;

export const MusicalContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 20px 50px;
`;

export const MusicalItem = styled.div`
    display: flex;
    flex-direction: column;
    margin: 30px;
    width: 200px;
    cursor: pointer;
    background: rgba(155, 146, 160, 0.2);
    border: 1px solid #524352;
`;

export const MusicalImg = styled.img`
    width: 200px;
    height: 300px; 
`;
export const MusicalTitle = styled.div`
    padding: 20px;
    color: white;
    font-size: 1.2em;
    font-weight: bold;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
