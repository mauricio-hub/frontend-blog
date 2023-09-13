import { PostProvider } from "./context/PostProvider"
import { Home } from "./pages/Home"




function App() {

  return (
      <PostProvider >
      <Home/>
      </PostProvider>
    
      
  )
}

export default App
