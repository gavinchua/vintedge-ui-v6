module.exports = {
	sass: {
		options: {
			// loadPath: require('node-bourbon').with('other/path', 'another/path') 
			// - or - 
			loadPath: require('node-bourbon').includePaths,
			sourcemap: 'none',
			style: 'expanded'
		},
		files: [{
			expand: true,
			cwd: 'src/css/structure',
			src: '**/*.sass',
			dest: 'src/css/built',
			ext: '.css'
		}]
	}
}