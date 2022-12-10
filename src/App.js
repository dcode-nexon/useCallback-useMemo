import Child from './Child';
import { useState, useCallback } from 'react';

/*
	useCallback
	자식 컴포넌트에 함수를 prop으로 전달시, 함수도 참조형 자료이므로 자식 컴포넌트는 강제 재호출
	이때 useCallback을 이용해서 prop으로 전달되는 함수자체를 메모이제이션 처리
	useCallback에 의존성 배열을 비워놓으면 함수에 활용되는 초기 state값까지 메모이제이션 처리하므로 매번 같은 값만 반환
	props에서 전달되는 함수 내부에 쓰이는 state값을 의존성 배열로 등록하면 해당 state가 변경될때에만 props로 전달되는 함수의 메모이제이션 풀어줌
*/

function App() {
	console.log('parent');
	const [Counter, setCounter] = useState(0);
	const [Input, setInput] = useState('');
	const updateCounter = useCallback(() => setCounter(Counter + 1), [Counter]);
	const colors = ['red', 'green', 'blue'];

	return (
		<div className='App'>
			<h1>Parent</h1>
			<button onClick={() => setCounter(Counter + 1)}>plus</button>
			<p>{Counter}</p>
			<br />
			<input type='text' value={Input} onChange={(e) => setInput(e.target.value)} />

			{/* 참조형 자료를 prop으로 전달시 실제 해당 값이 변경되지 않더라고 다른 state값 변경에 의해서 부모컴포넌트는 재호출되고 변수에 담기는 참조주소 링크가 계속 변경이 되므로 자식컴포넌트에서는 매번 다른 값이 들어온다고 인지를 해서 메모이제이션 해제 */}
			<Child Counter={Counter} updateCounter={updateCounter} colors={colors} />
		</div>
	);
}

export default App;
