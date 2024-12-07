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
      title: post.title,
      description: post.description,
      inserted_at: format_date(post.inserted_at),
      updated_at: format_date(post.updated_at)
    }
  end

  def format_date(date) do
    %{
      diff: Timex.from_now(date),
      formatted: Timex.format!(date, "{YYYY}-{0M}-{0D}")
    }
  end
end
