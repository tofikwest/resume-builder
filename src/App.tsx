import Header from './components/Header/Header'
import SideBar from './components/SideBar/SideBar'
import HomePage from './pages/HomePage'

function App() {
  return (
    <div className="relative">
      <SideBar />
      {/* CONTENT PART */}
      <div className="w-11/12 float-right">
        <Header />
        <HomePage />
      </div>
    </div>
  )
}

export default App
