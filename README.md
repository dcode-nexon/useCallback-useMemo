리액트는 부모컴포넌트가 재랜더링시 자식 컴포넌트도 같이 재랜더링됨
부모에서 자식으로 props전달시에도 재랜더링

# memo

- 컴포넌트 자체를 memoization처리해서 재랜더링 방지
- 예외사항 : 배열, 객체, 함수 같은 참조형자료가 props로 전달될때 재랜더링 됨

# useCallback

- props로 전달되는 함수자체를 memoization
- lodash - isEqual : props로 전달되는 배열, 객체의 참조주소가 아닌 값 자체를 memoization

# useMemo

- 컴포넌트가 재랜더링시 동일한값을 리턴하는 값 자체를 memoization

# useCallback, useMemo를 무분별하게 사용하면 안되는 이유

- 실행속도 향상을 위해 메모리를 더 많이 할당하는 등가교환
- memoization된 요소는 garbage collection에서 제외됨
- garbage collection: 더이상 쓰이지 않는 불필요한 메모리값을 자동으로 제거
