import useForms from '../../hooks/useForms';
import './form.scss';

const Form = ({ stepActive, setStepActive }) => {
	const {
		name,
		email,
		phone,
		setName,
		setEmail,
		setPhone,
		isValid,
		startFillForm,
		setStartFillForm,
		setPeriodicity
	} = useForms();

	return (
		<div>
			<form className='form' onSubmit={e => e.preventDefault()}>
				{stepActive === 1 && (
					<>
						<h1 className='form__title'>Personal info</h1>
						<p className='form__instructions'>
							Please provide your name, email address, and phone number.
						</p>
						<div className='form__field'>
							<label className='form__label' htmlFor='name'>
								Name
							</label>
							<input
								className={
									name.error && startFillForm
										? 'form__input form__input--error'
										: 'form__input'
								}
								type='text'
								name='name'
								id='name'
								placeholder='Stephen King'
								value={name.value}
								onChange={e => {
									setName(e.target.value);
									setStartFillForm(true);
								}}
							/>
							{name.error && startFillForm && (
								<span className='form__error-message'>
									This field is required
								</span>
							)}
						</div>
						<div className='form__field'>
							<label className='form__label' htmlFor='email'>
								Email Address
							</label>
							<input
								className='form__input'
								type='text'
								name='email'
								id='email'
								placeholder='stephenking@lorem.com'
								value={email.value}
								onChange={e => {
									setEmail(e.target.value);
									setStartFillForm(true);
								}}
							/>
							{email.error && startFillForm && (
								<span className='form__error-message'>
									This field is required
								</span>
							)}
						</div>
						<div className='form__field'>
							<label className='form__label' htmlFor='phone'>
								Phone Number
							</label>
							<input
								className='form__input'
								type='phone'
								name='phone'
								id='phone'
								placeholder='+1 234 567 890'
								value={phone.value}
								onChange={e => {
									setPhone(e.target.value);
									setStartFillForm(true);
								}}
							/>
							{phone.error && startFillForm && (
								<span className='form__error-message'>
									This field is required
								</span>
							)}
						</div>
						<button
							className='form__button'
							disabled={!isValid}
							onClick={() => setStepActive(2)}
						>
							Next Step
						</button>
					</>
				)}
				{stepActive === 2 && (
					<>
						<h1 className='form__title'>Select your plan</h1>
						<p className='form__instructions'>
							You have the option of monthly or yearly billing.
						</p>
						<div className='form__inputs'>
							<div className='form__field form__field-input'>
								<input
									type='radio'
									id='arcade'
									className='form__input-radio'
									name='plan'
								/>
								<label
									htmlFor='arcade'
									className='form__label form__label--checkbox'
									onClick={() => setPeriodicity('arcade')}
								>
									<img
										className='form__label-image'
										src='../../../public/assets/images/icon-arcade.svg'
										alt=''
									/>
									<p className='form__label-text'>Arcade</p>
									<span className='form__label-price'>$9/mo</span>
									<p className='form__label-offer'>2 months free</p>
								</label>
							</div>
							<div className='form__field form__field-input'>
								<input
									type='radio'
									id='advanced'
									className='form__input-radio'
									name='plan'
								/>
								<label
									htmlFor='advanced'
									className='form__label form__label--checkbox'
									onClick={() => setPeriodicity('advanced')}
								>
									<img
										className='form__label-image'
										src='../../../public/assets/images/icon-advanced.svg'
										alt=''
									/>
									<p className='form__label-text'>Advanced</p>
									<span className='form__label-price'>$12/mo</span>
									<p className='form__label-offer'>2 months free</p>
								</label>
							</div>
							<div className='form__field form__field-input'>
								<input
									type='radio'
									id='pro'
									name='plan'
									className='form__input-radio'
								/>
								<label
									htmlFor='pro'
									className='form__label form__label--checkbox'
									onClick={() => setPeriodicity('pro')}
								>
									<img
										className='form__label-image'
										src='../../../public/assets/images/icon-pro.svg'
										alt=''
									/>
									<p className='form__label-text'>Pro</p>
									<p className='form__label-price'>$15/mo</p>
									<p className='form__label-offer'>2 months free</p>
								</label>
							</div>
						</div>
						<div className='form__buttons'>
							<button
								className='form__back'
								disabled={!isValid}
								onClick={() => setStepActive(1)}
							>
								Go Back
							</button>
							<button
								className='form__button'
								disabled={!isValid}
								onClick={() => setStepActive(3)}
							>
								Next Step
							</button>
						</div>
					</>
				)}
				{stepActive === 3 && (
					<>
						<h1 className='form__title'>Pick add-ons</h1>
						<div className='form__buttons'>
							<button
								className='form__back'
								disabled={!isValid}
								onClick={() => setStepActive(2)}
							>
								Go Back
							</button>
							<button
								className='form__button'
								disabled={!isValid}
								onClick={() => setStepActive(4)}
							>
								Next Step
							</button>
						</div>
					</>
				)}
				{stepActive === 4 && (
					<>
						<h1 className='form__title'>Finishing up</h1>
						<div className='form__buttons'>
							<button
								className='form__back'
								disabled={!isValid}
								onClick={() => setStepActive(3)}
							>
								Go Back
							</button>
							<button
								className='form__button form__button--purple'
								disabled={!isValid}
								onClick={() => setStepActive(4)}
							>
								Confirm
							</button>
						</div>
					</>
				)}
			</form>
		</div>
	);
};

export default Form;
