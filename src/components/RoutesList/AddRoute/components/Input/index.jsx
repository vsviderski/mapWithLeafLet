import "./style.less";

const Input = (props) => {
	const { title, placeholder, type = 'text', value, onChange, inputError} = props;
	const errorMessage = !value && inputError;
	
	return (
		<div className="input_container">
			<div className="input_title">{title}</div>
			<input
				className={errorMessage && 'input_error'}
				placeholder={placeholder}
				type={type}
				value={value}
				onChange={(e) => onChange(e.target.value)}
			/>
			{errorMessage ? <div className="input_error_message">Заполните поле</div> : null}
		</div>
	);
}

export default Input;