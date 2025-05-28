import './App.css'
import ScrollWheelArc from './components/ScrollWheelArc';
import StarryBackground from './components/StarryBackground';

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative">
      <StarryBackground />
      <ScrollWheelArc />
      <div className="flex-1 flex items-center justify-center w-full">
        <h1 className="text-6xl font-extrabold text-white z-10" style={{position: 'relative', marginTop: '-12vh'}}>Snoozy Flickz</h1>
      </div>
    </div>
  );
}

export default App;
