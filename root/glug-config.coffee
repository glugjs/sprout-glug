module.exports =

  layout_extension: 'slm'

  transformers:

<%- transformers %>

  pipelines:
    HTML:
      # define your pipelines here:
      # example:
      #
      # syntax:
      #   '**/*.jade': 'jade'

    CSS:
      # example:
      #
      # syntax:
      #   '**/*.styl': 'stylus'

    JS:
      # example:
      #
      # syntax:
      #   '**/*.coffee': 'coffee'
      # bundle:
      #   'index.coffee': [
      #     'browserify'
      #     'uglify-js'
      #   ]

  server:
    port: 1234
    templates:
      notFound: '404.html'
