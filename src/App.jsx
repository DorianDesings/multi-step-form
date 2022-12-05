import { useState } from 'react';
import Form from './components/form/Form';
import Steps from './components/steps/Steps';

const App = () => {
	const [stepActive, setStepActive] = useState(2);
	return (
		<div className='app'>
			<Steps stepActive={stepActive} />
			<Form stepActive={stepActive} setStepActive={setStepActive} />
		</div>
	);
};

export default App;
