import React from 'react';
import * as S from './style';

function Search() {
	

	const clickHandler = (id) => {
        window.location.href=`/musical/${id}`
    }
	
	const categories = [
		{
			id: 2,
			title: "#뛰어난 연출"
		},
		{
			id: 3,
			title: "#가족과 함께"
		},
		{
			id: 19,
			title: "#완성도 높은"
		},
		{
			id: 21,
			title: "#화려한 무대구성"
		},
		{
			id: 14,
			title: "#미스터리/스릴러"
		},
		{
			id: 1,
			title: "#연기파 배우진"
		},
		{
			id: 7,
			title: "#관객과 함께하는"
		},
		{
			id: 15,
			title: "#넘버 맛집"
		}
	];

	return (
		<S.MainContainer>
			<S.Comment>추천 카테고리</S.Comment>
			<S.CategoryContainer>
				
				{
					categories.map(category=>{
						return (
							<S.CategoryItem key={category.id} onClick={()=>clickHandler(category.id)}>
								{category.title}
							</S.CategoryItem>
						)
					})
				}
			</S.CategoryContainer>
		</S.MainContainer>
		
	);
}

export default Search;
