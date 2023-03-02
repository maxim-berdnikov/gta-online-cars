import {
	AGENCY,
	ARCADE_CLUB,
	ARENA,
	AUTOSHOP,
	BIG_TRANSPORT,
	CarProps,
	CLUBHOUSE,
	DEL_PERRO_20,
	DEL_PERRO_7,
	ECLIPSE_APARTMENTS,
	FACILITY,
	GANG_GARAGE_FIRST,
	GANG_GARAGE_SECOND,
	HANGAR,
	NIGHT_CLUB,
	OFFICE,
	PEGASUS,
	PENTHOUSE,
} from "./DB";

export type ListItemsProps = {
	title: string;
	cars: CarProps[];
	capacity?: number;
};

export const ListItems: ListItemsProps[] = [
	{
		title: "Eclipse Towers, 3",
		cars: ECLIPSE_APARTMENTS,
		capacity: 10,
	},
	{
		title: "Ночной клуб",
		cars: NIGHT_CLUB,
		capacity: 31,
	},
	{
		title: "Пентхаус (не куплено)",
		cars: PENTHOUSE,
		capacity: 10,
	},
	{
		title: "Игровой клуб",
		cars: ARCADE_CLUB,
	},
	{
		title: "Мастерская арены",
		cars: ARENA,
	},
	{
		title: "Офис",
		cars: OFFICE,
		capacity: 60,
	},
	{
		title: "Автомастерская",
		cars: AUTOSHOP,
		capacity: 10,
	},
	{
		title: "Клабхаус",
		cars: CLUBHOUSE,
		capacity: 10,
	},
	{
		title: "Ангар",
		cars: HANGAR,
		capacity: 10,
	},
	{
		title: "База у ветряной фермы",
		cars: FACILITY,
	},
	{
		title: "Pegasus",
		cars: PEGASUS,
	},
	{
		title: "Крупный транспорт",
		cars: BIG_TRANSPORT,
	},
	{
		title: "Агенство (не куплено)",
		cars: AGENCY,
	},
	{
		title: "Попьюлар-стрит, строение 2",
		cars: GANG_GARAGE_FIRST,
		capacity: 10,
	},
	{
		title: "Сплай-стрит, д.331",
		cars: GANG_GARAGE_SECOND,
		capacity: 10,
	},
	{
		title: "Дель-Перро-Хайтс, кв.20",
		cars: DEL_PERRO_20,
		capacity: 10,
	},
	{
		title: "Дель-Перро-Хайтс, кв.7",
		cars: DEL_PERRO_7,
		capacity: 10,
	},
];
