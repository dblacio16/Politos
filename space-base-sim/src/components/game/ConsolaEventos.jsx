import { useGameStore } from '../../store/useGameStore';

export default function ConsolaEventos() {
  const { mensajeEvento } = useGameStore();

  const esAlerta = mensajeEvento.includes("ALERTA") || mensajeEvento.includes("CRÍTICO");

  return (
    <div style={{ 
      padding: '15px', 
      marginTop: '20px',
      background: esAlerta ? '#3e1111' : '#0d2a14', 
      border: `1px solid ${esAlerta ? '#f44336' : '#4caf50'}`,
      color: esAlerta ? '#ff8a80' : '#b9f6ca',
      borderRadius: '8px',
      fontFamily: 'monospace'
    }}>
      <h4 style={{ margin: '0 0 10px 0' }}>📡 Transmisión de la Base:</h4>
      <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.5' }}>
        {mensajeEvento}
      </p>
    </div>
  );
}