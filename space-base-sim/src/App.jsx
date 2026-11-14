import { useGameStore } from './store/useGameStore';

function App() {
  const { 
    energiaTotal, soporteVital, comida, integridad,
    asignacionSV, asignacionInv, asignacionRad,
    setAsignacion, avanzarSol 
  } = useGameStore();

  // Calcular energía sobrante
  const energiaUsada = asignacionSV + asignacionInv + asignacionRad;
  const energiaRestante = energiaTotal - energiaUsada;

  return (
    <div style={{ padding: '30px', fontFamily: 'system-ui', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Mando de Control Lunar</h1>
      
      {/* PANEL DE RECURSOS */}
      <div style={{ padding: '15px', background: '#1a1a1a', color: 'white', borderRadius: '8px', marginBottom: '20px' }}>
        <h3>Niveles Críticos (Objetivo: Mantener en 100%)</h3>
        <p>🌬️ Soporte Vital (O2/H2O): {soporteVital.toFixed(1)}%</p>
        <p>🌱 Invernadero (Comida): {comida.toFixed(1)}%</p>
        <p>🛡️ Escudos (Radiación): {integridad.toFixed(1)}%</p>
      </div>

      {/* PANEL DE ENERGÍA */}
      <div style={{ padding: '15px', border: '2px solid #ccc', borderRadius: '8px' }}>
        <h3>Distribución de Energía (Restante: {energiaRestante}%)</h3>
        
        <div style={{ marginBottom: '15px' }}>
          <label>🌬️ Energía a Soporte Vital ({asignacionSV} kW)</label>
          <input 
            type="range" min="0" max="100" value={asignacionSV}
            onChange={(e) => setAsignacion('asignacionSV', e.target.value)}
            style={{ width: '100%' }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label>🌱 Energía a Invernadero ({asignacionInv} kW)</label>
          <input 
            type="range" min="0" max="100" value={asignacionInv}
            onChange={(e) => setAsignacion('asignacionInv', e.target.value)}
            style={{ width: '100%' }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label>🛡️ Energía a Escudos ({asignacionRad} kW)</label>
          <input 
            type="range" min="0" max="100" value={asignacionRad}
            onChange={(e) => setAsignacion('asignacionRad', e.target.value)}
            style={{ width: '100%' }}
          />
        </div>
      </div>

      <button 
        onClick={avanzarSol} 
        style={{ marginTop: '20px', padding: '15px', width: '100%', fontSize: '18px', background: '#d32f2f', color: 'white', border: 'none', cursor: 'pointer' }}
      >
        TERMINAR SOL (Avanzar al siguiente día)
      </button>
    </div>
  );
}

export default App;