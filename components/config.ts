import { Easing } from '@tweenjs/tween.js'
const options: string[] = []
const algorithms: { [name: string]: (percent: number) => number } = {}
for (let type in Easing) {
  for (let mode in (Easing as any)[type]) {
    let name = type + mode
    if (name === 'LinearNone') {
      name = 'Linear'
    }
    options.push(name)
    algorithms[name] = (Easing as any)[type][mode]
  }
}

export const initialPhysics = {
  enabled: true,
  charge: -350,
  collision: true,
  collisionStrength: 20,
  centering: true,
  centeringStrength: 0.05,
  linkStrength: 0.1,
  linkIts: 1,
  alphaDecay: 0.02,
  alphaTarget: 0,
  alphaMin: 0,
  velocityDecay: 0.25,
  gravity: 0.5,
  gravityOn: true,
}

export const initialFilter = {
  orphans: false,
  parents: true,
  tags: [],
  nodes: [],
  links: [],
  date: [],
}

export const initialVisuals = {
  particles: false,
  particlesNumber: 0,
  particlesWidth: 4,
  linkOpacity: 0.7,
  linkWidth: 1,
  nodeRel: 4,
  nodeOpacity: 0.9,
  nodeResolution: 8,
  labels: 2,
  labelScale: 1.5,
  highlight: true,
  highlightNodeSize: 2,
  highlightLinkSize: 2,
  highlightAnim: false,
  animationSpeed: 250,
  algorithms: algorithms,
  algorithmOptions: options,
  algorithmName: 'CubicOut',
  linkColorScheme: 'gray.500',
  nodeColorScheme: [
    'red.500',
    'orange.500',
    'yellow.500',
    'green.500',
    'cyan.500',
    'blue.500',
    'pink.500',
    'purple.500',
  ],
  nodeHighlight: '',
  linkHighlight: 'purple.500',
  backgroundColor: 'white',
  emacsNodeColor: '',
  labelTextColor: 'white',
  labelBackgroundColor: 'black',
  labelBackgroundOpacity: 0.7,
}

export const initialBehavior = {
  follow: 'Zoom',
  followLocalOrZoom: true,
}

export const initialMouse = {
  highlight: 'hover',
  local: 'click',
  follow: 'double',
}
