var dataObject = [
  {
    source: 'Biotin',
    destination: 'Biotin'
  },
  {
    source: 'Xylitol',
    destination: 'Xylitol'
  },
  {
    source: 'Amino Acid',
    destination: 'Amino Acid'
  },
  {
    source: 'Biotin',
    destination: 'Biotin'
  },
  {
    source: 'Xylitol',
    destination: 'Xylitol'
  },
  {
    source: 'Amino Acid',
    destination: 'Amino Acid'
  },
  {
    source: 'Biotin',
    destination: 'Biotin'
  },
  {
    source: 'Xylitol',
    destination: 'Xylitol'
  },
  {
    source: 'Amino Acid',
    destination: 'Amino Acid'
  },

  {
    source: 'Biotin',
    destination: 'Biotin'
  },
  {
    source: 'Xylitol',
    destination: 'Xylitol'
  },
  {
    source: 'Amino Acid',
    destination: 'Amino Acid'
  },

  {
    source: 'Biotin',
    destination: 'Biotin'
  },
  {
    source: 'Xylitol',
    destination: 'Xylitol'
  },
  {
    source: 'Amino Acid',
    destination: 'Amino Acid'
  },

  {
    source: 'Biotin',
    destination: 'Biotin'
  },
  {
    source: 'Xylitol',
    destination: 'Xylitol'
  },
  {
    source: 'Amino Acid',
    destination: 'Amino Acid'
  },
  {
    source: 'Biotin',
    destination: 'Biotin'
  },
  {
    source: 'Xylitol',
    destination: 'Xylitol'
  },
  {
    source: 'Amino Acid',
    destination: 'Amino Acid'
  },
   {
    source: 'Biotin',
    destination: 'Biotin'
  },
  {
    source: 'Xylitol',
    destination: 'Xylitol'
  },
  {
    source: 'Amino Acid',
    destination: 'Amino Acid'
  },
   {
    source: 'Biotin',
    destination: 'Biotin'
  },
  {
    source: 'Xylitol',
    destination: 'Xylitol'
  },
  {
    source: 'Amino Acid',
    destination: 'Amino Acid'
  }  
];
var hotElement = document.querySelector('#hot');
var hotElementContainer = hotElement.parentNode;
var hotSettings = {
  data: dataObject,
  columns: [
    {
      data: 'source',
      type: 'text'
    },
    {
      data: 'destination',
      type: 'text'
    }
  ],
  stretchH: 'all',
  width: 1180,
  autoWrapRow: true,
  height: 600,
  maxRows: 100,
  manualRowResize: true,
  manualColumnResize: true,
  rowHeaders: true,
  colHeaders: [
    'Source',
    'Translation'
  ],
  manualRowMove: true,
  manualColumnMove: true,
  contextMenu: true,
  filters: true,
  dropdownMenu: true
};
var hot = new Handsontable(hotElement, hotSettings);

