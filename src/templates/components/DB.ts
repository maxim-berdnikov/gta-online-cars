export interface CarProps {
	title: string;
	description?: string;
	floor?: string;
	place?: string;
	manufacturer?: string;
	type?: string;
	tuning?: boolean;
}

export const NIGHT_CLUB: CarProps[] = [
	{
		title: "Tornado",
		description: "Мариачи",
		floor: "B2",
		manufacturer: "Declasse",
	},
	{ title: "Peyote", floor: "B2", manufacturer: "Vapid" },
	{ title: "Peyote", floor: "B2", manufacturer: "Vapid" },
	{ title: "Buccaneer", floor: "B2", manufacturer: "Albany" },
	{ title: "Buccaneer", floor: "B2", manufacturer: "Albany" },
	{
		title: "Sandking XL",
		description: "Бесплатный тюнинг, голубой",
		floor: "B3",
		manufacturer: "Vapid",
	},
	{ title: "Injection", floor: "B3", manufacturer: "BF" },
	{
		title: "Sandking XL",
		description: "Бесплатный тюнинг, желтый",
		floor: "B3",
		manufacturer: "Vapid",
	},
	{
		title: "Dominator",
		floor: "B3",
		description: "Бесплатный тюнинг",
		manufacturer: "Vapid",
	},
	{
		title: "Sentinel XS",
		floor: "B3",
		description: "Бесплатный тюнинг, фиолетовый",
		manufacturer: "Übermacht",
	},
	{ title: "Rusty Rebel", floor: "B3", manufacturer: "Karin" },
	{ title: "Tailgater", floor: "B3", manufacturer: "Obey" },
	{
		title: "Dubsta 2",
		description: "Бесплатный тюниг, золотой",
		manufacturer: "Benefactor",
	},
	{
		title: "Sabre Turbo",
		description: "Бесплатный тюниг, зеленый",
		floor: "B4",
		manufacturer: "Declasse",
	},
	{
		title: "Sabre Turbo",
		description: "Бесплатный тюниг, красный",
		floor: "B4",
		manufacturer: "Declasse",
	},
	{ title: "Phoenix", floor: "B4", manufacturer: "Imponte" },
	{ title: "Gauntlet", floor: "B4", manufacturer: "Bravado" },
	{ title: "Picador", floor: "B4", manufacturer: "Cheval" },
	{
		title: "Ruiner",
		description: "Бесплатный тюнинг, голубой",
		floor: "B4",
		manufacturer: "Imponte",
	},
	{
		title: "Ruiner",
		description: "Бесплатный тюнинг, желтый",
		floor: "B4",
		manufacturer: "Imponte",
	},
	{
		title: "Rat-Loader",
		floor: "B4",
		manufacturer: "Bravado",
		description: "Бесплатный тюнинг",
	},
	{ title: "Vigero", floor: "B4", manufacturer: "Declasse" },
];

export const ECLIPSE_APARTMENTS: CarProps[] = [
	{ title: "Prairie", manufacturer: "Bollokan" },
	{ title: "Sentinel XS", description: "Желтый", manufacturer: "Übermacht" },
	{ title: "Endurex", description: "Велосипед", type: "Велосипед" },
	{
		title: "The Tri-Cycles Race Bike",
		type: "Велосипед",
	},
	{
		title: "The Whippet Race Bike",
		type: "Велосипед",
	},
];

export const ARCADE_CLUB: CarProps[] = [
	{ title: "Futo", manufacturer: "Karin", description: "Itasha", tuning: true },
	{
		title: "Sultan RS",
		manufacturer: "Karin",
		description: "Itasha",
		tuning: true,
	},
];

export const ARENA: CarProps[] = [
	{ title: "Duke O'Death", floor: "B1", manufacturer: "Imponte" },
	{ title: "Dune Buggy", floor: "B1", manufacturer: "BF" },
	{ title: "Tampa с оружием", floor: "B1", manufacturer: "Declasse" },
	{ title: "Kuruma (броня)", floor: "B1", manufacturer: "Karin" },
	{ title: "Insurgent", floor: "B1", manufacturer: "HVY" },
	{ title: "Paragon R (броня)", floor: "B1", manufacturer: "Enus" },
	{ title: "Stromberg", floor: "B1", manufacturer: "Ocelot" },
	{ title: "Ardent", floor: "B1", manufacturer: "Ocelot" },
];

export const OFFICE: CarProps[] = [
	{ title: "Nero", floor: "1", manufacturer: "Truffade", type: "Суперкар" },
	{ title: "Turismo R", floor: "1", manufacturer: "Grotti", type: "Суперкар" },
	{ title: "Emerus", floor: "1", manufacturer: "Progen", type: "Суперкар" },
	{ title: "Zentorno", floor: "1", manufacturer: "Pegassi", type: "Суперкар" },
	{ title: "Tyrant", floor: "1", manufacturer: "Överflöd", type: "Суперкар" },
	{
		title: "Krieger",
		floor: "1",
		manufacturer: "Benefactor",
		type: "Суперкар",
	},
	{
		title: "Infernus Classic",
		floor: "1",
		manufacturer: "Pegassi",
		type: "Спортклассика",
	},
	{
		title: "Banshee 900R",
		floor: "1",
		manufacturer: "Bravado",
		type: "Суперкар",
	},
	{
		title: "Elegy Retro заказной",
		floor: "1",
		manufacturer: "Annis",
		description: "FF Nissan Skyline",
		type: "Спорткар",
		tuning: true,
	},
	{
		title: "Elegy Retro заказной",
		floor: "1",
		manufacturer: "Annis",
		type: "Спорткар",
		tuning: true,
	},
	{
		title: "Deveste Eight",
		floor: "1",
		manufacturer: "Principe",
		type: "Суперкар",
	},
	{
		title: "Entity XXR",
		floor: "1",
		manufacturer: "Överflöd",
		type: "Суперкар",
	},
	{
		title: "Hotknife",
		floor: "1",
		manufacturer: "Vapid",
		type: "Маслкар",
		tuning: true,
	},
	{
		title: "Hustler",
		floor: "1",
		manufacturer: "Vapid",
		type: "Маслкар",
		tuning: true,
	},
	{ title: "Vagner", floor: "1", manufacturer: "Dewbauchee", type: "Суперкар" },
	{ title: "X80 Proto", floor: "1", manufacturer: "Grotti", type: "Суперкар" },
	{ title: "Tempesta", floor: "1", manufacturer: "Pegassi", type: "Суперкар" },
	{
		title: "Buccaneer заказной Кабрио",
		floor: "2",
		manufacturer: "Albany",
		type: "Маслкар",
		tuning: true,
	},
	{ title: "190z", floor: "2", manufacturer: "Karin", type: "Спортклассика" },
	{
		title: "Voodoo заказной",
		floor: "2",
		manufacturer: "Declasse",
		type: "Маслкар",
		tuning: true,
	},
	{ title: "Savestra", floor: "2", manufacturer: "Annis", type: "Спорткар" },
	{
		title: "Sabre Turbo заказной",
		floor: "2",
		manufacturer: "Declasse",
		type: "Маслкар",
		tuning: true,
	},
	{
		title: "Gauntlet Hellfire",
		floor: "2",
		manufacturer: "Bravado",
		type: "Маслкар",
	},
	{ title: "GP1", floor: "2", manufacturer: "Progen", type: "Суперкар" },
	{
		title: "Stirling GT",
		floor: "2",
		manufacturer: "Benefactor",
		type: "Спортклассика",
	},
	{
		title: "Schlagen GT",
		floor: "2",
		manufacturer: "Benefactor",
		type: "Спорткар",
	},
	{ title: "Omnis", floor: "2", manufacturer: "Obey", type: "Спорткар" },
	{
		title: "Hotring Sabre",
		floor: "2",
		manufacturer: "Declasse",
		type: "Спорткар",
	},
	{ title: "ETR1", floor: "2", manufacturer: "Emperor", type: "Суперкар" },
	{
		title: "Rapid GT Classic",
		floor: "2",
		manufacturer: "Dewbauchee",
		type: "Спорткласика",
	},
	{ title: "Tezeract", floor: "2", manufacturer: "Pegassi", type: "Суперкар" },
	{
		title: "Cheburek",
		floor: "2",
		manufacturer: "RUNE",
		type: "Спортклассика",
	},
	{ title: "Issi Sport", floor: "2", manufacturer: "Weeny", type: "Спорткар" },
	{ title: "Issi Classic", floor: "2", manufacturer: "Weeny", type: "Компакт" },
	{
		title: "Retinue",
		floor: "2",
		manufacturer: "Vapid",
		type: "Спортклассика",
	},
	{
		title: "Mamba Кабрио",
		floor: "2",
		manufacturer: "Declasse",
		type: "Спортклассика",
	},
	{
		title: "Hermes",
		floor: "2",
		manufacturer: "Albany",
		type: "Маслкар",
		description: "Док Хадсон",
	},
	{
		title: "Blista Kanjo",
		floor: "2",
		manufacturer: "Dinka",
		type: "Компакт",
		description: "Street Samurai",
	},
	{
		title: "Penumbra",
		floor: "3",
		manufacturer: "Maibatsu",
		type: "Спорткар",
		description: "FF Mitsubishi Eclipse",
		tuning: true,
	},
	{
		title: "Burger Shot Stallion",
		floor: "3",
		manufacturer: "Declasse",
		type: "Маслкар",
	},
	{
		title: "Pisswasser Dominator",
		floor: "3",
		manufacturer: "Vapid",
		type: "Маслкар",
	},
	{
		title: "Sprunk Buffalo",
		floor: "3",
		manufacturer: "Bravado",
		type: "Маслкар",
	},
	{ title: "Dukes", floor: "3", manufacturer: "Imponte", type: "Маслкар" },
	{
		title: "Blista Compact",
		floor: "3",
		manufacturer: "Dinka",
		type: "Спорткар",
	},
	{
		title: "Stallion Кабрио",
		floor: "3",
		manufacturer: "Declasse",
		type: "Маслкар",
	},
	{
		title: "Specter",
		floor: "3",
		manufacturer: "Dewbauchee",
		type: "Спорткар",
	},
	{
		title: "Weevil",
		floor: "3",
		manufacturer: "BF",
		type: "Компакт",
		description: "Раскраска Love",
	},
	{
		title: "Weevil",
		floor: "3",
		manufacturer: "BF",
		type: "Компакт",
		description: "Раскраска Цветы",
	},
	{ title: "Yosemite", floor: "3", manufacturer: "Declasse", type: "Маслкар" },
];

export const AUTOSHOP: CarProps[] = [
	{ title: "Stinger GT", manufacturer: "Grotti", type: "Спорклассика" },
	{ title: "Broadway", manufacturer: "Classique", type: "Маслкар" },
	{ title: "Roosevelt", manufacturer: "Albany", type: "Спортклассика" },
	{ title: "Roosevelt Valor", manufacturer: "Albany", type: "Спортклассика" },
	{ title: "Peyote Gasser", manufacturer: "Vapid", type: "Маслкар" },
	{ title: "Nightshade", manufacturer: "Imponte", type: "Маслкар" },
	{
		title: "Euros",
		manufacturer: "Annis",
		type: "Спорткар",
		description: "Тюннер",
		tuning: true,
	},
	{
		title: "Panthere",
		manufacturer: "Toundra",
		type: "Спорткар",
		tuning: true,
	},
	{
		title: "Kanjo SJ",
		manufacturer: "Dinka ",
		type: "Купе",
	},
];

export const CLUBHOUSE: CarProps[] = [
	{ title: "Bati 801RR", description: "Мотоцикл", manufacturer: "Pegassi" },
	{ title: "PCJ 600", description: "Мотоцикл", manufacturer: "Shitzu" },
	{ title: "Sanchez", description: "Мотоцикл", manufacturer: "Maibatsu" },
	{ title: "Vader", description: "Мотоцикл", manufacturer: "Shitzu" },
	{ title: "Bagger", description: "Мотоцикл", manufacturer: "Western" },
	{ title: "Ruffian", description: "Мотоцикл", manufacturer: "Pegassi" },
	{ title: "Daemon", description: "Мотоцикл", manufacturer: "Western" },
	{ title: "Hackuchou", description: "Мотоцикл", manufacturer: "Shitzu" },
	{
		title: "Shotaro",
		description: "Мотоцикл из трона",
		manufacturer: "Nagasaki",
	},
	{ title: "Nemesis", description: "Мотоцикл", manufacturer: "Principe" },
];

export const HANGAR: CarProps[] = [
	{ title: "Cuban 800", manufacturer: "Western" },
	{ title: "P-996 LAZER", manufacturer: "Jobuilt" },
	{ title: "Hydra", manufacturer: "Mammoth" },
	{ title: "Buzzard", manufacturer: "Nagasaki" },
];

export const FACILITY: CarProps[] = [
	{ title: "Verus", manufacturer: "Dinka", description: "Военный квадроцикл" },
	{ title: "TM-02 Khanjali", description: "Танк" },
];

export const PEGASUS: CarProps[] = [
	{ title: "Cuban 800", manufacturer: "Western" },
	{ title: "P-996 LAZER", manufacturer: "Jobuilt" },
	{ title: "Hydra", manufacturer: "Mammoth" },
	{ title: "Buzzard", manufacturer: "Nagasaki" },
	{ title: "The Liberator Monster Truck", manufacturer: "Vapid" },
	{ title: "Marshal Британия Monster Truck", manufacturer: "Cheval" },
];

export const BIG_TRANSPORT: CarProps[] = [
	{ title: "Terrorbyte", description: "Улучшения: автомастерская" },
	{ title: "Avenger" },
	{
		title: "ПКП",
		description: "Улучшения: автомастерская, оружейная мастерская",
	},
	{ title: "Яхта" },
	{ title: "Brickade 6x6" },
	{ title: "Kosatka" },
	{ title: "Opressor MK2", tuning: true },
];

export const DEL_PERRO_20 = [
	{ title: "Surfer", manufacturer: "BF", description: "С доской" },
	{ title: "Romero Hearse", description: "Катафалк", manufacturer: "Chariot" },
	{ title: "Regina", manufacturer: "Dundreary" },
	{ title: "Buffalo", manufacturer: "Bravado" },
	{ title: "Pisswasser Dominator", manufacturer: "Vapid" },
	{
		title: "Hot Rod Blazer",
		description: "Квадроцикл",
		manufacturer: "Nagasaki",
	},
	{ title: "Raptor", description: "Трицикл", manufacturer: "BF" },
	{ title: "Blazer", description: "Квадроцикл", manufacturer: "Nagasaki" },
	{ title: "BMX", description: "Зеленый велосипед", type: "Велосипед" },
];

export const DEL_PERRO_7 = [];

export const GANG_GARAGE_FIRST = [
	{ title: "Tornado", description: "Особый серый", manufacturer: "Declasse" },
	{
		title: "Tornado",
		description: "Особый фиолетовый",
		manufacturer: "Declasse",
	},
	{ title: "Buccaneer", description: "Особый зеленый", manufacturer: "Albany" },
	{ title: "Peyote", description: "Особый красный", manufacturer: "Vapid" },
	{ title: "Manana", description: "Особый фиолетовый", manufacturer: "Albany" },
	{
		title: "Tornado",
		description: "Vagos с черной крышей",
		manufacturer: "Declasse",
	},
	{ title: "Tornado", description: "Vagos", manufacturer: "Declasse" },
	{ title: "Buccaneer", description: "Vagos", manufacturer: "Albany" },
	{ title: "Peyote", description: "Vagos", manufacturer: "Vapid" },
	{ title: "Manana", description: "Vagos", manufacturer: "Albany" },
];

export const GANG_GARAGE_SECOND = [
	{
		title: "Tornado",
		description: "Ballas с черной крышей",
		manufacturer: "Declasse",
	},
	{ title: "Tornado", description: "Ballas", manufacturer: "Declasse" },
	{ title: "Buccaneer", description: "Ballas", manufacturer: "Albany" },
	{ title: "Peyote", description: "Ballas", manufacturer: "Vapid" },
	{ title: "Manana", description: "Ballas", manufacturer: "Albany" },
	{
		title: "Tornado",
		description: "The Families с серой крышей",
		manufacturer: "Declasse",
	},
	{ title: "Tornado", description: "The Families", manufacturer: "Declasse" },
	{ title: "Buccaneer", description: "The Families", manufacturer: "Albany" },
	{ title: "Peyote", description: "The Families", manufacturer: "Vapid" },
	{ title: "Manana", description: "The Families", manufacturer: "Albany" },
	{ title: "BMX", description: "Красный велосипед", type: "Велосипед" },
	{ title: "BMX", description: "Синий велосипед", type: "Велосипед" },
	{ title: "BMX", description: "Желтый велосипед", type: "Велосипед" },
];

export const AGENCY: CarProps[] = [];

export const PENTHOUSE: CarProps[] = [];
