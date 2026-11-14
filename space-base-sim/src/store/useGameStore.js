import { create } from 'zustand';
import { eventosCrisis } from '../data/eventos';

export const useGameStore = create((set) => ({
  solActual: 1,

  // --- 1. ESTADO DE LOS SISTEMAS (100% es óptimo) ---
  celdasBateria: 100, // Escenario 2: La energía máxima disponible
  oxigeno: 100,       // Escenario 1: Filtros de aire / Soporte Vital
  blindaje: 100,      // Escenario 3: Escudo magnético contra viento solar
  hidroponia: 100,    // Escenario 4: Plantas (riego y luces)

  // --- 2. DISTRIBUCIÓN DE VATIOS (La tensión del juego) ---
  wattsFiltros: 30,
  wattsLucesRiego: 40,
  wattsMagneto: 20,
  // (Añade esto debajo de tus variables de estado)
  mensajeEvento: "Sistemas nominales. Todo en orden, Comandante.",

  // --- 4. ACCIÓN: AVANZAR SOL (Actualizado con Eventos) ---
  avanzarSol: () => set((state) => {
    const siguienteSol = state.solActual + 1;
    
    // Buscar si hay un evento programado para el día siguiente
    const eventoDeHoy = eventosCrisis.find(e => e.sol === siguienteSol);
    let nuevoMensaje = eventoDeHoy ? eventoDeHoy.mensaje : "Sistemas nominales. Todo en orden, Comandante.";
    
    // Impacto temporal (ej. Si hay caída de baterías, la energía máxima baja a 70W)
    let celdasActuales = 100;
    if (eventoDeHoy && eventoDeHoy.impacto === "energia_baja") {
      celdasActuales = 70; 
    }

    // Cálculos matemáticos de decaimiento
    const nuevoOxigeno = state.oxigeno + 2 * (state.wattsFiltros - 30);
    const nuevaHidroponia = state.hidroponia + 0.5 * (state.wattsLucesRiego - 40);
    const nuevoBlindaje = state.blindaje + 1.5 * (state.wattsMagneto - 20); 

    return {
      solActual: siguienteSol,
      celdasBateria: celdasActuales, // Se actualiza si hay crisis
      mensajeEvento: nuevoMensaje,
      oxigeno: Math.max(0, Math.min(100, nuevoOxigeno)),
      hidroponia: Math.max(0, Math.min(100, nuevaHidroponia)),
      blindaje: Math.max(0, Math.min(100, nuevoBlindaje)),
    };
  }),

  // --- 3. ACCIÓN: RECALIBRAR ENERGÍA ---
  setAsignacion: (sistema, valor) => set((state) => {
    const nuevoValor = parseInt(valor);
    const estadoSimulado = { ...state, [sistema]: nuevoValor };
    
    // Verifica que no se usen más vatios de los que las celdas pueden dar
    const consumoTotal = estadoSimulado.wattsFiltros + estadoSimulado.wattsLucesRiego + estadoSimulado.wattsMagneto;
    
    if (consumoTotal <= state.celdasBateria) {
      return { [sistema]: nuevoValor };
    }
    return {}; 
  }),

  // --- 4. ACCIÓN: AVANZAR SOL (Impacto de los 4 escenarios) ---
  avanzarSol: () => set((state) => {
    // Escenario 1: Si faltan vatios en los filtros, el CO2 sube y el oxígeno cae rápido.
    const nuevoOxigeno = state.oxigeno + 2 * (state.wattsFiltros - 30);
    
    // Escenario 4: Si faltan vatios en hidroponía, el frío daña la cosecha lentamente.
    const nuevaHidroponia = state.hidroponia + 0.5 * (state.wattsLucesRiego - 40);
    
    // Escenario 3: Si faltan vatios en el magneto, el viento solar degrada el blindaje.
    const nuevoBlindaje = state.blindaje + 1.5 * (state.wattsMagneto - 20); 

    return {
      solActual: state.solActual + 1,
      oxigeno: Math.max(0, Math.min(100, nuevoOxigeno)),
      hidroponia: Math.max(0, Math.min(100, nuevaHidroponia)),
      blindaje: Math.max(0, Math.min(100, nuevoBlindaje)),
    };
  }),
}));
