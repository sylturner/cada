###
# Compass
###

# Change Compass configuration
# compass_config do |config|
#   config.output_style = :compact
# end

###
# Page options, layouts, aliases and proxies
###

# Per-page layout changes:
#
# With no layout
# page "/path/to/file.html", :layout => false
#
# With alternative layout
# page "/path/to/file.html", :layout => :otherlayout
#
# A path which all have the same layout
# with_layout :admin do
#   page "/admin/*"
# end

# Proxy pages (https://middlemanapp.com/advanced/dynamic_pages/)
# proxy "/this-page-has-no-template.html", "/template-file.html", :locals => {
#  :which_fake_page => "Rendering a fake page with a local variable" }

###
# Helpers
###

# Automatic image dimensions on image_tag helper
# activate :automatic_image_sizes

# Reload the browser automatically whenever files change
# configure :development do
#   activate :livereload
# end

# Methods defined in the helpers block are available in templates
# helpers do
#   def some_helper
#     "Helping"
#   end
# end

set :css_dir, 'stylesheets'

set :js_dir, 'javascripts'

set :images_dir, 'images'

# Build-specific configuration
configure :build do
  # For example, change the Compass output style for deployment
  activate :minify_css

  # Minify Javascript on build
  activate :minify_javascript
  activate :minify_html

  # Enable cache buster
  activate :asset_hash

  # Use relative URLs
  activate :relative_assets

  # Or use a different image path
  # set :http_prefix, "/Content/images/"
end

activate :dotenv, env: 'deploy.env'

case ENV['TARGET'].to_s.downcase
when 'staging'
  activate :deploy do |deploy|
    deploy.build_before = true
    deploy.method   = ENV["STG_DEPLOY_METHOD"]
    deploy.host     = ENV["STG_DEPLOY_HOST"]
    deploy.port     = ENV["STG_DEPLOY_PORT"]
    deploy.path     = ENV["STG_DEPLOY_PATH"]
    deploy.user     = ENV["STG_DEPLOY_USER"]
    deploy.password = ENV["STG_DEPLOY_PASSWORD"]
  end
when 'production'
  activate :deploy do |deploy|
    deploy.build_before = true
    deploy.method   = ENV["PROD_DEPLOY_METHOD"]
    deploy.host     = ENV["PROD_DEPLOY_HOST"]
    deploy.port     = ENV["PROD_DEPLOY_PORT"]
    deploy.path     = ENV["PROD_DEPLOY_PATH"]
    deploy.user     = ENV["PROD_DEPLOY_USER"]
    deploy.password = ENV["PROD_DEPLOY_PASSWORD"]
  end
end
