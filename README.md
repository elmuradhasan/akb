# GitHub User Search

A web application that allows users to search for a GitHub user and view their profile information along with their public repositories. This app demonstrates the effective use of modern frontend technologies, clean component design, and a responsive UI.

## 🎯 Objective

The goal of this project is to create a search interface where users can input a GitHub username, fetch their profile data and public repositories from the GitHub API, and display the information in an easy-to-read and interactive manner.

## ⚙️ Tech Stack

- **React**: UI framework for building the app.
- **Chakra UI**: Component library for styling and UI components.
- **Zustand**: Global state management.
- **React Query**: Server state management and caching.
- **Vercel**: Deployment platform.
- **TypeScript**: Ensures type safety and improves code quality.
- **React Hook Form**: For handling form inputs and validation.
- **Yup**: For schema validation.
- **OpenAPI**: Used for generating dynamic TypeScript types from the Swagger file.

## 🧱 Application Structure

The application consists of two main pages:

### 1. Search Page

- Contains a text input where users can enter a GitHub username.
- A button triggers the search.
- On search, the app navigates to the Result page with the fetched user data.

### 2. Result Page

- Displays the selected user’s GitHub profile information.
- Lists the user’s public repositories under the profile section.
- Handles loading and error states gracefully.

### User Profile Data on Result Page:

- Avatar: User's GitHub avatar (`avatar_url`).
- Username: GitHub username (`login`).
- Full Name: Full name of the user or fallback message (`name`).
- Email: User’s email if publicly available.
- Bio: The bio information from the user's profile.
- Location: User’s location if available.
- Repositories Count: Number of public repositories (`public_repos`).
- Followers/Following Count: Number of followers and following.
- Profile Link: Clickable link to the GitHub profile (`html_url`).

### Repositories List:

- Repo Name: Name of the repository.
- Description: Repository description if available.
- Stars Count: Number of stars for the repository.
- Repository Link: Clickable link to the repository.

## 🔗 GitHub APIs Used

- **Get user profile**  
  `GET https://api.github.com/users/{username}`
  
- **Get user repositories**  
  `GET https://api.github.com/users/{username}/repos/?per_page=100`

## 🧩 Required Features

- **Input validation** for empty or invalid usernames.
- **State management** with Zustand for handling the selected user data.
- **Data fetching** with React Query:
  - Loading indicators.
  - Error handling.
  - Caching behavior.
- **Navigation** between the Search page and the Result page.
- **Responsive UI** using Chakra UI components.

### Persistent Data on Reload

- The app ensures that fetched data persists across page reloads using Zustand or by utilizing `localStorage`, `sessionStorage`, or URL-based state.

## ✨ Nice to Have

- **Dark/light theme support**.
- **Pagination** for displaying repositories.
- **User-friendly design** with clean UI/UX.

## 🚀 Deployment

The final application is deployed on [Vercel](https://vercel.com/). You can visit the live demo of the app here:

- **Live Demo URL**: [https://akb-tan.vercel.app/]

## 📦 Installation & Usage

1. Clone the repository:
   ```bash
   git clone https://github.com/elmuradhasan/akb.git

// api swagger file temin etmedi deye bezi tip xetalari var