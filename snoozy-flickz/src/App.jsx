import './App.css'
import ScrollWheelArc from './components/ScrollWheelArc';
import StarryBackground from './components/StarryBackground';
import Logo3D from './components/Logo3D';
import ThreeScrollWheel from './components/ThreeScrollWheel';

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative">
      <StarryBackground />
      <ScrollWheelArc />
      <div className="flex-1 flex flex-col items-center justify-center w-full">
        <Logo3D />
        <div style={{ marginTop: '3rem', width: '100%' }}>
          <ThreeScrollWheel />
        </div>
      </div>
    </div>
  );
}

export default App;
