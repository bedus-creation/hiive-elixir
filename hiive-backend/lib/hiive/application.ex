defmodule Hiive.Application do
  # See https://hexdocs.pm/elixir/Application.html
  # for more information on OTP Applications
  @moduledoc false

  use Application

  @impl true
  def start(_type, _args) do
    children = [
      HiiveWeb.Telemetry,
      {DNSCluster, query: Application.get_env(:hiive, :dns_cluster_query) || :ignore},
      {Phoenix.PubSub, name: Hiive.PubSub},
      # Start the Finch HTTP client for sending emails
      {Finch, name: Hiive.Finch},
      # Start a worker by calling: Hiive.Worker.start_link(arg)
      # {Hiive.Worker, arg},
      # Start to serve requests, typically the last entry
      HiiveWeb.Endpoint,
      Hiive.Repo
    ]

    # See https://hexdocs.pm/elixir/Supervisor.html
    # for other strategies and supported options
    opts = [strategy: :one_for_one, name: Hiive.Supervisor]
    Supervisor.start_link(children, opts)
  end

  # Tell Phoenix to update the endpoint configuration
  # whenever the application is updated.
  @impl true
  def config_change(changed, _new, removed) do
    HiiveWeb.Endpoint.config_change(changed, removed)
    :ok
  end
end
