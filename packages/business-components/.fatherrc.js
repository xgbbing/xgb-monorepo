export default {
  umd: {
    entry: 'src/index', // 默认构建入口文件
    output: 'dist',
    externals: [
      react: 'React',
      'react-dom': 'ReactDOM',
    ]
  }
}