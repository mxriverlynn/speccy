module.exports = function(grunt){

  grunt.initConfig({
    jasmine_node: {
      options: {
        extensions: 'js',
        specNameMatcher: 'Spec',
        jUnit: {
          report: true,
          savePath : "./build/reports/jasmine/",
          useDotNotation: true,
          consolidate: true
        }
      },
      all: ['tests/']
    },

    connect: {
      server: {
        options: {
          port: 8888
        }
      }
    },

    jshint: {
      options: {
        jshintrc: ".jshintrc"
      },
      build: ["speccy/**/*.js"]
    }
  });

  grunt.loadNpmTasks("grunt-jasmine-node");
  grunt.loadNpmTasks("grunt-contrib-jshint");

  grunt.registerTask("default", ["jshint", "jasmine_node"]);
};
