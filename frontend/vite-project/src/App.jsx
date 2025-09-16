
import Home from './pages/Home.jsx';

function App() {
  

  return (
    <div className="min-h-screen w-full flex relative bg-black justify-center">
      {/* Crimson Shadow Background with Top Glow */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(255, 80, 120, 0.25), transparent 70%), #000000",
        }}
      />

      {/* Your Content/Components */}
      <div className="relative z-10 flex justify-center min-h-screen text-white">
        <Home />
      </div>
    </div>
  )
}

export default App
