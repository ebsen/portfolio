(function() {

  function displayAll() {
    var toggle = this.id.replace('show-', '');
    var classes;
    for (var i = 0; i < projects.length; i++) {
      classes = projects[i].classList;
      if (classes.contains('fadeOut')) {
        classes.remove('fadeOut');
      }
      if (classes.contains('hidden')) {
        classes.remove('hidden');
      }
      // IDEA: Remove event listeners here?
    }
  }

  function hide() {
    // console.log(this);
    if (this.classList.contains('fadeOut')) {
      this.classList.add('hidden');
    }
  }
  
  function toggleDisplay() {
    // Determine which type of project to hide.
    var toggle = this.id.replace('show-', '');
    var classes;
    var events = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    var type = 'webkitAnimationEnd'
    // console.log(toggle);

    for (var i = 0; i < projects.length; i++) {
      classes = projects[i].classList;

      // Hide everything
      // if (!classes.contains('hidden')) {
      //   classes.add('hidden')
      // }
      // Display the ones selected
      // if (classes.contains(toggle)) {
      //   classes.remove('hidden')
      // }

      // Reset our list.
      if (classes.contains('fadeOut')) {
        classes.remove('fadeOut');
      }
      if (classes.contains('hidden')) {
        classes.remove('hidden');
        classes.add('fadeIn')
      }

      // Apply the animation to remove it
      if (!classes.contains(toggle)) {
        classes.add('fadeOut');
        // projects[i].addEventListener(type, hide);
        // projects[i].removeEventListener(type, hide);
      }
      events.split(' ').forEach(function (type) {
        projects[i].addEventListener(type, hide);
      })
    }
  }

  // var allToggle          = document.getElementById('show-all');
  // var professionalToggle = document.getElementById('show-professional');
  var projects           = document.querySelectorAll('.project');
  // var projectToggles     = [professionalToggle, personalToggle];
  // var personalToggle     = document.getElementById('show-personal');
  var toggles = {
    all:          document.getElementById('show-all'),
    professional: document.getElementById('show-professional'),
    personal:   document.getElementById('show-personal')
  };

  toggles.all.onclick = displayAll;
  toggles.professional.onclick = toggleDisplay;
  toggles.personal.onclick = toggleDisplay;

  // for (var toggle in toggles) {
  //   // console.log(toggle);
  //   if (toggle !== 'all') {
  //     // console.log(toggle);
  //     toggle.onclick = toggleDisplay;
  //   }
  // }




  // console.log(projects)

  // professionalToggle.onclick = showProfessional
  // personalToggle.onclick = showPersonal;

  // projectToggles.forEach(function (toggle) {
  //   toggle.onclick = toggleDisplay;
  // });
  // allToggle.onclick = displayAll;

  // projectToggles.forEach(function (toggle) {
  //   toggle.addEventListener('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', hide);
  // });


  // function displayAll() {
  //   var toggle = this.id.replace('show-', '')
  //   var classes
  //   for (var i = 0; i < projects.length; i++) {
  //     classes = projects[i].classList
  //     if (classes.contains('hidden')) {
  //       classes.remove('hidden')
  //     }
  //   }
  // }

  // function toggleDisplay() {
  //   var toggle = this.id.replace('show-', '')
  //   var classes
  //   console.log(toggle)
  //
  //   for (var i = 0; i < projects.length; i++) {
  //     classes = projects[i].classList
  //     // Hide everything
  //     if (!classes.contains('hidden')) {
  //       classes.add('hidden')
  //     }
  //     // Display the ones selected
  //     if (classes.contains(toggle)) {
  //       classes.remove('hidden')
  //     }
  //   }
  // }


  // function showPersonal() {

    // projects.forEach(function (project) {
    //   var classes = project.classList
    //   console.log(classes)
    // })

    // for (var i = 0; i < projects.length; i++) {
      // console.log(projects[i].classList)
      // var classes = projects[i].classList
      // if (classes.contains('personal')) {
        // classes.add('hidden')
      // }
    // }

    // console.log(this)
    // var classes = this.classList
    // classes.length ? classes.toggles('hidden') : classes.add('hidden')
    // this.classlist.toggle('hidden')
  // }

})();
