import { useGameStore } from '../../store/useGameStore';

export default function PanelEnergia() {
  const { 
    celdasBateria, wattsFiltros, wattsLucesRiego, wattsMagneto, setAsignacion 
  } = useGameStore();

  const energiaUsada = wattsFiltros + wattsLucesRiego + wattsMagneto;
  const vatiosRestantes = celdasBateria - energiaUsada;

  return (
    <div style={{ padding: '20px', border: '2px solid #555', borderRadius: '8px', background: '#0a0a0a', color: '#e0e0e0' }}>
      <h3 style={{ color: '#ffb74d' }}>⚙️ Generador Principal (Celdas: {celdasBateria}W)</h3>
      <p style={{ color: vatiosRestantes === 0 ? '#f44336' : '#4caf50', fontWeight: 'bold' }}>
        Vatios Libres: {vatiosRestantes}W
      </p>
      <hr style={{ borderColor: '#333', marginBottom: '20px' }} />
      
      <div style={{ marginBottom: '20px' }}>
        <label>🌬️ <strong>Filtros de Aire y Conductos</strong> ({wattsFiltros}W)</label>
        <p style={{ fontSize: '12px', color: '#888', margin: '5px 0' }}>Mantiene el O2 estable y extrae el CO2.</p>
        <input 
          type="range" min="0" max="100" value={wattsFiltros}
          onChange={(e) => setAsignacion('wattsFiltros', e.target.value)} 
          style={{ width: '100%', cursor: 'pointer' }} 
        />
      </div>

      <div style={{ marginBottom: '20px' }}>
        <label>🛡️ <strong>Blindaje Magnético Exterior</strong> ({wattsMagneto}W)</label>
        <p style={{ fontSize: '12px', color: '#888', margin: '5px 0' }}>Bloquea la radiación y el viento solar.</p>
        <input 
          type="range" min="0" max="100" value={wattsMagneto}
          onChange={(e) => setAsignacion('wattsMagneto', e.target.value)} 
          style={{ width: '100%', cursor: 'pointer' }} 
        />
      </div>

      <div style={{ marginBottom: '20px' }}>
        <label>🌱 <strong>Riego y Luces Térmicas</strong> ({wattsLucesRiego}W)</label>
        <p style={{ fontSize: '12px', color: '#888', margin: '5px 0' }}>Evita que los cultivos hidropónicos se congelen.</p>
        <input 
          type="range" min="0" max="100" value={wattsLucesRiego}
          onChange={(e) => setAsignacion('wattsLucesRiego', e.target.value)} 
          style={{ width: '100%', cursor: 'pointer' }} 
        />
      </div>
    </div>
  );
}