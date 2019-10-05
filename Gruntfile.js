module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
	  postcss: {
	    options: {
	      map: {
	          inline: false,
	      },
	      processors: [
					require('@csstools/postcss-sass')({}),
	        require('autoprefixer')({overrideBrowserslist: ['last 2 versions']})
	      ]
	    },
	    dist: {
	      files: {
					'style.css': 'scss/style.scss'
				}
	    }
	  },
		watch: {
			css: {
				files: 'scss/*.scss',
				tasks: ['postcss'],
				options: {
					livereload: true
				}
			}
		}
	});
	grunt.registerTask('default', ['watch']);
	grunt.loadNpmTasks('grunt-postcss');
	grunt.loadNpmTasks('grunt-contrib-watch');
}
