module.exports = {
	theme: {
		screens: {
			sm: "576px",
			md: "768px",
			lg: "992px",
			xl: "1200px"
		},
		fontFamily: {
			body: ["Gilroy", "sans-serif"]
		},
		fontSize: {
			"base": "16px",
			"sm": "14px",
			"md": "18px",
			"lg": "24px",
			"xl": "30px"
		},
		fontWeight: {
			"light": 300,
			"extrabold": 800
		},
		lineHeight: {
			none: 1,
			normal: 1.2,
			content: 1.5
		},
		spacing: {
			"0": "0",
			"05": "5px",
			"1": "10px",
			"15": "15px",
			"2": "20px",
			"25": "25px",
			"3": "30px",
			"35": "35px",
			"4": "40px",
			"45": "45px",
			"5": "50px",
			"55": "55px",
			"6": "60px",
			"65": "65px",
			"7": "70px",
			"75": "75px"
		},
		colors: {
			transparent: "transparent",
			black: {
				default: "#000000"
			},
			gray: {
				default: "#F4F4F4",
				dark: "#ECECEC"
			},
			white: {
				default: "#fff"
			},
			red: {
				default: "#FF1744",
				light: "#FFA7B8",
				dark: "#E3002C"
			}
		},
		borderRadius: {
			"none": "0",
			default: "5px"
		},
		boxShadow: {
			default: "0 1px 10px 0 rgba(255, 23, 68, .25)",
			"none": "none"
		},
		extend: {
			width: {
				"1_12": "8.333333%",
				"2_12": "16.666667%",
				"3_12": "25%",
				"4_12": "33.333333%",
				"5_12": "41.666667%",
				"6_12": "50%",
				"7_12": "58.333333%",
				"8_12": "66.666667%",
				"9_12": "75%",
				"10_12": "83.333333%",
				"11_12": "91.666667%"
			}
		}
	},
	variants: {},
	plugins: [
		function({ addComponents }) {
			addComponents({
				".container": {
					maxWidth: "100%",
					"@screen sm": {
						maxWidth: "540px"
					},
					"@screen md": {
						maxWidth: "720px"
					},
					"@screen lg": {
						maxWidth: "960px"
					},
					"@screen xl": {
						maxWidth: "1140px"
					}
				}
			});
		}
	],
	separator: "_"
};
