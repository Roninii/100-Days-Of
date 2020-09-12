const plugin = require('tailwindcss/plugin');

module.exports = {
    theme: {
        extend: {
            zIndex: {
                '-1': '-1',
            },
            inset: {
                '-1': '-0.25rem',
                '-2': '-0.5rem',
                '-3': '-0.75rem',
                '-4': '-1rem',
                '-5': '-1.25rem',
                '-6': '-1.5rem',
                '-8': '-2rem',
                '-10': '-2.5rem',
                '-12': '-3rem',
                '-16': '-4rem',
                '-20': '-5rem',
                '-24': '-6rem',
                '-32': '-8rem',
                '-40': '-10rem',
                '-48': '-12rem',
                '-56': '-14rem',
                '-64': '-16rem',
            },
            opacity: {
                '10': '0.1',
                '20': '0.2',
                '90': '0.90',
                '95': '0.95',
            },
        },
        variants: {},
        plugins: [
            plugin(({ addUtilities }) => {
                const newUtilities = {
                    '.place-center': {
                        'place-items': 'center',
                    },
                };

                addUtilities(newUtilities, ['responsive', 'hover']);
            }),
        ],
        purge: {
            // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
            enabled: process.env.NODE_ENV === 'production',
            content: [
                'components/**/*.vue',
                'layouts/**/*.vue',
                'pages/**/*.vue',
                'plugins/**/*.js',
                'nuxt.config.js',
            ],
        },
    },
};
