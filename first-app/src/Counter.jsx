import React, { useState } from 'react';

const Counter = () => {
	const [todos,SetTodos] = useState(['todo1','todo2','todo3']);
	return (
		<div className='container mt-5'>
			{todos.map((todo)=><li>{todo}</li>)}
			<button onClick={()=>{SetTodos([...todos,'another task'])}}>click</button>
		</div>
	)
}

export default Counter;