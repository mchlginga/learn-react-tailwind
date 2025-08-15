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

---

Tailwind
    - utility first CSS framework > parang lego styles
    - instead of writing CCS files, gagamit ka ng class names para mag style

Tailwind Install / Setup sa React Project
    - ayaw gumawa saken ng npx, nag manual configuration nalang ako, pero nag try akong isolve like ilabas sa onedrive, i clear yung cache, reinstall ulit yung npm modules, ayaw parin. Sure ako sa npx yung may problema don, sayang oras para ifigure out pa kaya nag manual creation nalang ng configuration

    - yung pag manual is gumawa ako ng tailwind.config.js, postcss.config.js, tapos ES modules gamit ko don kase nung CommonJS nag error e

    - may nilagay din pala ako sa index.css inside ng src tapos cinall out ko siya sa loob ng main.jsx

Tailwind Layout

Flexbox

Active Flex Layout:
    - flex: horizontal by default
    - flex-col: vertical layout

Align Items:
    - items-start
    - items-center
    - items-end

Justify Content:
    - justify-start
    - justify-center
    - justify-between
    - justify-around
    - justify-evenly

Gap Between Items:
    - gap-1 and so on...

Grid

Activate Grid Layout:
    - grid

Number of Columns:
    - grid-cols-num

Gap Between Cells:
    - gap-4