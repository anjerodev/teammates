import type { Config } from 'tailwindcss'
import { fontFamily } from 'tailwindcss/defaultTheme'

const config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        primary: 'hsl(var(--primary))',
        onPrimary: 'hsl(var(--onPrimary))',
        primaryContainer: 'hsl(var(--primaryContainer))',
        onPrimaryContainer: 'hsl(var(--onPrimaryContainer))',
        secondary: 'hsl(var(--secondary))',
        onSecondary: 'hsl(var(--onSecondary))',
        secondaryContainer: 'hsl(var(--secondaryContainer))',
        onSecondaryContainer: 'hsl(var(--onSecondaryContainer))',
        tertiary: 'hsl(var(--tertiary))',
        onTertiary: 'hsl(var(--onTertiary))',
        tertiaryContainer: 'hsl(var(--tertiaryContainer))',
        onTertiaryContainer: 'hsl(var(--onTertiaryContainer))',
        error: 'hsl(var(--error))',
        onError: 'hsl(var(--onError))',
        errorContainer: 'hsl(var(--errorContainer))',
        onErrorContainer: 'hsl(var(--onErrorContainer))',
        success: 'hsl(var(--success))',
        onSuccess: 'hsl(var(--onSuccess))',
        successContainer: 'hsl(var(--successContainer))',
        onSuccessContainer: 'hsl(var(--onSuccessContainer))',
        info: 'hsl(var(--info))',
        onInfo: 'hsl(var(--onInfo))',
        infoContainer: 'hsl(var(--infoContainer))',
        onInfoContainer: 'hsl(var(--onInfoContainer))',
        warning: 'hsl(var(--warning))',
        onWarning: 'hsl(var(--onWarning))',
        warningContainer: 'hsl(var(--warningContainer))',
        onWarningContainer: 'hsl(var(--onWarningContainer))',
        background: 'hsl(var(--background))',
        onBackground: 'hsl(var(--onBackground))',
        surface: 'hsl(var(--surface))',
        onSurface: 'hsl(var(--onSurface))',
        surfaceVariant: 'hsl(var(--surfaceVariant))',
        onSurfaceVariant: 'hsl(var(--onSurfaceVariant))',
        outline: 'hsl(var(--outline))',
        outlineVariant: 'hsl(var(--outlineVariant))',
        shadow: 'hsl(var(--shadow))',
        scrim: 'hsl(var(--scrim))',
        inverseSurface: 'hsl(var(--inverseSurface))',
        inverseOnSurface: 'hsl(var(--inverseOnSurface))',
        inversePrimary: 'hsl(var(--inversePrimary))',
        primaryFixed: 'hsl(var(--primaryFixed))',
        primaryFixedDim: 'hsl(var(--primaryFixedDim))',
        onPrimaryFixed: 'hsl(var(--onPrimaryFixed))',
        secondaryFixed: 'hsl(var(--secondaryFixed))',
        secondaryFixedDim: 'hsl(var(--secondaryFixedDim))',
        onSecondaryFixed: 'hsl(var(--onSecondaryFixed))',
        tertiaryFixed: 'hsl(var(--tertiaryFixed))',
        tertiaryFixedDim: 'hsl(var(--tertiaryFixedDim))',
        onTertiaryFixed: 'hsl(var(--onTertiaryFixed))',
        surfaceDim: 'hsl(var(--surfaceDim))',
        surfaceBright: 'hsl(var(--surfaceBright))',
        surfaceContainerLowest: 'hsl(var(--surfaceContainerLowest))',
        surfaceContainerLow: 'hsl(var(--surfaceContainerLow))',
        surfaceContainer: 'hsl(var(--surfaceContainer))',
        surfaceContainerHigh: 'hsl(var(--surfaceContainerHigh))',
        surfaceContainerHighest: 'hsl(var(--surfaceContainerHighest))',
      },
      opacity: {
        '4': '0.04',
        '8': '0.08',
        '12': '0.12',
        '16': '0.16',
        '38': '0.38',
      },
      borderRadius: {
        '4xl': 'calc(var(--radius) * 2.5)',
        '3xl': 'calc(var(--radius) * 1.5)',
        '2xl': 'calc(var(--radius) + 8px)',
        xl: 'calc(var(--radius) + 4px)',
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 4px)',
        sm: 'calc(var(--radius) - 6px)',
        xs: 'calc(var(--radius) - 8px)',
      },
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans],
        emoji: ['var(--emoji)'],
      },
      fontSize: {
        'display-lg': ['3.56rem', { lineHeight: '4rem' }],
        'display-md': ['2.81rem', { lineHeight: '3.25rem' }],
        'display-sm': ['2.25rem', { lineHeight: '2.75rem' }],
        'headline-lg': ['2rem', { lineHeight: '2.5rem' }],
        'headline-md': ['1.75rem', { lineHeight: '2.25rem' }],
        'headline-sm': ['1.5rem', { lineHeight: '2rem' }],
        'title-lg': ['1.375rem', { lineHeight: '1.75rem' }],
        'title-md': ['1rem', { lineHeight: '1.5rem', fontWeight: 500 }],
        'title-sm': ['0.875rem', { lineHeight: '1.25rem', fontWeight: 500 }],
        'label-lg': ['0.875rem', { lineHeight: '1.25rem', fontWeight: 500 }],
        'label-md': ['0.75rem', { lineHeight: '1rem', fontWeight: 500 }],
        'label-sm': ['0.687rem', { lineHeight: '1rem', fontWeight: 500 }],
        'body-lg': ['1.125rem', { lineHeight: '1.5rem' }],
        'body-md': ['1rem', { lineHeight: '1.5rem' }],
        'body-sm': ['0.875rem', { lineHeight: '1.25rem' }],
      },
      boxShadow: {
        sm: '0px 1px 4px 1px hsl(var(--shadow) / 0.1), 0px 1px 3px 0px hsl(var(--shadow) / 0.15)',
        md: '0px 2px 6px 2px hsl(var(--shadow) / 0.1), 0px 1px 3px 0px hsl(var(--shadow) / 0.2)',
        lg: '0px 4px 8px 3px hsl(var(--shadow) / 0.15), 0px 1px 3px 0px hsl(var(--shadow) / 0.3)',
        xl: '0px 6px 10px 4px hsl(var(--shadow) / 0.15), 0px 2px 3px 0px hsl(var(--shadow) / 0.3)',
        '2xl':
          '0px 8px 12px 6px hsl(var(--shadow) / 0.15), 0px 4px 4px 0px hsl(var(--shadow) / 0.3)',
      },
      transitionProperty: {
        fadeAndMove: 'transform, opacity',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'collapsible-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-collapsible-content-height)' },
        },
        'collapsible-up': {
          from: { height: 'var(--radix-collapsible-content-height)' },
          to: { height: '0' },
        },
        'grown-up': {
          '0%': { opacity: '0', transform: 'scaleY(0%)' },
          '60%': { opacity: '1', transform: 'scaleY(130%)' },
          '100%': { opacity: '1', transform: 'scaleY(100%)' },
        },
        'linear-progress': {
          '0%': { transform: 'translateX(-100%)' },
          '50%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'circular-progress': {
          '0%': {
            'stroke-dasharray': '1px, 200px',
            'stroke-dashoffset': '0px',
          },
          '50%': {
            'stroke-dasharray': '100px, 200px',
            'stroke-dashoffset': '-15px',
          },
          '100%': {
            'stroke-dasharray': '100px, 200px',
            'stroke-dashoffset': '-86px',
          },
        },
        'progress-spin': {
          '0%': {
            transform: 'rotate(0deg)',
          },
          '100%': {
            transform: 'rotate(360deg)',
          },
        },
        'zoom-in-x': {
          '0%': { opacity: '0', transform: 'scaleX(32%)' },
          '100%': { opacity: '1', transform: 'scaleX(100%)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'collapsible-up': 'collapsible-up 0.2s ease-out',
        'collapsible-down': 'collapsible-down 0.2s ease-out',
        'grown-up': 'grown-up 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        'zoom-in-x': 'zoom-in-x 0.2s cubic-bezier(.2,0,0,1)',
        'linear-progress':
          'linear-progress 2s infinite cubic-bezier(0.22, 0.61, 0.36, 1)',
        'circular-progress': 'circular-progress 1.4s infinite ease-in-out',
        'progress-spin': 'progress-spin 2s infinite linear',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config

export default config
