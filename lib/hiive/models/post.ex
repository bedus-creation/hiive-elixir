defmodule Hiive.Models.Post do
  use Ecto.Schema
  import Ecto.Changeset

  import Ecto.Query, warn: false
  alias Hiive.Repo

  schema "post" do
    field :description, :string
    field :title, :string

    timestamps(type: :utc_datetime)
  end

  @doc false
  def changeset(post, attrs) do
    post
    |> cast(attrs, [:title, :description])
    |> validate_required([:title, :description])
  end
end
