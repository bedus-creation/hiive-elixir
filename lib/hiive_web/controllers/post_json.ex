defmodule HiiveWeb.PostJSON do
  alias Hiive.Models.Post

  def index(%{posts: posts}) do
    %{data: for(post <- posts, do: data(post))}
  end

  def show(%{post: post}) do
    %{data: data(post)}
  end

  defp data(%Post{} = post) do
    %{
      id: post.id,
      link: post.title,
      description: post.description
    }
  end
end
