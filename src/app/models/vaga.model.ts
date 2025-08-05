import { TipoSolicitacao } from '../enums/tipo-solicitacao.enum';

export interface Vaga {
  id?: number;
  ownerId: number;
  tipo: TipoSolicitacao;
  valor: number | null;
  disponivelAte: string;
  disponivel: boolean;
  descricao: string;
  createdAt?: string | null;
  updatedAt?: string | null;
}
