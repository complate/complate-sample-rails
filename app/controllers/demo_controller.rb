class DemoController < ApplicationController

  include ActionController::Live

  def index
    @array = ['Some', 'simple', 'array']
  end

  def streaming
    @sleep = ->() { Kernel.sleep(1) }
    complate_stream
  end

  def error

  end

end
