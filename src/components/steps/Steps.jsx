import Step from '../step/Step';
import './steps.scss';

const STEPS = [
	{
		number: 1,
		title: 'Your Info',
		active: true
	},
	{
		number: 2,
		title: 'Select Plan',
		active: false
	},
	{
		number: 3,
		title: 'Add-Ons',
		active: false
	},
	{
		number: 4,
		title: 'Summary',
		active: false
	}
];

const Steps = ({ stepActive, setStepActive }) => {
	return (
		<div className='steps'>
			{STEPS.map(step => (
				<Step
					key={step.number}
					number={step.number}
					title={step.title}
					isActive={step.number === stepActive}
				/>
			))}
		</div>
	);
};

export default Steps;
