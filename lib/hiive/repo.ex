defmodule Hiive.Repo do
  use Ecto.Repo,
    otp_app: :hiive,
    adapter: Ecto.Adapters.SQLite3
end
