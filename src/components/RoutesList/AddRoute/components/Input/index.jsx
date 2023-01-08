import "./input.less";

const Input = (props) => {
	const { inputError, title, placeholder, type = 'text', value, onChange } = props;

	return (
		<div className="input_container">
			<div className="input_title">{title}</div>
			<input
				className={inputError ? 'input_error' : ''}
				placeholder={placeholder}
				type={type}
				value={value}
				onChange={(e) => onChange(e.target.value)}
			/>
			{inputError ? <div className="input_error_message">Поле не может быть пустым</div> : null}
		</div>
	);
}

export default Input;
