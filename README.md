# Cowsay Pragmatic Programmer

CLI para mostrar uma dica do livro [programador pragmático](https://www.amazon.com.br/Programador-Pragm%C3%A1tico-Aprendiz-Mestre/dp/8577807002/ref=sr_1_1).

Utilizei esse projeto também como objeto de estudo sobre [bun.sh](https://bun.sh/docs/bundler) e diferentes tipos de builds. 

## Como instalar?

```bash
bun install cowsay-pragmatic-programmer -g
```

## Como usar

Para gerar uma dica randômica.

```bash
cowsay-pragmatic-programmer
```

Para gerar apenas uma dica por dia. Cada dia vai gerar uma dica diferente e as dicas serão sequencias.

```bash
cowsay-pragmatic-programmer -d
```

#### Output:
```
 ________________________________________
/ 56. Só comece quando estiver pronto:   \
| Você ganhou experiência durante toda a |
\ sua vida. Não ignore pequenas dúvidas. /
 ----------------------------------------
        \   ^__^
         \  (oo)\_______
            (__)\       )\/\
                ||----w |
                ||     ||
```
