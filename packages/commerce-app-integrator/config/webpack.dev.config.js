const path = require('path');
// in case you run into any typescript error when configuring `devServer`
// import 'webpack-dev-server';
const config = {
  mode: 'development',
  entry: {
    index: './client/client.ts',
  },
  output: {
    path: path.resolve(__dirname, '..', 'dist', 'client'),
    filename: 'trade-integrator.bundle.js',
  },
  module: {
    rules: [  // 添加解析规则
        {
            test: /\.tsx?$/,
            loader: 'ts-loader',
            exclude: '/node_modules/',
        },
    ]
  },
  resolve: {   // 需要打包的文件后缀
    extensions: [".tsx", ".ts", ".js"]
  },
  devServer: {
    contentBase:path.join(__dirname,'.'),
    open:true,
    port: 9000
  },
  watch: true
};

module.exports = config;