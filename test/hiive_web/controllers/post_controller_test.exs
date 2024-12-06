defmodule HiiveWeb.PostControllerTest do
  use HiiveWeb.ConnCase
  use Hiive.DataCase, async: true

  alias Hiive.Posts

  @create_attrs %{
    title: "This is my test blog",
    description: "the description of a test blog"
  }

  describe "creates post" do
    test "user can create a post", %{conn: conn} do
      conn = post(conn, ~p"/api/posts", @create_attrs)
      assert %{"id" => id} = json_response(conn, 201)["data"]

      post = Posts.get_post!(id)
      assert @create_attrs[:title] == post.title
      assert @create_attrs[:description] == post.description
    end
  end
end
