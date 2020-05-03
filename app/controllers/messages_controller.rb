class MessagesController < ApplicationController
  def index
  end
  def create
    @message = Group.new(message_params)
    if @message.save
      redirect_to group_messages_path(group_id)
    else
      render :index
    end
  end

  private
  def message_params
    params.require(:message).permit(:content, :image)
  end
end
