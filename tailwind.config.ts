import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				
				/* Solana Brand Colors */
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					light: 'hsl(var(--primary-light))',
					dark: 'hsl(var(--primary-dark))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				
				/* Soft Blue Accents */
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					dark: 'hsl(var(--secondary-dark))',
					foreground: 'hsl(var(--secondary-foreground))'
				},

				/* Ukrainian Colors */
				ukraine: {
					blue: 'hsl(var(--ukraine-blue))',
					yellow: 'hsl(var(--ukraine-yellow))'
				},

				/* Chestnut Green Colors */
				chestnut: {
					DEFAULT: 'hsl(var(--chestnut-green))',
					light: 'hsl(var(--chestnut-green-light))',
					dark: 'hsl(var(--chestnut-green-dark))'
				},

				/* Pixelated Gold Colors */
				pixel: {
					DEFAULT: 'hsl(var(--pixel-gold))',
					light: 'hsl(var(--pixel-gold-light))',
					dark: 'hsl(var(--pixel-gold-dark))'
				},

				/* Turquoise Accent */
				turquoise: {
					DEFAULT: 'hsl(var(--turquoise))',
					light: 'hsl(var(--turquoise-light))',
					dark: 'hsl(var(--turquoise-dark))'
				},

				/* Glass Morphism */
				glass: {
					DEFAULT: 'hsl(var(--glass))',
					border: 'hsl(var(--glass-border))'
				},

				/* Status Colors */
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				success: {
					DEFAULT: 'hsl(var(--success))',
					foreground: 'hsl(var(--success-foreground))'
				},
				warning: {
					DEFAULT: 'hsl(var(--warning))',
					foreground: 'hsl(var(--warning-foreground))'
				},

				/* Muted Tones */
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},

				/* Accent Colors */
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},

				/* Popovers */
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},

				/* Cards */
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				}
			},

			/* Background Images */
			backgroundImage: {
				'gradient-primary': 'var(--gradient-primary)',
				'gradient-title': 'var(--gradient-title)',
				'gradient-glass': 'var(--gradient-glass)',
				'gradient-hero': 'var(--gradient-hero)',
				'gradient-card': 'var(--gradient-card)',
				'gradient-chestnut': 'var(--gradient-chestnut)',
				'gradient-pixel': 'var(--gradient-pixel)',
				'gradient-ukraine': 'var(--gradient-ukraine)'
			},

			/* Box Shadows */
			boxShadow: {
				'glass': 'var(--shadow-glass)',
				'card': 'var(--shadow-card)',
				'hover': 'var(--shadow-hover)'
			},

			/* Transitions */
			transitionTimingFunction: {
				'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
				'bounce': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
