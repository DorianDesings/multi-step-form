import './step.scss';

const Step = ({ number, title, isActive }) => {
	return (
		<div className='step'>
			<p
				className={
					isActive ? 'step__number step__number--active' : 'step__number'
				}
			>
				{number}
			</p>
			<div className='step__info'>
				<p className='step__order'>Step {number}</p>
				<p className='step__title'>{title}</p>
			</div>
		</div>
	);
};

export default Step;
