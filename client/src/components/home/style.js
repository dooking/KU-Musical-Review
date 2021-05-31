import styled from 'styled-components';

export const MainContainer = styled.div`
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    width: 100%;
`;

export const CategoryContainer = styled.div`
    width: 80%;
    margin: 20px auto;
    color: #FFFAFA77;
    font-size: 1.5em;
    margin-bottom: 50px;
    cursor: pointer;
`;

export const SearchContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: 20px;
    flex-direction: column;
    margin-top: 0px;
`;

export const SearchBox = styled.input`
    padding: 7px 14px;
    width: 80%;
    border-radius: 10px;
    border: none;
    background: #9B92A0;
    font-size: 14px;
    font-weight: bold;
    place-self: center;
    height: 40px;
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
    border-radius: 8px;
`;

export const MusicalImg = styled.img`
    width: 200px;
    height: 300px;
    border-radius: 8px 8px 0 0
`;
export const MusicalTitle = styled.div`
    padding: 20px;
    color: #FFFAFADD;
    font-size: 1.2em;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
