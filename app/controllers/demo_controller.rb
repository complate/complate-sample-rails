class DemoController < ApplicationController

  include ActionController::Live

  def index
    @array = ['Some', 'simple', 'array']
  end

  def streaming
    id, compilate = Complate::TemplateHandler.register_source(Rails.root.join('app/views/demo/streaming.jsx').to_s)
    sleep = ->() { Kernel.sleep(1) }
    old_path = Rails.configuration.complate.bundle_path
    Rails.configuration.complate.bundle_path = compilate.path
    complate(id, {sleep: sleep})
  ensure
    Rails.configuration.complate.bundle_path = old_path if old_path
  end

  def error

  end

end
