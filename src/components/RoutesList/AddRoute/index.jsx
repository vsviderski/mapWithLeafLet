import { useState } from "react";
import { useActions } from "hooks/useActions";
import Input from "./components/Input";
import "./style.less";

const AddRoute = () => {
	const { addCoordinate } = useActions();
	const [routeNumber, setNumber] = useState('');
	const [fromLatitude, setFromLatitude] = useState('');
	const [fromLongitude, setFromLongitude] = useState('');
	const [toLatitude, setToLatitude] = useState('');
	const [toLongitude, setToLongitude] = useState('');
	const [isCheckForm, setIsCheckForm] = useState(false);

	const addNewCoordinate = () => {
		if (routeNumber && fromLatitude && fromLongitude && toLatitude && toLongitude) {
			addCoordinate({
					id: Math.random(),
					number: routeNumber,
					fromLatitude: fromLatitude,
					fromLongitude: fromLongitude,
					toLatitude: toLatitude,
					toLongitude: toLongitude,
				});
			setNumber('');
			setFromLatitude('');
			setFromLongitude('');
			setToLatitude('');
			setToLongitude('');
			setIsCheckForm(false);
		} else {
			setIsCheckForm(true)
		}
	};

	return (
		<div className="todo_container">
			<div className="todo_content">
				<div className="todo_inputs">
					<Input
						inputError={isCheckForm}
						title="Номер заявки"
						placeholder="№"
						value={routeNumber}
						onChange={setNumber}
					/>
					<Input
						inputError={isCheckForm}
						title="Координаты ОТ"
						placeholder="ОТ lat. "
						value={fromLatitude}
						onChange={setFromLatitude}
					/>
					<Input
						inputError={isCheckForm}
						title="Координаты ОТ"
						placeholder="ОТ lng."
						value={fromLongitude}
						onChange={setFromLongitude}
					/>
					<Input
						inputError={isCheckForm}
						title="Координаты ДО"
						placeholder="ДО lat."
						value={toLatitude}
						onChange={setToLatitude}
					/>
					<Input
							inputError={isCheckForm}
						title="Координаты ДО"
						placeholder="ДО lng."
						value={toLongitude}
						onChange={setToLongitude}
					/>
				</div>
			</div>
			<button className="btn" onClick={addNewCoordinate}>
				<span className="text">Добавить</span>
			</button>
		</div>
	);
};

export default AddRoute;