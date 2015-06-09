Rock, Paper, Scissors is a game many of us learn as children. I thought I could use it to learn more about event handlers and logic in the browser.

The app waits for you to choose between rock, paper, or scissors. Once you do, [an event fires](https://developer.mozilla.org/en-US/docs/Web/Events). That event keeps a note of what you selected, gets the computer to pick, and notifies you whether you won or lost. The event only starts the game and updates the screen with the result. It doesn't know anything about the game itself. For that, we look to the model.

The model contains the all logic for the game. It knows that scissors beats paper, paper beats rock, and so forth. It knows what you selected (because the event shared that information) and it knows how to tell the computer to select either rock, paper, or scissors at random. It then compares those two selections, decides the winner, and gives that information back to the event.

The event updates the page to tell you whether you won, lost, or tied, and goes back to waiting for another selection.

It turns out, programming even very simple logic like "rock beats scissors, scissors beats paper, etc" can be done in all sorts of ways. I chose to keep the user interface and the game's logic very separate because I know and like the [Model-View-Controller](http://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller) pattern used in [iOS programming](https://developer.apple.com/library/ios/documentation/General/Conceptual/DevPedia-CocoaCore/MVC.html) and web frameworks like [Backbone](http://backbonejs.org/).
