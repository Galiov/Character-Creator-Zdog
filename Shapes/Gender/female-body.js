const TAU = Zdog.TAU;

export const femaleBody = new Zdog.Group({});

const HeadGroup = new Zdog.Group({
  addTo: femaleBody,
  translate: { y: -115 },
});

const neck = new Zdog.Shape({
  addTo: HeadGroup,
  path: [{ y: 0 }, { y: -8 }],
  stroke: 30,
  color: 'white',
});

const head = new Zdog.Hemisphere({
  addTo: neck,
  diameter: 130,
  translate: { y: -75 },
  rotate: { x: (TAU / 8) * 3, y: TAU / 2 },
  stroke: 5,
  color: 'white',
});

export const LowerBodyFemale = new Zdog.Group({
  addTo: femaleBody,
  translate: { y: 30, z: -5 },
});

const hips = new Zdog.Shape({
  addTo: LowerBodyFemale,
  path: [{ x: 10 }, { x: -10 }],
  stroke: 100,
});

const thigh = new Zdog.Shape({
  addTo: hips,
  path: [{ y: 30 }, { y: 100 }],
  translate: { x: -33, z: -2 },
  stroke: 50,
  color: 'white',
});

const thigh2 = new Zdog.Shape({
  addTo: hips,
  path: [{ y: 30 }, { y: 100 }],
  translate: { x: 33, z: -2 },
  stroke: 50,
  color: 'white',
});

const leg = new Zdog.Shape({
  addTo: thigh,
  path: [{ y: 100 }, { y: 150 }],
  stroke: 50,
  color: 'white',
});

const leg2 = new Zdog.Shape({
  addTo: thigh2,
  path: [{ y: 100 }, { y: 150 }],
  stroke: 50,
  color: 'white',
});

export const feetFemale = new Zdog.Group({
  addTo: femaleBody,
  translate: { y: 210, z: 10 }
});

const foot = new Zdog.RoundedRect({
  addTo: feetFemale,
  width: 15,
  height: 45,
  cornerRadius: 15,
  translate: { x: -35 },
  rotate: { x: TAU/4},
  fill: true,
  stroke: 50,
  color: 'white'
});

const foot2 = new Zdog.RoundedRect({
  addTo: feetFemale,
  width: 15,
  height: 45,
  cornerRadius: 15,
  translate: { x: 35 },
  rotate: { x: TAU/4},
  fill: true,
  stroke: 50,
  color: 'white'
});

export const UpperBodyFemale = new Zdog.Group({
  addTo: femaleBody,
});

const chest = new Zdog.Rect({
  addTo: UpperBodyFemale,
  width: 35,
  height: 55,
  translate: { y: -55 },
  stroke: 60,
  color: 'white',
});

const box = new Zdog.Box({
  addTo: chest,
  width: 85,
  height: 30,
  depth: 30,
  stroke: 10,
  color: 'black',
  leftFace: 'black',
  rightFace: 'black',
  topFace: 'black',
  bottomFace: 'black',
  backface: 'black',
});

const armUpL = new Zdog.Shape({
  addTo: chest,
  path: [{ y: 0 }, { y: 35 }],
  translate: { x: -50, y: -25 },
  stroke: 40,
  rotate: { z: TAU / 10 },
  color: 'white',
});

const armUpR = new Zdog.Shape({
  addTo: chest,
  path: [{ y: 0 }, { y: 35 }],
  translate: { x: 50, y: -25 },
  stroke: 40,
  rotate: { z: -TAU / 10 },
  color: 'white',
});

const armDownL = new Zdog.Shape({
  addTo: armUpL,
  path: [{ y: 35 }, { y: 100 }],
  stroke: 40,
  color: 'white',
});

const armDownR = new Zdog.Shape({
  addTo: armUpR,
  path: [{ y: 35 }, { y: 100 }],
  stroke: 40,
  color: 'white',
});

const hands = new Zdog.Group({
  addTo: femaleBody,
  translate: { y: 20 }
})

const handLeft = new Zdog.Shape({
  addTo: hands,
  translate: { x: -125 },
  stroke: 50,
  color: 'white',
});

const handRight = new Zdog.Shape({
  addTo: hands,
  translate: { x: 125 },
  stroke: 50,
  color: 'white',
});
