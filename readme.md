# Static Boilerplate

A static template based on [hb-minimum], a minimal boilerplate for the Harp application, for use as a starting point for future static websites.

If you're ever curious about how Harp works, "[The Rules]" is a fantastic (and brief) introduction. See the full [Harp documentation] for more.

## Getting started

These instructions assume you have [Git] and [Node] already installed.

1. If it isn't already, install [Gulp] from the command line: `npm install -g gulp`.
2. Clone this repository (`git clone {repository URL}`) and change to the newly created sub-directory (`cd {repository-name}`).
3. Inside the folder, run `npm install`.
4. Write code!
5. Commit your changes back into the *master* branch and push them to the server with `git push` once you're done.
6. Upload the compiled output to sdstate.edu.

Our friend [Gulp] can help with some of this, specifically steps 4 and 6. Run `gulp commands` to learn more.

## A little more about Step Four
### Working locally

There's a lot of magic going on here, so let me explain some of it.

All the source files reside in `/public`. The HTML is written in [Jade]; the CSS is written in [Less]. (The docs for these languages are available in [Dash] too.)

To kick up a server, type `gulp serve`. Here's where the real magic happens:

* Your default browser will open a new tab for the website.
* This website will be available to _anyone else on the network_ at the "External URL" provided in the command line output.
* Changes you make to the files inside `public` will be reflected automatically (for everyone) as you save.
* If you get a compile error, it'll show up in big print at the top of the website. Once you fix the error and save, your website will return.
* Check out the BrowserSync UI page at http://localhost:3001 for some very neat stuff.

This lets us prototype publicly amongst the entire team. It doesn't get our website out to the public though. That comes next.

## A little more about Step Six
### Uploading to www.sdstate.edu

When you're ready to upload your changes to sdstate.edu, run the command `gulp compile` (or `gulp build`) to get back a complete website. (If you're still running `serve`, either quit or open a new Terminal tab for the `gulp compile` command.)

This website will appear in a directory defined in the `compiledOutput` variable inside our [gulp file](gulpfile.js). By default, this is  `www`. In any case, look for the new folder. If it looks like a website, it probably is.

## Credit

All of the magic here is thanks to the wonderful tools [Harp], [Gulp], and [BrowserSync].

[BrowserSync]: http://www.browsersync.io/
[Dash]: http://kapeli.com/dash
[Git]: http://git-scm.com/
[Gulp]: http://gulpjs.com/
[Harp]: http://harpjs.com/
[hb-minimum]: https://github.com/harp-boilerplates/hb-minimal
[The Rules]: http://harpjs.com/docs/development/rules
[Harp documentation]: http://harpjs.com/docs/
[Jade]: http://jade-lang.com/
[Less]: http://lesscss.org/
[Node]: http://nodejs.org/
