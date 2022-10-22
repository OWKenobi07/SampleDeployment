
const path = require('path')
const tailwindcss = require('tailwindcss');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {

    entry: path.resolve(__dirname, './src/index.js'),

    output:{
      filename: 'bundle.js',
      path:'/RjsProject/sampledeployment/dist'
    },
  
    devServer:{
        port: 3000,
        hot: true,
        open: true,
        historyApiFallback: true     
    },

    plugins: [
        new HtmlWebpackPlugin({
            base: '/',
            template: './src/index.html',
          }),
         

    ],

    module :{
            rules: [
                {
                  test: /\.(j|t)sx?$/,
                  resolve: {
                    extensions: ['.js', '.jsx', '.ts', '.tsx'],
                  },
                    use: {
                        loader: 'babel-loader'
                    },
                    exclude: [/node_modules/],
                },

                {
                    test:/\.scss$/,
                    use:['style-loader', 
                         'css-loader', 
                         'sass-loader']
                },
                {
                    test: /\.(c|sc|sa)ss$/,
                    use: [
                      'style-loader',
                      'css-loader',
                      {
                        loader: 'postcss-loader',
                        options: {
                          postcssOptions: {
                            plugins: [tailwindcss],
                          },
                        },
                      },
                      'sass-loader',
                    ],
                  },
                ]
    }

}