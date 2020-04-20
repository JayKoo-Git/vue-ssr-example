const path = require('path')

const isProd = process.env.NODE_ENV === 'production'

const webpackBaseConfig = {
    mode: 'production',
    context: path.resolve(__dirname, '../'),
    entry: {},
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].[chunkhash].js'
    },
    module: {
        rules: [
            { test: /\.vue$/, use: 'vue-loader' },
            { test: /\.js$/, use: 'babel-loader' }
        ]
    },
    /**
     *  development: 
     *      NamedChunksPlugin,
     *      NamedModulesPlugin。
        production:
            FlagDependencyUsagePlugin, 
            FlagIncludedChunksPlugin, 
            ModuleConcatenationPlugin, 
            NoEmitOnErrorsPlugin, 
            OccurrenceOrderPlugin, 
            SideEffectsFlagPlugin,
            UglifyJsPlugin.
     */
    plugins: []
}

module.exports = webpackBaseConfig