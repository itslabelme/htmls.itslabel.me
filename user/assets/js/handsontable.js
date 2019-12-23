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
var hotElement = document.querySelector('#translation-its1');
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
  //colWidths: [45, 100, 160, 60, 80, 80, 80],
  rowHeights: 50,
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
  dropdownMenu: true,

};
var hot = new Handsontable(hotElement, hotSettings);

