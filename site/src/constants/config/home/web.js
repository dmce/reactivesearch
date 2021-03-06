import theme from './../../theme/web';
import baseConfig from './../base/web';

const { primary, primaryDark } = theme;

const baseConfigHeader = {
	...baseConfig.header,
	links: [
		{
			description: 'examples',
			href: '#examples',
		},
		...baseConfig.header.links,
	],
};
export default {
	...baseConfig,
	header: baseConfigHeader,
	banner1: {
		title: 'React + ElasticSearch = ❤️',
		description: 'UI components for building data-driven search experiences.',
		image: {
			src: '../../reactivesearch/images/browser.png',
			alt: 'Reactive Search Components',
		},
		button: {
			title: 'Get Started',
			href: './quickstart',
		},
		link: {
			title: 'Docs',
			href:
				'https://opensource.appbase.io/reactive-manual/getting-started/reactivesearch.html',
		},
	},
	banner2: {
		image: {
			src: '../../reactivesearch/images/components.png',
			alt: 'Components',
			mobile: {
				src: '../../reactivesearch/images/components.png',
				srcSet: '../../reactivesearch/images/components.png',
			},
		},
		title: 'Components for every occasion',
		description:
			'Build the perfect search experience using our UI components or by creating your own. 30+ pre-built components with customizable queries and configurable styles.',
		button: {
			title: 'View Components',
			href:
				'https://opensource.appbase.io/reactive-manual/getting-started/componentsindex.html',
		},
		link: {
			title: 'Creating your components',
			href: 'https://opensource.appbase.io/reactive-manual/advanced/reactivecomponent',
		},
		sketch: {
			href:
				'https://opensource.appbase.io/reactivesearch/resources/ReactiveSearch_Playground.sketch',
		},
	},
	banner3: {
		title: 'Up to 10x Time Savings',
		description: 'Focus on design and user experience as ReactiveSearch handles the details.',
		cards: [
			{
				image: {
					src: '../../reactivesearch/images/rocket.png',
					alt: 'Launch and iterate faster',
				},
				title: 'Launch and iterate faster',
				description:
					'30+ well-designed and performance optimized UI components. Ship faster and solve fewer edge cases.',
				href:
					'https://medium.com/@siddharthlatest/v2-ui-components-for-elasticsearch-23743d9a1070',
			},
			{
				image: {
					src: '../../reactivesearch/icons/1.png',
					alt: 'Works with existing UIs',
				},
				title: 'Works with existing UIs',
				description: 'Already have your own components? Bring them to ReactiveSearch.',
				href:
					'https://opensource.appbase.io/reactive-manual/advanced/reactivecomponent.html',
			},
			{
				image: {
					src: '../../reactivesearch/icons/2.png',
					alt: 'Configurable styles',
				},
				title: 'Configurable styles',
				description: 'Styled components with rich theming and CSS class-injection support.',
				href: 'https://opensource.appbase.io/reactive-manual/theming/themes.html',
			},
			{
				image: {
					src: '../../reactivesearch/icons/3.png',
					alt: 'Create cross-platform apps',
				},
				title: 'Create cross-platform apps',
				description: 'Reactivesearch components can be ported to create native mobile UIs.',
				href: 'https://github.com/appbaseio/reactivesearch/tree/dev/packages/native',
			},
			{
				image: {
					src: '../../reactivesearch/icons/4.png',
					alt: 'Elasticsearch compatible',
				},
				title: 'Elasticsearch compatible',
				description: 'Connect to an ES index hosted anywhere. Supports v2, v5 and v6.',
				href:
					'https://opensource.appbase.io/reactive-manual/getting-started/reactivebase.html',
			},
			{
				image: {
					src: '../../reactivesearch/icons/5.png',
					alt: 'Customizable queries',
				},
				title: 'Customizable queries',
				description:
					'Components come with good query defaults, that can be customized with Elasticsearch query DSL.',
				href: 'https://opensource.appbase.io/reactive-manual/advanced/customquery.html',
			},
		],
	},
	banner5: [
		{
			backgroundColor: primary,
			title: 'Build a live app in 5 easy steps',
			description:
				'Go from scratch to creating a data-driven search app with our beginner friendly quick start guide.',
			button: {
				title: 'Get Started',
				href: './quickstart',
			},
			link: {
				title: 'Docs',
				href: 'https://opensource.appbase.io/reactive-manual/',
			},
		},
		{
			backgroundColor: primaryDark,
			title: 'Get dedicated support',
			description:
				'We offer production support for ReactiveSearch. Work with us to bring your dream project to life.',
			button: {
				title: 'SUPPORT PLANS',
				href: 'https://appbase.io/pricing#support',
			},
			link: {
				title: 'Get in touch',
				href: 'https://appbase.io/contact',
			},
		},
	],
	banner6: {
		title: 'Check starter apps',
		button: {
			title: 'See more',
			href: '/reactivesearch/demo',
		},
		demos: [
			{
				src: '../../reactivesearch/images/apps/airbeds.png',
				title: 'Airbeds',
				href: 'https://opensource.appbase.io/reactivesearch/demos/airbeds/',
				description: 'An airbnb inspired app for browsing housing areas in Seattle.',
			},
			{
				src: '../../reactivesearch/images/apps/productsearch.png',
				title: 'Product Search',
				href: 'https://opensource.appbase.io/reactivesearch/demos/producthunt/',
				description: 'A Product Hunt inspired search experience.',
			},
			{
				src: '../../reactivesearch/images/apps/gitxplore.png',
				title: 'GitHub Search',
				href: 'https://opensource.appbase.io/reactivesearch/demos/gitxplore/',
				description:
					'Explore top 30K Github repositories by various filters like stars, forks, topics.',
			},
			// {
			// 	src: '../../reactivesearch/images/apps/carstore.png',
			// 	title: 'Car Store',
			// 	href: 'https://opensource.appbase.io/reactivesearch/demos/ecommerce/',
			// 	description: 'An e-commerce search experience for a car store.',
			// },
			{
				src: '../../reactivesearch/images/apps/goodbooks.png',
				title: 'Book Search',
				href: 'https://opensource.appbase.io/reactivesearch/demos/goodbooks/',
				description: 'An e-commerce search experience for a books dataset.',
			},
			// {
			// 	src: '../../reactivesearch/images/apps/technews.png',
			// 	title: 'Tech News Search',
			// 	href: 'https://opensource.appbase.io/reactivesearch/demos/technews/',
			// 	description: '',
			// },
		],
	},
};
