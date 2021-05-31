import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Youtube from 'react-youtube';
import * as S from './style';

// eslint-disable-next-line react/prop-types
function Musical({ id }) {
    const [MusicalData, setMusicalData] = useState(null);

    useEffect(() => {
        axios.get(`/musical/${id}`)
            .then((response) => {
                setMusicalData(response.data);
            });
    }, []);

    const splitTag = () => {
        const tags = MusicalData.tags.split('#');
        tags.shift();
        return tags.map(tag => <S.TagBox>#{tag}</S.TagBox>);
    }

    return (
        <S.MainContainer>
            {MusicalData ?
                <S.MusicalContainer>
                    <S.MusicalYoutube>
                        <Youtube
                            videoId={MusicalData.teaserUrl}
                            opts={{
                                width: '100%',
                                height: 560,
                                playerVars: {
                                    // https://developers.google.com/youtube/player_parameters
                                    autoplay: 0,
                                },
                            }} 
                            onReady={event => event.target.pauseVideo()}
                        />
                    </S.MusicalYoutube>
                    <S.InfoContainer>
                        <S.MusicalTitle>{MusicalData.title}</S.MusicalTitle>
                        <S.ChildInfoContainer>
                            <S.MusicalImg alt={MusicalData.title} src={MusicalData.posterUrl}/>
                            <S.MusicalInfo>
                                <S.InfoText>{MusicalData.date}</S.InfoText>
                                <S.InfoText>{MusicalData.location}</S.InfoText>
                                <S.InfoText>캐스팅</S.InfoText>
                                <S.CastingText>{MusicalData.casting}</S.CastingText>
                                <S.TagContainer>{splitTag()}</S.TagContainer>
                            </S.MusicalInfo>
                        </S.ChildInfoContainer>
                        <S.ContentText>{MusicalData.content}</S.ContentText>                        
                    </S.InfoContainer>
                </S.MusicalContainer>
                :
                <S.MusicalContainer>Loading..</S.MusicalContainer>
            }
        </S.MainContainer>
    );
}

export default Musical;
