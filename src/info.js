export var info={

    propsInfo:{
        facts: [`What is a prop?`,`A prop is a piece of information you can pass in JSX tags `,
        `What's the use of a prop?`,`It helps you have dynamic data. So like if you have an h1 tag to display username, you could pass in a prop of the user name in the h1 tag`,
        `How do you do a prop?`,`So in the component tag, you pass in info. So <Username name:""Sai""/>
        - And in the component method, you can do watever with the prop:
        - function Username({name}){
          <h1> name </h1>
        }`]    
    },
    childrenProps : {
        facts: [`What is a child prop?`,`A child prop are html tags passed in between the component tags.`,
        `Are JS objects passed in between tags also considered children?`,`NA`,
        `How do you pass child props?`,`<Component> 
        <!-- These all are child props below-->
        <p2>something <p2>
        <p3> something <p3>
        </Component>`,
        `How do you access the child prop?`,`function Component(props,children)
        - It HAS to be named children`,
        `Can you access a sub compartment inside a child prop?`,`NA`]
    },
    simpleList : {
        facts: [`If you have an array, how can you iterate through and place those elements in the HTML page?`,`- You use mapping:
        - list : [a,b,c]
        - listMap : list.map((letter):>{
        return <h3>letter</h3>
        })`]
    },
    properList : {
        facts: [`How do you pass in an object? How do you destructure/make use of a JS object that's passed in?`,`objList.map((obj):>{
            return <Component something:obj/>
         })
         
         function Component(props){
              const{prop1, prop2, prop3} : prop.obj
         }`]
    },
    keyOperator : {
        facts: [`What's the point of the key operator?`,`So React has a rule that you if you're mapping a list, each element HAS to have a key. So that you can control individual elements`,
        `How do you do a key operator with an automated index?`,`list.map((obj,index):>{
             <Component info:obj key:{index}/>
        })`,
        `How do you do a key operator with an object property?`,`list.map((obj):>{
             <Component info:obj key:{obj.Property}/>
        })`,
        `If key operator is based off an object property, how does it check and make sure property isn't repeated?`,`NA`,
        `If you pass in multiple objects, do you need unique key passed in the props?`,`NA`]
    },
    spreadOperator : {
        facts: [`What does a spread operator do? `,`It takes all the properties of an objet and breaks it down into a list`,
        `How do you use a spread operator?`,`<Component key : {obj.id} {...obj} />`]
    },
    eventListeners : {
        facts: [`What are the different ways to invoke event methods on html objects?`,`- Anonymous functions
        - Const reference`,
        `How do you wire an anonymous method to an onClick?`,`<button onClick:{():>{console.log('hi')}}`,
        `How do you wire a constant definition method to an onClick?`,`const something : () :> {
           console.log('something');
        }
        <button onClick:{something} />`,
        `What's the problem with setting onclick to a reference with parameters? So how do you solve the problem?`,`So if you do like onClick:{something(somethin)}, it's going to automatically invoke that something() method right when things are rendered, so it won't behave like an event anymore. 
        
        - To solve this problem, you gotta put that constan reference inside a lambda, so:
        - <buttonClick onClick : {():{something(somethin)}}`,
        `What are 2 common event listeners on websites?`,`- onClickEvent: Respnd to clicks 
        - onMouseOver: Responds when mouse hovers over object`]
    },
    importExport : {
        facts: [`How do you export a reference in js? And how do you import it assuming it's in the same folder?`,`const whatever : () :> { }
        export whatever
        
        -Import:
        import whatever from './Whatever'`,
        `Explain difference between normal export and default export`,`- If you do a simple export, like export whatever, when you import it, you have to use the same exact name. So in the importing file, you still have to use the name whatever
        - However, if you do default export whatever, in the import file, you can do import kaka from './something' and now you can use the name kaka instead. 
        - So in summary default export, you can use whatever name you want`,`Difference between import {x} and import x`,`import {x} simply imports a specific module with that exact name whereas import x imports the default export, and  the name x desn't have to math unlike import {x}`]
    },
    useState : {
        facts: [`Give a gist of useState`,`- useState is a hook, where you hook it onto a variable. And whenever that variable changes, it makes sure any re renders regarding that variable take place.
        - For example, if you change a buttonName variable, it would rerender the button and change the name on the button`,
        `Show an useState demonstration`,`const(value,setVal) : useState(someVar)
        setVal(3)
        - So essentialy setVal is a setter function I can use to set the value of someVal`,
        `What does useState function take and return?`,`- The function's parameters take in a variable, object or literal. Whatever
- It returns an array with 2 objects,
- First parameter returns the value of the object or param that was passed in
- Second parameter returns a setter function you can use to change the value of the object you passed in`
        ]
    },
    hookRules : {
        facts: [`What are hooks?`,`Hooks are useable functions for different applications`,`Where in js code can hooks be called?`,`- Only inside component functions`,
        `What's up with conditionals and hooks?`,`- Hooks CANNOT be called inside if statements or any conditional statements. Either you call them or your don't use them, that's all`]
    },
    filter : {
        facts: [`What is the filter function used for? Filter an array where all values above 5 are removed`,`- The filter function can be used to remove elements in an array based on a certain condition. So in a lambda function, if true is returned, the element is kept, otherwise it's removed
        - arr.filter((element):>return element<:5;)`]
    },
    useStateInfo : {
        facts: [`When using useState on an object, how do you use the setter function so that only 1 of the class's properties gets changed instead of the whole object?`,`- You gotta use the spread operator to keep all values except the ones you want to change the same:
        - So i.e.:
        - obj : {blah blah blah}
        - setVal({...obj,something:3})
        - ^so in the above example, every object in obj is preserved, except something, which is changed to 3`,
        `When you run multiple async functions of a useState setter, what's the problem that will occur? How do you circumvent this problem?`,`- Each async function will point back to the original value, so even if all 3 async functions run, they will just change from the original old value
        - To circumvent this probem, each asyncall has to be able to get the current value. In order to do that, instead of setting to a value, you can set using a function:
        - setVal((prevState):>{ return prevState+1})`,
        `What does functional useState update do?`,`Functional update allows you to get the current value and let's you modify it however you want`,
        
    ]
    },
    useEffectNotes : {
        facts: [`What is the point of useEffect?`,`useEffect is a hook that runs after anytime react is re-rendered. It's essentially an organizational way to take care of other logic that may not necessarily pertain to the front end logic of this component`,
        `So how do you use a useEffect hook?`,`In your component, you simply do:
        useEffect(():>{watever here goes;});`,
        `How do you run useEffect only the first time it's rendered`,`useEffect(():>{},[])`,
        `How do you run useEffect only after a certain value is changed?`,`useEffect(():>{},[val])`,
        `What's the pointof a cleanupfunction and how do you do?`,`- A cleanup function is a good practice to use in useEffect hooks, as it can prevent memory leaks or whatever. IDK the whole theory but I know it's good practice
        - In order to do a cleanup,all you do it return a function in the useEffect hook and in that functin you undo stuff like removin listeners you added, etc
        useEffect(():>{
        return () :>{ 
        removeListeners()
        watever()
        }})`]
    },
    fetchNotes : {
        facts: [`What does fetch do in js?`,`feth(url) must kind of be like rvest where you can get html and other things from a website`]
    },
    conditionalReturns : {
        facts: [`What's the point and how do you do a conditional return?`,`- Conditional returns in react are where different JSX components are returned based on a certain condition
        - if(bool){
           return <h1>true</h1>
        }
        else{
        return <h1>false<h1>
        }`]
    },
    shortCircuit : {
        facts: [`In react when you do val : q || 'stuff' what does this mean?`,`If q actually holds a value, then q's value is assigned to val otherwise, 'stuff' is assigned to val`,
        `In react when you do val : q && 'stuff' what does this mean?`,`If q holds a value, then 'stuff' is returned. Otherwise, if q holds no value, then q is returned`]
    },
    ternary : {
        facts: [`How do you use a ternary operator? Show exaple`,`return {bool ? <p>bool is true</p> : <p>bool is false</p>}`]
    },
    hideShowComponent : {
        facts: [`Show how you can hide or show components based on a condition`,`return {bool&&</Component>}`]
    },
    forms : {
        facts: [`Show a barebone form structure`,`<form onSubmit:{someMethod}>
        <input>
        <input>
        <button type:'submit'>button</button>
        </form>
        - Basically has to have inputs, a submit button and an optional onSubmit method to execute when submit button is hit`]
    },
    controlledInputs : {
        facts: [`Show how you do controlled inputs`,`<input val:{someVal} onChange:{(e):>{setSomeVal(e.target.value)}}/>`]
    },
    useRefNotes : {
        facts: [`What's the use of useRef`,`useRef is another hook that you can more simply use to hook a value and change it, unlike useState where you need to use an additional method`,
        `Show an example of useRef where you hook a value to an input tag`,`someVal : useref('lksjdf')
        <input ref:{someVal}/>
        - So now whenever input is changed that changed is transferred to someVal`,
        `How do you access the value of a useRef reference?`,`someVal.current.val`,
    `What's the use of useRef`,`useRef is another hook that you can more simply use to hook a value and change it, unlike useState where you need to use an additional method`,
        `Show an example of useRef where you hook a value to an input tag`,`someVal : useref('lksjdf')
        <input ref:{someVal}/>
        - So now whenever input is changed that changed is transferred to someVal`,
        `How do you access the value of a useRef reference?`,`someVal.current.val`,
        `What's a difference between useRef and useState/useEffect`,`useState and useEffect cause rerenders. So what this means is that useRef is better if you're handling back end variables rather than front end variables.`]
    },
    useReducerNotes : {
        facts: [`What's the point of useReducer`,`So it's like an integral of useState. So instead of using a bunch of useState hooks on a ton of variables, which makes your code messy and complex, you can use useReducer to manage all those variables in just 1 function and you won't concurrently be dealing with UI at the same time`,
        `What's the main gist of steps in executing a useReducer`,`- First step, you make an object that holds all your state variables you want to manage 
        - So when you make that useReducer hook, you insert that object and a reducer function
        - In that reducer function, your object's variables will be managed. In your function you need to put a switch where based on the action parameter passed in, different state variables you passed in get edited`,
        `How do you add items to your state, if it's like making a todo list`,`- In order to add things to your state variable, you simply do:
         newList : {...someList,action.payload}
         return {...state,someList:newList}`,
        `How do you remove from list in useReducer`,`- You map the list in order to remove and return the new list alongside state`]
    },
    propDrilling : {
        facts: [`What is prop drilling? What's the problem with prop drilling? What should we use instead?`,`- It's where you pass down some parameter down several componenets using props
        - It's not the best practice cause if you want to pass whatever parameter down, you have to keep sending it in a new component, which is unnecessary tedious work
        - Use the useContext hook`]
    },
    useContextNotes : {
        facts: [`What does useContext do?`,`So you surround your component in a context tag and pass values in that tag. Those values will be passed all the way down the component tree and can be acessed by any child components regardless of how far down.
        - This is why this is a good alternative to prop drilling`,
        `How do you do useContext provider?`,`- Create useContext object
        ContextObj : React.createContext()
        - Surround some compoennt tags in context object
        <ContextObj.Provider value:{someVar}>
        some compoennets here
        <ContextObj.Provider/>
        `,
        `Can you use useContext on a basic html tag like h1?`,`NA`,
        `How do you do useContext consumer?`,`const {obj} : useContext(ContextObj);
        - Now obj is an object with all the values you passed in`]
    },
    propTypes : {
        facts: [`What's the point of proptypes?`,`It's a way to deal with props when they might not always be passed in. So prop error handling in a way `,
        `How do you do prop error handing? Through PropType objects`,`-So suppose you have a component C taking in props, you essentially make propertie for that component speicifying the data type requirements of the prop and default values
        - C.propTypes : {
          prop1:  PropTypes.image.isrequired
          prop2: PropTypes.text.isrequired
        }
        - C.defaultProps : {
           prop1: someImgUrl
           prop2: 'horse'
        }`,
        `How do you do prop error handing? Through shortcircuit operators`,`In the component, you can do prop or a default value:
        - <h2>{prop1||'hi dude'}`]
    },
    reactRouting : {
        facts: [`What does routing pages in react mean anyways?`,`Routing pages in react is where React shows certain components based on the url of the website`,
        `What's the basic gist to routing in React?`,`- import BrowserRouter and place your map inside BrowserRouter map
        - Inside the <Router> tags, for each new url, you create a new <Route> tag and inside o those tags, you can add whatever components you want
        `,
        `How do you link a different path to a different route? Show the tag`,`<Route path:'/slkjdf' > <Component/> </Route>`,
        `What does exact path in routing do?`,`- So if you do just path in a route, you can have multiple routes with the same string values or they're subsets of other paths. In that case, both would show up.
        - However if you only want 1 route to show up, then you do exact path : 'watever'`,
        `What do a path of * mean in routing?`,`The * in routing means that this route is always automatically activated....unless you use a switch component`,
        `Explain what the use of a router inside a switch component is `,`- So using a switch component always ensure some route is always selected instead of just hitting upon a path that may not exist and it ONLY displays the first route path it fulfills`,
        `Show an example of a switch router with a default case`,`<Switch>
        <Router>
        <Route path:'/slkjdf'></Route>
        <Route path:'/route2'></Route>
        <Route path:'*'></Route>
        </Router>
        </Switch>`,
        `What do links do?`,`Literally what you think they do. Click on them and they take you to a certain page.`,
        `Show an example of a link`,`<Link to:'/somewhere'></Link>`]
    },
    urlParams : {
        facts: [`How are parameters passed from router to url?`,`- So in the route tag, in the path, you have to have a /: segement
        - So i.e. 'somewhere/:id'
        - You also need to have a Route path with a children attribute
        - So i.e. '<Route path:'/somewhere/:id' children:{</Person>}
        - So here id is a parameter. And whatever React functionality sets that path, the React router sends that id parameter to the children tags, and the it can be accessed inside the children component`,
        `How can url parameters be accessed?`,`- By using the useParams() hook
        - So in whichever children component, you can acess the link url param passed to it using the useParam() tag
        - So: const{data} : useParams()`]
    },
    reactMemo : {
        facts: [`What doe react memo do and how do you use it?`,`- It improves efficiency where rerenders only take place if a certain hooked vaue actually changes
        - To use it, you surround the component's functional logic in a React.memo()`]
    },
    useCallBackNotes : {
        facts: [`What does useCallBack do and how do you use it?`,`useCallBack is similar to React.memo but useCallBack is more speicifc and can just be hooked to just a function
        - const func:useCallback(():>{whatever var},[var]);
        - So now rerenders only happen when useCallback takes place`]
    },
    useMemoNotes : {
        facts: [`How is useMemo any different from useCallback?`,`The only difference is that apparently useCallback returns a function while useMemo returns a value, which I guess can be used for certain situations`]
    }
}

