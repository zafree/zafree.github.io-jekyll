/*!
 * Zafree's Gruntfile
 * http://zafree.github.io/bootaide
 * Copyright 2014-2015 Zafree
 * Licensed under MIT (https://github.com/zafree/bootaide/blob/master/LICENSE)
 */

module.exports = function(grunt) {
  'use strict';

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
	  banner: '/*!\n' +
            ' * Zafree v<%= pkg.version %> (<%= pkg.homepage %>)\n' +
            ' * Copyright 2014-<%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
            ' */\n',

    less: {
      development: {
        options: {
          banner: '<%= banner %>\n',
          compress: false,
          yuicompress: true,
          optimization: 2,
        },
        files: {
          "dist/css/<%= pkg.name %>.css": "_less/bootaide.less"
        },
        build: {
          src: ['less/bootaide.less'],
          dest: 'dist/css/<%= pkg.name %>.css'
        }
      }
    },

    cssmin: {
    	options: {
        banner: '<%= banner %>\n',
	    },
    	dist: {
        src: ['dist/css/<%= pkg.name %>.css'],
        dest: 'dist/css/<%= pkg.name %>.min.css'
	    }
    },

    concat: {
    	options: {
	      banner: '<%= banner %>\n',
	      separator: ';',
	    },
	    dist: {
	      src: ['_js/**.js'],
	      dest: 'dist/js/<%= pkg.name %>.js'
	    },
  	},

    uglify: {
		  options: {
	      banner: '<%= banner %>',
	    },
	    dist: {
	      src: ['dist/js/<%= pkg.name %>.js'],
	      dest: 'dist/js/<%= pkg.name %>.min.js'
	    }
    },

    jekyll: {
      options: {
        src: '.'
      },
      dist: {
        options: {
          dest: './_site',
          config: '_config.yml'
        }
      }
    },

  	watch: {
      less: {
  			files: '_less/**/*.less',
  			tasks: ['less'],
        options: {
          livereload: true
        }
  		},
  		cssmin: {
  			files: '_less/**/*.less',
  			tasks: ['cssmin'],
        options: {
          livereload: true
        }
  		},
  		concat: {
  			files: '_js/*.js',
  			tasks: ['concat'],
        options: {
          livereload: true
        }
  		},
  		uglify: {
  			files: '_js/*.js',
  			tasks: ['uglify'],
        options: {
          livereload: true
        }
  		},
      html: {
        files: ['*.html', '_includes/*.html', '_layouts/*.html', 'journals/_posts/*', 'jobs/_posts/*', 'shots/_posts/*', 'work/_posts/*', '_less/**/*.less', '_js/*.js'],
        tasks: ['jekyll'],
        options: {
          spawn: false,
          livereload: true
        }
      }
  	},

    connect: {
      server: {
        options: {
          port: 8000,
          base: './_site',
          open: true,
          livereload: true
        }
      }
    }
  });

  // Load the plugin that provides the task.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-jekyll');

  // Default task(s).
  grunt.registerTask('css', ['less', 'cssmin']);
  grunt.registerTask('js', ['concat','uglify']);
  grunt.registerTask('build', ['less', 'cssmin', 'concat','uglify', 'jekyll']);

  // Creates the `server` task
  grunt.registerTask('serve', ['connect', 'watch']);

};
