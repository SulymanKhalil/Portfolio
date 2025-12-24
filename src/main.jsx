import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "./index.css"
import "./Components/heroSection.css"
import "./Components/about.css"
import "./Components/skills.css"
import "./Components/projects.css"
import "./Components/contact.css"
import "./Components/notFound.css"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)