import { useGameStore } from '../../store/useGameStore';

export default function PanelRecursos() {
  // Aquí llamamos exactamente a las variables que ya tienes en tu motor (useGameStore)
  const { oxigeno, hidroponia, blindaje } = useGameStore();

  return (
    <div style={{ padding: '20px', background: '#111827', color: 'white', borderRadius: '8px', marginBottom: '20px', border: '1px solid #374151' }}>
      <h3 style={{ color: '#60a5fa', marginTop: 0 }}>📊 Estado de los Sistemas Vitales</h3>
      
      <div style={{ marginBottom: '10px' }}>
        <p style={{ margin: '5px 0', display: 'flex', justifyContent: 'space-between' }}>
          <span>🌬️ Filtros de Aire (O2)</span>
          <span style={{ color: oxigeno < 30 ? '#ef4444' : '#a7f3d0', fontWeight: 'bold' }}>
            {oxigeno.toFixed(1)}%
          </span>
        </p>
      </div>

      <div style={{ marginBottom: '10px' }}>
        <p style={{ margin: '5px 0', display: 'flex', justifyContent: 'space-between' }}>
          <span>🌱 Módulo Hidropónico</span>
          <span style={{ color: hidroponia < 30 ? '#ef4444' : '#a7f3d0', fontWeight: 'bold' }}>
            {hidroponia.toFixed(1)}%
          </span>
        </p>
      </div>

      <div style={{ marginBottom: '10px' }}>
        <p style={{ margin: '5px 0', display: 'flex', justifyContent: 'space-between' }}>
          <span>🛡️ Blindaje Magnético</span>
          <span style={{ color: blindaje < 30 ? '#ef4444' : '#a7f3d0', fontWeight: 'bold' }}>
            {blindaje.toFixed(1)}%
          </span>
        </p>
      </div>
    </div>
  );
}