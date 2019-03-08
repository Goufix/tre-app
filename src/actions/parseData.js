const BB_CODE = [
  '[color=#ff0000][b]Dados do policial contemplado:[/b][/color]',
  '[b]Nick: [/b]',
  '[b]Número de medalhas: [/b]',
  '[b]Motivo: [/b]'
];

export default function parseData(data) {
  let resp = '';
  data
    .replace('• ', '')

    .replace('[Melhor treinador de nível 1 da semana]', '')
    .split('\n')
    .map((value, index) => {
      let achieve = value
        .substring(value.indexOf(' -'), value.indexOf('%'))
        .replace('%', '');
      let nick = value.substring(0, value.indexOf(' - '));
      if (index === 0) {
        resp +=
          BB_CODE[0] +
          '\n\n' +
          BB_CODE[1] +
          nick +
          '\n' +
          BB_CODE[2] +
          '+20' +
          '\n' +
          BB_CODE[3] +
          'trabalho realiado na companhia dos [color=#fff000][i]treinadores[/i][/color]\n\n';
        return;
      }
      if (achieve > 30) {
        resp +=
          BB_CODE[1] +
          nick +
          '\n' +
          BB_CODE[2] +
          '+10' +
          '\n' +
          BB_CODE[3] +
          'trabalho realiado na companhia dos [color=#fff000][i]treinadores[/i][/color]\n\n';
      } else {
        resp +=
          BB_CODE[1] +
          nick +
          '\n' +
          BB_CODE[2] +
          '-10' +
          '\n' +
          BB_CODE[3] +
          'trabalho não realiado na companhia dos [color=#fff000][i]treinadores[/i][/color]\n\n';
      }
    });
  return resp;
}
