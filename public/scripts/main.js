(function() {



  var projects           = document.querySelectorAll('.project')
  var professionalToggle = document.getElementById('show-professional')
  var personalToggle     = document.getElementById('show-personal')
  var allToggle          = document.getElementById('show-all')
  var projectToggles = [professionalToggle, personalToggle]
  // console.log(projects)

  // professionalToggle.onclick = showProfessional
  personalToggle.onclick = showPersonal

  projectToggles.forEach(function (toggle) {
    toggle.onclick = toggleDisplay
  })
  allToggle.onclick = displayAll

  function displayAll() {
    var toggle = this.id.replace('show-', '')
    var classes
    for (var i = 0; i < projects.length; i++) {
      classes = projects[i].classList
      if (classes.contains('hidden')) {
        classes.remove('hidden')
      }
    }
  }

  function toggleDisplay() {
    var toggle = this.id.replace('show-', '')
    var classes
    console.log(toggle)

    for (var i = 0; i < projects.length; i++) {
      classes = projects[i].classList
      // Hide everything.
      if (!classes.contains('hidden')) {
        classes.add('hidden')
      }
      // Display the ones selected.
      if (classes.contains(toggle)) {
        classes.remove('hidden')
      }
    }
  }

  function showPersonal() {

    // projects.forEach(function (project) {
    //   var classes = project.classList
    //   console.log(classes)
    // })

    for (var i = 0; i < projects.length; i++) {
      // console.log(projects[i].classList)
      var classes = projects[i].classList
      if (classes.contains('personal')) {
        classes.add('hidden')
      }
    }

    // console.log(this)
    // var classes = this.classList
    // classes.length ? classes.toggles('hidden') : classes.add('hidden')
    // this.classlist.toggle('hidden')
  }

})()
