export function formatTime(segundos: number): string {
  const minutos = Math.floor(segundos / 60);
  const segundosRestantes = Math.round(segundos % 60); // Arredonda para o número inteiro mais próximo
  const minutosString = minutos > 0 ? minutos + "m" : "";
  const segundosString = segundosRestantes > 0 ? segundosRestantes + "s" : "0s"; // Adiciona "0s" se não houver segundos

  return minutosString + segundosString;
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

export function formatDate(dateString: string): string {
  const partesData = dateString.split("-");

  const ano = partesData[0].substring(2);
  const mes = partesData[1];
  const dia = partesData[2];

  const dataFormatada = `${dia}/${mes}/${ano}`;

  return dataFormatada;
}
