defmodule Hiive.Posts do

  import Ecto.Query, warn: false
  alias Hiive.Repo

  alias Hiive.Models.Post

  def list_posts do
    Repo.all(Post)
  end

  def create_post(attrs \\ %{}) do
    %Post{}
    |> Post.changeset(attrs)
    |> Repo.insert()
  end

  def get_post!(id), do: Repo.get!(Post, id)
end
