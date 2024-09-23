
import './App.css'
import Blog from './components/Blog/Blog.tsx'
import Profile from "./components/Profile/Profile.tsx";

function App() {

  return (
    <>
        <Blog />
        <Profile />
    </>
  )
}

export default App

/**
 * Step 1: Modify your blog so that a blog entry component is dynamically populated with props and the blog entry
 * component is used multiple times.
 *
 * Step 2: Create a profile component (which should be at the same level as the blog component in App.tsx) that
 * introduces you as a developer. If you have already created a profile component in the last task (bonus task),
 * you can further expand it and improve it with the new knowledge."
 */