const path = require('path');
const prod = process.env.NODE_ENV === 'production';

module.exports = {
    wpyExt: '.wpy',
    eslint: true,
    cliLogs: !prod,
    build: {
        web: {
            htmlTemplate: path.join('src', 'index.template.html'),
            htmlOutput: path.join('web', 'index.html'),
            jsOutput: path.join('web', 'index.js')
        }
    },
    resolve: {
        alias: {
            counter: path.join(__dirname, 'src/components/counter'),
            '@': path.join(__dirname, 'src')
        },
        aliasFields: ['wepy'],
        modules: ['node_modules']
    },
    compilers: {
        less: {
            compress: prod
        },
        babel: {
            sourceMap: true,
            presets: ['env'],
            plugins: [
                'transform-class-properties',
                'transform-decorators-legacy',
                'transform-object-rest-spread',
                'transform-export-extensions',
                'syntax-export-extensions'
            ]
        }
    },
    plugins: {
        replace: {
            filter: /\.js$/,
            config: {
                find: /\bprocess\.env\.NODE_ENV\b/g,
                replace: prod ? "'production'" : "'development'"
            }
        }
    },
    appConfig: {
        noPromiseAPI: ['createSelectorQuery']
    }
};

if (prod) {
    // 压缩sass
    module.exports.compilers['sass'] = { outputStyle: 'compressed' };

    // 压缩js
    module.exports.plugins = {
        replace: {
            filter: /\.js$/,
            config: {
                find: /\bprocess\.env\.NODE_ENV\b/g,
                replace: prod ? "'production'" : "'development'"
            }
        },
        uglifyjs: {
            filter: /\.js$/,
            config: {}
        },
        imagemin: {
            filter: /\.(jpg|png|jpeg)$/,
            config: {
                jpg: {
                    quality: 80
                },
                png: {
                    quality: 80
                }
            }
        }
    };
}
