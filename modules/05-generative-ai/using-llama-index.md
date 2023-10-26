# Llama Index

Llama Index is a framework for building apps with LLM's. One feature we will look at in particular is vector indexing, where we take documents, index them using vector embedding, enabling us to use natural language to interact with their contents. So for example, you could chat with characters in a book or ask an LLM to read your high school diary and perhaps summarize a week of it in the form of a novel. 

Llama Index was [originally written]() in Python, but they have recently released a [Typescript repo].[Typescript](https://www.typescriptlang.org/) is newer form of Javascript that was developed to be easier to debug, but requires more strict syntax. a We can clone this repo and use some of the examples as a template to swap out our own documents.

In addition to text and PDF's, [Llama Hub](https://llamahub.ai/) has many different modules for connecting data sources. 

## Getting started

1) First clone the forked LlamaIndexTS-ReCode repo.
2) Install [`pnpm`](https://pnpm.io/installation#:~:text=Node.js%20installed.-,npm%20install%20%2Dg%20pnpm,-or) which is a spinoff of npm that they insist on using.
```bash
$ npm install -g pnpm # -g is for global
```
>The `-g` option means you can install an npm package 'globally' and run it like any other command line program.
3) Follow the install instructions, making sure you have your OpenAI API key ready to paste in on the first step like so: 
```bash
$ export OPENAI_API_KEY="<paste your key here>"
```
4) Follow the rest of the install instructions on the repo.

