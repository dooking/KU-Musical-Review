import React, { useEffect, useState } from 'react';
import axios from 'axios';
import * as S from './style';

function Home() {
	const [musicals, setMusical] = useState([]);
	const [search, setSearch] = useState('');
    const getMusicalData = async () => {
        const Data = await axios.get('/musical').then(response => response.data);
		setMusical([...Data.musicals]);
    }
    useEffect(() => {
        getMusicalData();
    }, []);

    const clickHandler = (id) => {
        window.location.href=`/musical/${id}`
    }
    const categoryHandler = () => {
        window.location.href=`/search`
    }
    const searchHandler = (e) => {
        setSearch(e.target.value)
    }
    return (
		<S.MainContainer>
            <S.SearchContainer>
                <S.CategoryContainer onClick={categoryHandler}>
                    카테고리별 작품을 추천해드릴까요? - Click!
                </S.CategoryContainer>
                <S.SearchBox type="text" placeholder="🔍 Search" value={search} onChange={searchHandler}/>
            </S.SearchContainer>
            <S.MusicalContainer>
                {
                    search ? 
                    <>
                    {
                        musicals
                        .filter(musical=> musical.title.includes(search))
                        .map((musical)=> {
                            return (
                                <S.MusicalItem key={musical.id} onClick={()=>clickHandler(musical.id)}>
                                    <S.MusicalImg src={musical.posterUrl}/>
                                    <S.MusicalTitle>{musical.title}</S.MusicalTitle>
                                </S.MusicalItem>
                            )
                            })
                    }
                    </>
                    : 
                    <>
                    {
                        musicals.map((musical)=> {
                            return (
                                <S.MusicalItem key={musical.id} onClick={()=>clickHandler(musical.id)}>
                                    <S.MusicalImg src={musical.posterUrl}/>
                                    <S.MusicalTitle>{musical.title}</S.MusicalTitle>
                                </S.MusicalItem>
                            )
                        })
                    }
                    </>
                }
                
            </S.MusicalContainer>
        </S.MainContainer>
	);
}

export default Home;
