# Express.js Blog Application Documentation

This markdown file serves as documentation for a basic Express.js web application designed for managing blog posts. The application incorporates CRUD (Create, Read, Update, Delete) functionality and utilizes several key dependencies.

## Dependencies

- **Express:** A Node.js web application framework.
- **path:** A module for handling file and directory paths.
- **uuid:** A package for generating unique identifiers.
- **method-override:** Middleware for managing HTTP methods.

## Setup

 Clone the Repo:

```bash
git clone https://github.com/KashifKhn/REST_API_BASIC_CURD_Node_Express.git
```

1. Install dependencies:

   ```bash
   npm install
   ```

2. Run the application:

   ```bash
   npm run dev (if nodemon are installed)
   ```

   The application will be accessible at [http://localhost:3000](http://localhost:3000).

## Application Structure

- **`app.js`**: Primary application file.
- **`views`**: Directory containing EJS templates.
- **`public`**: Directory for static assets (stylesheets, images, etc.).

## Routes

- **GET `/posts`**: Displays a list of all blog posts.
- **GET `/posts/new`**: Renders a form for creating a new post.
- **POST `/posts`**: Creates a new post and redirects to the post list.
- **GET `/posts/:id`**: Displays a single post based on its unique ID.
- **GET `/posts/:id/edit`**: Renders a form for editing a specific post.
- **PATCH `/posts/:id`**: Updates the content of a post.
- **DELETE `/posts/:id`**: Deletes a post.

## Data Structure

The application manages blog posts using an array named `posts`. Each post object contains the following properties:

- `id`: A unique identifier generated using UUID.
- `userName`: The author's name.
- `content`: The content of the post.

## How to Use

1. Visit [http://localhost:3000/posts](http://localhost:3000/posts) to view the list of posts.

2. Click on a post to view its details.

3. Create a new post by visiting [http://localhost:3000/posts/new](http://localhost:3000/posts/new).

4. Edit a post by clicking the "Edit" link on the post details page.

5. Delete a post by clicking the "Delete" button on the post details page.

## Additional Notes

- EJS is the chosen template engine for rendering views.
- The `method-override` middleware is utilized for supporting HTTP method override, enabling the use of PUT and DELETE methods in HTML forms.
- The `uuid` package is employed to generate unique identifiers for each blog post.

## Authors

- @KashifKhn
- <kashifkhnx04@gmail.com>

## License

This project is licensed under the [MIT License](LICENSE).
