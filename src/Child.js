import { memo } from 'react';

//memo: 특정 컴포넌트를 memoization해서 부모컴포넌트의 state값이 변경되서 재랜더링될때
//해당 자식 컴포넌트도 매번 재랜더링하는 것이 아닌 이전에 랜더링된 결과물을 재활용 (불필요한 재랜더링 방지)
//memo로 자식 컴포넌트를 memoization처리했더라도 특정 prop값이 부모로부터 전달되면 전달되는 prop값이 전달시 memoization이 다시 비활성화

function Child(props) {
	console.log('child');

	return (
		<div>
			<h1>Child : {props.Counter}</h1>
		</div>
	);
}

//hoc (high order component) : 함수에 인수로 컴포넌트를 넣어서 다시 새로운 컴포넌트를 반환
export default memo(Child);
