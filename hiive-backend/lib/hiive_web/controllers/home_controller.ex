defmodule HiiveWeb.HomeController do
  use HiiveWeb, :controller

  def index(conn, _params) do
    render(conn, :index)
  end
end
