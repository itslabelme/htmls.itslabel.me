//tinymce.init({
  // selector: 'textarea#default',  // change this value according to your HTML
  // height: 300,
  // toolbar: true,
  // menubar: false,
  // branding: false,
  // content_css : '../assets/css/tinymce-override.css',  // includes both CSS files in header
//});


tinymce.init({
  selector: 'textarea#default',
  plugins: 'image code',
  height: 400,
  branding: false,
  resize: false,
  statusbar:false,
  content_css : '../assets/css/tinymce-override.css,../assets/css/iframe.css',
  toolbar: 'undo redo | link image | fontsizeselect fontselect',
  //font_formats: 'Arial Black=arial black,avant garde;Indie Flower=indie flower, cursive;Times New Roman=times new roman,times;',
  /* enable title field in the Image dialog*/
  image_title: true,
  /* enable automatic uploads of images represented by blob or data URIs*/
  //automatic_uploads: true,
  /*
    URL of our upload handler (for more details check: https://www.tiny.cloud/docs/configure/file-image-upload/#images_upload_url)
    images_upload_url: 'postAcceptor.php',
    here we add custom filepicker only to Image dialog
  */

});