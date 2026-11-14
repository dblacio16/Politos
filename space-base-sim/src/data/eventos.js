export const eventosCrisis = [
  { 
    sol: 2, 
    tipo: "Fallo en Conductos", 
    mensaje: " ALERTA: Fuga en los conductos de ventilación. Se requiere máxima energía en los filtros de aire este turno para estabilizar el O2.",
    impacto: "oxigeno_critico" 
  },
  { 
    sol: 4, 
    tipo: "Viento Solar", 
    mensaje: "ALERTA: Tormenta de viento solar detectada. El escudo magnético sufrirá daños severos si no se recalibra con más energía.",
    impacto: "radiacion_alta" 
  },
  { 
    sol: 6, 
    tipo: "Caída de Baterías", 
    mensaje: "CRITICO: Las celdas del generador principal han perdido eficiencia por el frío. Energía máxima reducida temporalmente.",
    impacto: "energia_baja" 
  },
  { 
    sol: 8, 
    tipo: "Helada Hidropónica", 
    mensaje: " ALERTA: Falla en los termostatos. Las luces y el riego necesitan energía extra urgente o la cosecha morirá.",
    impacto: "comida_critica" 
  }
];