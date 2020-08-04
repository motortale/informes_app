var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                query: {compact: false}
            },
            {   
                test: /\.css$/, 
                loader: "style-loader!css-loader" ,
                query: {compact: false}
            },
            {
                test: /\.(jpg|png|svg)$/,
                use: {
                  loader: 'url-loader',
                  query: {compact: false}
                }
              },

        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: './src/index.html'
    })],
    devServer: {
        historyApiFallback: true
    },
    externals: {
        // global app config object
        config: JSON.stringify({
            apiUrl: 'http://api.motortale.com/api'//'https://localhost:44315/api' //
        })
    }
}