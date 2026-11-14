import { useGameStore } from './store/useGameStore';
import PanelRecursos from './components/game/PanelRecursos';
import PanelEnergia from './components/game/PanelEnergia';
// import ConsolaEventos from './components/game/ConsolaEventos';

function App() {
  // Forma recomendada y segura de extraer funciones y estados de Zustand
  const avanzarSol = useGameStore((state) => state.avanzarSol);
  const solActual = useGameStore((state) => state.solActual);

  return (
    <div style={{ padding: '30px', fontFamily: 'system-ui', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Mando de Control Lunar - Sol {solActual}</h1>
      
      <PanelRecursos />
      <PanelEnergia />
      {/* <ConsolaEventos /> */}
      
      <button 
        onClick={avanzarSol} 
        style={{ marginTop: '20px', padding: '15px', width: '100%', fontSize: '18px', background: '#d32f2f', color: 'white', border: 'none', cursor: 'pointer', borderRadius: '4px' }}
      >
        TERMINAR SOL (Avanzar día)
      </button>
    </div>
  );
}

export default App;