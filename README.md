# StudyFlow 3.0 📚

Aplicativo para Android e iOS, desenvolvido com **React Native, Expo e TypeScript**.

## Novidades
- Dashboard com progresso e próximas entregas
- Cadastro com 5 campos (título, disciplina, descrição, data e prioridade)
- Validação de campos obrigatórios e data no formato AAAA-MM-DD
- Lista dinâmica com `FlatList`, pesquisa e filtros
- Edição, conclusão/reabertura e exclusão com confirmação
- Calendário mensal com indicadores de atividades
- Estatísticas e progresso por disciplina
- Modo claro/escuro e persistência local via AsyncStorage
- Componentes personalizados com `props`

## Executar no VS Code

1. Abra **esta pasta** (a que contém `package.json`) no VS Code.
2. Instale o Node.js e o Expo Go no Android.
3. No terminal:

```bash
npm install
npx expo install --fix
npx expo start -c
```

4. Escaneie o QR Code com o Expo Go. PC e celular devem estar na mesma rede Wi-Fi.

**Compatibilidade:** projeto configurado para Expo SDK 58. O comando `expo install --fix` alinha as bibliotecas à versão instalada. Se a instalação reclamar de dependências, envie a mensagem de erro antes de usar `--force`.

## Observações
- Os dados são salvos **somente no aparelho**; não existe servidor ou conta.