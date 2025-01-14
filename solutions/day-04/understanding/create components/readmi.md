
# JavaScript Function

```
const getUserInfo = (firstName, lastName, country, title, skills) => {
  return `${firstName} ${lastName},  a ${title} developer based in ${country}. He knows ${skills.join(' ')
  } `
}

// When we call this function we need parameters
const skills = ['HTML', 'CSS', 'JS', 'React']
console.log(
  getUserInfo('Asabeneh', 'Yetayeh', 'Finland', 'FullStack Developer', skills)
)
```

# Javascript class 

```
class Parent {
  constructor(firstName, lastName, country, title) {
    // we bind the params with this class object using this keyword
    this.firstName = firstName
    this.lastName = lastName
    this.country = country
    this.title = title
  }
  getPersonInfo() {
    return `${this.firstName} ${this.lastName},  a ${this.title} developer base in ${this.country} `
  }
  parentMethod() {
    // code goes here
  }
}

const p1 = new Parent('Asabeneh', 'Yetayeh', 'Finland', 'FullStack Developer')

class Child extends Parent {
  constructor(firstName, lastName, country, title, skills) {
    super(firstName, lastName, country, title)
    this.skills = skills
    // we bind the child params with the this keyword to this child object
  }
  getSkills() {
    let len = this.skills.length
    return len > 0 ? this.skills.join(' ') : 'No skills found'
  }
  childMethod() {
    // code goes here
  }
}

const skills = ['HTML', 'CSS', 'JS', 'React']

const child = new Child(
  'Asabeneh',
  'Yetayeh',
  'Finland',
  'FullStack Developer',
  skills
)

```

# functional components

```
function App() {
  
  return (
    <>
    
    </>
  )
}

export default App
```

```

// React component syntax
// it can be arrow function, function declaration or function expression
const jsx = <tag> Content </tag>
const ComponentName = () => {
  return jsx
}


const welcome = 'Welcome to 30 Days Of React'
const title = 'Getting Started React'
const subtitle = 'JavaScript Library'
const firstName = 'Asabeneh'
const lastName = 'Yetayeh'
const date = 'Oct 3, 2020'
const author = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
}

//JSX element, display
const Display = () => {///////////////////////////////////////
  return ` Title : ${title} subtitle ${subtile}`
}

//JSX element, usercard
const UserCard = () => (
  <div className='user-card'>
    <img src={Whatever} alt='asabeneh image' />
    <h2>
      {author.firstName} {author.lastName}
    </h2>
    <Display/> ////////////////////////////////////////////////
  </div>
)

// JSX element, header
const Header = () => {
  return (
    <header>
      <div className='header-wrapper'>
        <h1>{welcome}</h1>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <p>
          Instructor: {firstName} {lastName}
        </p>
        <small>Date: {date}</small>
      </div>
    </header>
  )
}
```
# dumb component 
#### because it does not take any parameters  and we cannot change the action text dynamically. We need to pass props to the button, to change the value dynamically
```
const Button = () => <button>action</button>
```



# Rendering components
##### when we call JSX elements we use curly brackets `{jsxELEMENT}`
##### when we call React COmponents we do 
##### `<ComponentName propsName = {'data-type'} />`