/* eslint-disable jsx-a11y/media-has-caption */
import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import * as S from './style';

function Musical() {
    const [MusicalData, setMusicalData] = useState(null);

    useEffect(() => {
        Axios.get(`/musical/1`)
            .then((response) => {
                console.log(response.data);
                setMusicalData(response.data);
            });
    }, []);

    return (
        <S.MainContainer>
            {MusicalData ? <div>sdfs</div> : <div>zzz</div>}
        </S.MainContainer>
    );
}

export default Musical;
