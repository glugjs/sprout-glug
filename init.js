var jstransformers = require('outputformat-to-jstransformer').dictionary

options = [
  {
    name: 'name',
    message: 'What is the name of your project?'
  }, {
    name: 'description',
    message: 'Describe your project'
  }, {
    name: 'github_username',
    message: 'What is your github username?'
  }
]

var formats = ['html', 'css', 'js']
formats.forEach(function (outputFormat) {
  var transformers = jstransformers[outputFormat]
  transformerOptions = {
    name: outputFormat + 'Transformers',
    type: 'checkbox',
    message: `Which transformers would you like for ${outputFormat}?`,
    choices: transformers
  }
  options.push(transformerOptions)
})

exports.configure = options

exports.before = function (utils) {
  // before hook
}

// <%%  %%>  <%=  <%-  <%_  <%#  <%  %>  -%>  _%>


exports.beforeRender = function (utils, config) {
  // beforeRender hook
  var packages = ''
  var transformers = ''
  var pipelines = ''
  formats.forEach(function (outputFormat) {
    ref = config[outputFormat + 'Transformers']
    packages += ref.map(function (text) {
      return `    "${text}": "*",\n`
    }).join('')
    transformers += ref.map(function (text) {
      text = text.replace('jstransformer-', '')
      return `    "${text}": true\n`
    }).join('')
  })
  config.transformers = transformers
  config.packages = packages
  config.pipelines = pipelines
}

exports.after = function (utils, config) {
  // after hook
}
