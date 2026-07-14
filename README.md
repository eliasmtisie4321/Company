# User Directory App

A simple User Directory application built with **React + JavaScript** and **Tailwind CSS**.

The app fetches users from an API, displays their information, allows users to search by name, and provides a form to add new users without refreshing the page.

## Features

- ✅ Fetch users from JSONPlaceholder API
- ✅ Display user:
  - Name
  - Email
  - Company Name
- ✅ Search users by name as you type
- ✅ Show "No users found" when no results match
- ✅ Add new users dynamically
- ✅ Responsive UI using Tailwind CSS

## Technologies Used

- React
- JavaScript (JSX)
- Tailwind CSS
- Fetch API
- Vite

## API Used

Users are fetched from:

```
https://jsonplaceholder.typicode.com/users
```

## Installation and Setup

Clone the repository:

```bash
git clone your-repository-link
```

Go into the project folder:

```bash
cd user-directory
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the application in your browser:

```
http://localhost:5173
```

## Project Structure

```
src
│
├── App.jsx
├── UserDirectory.jsx
├── UserCard.jsx
├── main.jsx
└── index.css
```

## How It Works

### Fetching Users

The app uses `useEffect()` to fetch users when the component loads.

```jsx
useEffect(() => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => setUsers(data));
}, []);
```

### Searching Users

The search input is controlled using `useState()` and filters users by name.

```jsx
users.filter(user =>
  user.name.toLowerCase().includes(search.toLowerCase())
)
```

### Adding Users

Users can add a new user using the form. The new user is added to the top of the list without refreshing the page.

## Screenshots

(Add screenshots of your application here)

## Future Improvements

- Add delete user functionality
- Add edit user functionality
- Add user profile pages
- Connect to a real backend database

## Author

Elias Mtisie