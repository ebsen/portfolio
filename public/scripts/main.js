// (function() {
  var header = document.querySelector('header')
  var headroom = new Headroom(header, {
    'offset': 205,
    'tolerance': 5,
    'classes': {
      'initial': 'animated',
      'pinned': 'slideDown',
      'unpinned': 'slideUp'
    }
  })
  headroom.init()
// })();
