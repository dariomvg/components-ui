# Components fast
✨ Fast and customizable  
✨ Easy to use  
✨ It doesn't weigh too much  
✨ [Github project](https://github.com/dariomvg/components-ui)  
## Getting started
### Installation
```bash
npm install components-fast
```
### Usage
Import your component and use it.
```js
import {Button} from 'components-fast'
 
export default function GetButton () {
    return (
        <Button bg="blue" onClick={yourFunction}>Send</Button>
    )
}
```
Command run and view in localhost
```
npm run dev
```
## Table of Contents

* [Installation](#installation)
* [Imports](#imports)
* [Components](#components)
* [Props](#props)
* [Colors](#colors)
* [Contacts](#contacts)

## Installation
```bash
npm install components-fast
```
### check if it has been installed correctly in your package.json
```bash
{
  "name": "your-project",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
  },
  "dependencies": { 
    "components-fast": "^0.0.1", // ←  here
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {...}
}
```

## Imports
```bash
import {Button, Badge} from "components-fast"
```

## Components  
#### Badge
```js
    <Badge variant="blue">React</Badge>
```
#### Button
```js
    <Button bg="orange" onClick={yourFunction}>Send</Button>
```
#### Card
```js
    <Card bg="dark"><h1>Hello world</h1></Card>
```
#### Loader
```js
    <Loader />
```
#### CarrouselImages
```js
    <CarrouselImages array={images} width="500px" height="450px" />
```
#### Collapse
```js
    <Collapse title="box title" bg="dark"><p>Hello world</p></Collapse>
```
#### Modal 
```js
    <Modal titleButton="open modal"><p>Hello world</p></Modal>
```
#### Toggle  

```js
    <Toggle onClick={yourFunction} />
```

## Props
| Components           | props                         | Details                    
| -------------        | -------------       | -------------                  
| Badge   | bg/width/variant | Variant and bg cannot be both together |
| Button  | bg/onClick|  bg = colors  |
| Card    | bg | bg = dark / light |
| CarrouselImages| array/auto/time/width/height| only images |
| Collapse| title/bg/width  | bg = dark / light |
| Modal  | titleButton| button title |
| Loader  |   without props | - |
| Toggle  | without props| onClick |

## Colors
   - violet
   - blue
   - green
   - orange
   - yellow
   - purple
   - red
   - teal
   - transparent
#### colors for card and Collapse
   - dark
   - light
 
#### Badge variant colors    
##### - bg and variant cannot be together in Badge component
   - violet 
   - blue 
   - green 
   - gray 
   - yellow 
   - orange 
   - red 
   - teal 
   - pink 

## Contacts 
[Github Personal](https://github.com/dariomvg)
[Linkedin](https://www.linkedin.com/in/dario-martinez-597486291/)
[Github project](https://github.com/dariomvg/components-ui)

