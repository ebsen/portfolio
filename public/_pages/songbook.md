A little single-page hymnal web app of sorts for a few of the (public domain) songs we sing on Sundays with the kids.

This project went through a lot of iterations before I published anything, mostly because I kept redoing it. It turns out that HTML doesn't really offer any kind semantic markup or even a microformat for song lyrics. Because of this, I went through a lot of experimentation.

I knew I didn't want to manually update the markup on every song each and every time I changed something. So I tried something new and put the song lyrics themselves in as data, not markup. Then, I scripted the output I wanted in Jade.

Now, I could now change the markup _in a single place_ and all the songs would update. [That's dry, right there.](http://en.wikipedia.org/wiki/Don't_repeat_yourself)

(If you're curious, I ended up using unordered lists for each line of the chorus and verses.)

As a result, this project includes the greatest, most beautiful piece of template code I've ever written.
