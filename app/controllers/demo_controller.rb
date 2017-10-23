class DemoController < ApplicationController

  include Complate::Rails::ActionControllerExtensions

  def index
    complate('DemoIndex',
      :array => ['Some', 'simple', 'array'])
  end

  def streaming
    complate('DemoStreaming', :sleep => ->() { Kernel.sleep(1) })
  end

  def error
    complate('DemoError')
  end

end
