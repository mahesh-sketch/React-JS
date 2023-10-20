
function customRender(reactElement,container){
    var domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    // This will create a problem because in this we add more attribute
   /* 
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target',reactElement.props.target)*/

    for (const prop in reactElement.props) {
        if(prop === 'children') continue;

       domElement.setAttribute(prop,reactElement.props[prop])
        // console.log(reactElement.props[prop])
    }
    container.appendChild(domElement)
}


const maincontainer = document.querySelector('.root')
const reactElement = {
    type : 'a',
    props: {
        href: 'https://google.com',
        target: '_blank',
    },
    children: 'Click me to visit google'
}

customRender(reactElement,maincontainer)