import './App.css'
import StarryBackground from './components/StarryBackground';
import Logo3D from './components/Logo3D';
import Navbar from './components/Navbar';
import PhotoGallery from './components/PhotoGallery';

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative">
      <StarryBackground />
      <Navbar />
      <div className="flex-1 flex flex-col items-center justify-center w-full">
        <Logo3D />
      </div>
      <PhotoGallery />
    </div>
  );
}

export default App;
