# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1)
# ApplicationController is the base class for all controllers in a Rails application. Linked to BlogPostsController 
class BlogPostsController < ApplicationController
  def index
    # ---2)
    # .all allows the view to access the BlogPost and display them.
    @posts = BlogPost.all
  end

  # ---3)
  def show
    # retrieves the blog post based on their id 
    @post = BlogPost.find(params[:id])
  end

  # ---4)
  def new
    # creates a new instance of the BlogPost model and assigns it to the post
    @post = BlogPost.new
  end

  def create
    # ---5)
    # creates a new blog post entry 
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def edit
    # ---6)
    # edits the blog post based on the matching id
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7)
    # Updates blog post entry if the id exist in the array. which would mean .valid? return a true boolean value
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      # ---8)
      # deletes the blog post and redirects the user to the blog post page if successful
      redirect_to blog_posts_path
    end
  end

  # ---9)
  # methods that are used within the controller but shouldn't be seen by users
  private
  def blog_post_params
    # ---10)
    # method that specifies which parameters are allowed for mass assignment when creating or updating a blog post
    params.require(:blog_post).permit(:title, :content)
  end
end
