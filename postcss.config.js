module.exports = {
    syntax: 'postcss-scss',
    map: { inline: true },
    plugins: [
        require('postcss-import'),
        require('postcss-nested'),
        require('postcss-mixins'),
        require('postcss-variables'),
        require('autoprefixer'),
        require('cssnano'),
    ],
}