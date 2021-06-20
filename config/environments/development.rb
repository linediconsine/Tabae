Rails.application.configure do
  # Settings specified here will take precedence over those in config/application.rb.

  config.action_mailer.default_url_options = { host: 'localhost', port: 3000 }
  # In the development environment your application's code is reloaded on
  # every request. This slows down response time but is perfect for development
  # since you don't have to restart the web server when you make code changes.
  config.cache_classes = false

  # Do not eager load code on boot.
  config.eager_load = false

  # Show full error reports.
  config.consider_all_requests_local = true

  # Enable/disable caching. By default caching is disabled.
  # Run rails dev:cache to toggle caching.
  if Rails.root.join('tmp', 'caching-dev.txt').exist?
    config.action_controller.perform_caching = true
    config.action_controller.enable_fragment_cache_logging = true

    config.cache_store = :memory_store
    config.public_file_server.headers = {
      'Cache-Control' => "public, max-age=#{2.days.to_i}"
    }
  else
    config.action_controller.perform_caching = false

    config.cache_store = :null_store
  end

  # Store uploaded files on the local file system (see config/storage.yml for options).
  config.active_storage.service = :local

  # Don't care if the mailer can't send.
  config.action_mailer.raise_delivery_errors = false

  config.action_mailer.perform_caching = false

  # Print deprecation notices to the Rails logger.
  config.active_support.deprecation = :log

  # Raise an error on page load if there are pending migrations.
  config.active_record.migration_error = :page_load

  # Highlight code that triggered database queries in logs.
  config.active_record.verbose_query_logs = true

  # Debug mode disables concatenation and preprocessing of assets.
  # This option may cause significant delays in view rendering with a large
  # number of complex assets.
  config.assets.debug = true

  # Suppress logger output for asset requests.
  config.assets.quiet = true

  # Raises error for missing translations.
  # config.action_view.raise_on_missing_translations = true

  # Use an evented file watcher to asynchronously detect changes in source code,
  # routes, locales, etc. This feature depends on the listen gem.
  config.file_watcher = ActiveSupport::EventedFileUpdateChecker


  config.action_mailer.delivery_method = :smtp
  config.action_mailer.smtp_settings = {
    from: 'support@tabae.cloud',
    user_name: 'support@tabae.cloud',
    password: '2020supp__123',
    address: 'smtps.aruba.it',
    domain: 'tabae.cloud',
    port: '465',
    ssl: true,
    authentication: :login,

  }

#   gitlab_rails['smtp_enable'] = true
# gitlab_rails['smtp_address'] = "smtps.aruba.it"
# gitlab_rails['smtp_port'] = 465
# gitlab_rails['smtp_user_name'] = "user@yourdomain.com"
# gitlab_rails['smtp_password'] = "password"
# gitlab_rails['smtp_domain'] = "yourdomain.com"
# gitlab_rails['smtp_authentication'] = "login"
# gitlab_rails['smtp_ssl'] = true

end
