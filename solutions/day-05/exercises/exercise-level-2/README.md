
# Projeto de exercicio-level-2
![aqui]('./30DaysOfReact-exercicio level 2 ===.png')

# ✒️ Autor 
#### Thiago Masseno Maciel
#### graduando em Sistemas de informação na faculdade [uni7](https://www.uni7.edu.br/)
#### portifólio [link aqui](https://thiagomassenomaciel.github.io/MYportifolio.github.io/)

# 🛠️ Construído com as tecnologias
#### html5
#### css3
#### React + Vite

# 📌Aprendizados 
#### Utilizar o compilador vite em conjunto com o react torna o desenvolvimento front-end mais rápido e fácil.
###### Deixar a propriedade do objeto como opcional no propTypes é n usar os `isRequired`
```
// styleSPAN n é obrigado ser passado por props
Main.propTypes = {
  styleSPAN: PropTypes.object,
  textSPAN: PropTypes.string.isRequired
}
```

```
// styleSPAN é obrigado ser passado por props
Main.propTypes = {
  styleSPAN: PropTypes.object.isRequired,
  textSPAN: PropTypes.string.isRequired
}
```
#### usar menos código repetido REFATORADO
###### IN ORDER TO DO THIS :
```

    <label htmlFor="firstName"></label>
    <input type="text" name="" id="firstName" placeholder='First Name' />

    <label htmlFor="lastName"></label>
    <input type="text" name="" id="lastName" placeholder='Last Name' />

    <label htmlFor="email"></label>
    <input type="email" name="" id="email" placeholder='Email' />
```
###### DO THIS :
```
{inputs.map((i, index) => ( <InputField key={index} id={i.id} type={i.type} placeholder={i.placeholder}/>) )}

```



# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
