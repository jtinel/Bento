// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
	// ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
	// ├┴┐├─┤└─┐││  └─┐
	// └─┘┴ ┴└─┘┴└─┘└─┘

	// General
	name: 'Justin',
	imageBackground: true,
	openInNewTab: true,
	twelveHourFormat: true,

	// Greetings
	greetingMorning: 'Good morning!',
	greetingAfternoon: 'Good afternoon,',
	greetingEvening: 'Good evening,',
	greetingNight: 'Go to Sleep!',

	// Layout
	bentoLayout: 'lists', // 'bento', 'lists', 'buttons'

	// Weather
	weatherKey: 'InsertYourAPIKeyHere123456', // Write here your API Key
	weatherIcons: 'OneDark', // 'Onedark', 'Nord', 'Dark', 'White'
	weatherUnit: 'C', // 'F', 'C'
	language: 'en', // More languages in https://openweathermap.org/current#multi

	trackLocation: false, // If false or an error occurs, the app will use the lat/lon below
	defaultLatitude: '39.35859397882456',
	defaultLongitude: '-74.56670950716753',

	// Autochange
	autoChangeTheme: true,

	// Autochange by OS
	changeThemeByOS: true,

	// Autochange by hour options (24hrs format, string must be in: hh:mm)
	changeThemeByHour: false,
	hourDarkThemeActive: '18:30',
	hourDarkThemeInactive: '07:00',

	// ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
	// ├┴┐│ │ │  │ │ ││││└─┐
	// └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

	firstButtonsContainer: [
		{
			id: '1',
			name: 'ConnectWise',
			icon: 'school',
			link: 'https://na.myconnectwise.net/',
		},
		{
			id: '2',
			name: 'NinjaRMM',
			icon: 'tv-minimal',
			link: 'https://app.ninjarmm.com/',
		},
		{
			id: '3',
			name: 'BitWarden',
			icon: 'earth-lock',
			link: 'https://vault.bitwarden.com/',
		},
		{
			id: '4',
			name: 'BrightGauge',
			icon: 'circle-gauge',
			link: 'https://csenj.brightgauge.co/overview/',
		},
	],

	secondButtonsContainer: [
		{
			id: '1',
			name: 'Music',
			icon: 'headphones',
			link: 'https://open.spotify.com',
		},
		{
			id: '2',
			name: 'twitter',
			icon: 'twitter',
			link: 'https://twitter.com/',
		},
		{
			id: '3',
			name: 'bot',
			icon: 'bot',
			link: 'https://discord.com/app',
		},
		{
			id: '4',
			name: 'Amazon',
			icon: 'shopping-bag',
			link: 'https://amazon.com/',
		},
		{
			id: '5',
			name: 'Hashnode',
			icon: 'pen-tool',
			link: 'https://hashnode.com/',
		},
		{
			id: '6',
			name: 'Figma',
			icon: 'figma',
			link: 'https://figma.com/',
		},
	],

	// ┬  ┬┌─┐┌┬┐┌─┐
	// │  │└─┐ │ └─┐
	// ┴─┘┴└─┘ ┴ └─┘

	// First Links Container
	firstlistsContainer: [
		{
			icon: 'briefcase-business',
			id: '1',
			links: [
				{
					name: 'ConnectWise',
					link: 'https://na.myconnectwise.net/',
				},
				{
					name: 'NinjaOne',
					link: 'https://app.ninjarmm.com/',
				},
				{
					name: 'BitWarden',
					link: 'https://vault.bitwarden.com/',
				},
				{
					name: 'SentinelOne - Ninja',
					link: 'https://usea1-ninjaone2.sentinelone.net/',
				},
				{
					name: 'SentinelOne - Pax8',
					link: 'https://usea1-300-nfr.sentinelone.net/',
				},
				{
					name: 'Brightgauge',
					link: 'https://csenj.brightgauge.co/overview/',
				},
				{
					name: 'Brightgauge',
					link: 'https://csenj.brightgauge.co/overview/',
				},
				{
					name: 'Brightgauge',
					link: 'https://csenj.brightgauge.co/overview/',
				},
			],
		},
		{
			icon: 'database-backup',
			id: '2',
			links: [
				{
					name: 'Axcient Backup',
					link: 'https://partner.axcient.com/',
				},
				{
					name: 'Ninja SaaS Backup Partner Portal',
					link: 'https://na-saas-npp.backup.ninjarmm.com/dashboard',
				},
				{
					name: 'Datto Backup',
					link: 'https://portal.dattobackup.com/device/status/combined',
				},
				{
					name: 'Arcserve Management Portal',
					link: 'https://partners.storagecraft.com/partners/',
				},
				{
					name: 'Pax8',
					link: 'https://app.pax8.com/',
				},
				{
					name: 'Barracuda MSP App',
					link: 'https://manage.msp.barracudanetworks.com/',
				},
				{
					name: 'Cloudflare',
					link: 'https://dash.cloudflare.com/',
				},
				{
					name: 'Brightgauge',
					link: 'https://csenj.brightgauge.co/overview/',
				},
			],
		},
	],

	// Second Links Container
	secondListsContainer: [
		{
			icon: 'binary',
			id: '1',
			links: [
				{
					name: 'Spotify',
					link: 'https://www.spotify.com',
				},
				{
					name: 'Reddit',
					link: 'https://www.reddit.com',
				},
				{
					name: 'Hashnode',
					link: 'https://www.hashnode.com',
				},
				{
					name: 'Pocket',
					link: 'https://www.pocket.com',
				},
			],
		},
		{
			icon: 'github',
			id: '2',
			links: [
				{
					name: 'Front',
					link: 'https://www.reddit.com/r/Frontend/',
				},
				{
					name: 'Rust',
					link: 'https://www.reddit.com/r/rust/',
				},
				{
					name: 'Go',
					link: 'https://www.reddit.com/r/golang/',
				},
				{
					name: 'Repos',
					link: 'https://github.com/migueravila',
				},
			],
		},
	],
};
