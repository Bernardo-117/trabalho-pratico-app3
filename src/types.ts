export type Prioridade = 'Alta' | 'Média' | 'Baixa';
export type Atividade = { id: string; titulo: string; disciplina: string; descricao: string; dataEntrega: string; prioridade: Prioridade; concluida: boolean; criadoEm: string };
export type DadosAtividade = Pick<Atividade, 'titulo' | 'disciplina' | 'descricao' | 'dataEntrega' | 'prioridade'>;
export type Aba = 'Início' | 'Atividades' | 'Calendário' | 'Estatísticas';
export type Tema = 'claro' | 'escuro';
export const hoje = () => { const d = new Date(); return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`; };
export function dataValida(s: string) { if (!/^\d{4}-\d{2}-\d{2}$/.test(s)) return false; const [y,m,d]=s.split('-').map(Number); const dt=new Date(y,m-1,d); return dt.getFullYear()===y && dt.getMonth()===m-1 && dt.getDate()===d; }
export function dataBR(s:string) { if(!dataValida(s)) return s; const [y,m,d]=s.split('-');return `${d}/${m}/${y}`; }
