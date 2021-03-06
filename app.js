// Generated by CoffeeScript 1.6.3
(function() {
  var $frame, handler, popStore, router;

  router = new Trails;

  $frame = $('#frame');

  handler = function(e) {
    var path;
    path = e.data.replace('#!', '');
    return window.location.hash = "#!/store" + path;
  };

  window.addEventListener('message', handler, false);

  $frame.onMessage;

  router.route('/store', function(path) {
    return popStore();
  });

  router.route('/store/p/:slug', function(path) {
    return popStore("#!/p/" + path.params.slug);
  });

  popStore = function(path) {
    var src;
    src = $frame.attr('data-url') + path;
    return $frame.attr('src', src);
  };

}).call(this);
