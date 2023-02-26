// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');

const isProduction = process.env.NODE_ENV == 'production';


const stylesHandler = 'style-loader';


const config = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        open: true,
        host: 'localhost',
    },
    plugins: [
        // Add your plugins here
        // Learn more about plugins from https://webpack.js.org/configuration/plugins/
    ],
    // node: {
    //     child_process: "empty"
    // },

    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [stylesHandler, 'css-loader'],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [stylesHandler, 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: 'asset',
            },

            // Add your rules for custom modules here
            // Learn more about loaders from https://webpack.js.org/loaders/
        ],
    },
};

module.exports = () => {
    if (isProduction) {
        config.mode = 'production';


        // config.plugins.push(new WorkboxWebpackPlugin.GenerateSW());

    } else {
        config.mode = 'development';
    }
    config.resolve.fallback = {
        url: require.resolve("url"),
        fs: require.resolve("graceful-fs"),
        buffer: require.resolve("buffer"),
        stream: require.resolve("stream-browserify"),
    };
    config.plugins.push(
        new webpack.ProvidePlugin({
            process: "process/browser",
            Buffer: ["buffer", "Buffer"],
        }),
        new webpack.NormalModuleReplacementPlugin(/node:/, (resource) => {
            const mod = resource.request.replace(/^node:/, "");
            switch (mod) {
                case "buffer":
                    resource.request = "buffer";
                    break;
                case "stream":
                    resource.request = "readable-stream";
                    break;
                default:
                    throw new Error(`Not found ${mod}`);
            }
        }),
    );
    config.ignoreWarnings = [/Failed to parse source map/];

    return config;
};
