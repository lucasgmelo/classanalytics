export function formatTime(segundos: number): string {
  const horas = Math.floor(segundos / 3600);
  const minutos = Math.floor((segundos % 3600) / 60);
  const segundosRestantes = segundos % 60;

  let resultado = "";

  if (horas > 0) {
    resultado += `${horas}h`;
  }

  if (minutos > 0) {
    resultado += `${minutos}m`;
  }

  if (segundosRestantes > 0 || resultado === "") {
    resultado += `${segundosRestantes}s`;
  }

  return resultado;
}

export function renderTagColor(type: string): string {
  if (type === "available") return "green";
  if (type === "error") return "red";
  if (type === "loading") return "orange";

  return "blue";
}

export function formatTagText(type: string): string {
  if (type === "available") return "Disponível";
  if (type === "loading") return "Carregando";

  return "Erro";
}
