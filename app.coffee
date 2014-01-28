router = new Trails

$frame = $('#frame')

handler = (e) -> 
  path = e.data.replace '#!','' 
  window.location.hash = "#!/store#{path}"

# Listen to message from child window

window.addEventListener 'message', handler, false

$frame.onMessage
router.route '/store', (path) ->
  popStore()

router.route '/store/p/:slug', (path) ->
  popStore "#!/p/#{path.params.slug}"


popStore = (path) ->
  src = $frame.attr('data-url') + path
  $frame.attr 'src', src


