Unorganized documents

Components
    - components = reusable UI block
    - function components: gets ko na agad to
    - JSX rule: isang parent element lang
    - reusing components
    - dapat capital name ng components
    - react recieves props as single object

JSX
    - javascript + html
    - must return one root element
    - use {} to embed js
    - attributes are camelCase: className, htmlFor, onClick
    - self closing tags must end with /
    - jsx complies to React.createElement()

Props
    - function parameters
    - data passing system in react
    - props are read only

State
    - memory ng component
    - data that can change over time inside the component
    - count is current value
    - setCount function to update it
    - useState(0) initial value
    - state is asynchronus

Events
    - attach events using camelCase
    - pass function reference not function call
    - inline arrow functions kung may arguements

Hooks
    - special react function na nagbibigay ng extra powers sa functional components
    - built-in hooks:
        - useState: reactive data
        - useEffect: para sa side effects (API calls, timers, subscription)
        - useRef: para sa direct DOM access or values na hindi nag rerender kapag nagbago

Conditional Rendering
    - show or hide UI based on condition
    - parang if else pero sa JSX
    - ternary operation (most common)
    - logical && (show something only if it's true)