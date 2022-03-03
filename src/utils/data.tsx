/** @format */
import { BsTwitter } from "react-icons/bs"
import { AiFillFacebook, AiFillGithub, AiFillInstagram } from "react-icons/ai"
import { FiTwitch } from "react-icons/fi"

interface social {
	Icon: any
	href: string
}
const socials: Array<social> = [
	{
		Icon: BsTwitter,
		href: "https://twitter.com/thepracticaldev",
	},
	{
		Icon: AiFillFacebook,
		href: "https://facebook.com/thepracticaldev",
	},
	{
		Icon: AiFillGithub,
		href: "https://github.com/thepracticaldev",
	},
	{
		Icon: AiFillInstagram,
		href: "https://instagram.com/thepracticaldev",
	},
	{
		Icon: FiTwitch,
		href: "https://twitch.com/thepracticaldev",
	},
]

interface leftLink {
	name: string
	href: string
}
const leftNavigation: Array<leftLink> = [
	{
		name: "Home",
		href: "https://dev.to/",
	},
	{
		name: "Listings",
		href: "https://dev.to/listings",
	},
	{
		name: "Podcasts",
		href: "https://dev.to/pod",
	},
	{
		name: "Videos",
		href: "https://dev.to/videos",
	},
	{
		name: "Tags",
		href: "https://dev.to/tags",
	},
	{
		name: "FAQ",
		href: "https://dev.to/faq",
	},
	{
		name: "DEV Shop",
		href: "https://shop.dev.to/",
	},
	{
		name: "Sponsors",
		href: "https://dev.to/sponsorships",
	},
	{
		name: "About",
		href: "https://dev.to/about",
	},
	{
		name: "Contact",
		href: "https://dev.to/contact",
	},
]

const leftNavigationOthers: Array<leftLink> = [
	{
		name: "Code of Conduct",
		href: "https://dev.to/code-of-conduct",
	},
	{
		name: "Privacy Policy",
		href: "https://dev.to/privacy",
	},
	{
		name: "Terms of use",
		href: "https://dev.to/terms",
	},
]

const tags: Array<leftLink> = [
	{
		name: "javascript",
		href: "https://dev.to/t/javascript",
	},
	{
		name: "webdev",
		href: "https://dev.to/t/webdev",
	},
	{
		name: "beginners",
		href: "https://dev.to/t/biginners",
	},
	{
		name: "programming",
		href: "https://dev.to/t/programming",
	},
	{
		name: "tutorial",
		href: "https://dev.to/t/tutorial",
	},
	{
		name: "react",
		href: "https://dev.to/t/react",
	},
	{
		name: "python",
		href: "https://dev.to/t/python",
	},
	{
		name: "productivity",
		href: "https://dev.to/t/productivity",
	},
	{
		name: "devops",
		href: "https://dev.to/t/devops",
	},
	{
		name: "discuss",
		href: "https://dev.to/t/discuss",
	},
	{
		name: "career",
		href: "https://dev.to/t/career",
	},
	{
		name: "css",
		href: "https://dev.to/t/css",
	},
	{
		name: "opensource",
		href: "https://dev.to/t/opensource",
	},
	{
		name: "html",
		href: "https://dev.to/t/html",
	},
	{
		name: "node",
		href: "https://dev.to/t/node",
	},
	{
		name: "aws",
		href: "https://dev.to/t/aws",
	},
	{
		name: "codenwebie",
		href: "https://dev.to/t/codenewbie",
	},
	{
		name: "typescript",
		href: "https://dev.to/t/typescript",
	},
	{
		name: "android",
		href: "https://dev.to/t/android",
	},
	{
		name: "java",
		href: "https://dev.to/t/java",
	},
]

const listings: Array<number> = [0, 1, 2, 3, 4]

const rightCardLists: Array<{
	list: Array<number>
	header: string
	href: string
	text: string
}> = [
	{
		list: listings,
		header: "#help",
		href: "https://dev.to/noriller/programming-isnt-about-being-right-but-fixing-what-is-wrong-27cp",
		text: "[Solved] GitLab SSH Runners - Error: open /root/.ssh/known_hosts: no such file or directory",
	},
	{
		list: listings,
		header: "#discuss",
		href: "https://dev.to/noriller/programming-isnt-about-being-right-but-fixing-what-is-wrong-27cp",
		text: "Hot 🔥🔥: What is Web 3.0 | How to Become Web 3.0 Developer",
	},
	{
		list: listings.slice(2, 3),
		header: "#explainlikeimfive",
		href: "https://dev.to/noriller/programming-isnt-about-being-right-but-fixing-what-is-wrong-27cp",
		text: "Please Explain Why i need Software Architecture",
	},
	{
		list: listings,
		header: "#challange",
		href: "https://dev.to/noriller/programming-isnt-about-being-right-but-fixing-what-is-wrong-27cp",
		text: "Hot 🔥🔥: What is Web 3.0 | How to Become Web 3.0 Developer",
	},
	{
		list: listings,
		header: "#meta",
		href: "https://dev.to/noriller/programming-isnt-about-being-right-but-fixing-what-is-wrong-27cp",
		text: "Why I'm Not Writing about Myself for SheCodedNew",
	},
	{
		list: listings.slice(2, 4),
		header: "#watercooler",
		href: "https://dev.to/noriller/programming-isnt-about-being-right-but-fixing-what-is-wrong-27cp",
		text: "Programming isn’t about being right but fixing what is wrong",
	},
]

const trendingGuides: Array<string> = [
	"The Complete Guide to Full Stack Web3 Development",
	"10 Must-Know Patterns for Writing Clean Code with React and TypeScript✨🛀",
	"Concurrency in modern programming languages: Rust vs Go vs Java vs Node.js vs Deno vs .NET 6",
	"Top React JS Frameworks Every Developer Should Know",
	"Don't try this at home: CSS _as_ the backend - introducing Cascading Server Sheets!",
	"Visual Studio Code - Tips & Tricks - Command Palette and its friends",
	"Top 5 state management libraries for React",
	"7 Killer One-Liners in JavaScript",
	"50 Cool Web And Mobile Project Ideas for 2022",
	"Moving from JavaScript to TypeScript",
	"Make Your Github Profile Stand Out",
	"C# 11 is Coming! 5 Features that will Blow your Mind 🤯",
	"Convert nested JSON to simple JSON in Javascript",
	"Personal Blog Website using HTML CSS JS",
	"What's Wrong With Measuring Developer Performance (+ 10 Best Metrics)",
	"Full Stack Developer Skills List👨‍💻",
	"10 HTML and CSS Good Practices 🐅🐅",
	"10 ReactJS Coding Challenge (💥Coding Interview Prep💥)",
	"Create a whitelist for your NFT project",
	"ReactJS Tic-Tac-Toe (💥Passed Job Interview💥)",
]

const recentlyQueried: Array<string> = [
	"gRPC vs REST",
	"Spotify Shuffle Sucks",
	"Pseudo Code",
	"Landing Page Template",
	"How to Click Faster",
	"React PDF",
	"Web Application Development",
	"Install Gdb Mac",
	"Python Package Structure",
	"What Is an Interpreted Language",
	"Production Environment",
	"Discord Embed",
	"Laravel React",
	"Windows Terminal Customization",
	"Ngrok Alternative",
	"Pascal Case",
	"Learn Linux",
	"Terminal for Windows",
	"Windows Keyboard on Mac",
	"Angular State Management",
]
export {
	leftNavigation,
	leftNavigationOthers,
	tags,
	socials,
	listings,
	rightCardLists,
	trendingGuides,
	recentlyQueried,
}
