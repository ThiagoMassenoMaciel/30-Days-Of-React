# Day 3 Setting Up [link](https://www.30daysofreact.com/30-days-of-react/64c58efe9338b87c24cafeef)


#### git bash
```
npx create-react-app name-of-your-project
```
#### aconteceu um erro , faltou baixar a lib `@testing-library/react@13.4.0`
```
cd name-of-your-project
```
###### vai no arquivo `package.json` , entra no pedaço dependencies, e adiciona em sua array a dependencia desta lib 
```
"testing-library/react": "13.4.0"

```

# Alterar a política de execução do PowerShell: depois de colocar para `Set-ExecutionPolicy RemoteSigned` você irá conseguir executar os scripsts
# depois de terminar a programação se lembrar de colocar a politica estritiva para evitar executar scripts de virus `Set-ExecutionPolicy Restricted`
```
// para saber qual politica esta ativa
Get-ExecutionPolicy
```
```
//Mudar para poder executar o script do react
Set-ExecutionPolicy RemoteSigned
```

```
//Mudar para não poder executar o script do react VOLTAR O QUE ERA ANTES
Set-ExecutionPolicy Restricted
```


###### depois de salvo as alterações, agora vai no terminal e executa
```
npm install
```
###### Se não der certo executa
```
npm install -g npm-check-updates
ncu -u
npm install
```
###### Se tiver algumas vlnerabilidades execute um depois do outro e leia . Não use o --force
```
npm audit
```

```
npm audit fix
```

```
 npm audit fix --force

```

```
 npm audit fix --force

```
```
 npm install

```
```
 npm audit fix --force

```

#### Executar este para carregar a pagina web do react 
```
npm start
```
#### carregou a página mas apareceu um erro foi faltou um pacote 
```
 npm install web-vitals

```



###### takes me 10 hours apresentation-day1-day2

### What i learned
###### aplying css on each element JSX in diferent ways: `internal styles`, `inline style`, `object style`
###### inject data into the JSX element

### how to create JSX elements and also how to inject data to JSX
###### Prerequisites requires intermediate level in 
###### `html`, `css`, `javascript`
###### What is React ?
###### Why we choose to use React ?
###### JSX Element
###### Commenting a JSX element
###### Rendering a JSX Element
###### The root div is the gateway to connect all react components to the index.html
###### Attach some packages from CDN to the body of index.html throught tags `<script>`
###### use `babel`, `React and ReactDOM library` on CDN(`Content Network Delivery`) way
###### We can render only one JSX element at a time
###### Create elements JSX
###### A lot of elements JSX wrapped in just one element JSX
###### use inline style css to all the JSX `and clasName`
###### use internal style css to all the JSX `tag <style> into the tag <head>`
###### use object style css to all the JSX
###### use internal style to all the JSX
###### Injecting data to a JSX Element `use { }`
###### Injecting a string to a JSX Element
###### Injecting a number to a JSX Element
###### Inject elements from array to JSX element `no warning` and `child key unique`