# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort and a model called Student. The cohort model has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer:
Generate a migrates and run these commands:
rails generate migration AddCohortIdToStudents cohort:references
rails db:migrate

Researched answer:
Here's how you can fix the mistake:

Generate a migration to add the foreign key to the students table. Open your terminal and run the following command:

rails generate migration AddCohortIdToStudents cohort:references
This will generate a migration file with a name like timestamp_add_cohort_id_to_students.rb. The cohort:references part in the command adds a cohort_id column to the students table and sets it as a foreign key referencing the cohorts table.
Open the generated migration file and locate the change method. It should look something like this:
ruby

class AddCohortIdToStudents < ActiveRecord::Migration[6.0]
  def change
    add_reference :students, :cohort, foreign_key: true
  end
end
The add_reference method is used to add the foreign key.
Run the migration to update the database schema:
bash
Copy code
rails db:migrate
This will execute the migration and add the cohort_id column as a foreign key in the students table.
After running the migration, the foreign key cohort_id will be added to the students table, establishing the association between the Cohort and Student models.

2. Which RESTful routes must always be passed params? Why?

Your answer:
show, edit, update, and destory. It is because they are targeting a specific instance or object 
Researched answer:

show: This route is used to display a specific resource. It expects the identifier of the resource as a parameter to determine which resource to retrieve and display.
edit and update: These routes are used to edit and update an existing resource. They require the identifier of the resource to be passed as a parameter to identify which resource needs to be edited or updated.
destroy: This route is used to delete a specific resource. It needs the identifier of the resource as a parameter to identify and delete the correct resource.

3. Name three rails generator commands. What is created by each?

Your answer:
model (generates the model and migration file), controller (creates the view file), scaffold(all in one powerful set that creates the model, view, controllerm and migration files). 

Researched answer:
rails generate model: This command is used to generate a model along with its corresponding migration file. For example, running rails generate model User name:string email:string will generate a User model file (user.rb) in the app/models directory and a migration file (timestamp_create_users.rb) in the db/migrate directory. The migration file will contain the necessary code to create a users table with name and email columns.
rails generate controller: This command is used to generate a controller file along with its corresponding view files. For example, running rails generate controller Welcome index will generate a Welcome controller file (welcome_controller.rb) in the app/controllers directory. It will also create an index view file (index.html.erb) in the app/views/welcome directory. Additionally, it will generate route entries in the config/routes.rb file to map the controller actions to specific URLs.
rails generate scaffold: This command is a powerful generator that creates a complete set of resources including a model, controller, views, and migration file. For example, running rails generate scaffold Post title:string content:text will generate a Post model, a Posts controller with all the CRUD actions, corresponding views for each action, and a migration file to create the posts table with title and content columns. This generator is commonly used to quickly generate a full set of resources for basic CRUD operations

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" location: /students
Controller Method: index
Action: retrieve and display a list of all students.

action: "POST" location: /students
Controller Method: create
Action: create a new student based on the submitted data.

action: "GET" location: /students/new
Controller Method: new
Action: render a form for creating a new student.

action: "GET" location: /students/2
Controller Method: show
Action: retrieve and display the details of the student with ID 2.

action: "GET" location: /students/2/edit
Controller Method: edit
Action: render a form for editing the details of the student with ID 2.

action: "PATCH" location: /students/2
Controller Method: update
Action: update the details of the student with ID 2 based on the submitted data.

action: "DELETE" location: /students/2
Controller Method: destroy
Action: delete the student with ID 2 from the database.

5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. [Here is a resource](https://www.atlassian.com/agile/project-management/user-stories) to help you create your user stories.
