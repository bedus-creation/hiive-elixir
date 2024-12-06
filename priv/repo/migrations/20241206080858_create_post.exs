defmodule Hiive.Repo.Migrations.CreatePost do
  use Ecto.Migration

  def change do
    create table(:post) do
      add :title, :string
      add :description, :text
      add :status, :string

      timestamps(type: :utc_datetime)
    end
  end
end
