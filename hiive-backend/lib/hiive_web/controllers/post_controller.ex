defmodule HiiveWeb.PostController do
  use HiiveWeb, :controller

  action_fallback HiiveWeb.FallbackController

  alias Hiive.Posts
  alias Hiive.Models.Post

  def index(conn, _params) do
    posts = Posts.list_posts()
    render(conn, :index, posts: posts)
  end

  def create(conn, params) do
    with {:ok, %Post{} = post} <- Posts.create_post(params) do
      conn
      |> put_status(:created)
      |> put_resp_header("location", ~p"/api/posts/#{post}")
      |> render(:show, post: post)
    end
  end

  def show(conn, %{"id" => id}) do
    post = Posts.get_post!(id)
    render(conn, :show, post: post)
  end
end
