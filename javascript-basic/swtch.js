
function solution(article) {
    if (article === 'computadora') {
      return "Con mi computadora puedo programar usando JavaScript";
    } else if (article === 'celular') { 
      return "En mi celular puedo aprender usando la app de Platzi";
    } else if (article === 'cable') {
      return "¡Hay un cable en mi bota!";
    } else {
      return "Artículo no encontrado";
    }
  }
console.log(solution("computadora"));
console.log(solution("celular"));
console.log(solution("cable"));
console.log(solution("no esta en lista"));