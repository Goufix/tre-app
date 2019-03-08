const BBCODE = {
  header: '[color=#ff0000][b]Meus dados: [/b][/color]',
  nick: '[b]Nick: [/b]',
  tag: '[b]TAG: [/b]',
  position: '[b]Patente: [/b]',
  cia: '[b]Companhia/Subcompanhia: [/b]',
  weekRef: '[b]Semana de rererência: [/b]'
};

export default function BBCode(props) {
  if (props.nick) {
    return BBCODE.nick + props.nick + '\n';
  }
  if (props.tag) {
    return BBCODE.tag + props.tag + '\n';
  }
  if (props.position) {
    return BBCODE.position + props.position + '\n';
  }
  if (props.weekRef) {
    return BBCODE.weekRef + props.weekRef + '\n';
  }
}
