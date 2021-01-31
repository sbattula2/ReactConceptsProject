export default function ChildPropsDemonstration(){
    return <div><h2>Child Props Demonstration</h2><ChildDummy1><ChildDummy2></ChildDummy2></ChildDummy1><Summary></Summary></div>
}

function ChildDummy1({children}){
    return <div>
        <h3>I am coded into child dummy 1 component</h3>
        {children}
        <h3>I am coded into child dummy 1 component</h3>
        {children}
        <h3>I am coded into child dummy 1 component</h3>
    </div>
}

function ChildDummy2(){
    return <h3>---I am ChildDummy2Component and am not coded into child dummy 1 component</h3>
}

function Summary(){
    return <h3> So a recap of what happened above is that we made ChildDummy2 a child prop of ChildDummy1. 
        And we can position where the children go using {`{Children}`}</h3>
}