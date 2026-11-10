# Dra. Giuliana Lima · prévia de site

Prévia estática baseada em [informações públicas da profissional](https://linktr.ee/dragiulianapsico). O site está em [`site/`](site/README.md) e foi preparado para GitHub Pages.

## Executar localmente

```bash
cd site
node serve.mjs
```

Abra http://127.0.0.1:3001.

O fluxo [Publicar site](.github/workflows/pages.yml) envia `site/` ao GitHub Pages após commits na branch `main`. O protótipo usa `noindex` e não contém formulários, analytics ou cookies.

Na Vercel, [`vercel.json`](vercel.json) define `site/` como diretório de saída. Use a raiz deste repositório como **Root Directory** no projeto Vercel.
