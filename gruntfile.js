module.exports = function(grunt){

  grunt.initConfig({
    jasmine_node: {
      options: {
        match: ".",
        matchall: false,
        extensions: "js",
        specNameMatcher: "Specs",
        jUnit: {
          report: true,
          savePath : "./build/reports/jasmine/",
          useDotNotation: true,
          consolidate: true
        }
      },
      build: ["tests/**/*.js"]
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
      build: ["speccy/**/*.js"],
      tests: ["tests/**/*.js"]
    }
  });

  grunt.loadNpmTasks("grunt-jasmine-node");
  grunt.loadNpmTasks("grunt-contrib-jshint");

  grunt.registerTask("default", ["jshint", "jasmine_node"]);
};
