tinymce.init({
  selector: 'textarea#default',  // change this value according to your HTML
  height: 300,
  statusbar: false,
  menubar: false,

  formats: {
    removeformat: [
      // Configures `clear formatting` to remove specified elements regardless of it's attributes
      { selector: 'b,strong,em,i,font,u,strike', remove: 'all' },

      // Configures `clear formatting` to remove the class red from spans and if the element then becomes empty i.e has no attributes it gets removed
      { selector: 'span', classes: 'red', remove: 'empty' },

      // Configures `clear formatting` to remove the class green from spans and if the element then becomes empty it's left intact
      { selector: 'span', classes: 'green', remove: 'none' }
    ]
  }

});
