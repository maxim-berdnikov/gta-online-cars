import React, {
	FC,
	Fragment,
	useState,
	SyntheticEvent,
	useEffect,
	ChangeEvent,
} from "react";

import { ListItems, ListItemsProps } from "../ListItems";
import clsx from "classnames";
import "./List.scss";
import { CarProps } from "../DB";

const titleSorting = (first: string, second: string) => {
	return first < second ? -1 : first > second ? 1 : 0;
};

export const List: FC = () => {
	const [active, setActive] = useState("");
	const [cars, setCars] = useState<CarProps[]>([]);
	const [duplicateCars, setDuplicateCars] = useState<CarProps[]>([]);
	const [count, setCount] = useState(0);
	const [currentGarage, setCurrentGarage] = useState<ListItemsProps | null>(
		null
	);
	const [searchValue, setSearchValue] = useState("");

	const handleClick = (event: SyntheticEvent) => {
		const currentId = event.currentTarget.id;

		setActive(active === currentId ? "" : currentId);
		setCars(
			currentId === "Дубликаты"
				? duplicateCars
				: currentId === active
				? []
				: ListItems.find(({ title }) => title === currentId)?.cars || []
		);
	};

	const getAllCars = () =>
		ListItems.filter((item) => item.title !== "Ангар").reduce(
			(accumulator: CarProps[], currentValue) => {
				const value = currentValue.cars.map((car) => {
					return { ...car, place: currentValue.title };
				});

				return accumulator.concat(value);
			},
			[]
		);

	const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
		setActive("");

		const currentValue = event.target.value.toLocaleLowerCase();

		setSearchValue(currentValue);

		const filteredCars = getAllCars()
			.filter(
				(car) =>
					car.title.toLocaleLowerCase().includes(currentValue) ||
					car.manufacturer?.toLocaleLowerCase().includes(currentValue)
			)
			.sort((a, b) => titleSorting(a.title, b.title));

		setCars(filteredCars);
	};

	const handleResetSearch = () => {
		setCars([]);
		setCurrentGarage(null);
		setActive("");
		setSearchValue("");
	};

	useEffect(() => {
		const allCars = getAllCars();

		setCount(allCars.length);

		const allCarTitles = allCars.map(
			({ title, description }) => title + (description ? `-${description}` : "")
		);

		const duplicateElements = allCarTitles.filter(
			(item, index) => allCarTitles.indexOf(item) !== index
		);

		setDuplicateCars(
			allCars
				.filter((car) =>
					duplicateElements.includes(
						car.title + (car.description ? `-${car.description}` : "")
					)
				)
				.sort((a, b) => titleSorting(a.title, b.title))
		);
	}, []);

	useEffect(() => {
		setCurrentGarage(ListItems.find((item) => item.title === active) || null);
	}, [active]);

	return (
		<Fragment>
			<p>Весь транспорт: {count}</p>
			<div className="menu">
				{ListItems.map(({ title, cars }) => (
					<p
						key={title}
						id={title}
						className={clsx(
							"menu__item",
							active === title && "menu__item--active",
							cars.length === 0 && "disabled"
						)}
						onClick={handleClick}
					>
						{title}
					</p>
				))}
				<p
					key="Дубликаты"
					id="Дубликаты"
					className={clsx(
						"menu__item",
						active === "Дубликаты" && "menu__item--active"
					)}
					onClick={handleClick}
				>
					Дубликаты
				</p>
			</div>
			<div className="search">
				<input
					className="search__input"
					value={searchValue}
					onChange={handleChangeInput}
				/>
				<button onClick={handleResetSearch}>Сбросить</button>
			</div>
			{currentGarage && currentGarage.capacity && (
				<h4>
					Всего мест - {currentGarage.capacity}, свободно -{" "}
					{currentGarage.capacity -
						currentGarage.cars.filter((car) => car.type !== "Велосипед").length}
				</h4>
			)}
			<div className="list">
				{cars.map(
					(
						{ title, description, floor, place, manufacturer, type, tuning },
						index
					) => (
						<p key={`${title}-${index}`}>
							{type !== "Велосипед" ? `${index + 1}. ` : "В. "}
							<span className={clsx(tuning && "tuned")}>
								{manufacturer ? `${manufacturer} ` : ""}
								{title}
							</span>
							{description && ` - ${description}`}
							{place && ` - ${place}`}
							{floor && ` - ${floor} этаж`}
						</p>
					)
				)}
			</div>
		</Fragment>
	);
};
