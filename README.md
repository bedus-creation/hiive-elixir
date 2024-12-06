# Learning Phoenix Framework as Laravel Developer

### Installation

```shell
mix phx.new hiive --no-ecto --no-assets --no-live
```

### Directory Structure

* lib: all the source code will stay in this folder

### MVC architecture

Phoenix and Laravel share a similar structure when it comes to routing. In Laravel, routes are defined in a dedicated file like this:

```php
use App\Controllers\HomeController;

Route::get('/home', [HomeController::class, 'index']);
```

Similarly, you can define a route in Phoenix using this syntax:

```elixir
get "/home", HomeController, :index
```

One notable difference is that Laravel does not explicitly enforce a separation between the domain and application layers—you have the flexibility to configure your application structure as you see
fit. In contrast, Phoenix imposes a more opinionated folder structure. For example, in Phoenix, we define `hiive_web` to serve as the application layer and `hiive` as the domain layer, making this
separation more explicit.

### Database

I didn't set up the database initially due to some errors, but now let's quickly add a SQLite database. I found that these two dependencies are required to set up SQLite:

```elixir
defp deps do
[
{:ecto_sql, "~> 3.10"},
{:exqlite, "~> 0.13.11"}
]
end
```

and then let's pull the dependencies as:

```shell
mix deps.get
```

Now we need to configure the database as:

```elixir
# config/config.exs
config :hiive, Hiive.Repo,
  database: "my_app_dev.sqlite3",
  pool_size: 5,
  show_sensitive_data_on_connection_error: true

config :hiive, ecto_repos: [Hiive.Repo]
```

Now we need to generate a repo module as:

```shell
mix ecto.gen.repo -r Hiive.Repo
```

and also need to add `Hiive.Repo` in `lib/hiive/application.ex`

```elixir
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
end
```

### Generate a migrations
The migration and model generation functionality of the Phoenix framework is similar to Laravel. Additionally, there are a few frameworks, such as .NET and Django, that generate migrations based on entity classes.
```shell
mix phx.gen.schema Post post title:string description:text
```
The schema definition parts are also very much similar, in Phoenix:
```elixir
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
```

In Laravel
```php
Schema::table('post', function (Blueprint $table) {
    $table->string('title');
    $table->string('description');
    $table->string('status');
    $table->timestamps();
});
```

### Tinkering into the phoenix application

```shell
iex -S mix
```

### Inserting some records

```elixir
# iex -S mix
alias Hello.User
```

and records can be added as:

```elixir
params = %{name: "Joe Example", email: "joe@example.com", bio: "An example to all", number_of_pets: 5, random_key: "random value"}

changeset = User.changeset(%User{}, params)
changeset.valid?
changeset.changes
```

Inserting a record

```elixir
Repo.insert(%User{email: "user1@example.com"})
```

Fetching all the records from a table

```elixir
Repo.all(User)
```

Where condition:

```elixir
Repo.one(
  from u in User, 
  where: ilike(u.email, "%1%"),
  select: count(u.id)
)
```

### The Json API
```shell

```

### Testing
