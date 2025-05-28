import './App.css'
import StarryBackground from './components/StarryBackground';

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center relative">
      <StarryBackground />
      <h1 className="text-6xl font-extrabold text-white z-10" style={{position: 'relative'}}>Snoozy Flickz</h1>
    </div>
  );
}

export default App;
