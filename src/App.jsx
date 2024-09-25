import Alpaca from "./components/Alpaca"
import Donwload from "./components/Donwload"
const App = () => {
  return (
    <main className="h-[100vh]">
      {/* Container */}
      <div className="container mx-auto flex items-center justify-center h-full flex-col">
        {/* Content */}
        <Alpaca />

      </div>
    </main>
  )
}

export default App