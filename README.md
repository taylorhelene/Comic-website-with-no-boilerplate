# This is a comic website project without any boilerplate

The first error I encountered was Loader error in webpack. I added css module and bootstrap dependancy and the error popped up.

the way I countered the error was by adding the following object to the rules and start server again.

    {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
          { loader: 'sass-loader' },
        ],
    },

https://webpack.js.org/concepts/loaders/

Bootstrap was not working . I has to create a _custom.scss module


@import "~bootstrap/scss/bootstrap";


and added the following object to  webpack

    {
        test: /\.(scss)$/,
        use: [{
          // inject CSS to page
          loader: 'style-loader'
        }, {
          // translates CSS into CommonJS modules
          loader: 'css-loader'
        }, {
          // Run postcss actions
          loader: 'postcss-loader',
          options: {
            // `postcssOptions` is needed for postcss 8.x;
            // if you use postcss 7.x skip the key
            postcssOptions: {
              // postcss plugins, can be exported to postcss.config.js
              plugins: function () {
                return [
                  require('autoprefixer')
                ];
              }
            }
          }
        }, {
          // compiles Sass to CSS
          loader: 'sass-loader'
        }]
      },

# changed to production mode

 performance: {
    hints: false
  },