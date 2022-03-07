---
title: Photo Widget
subtitle: Photos on your home screen using widgets
date: 2020-09-22
platforms:
  - iOS
  - macOS (Apple Silicon)
app_store_app_id: 1532588789
app_store_url: https://apps.apple.com/app/id1532588789
---

Available on iOS and macOS (Apple Silicon only).

<br>

<h3 id="faq">Frequently Asked Questions</h3>

#### I have a feature request, bug report, or some feedback

[Send it here.](https://sindresorhus.com/feedback/?product=Photo%20Widget&referrer=Website-FAQ)

#### Where can I find the changelog?

Go [here](https://apps.apple.com/app/id1532588789) and click “Version History”.

#### How do I add a widget to the home screen?

When on the home screen, long-press on the background (not on any icons), press the top-left “+” button, and select “Photo Widget”. [Read more.](https://support.apple.com/en-us/HT207122)

#### How do I edit a widget?

When on the home screen, long-press on the widget, and select “Edit Widget”. [Read more.](https://support.apple.com/en-us/HT207122)

#### Why can I only add 100 photos to the app?

This is because of a technical limitation in the iOS widget system. Hopefully, it can be increased in the future. It should be enough for most users though.

If you use the “Album” widget, there’s no limit to the number of photos.

#### How can I hide the name of the app shown below the widget?

This is not possible. App developers have no way to hide it.

#### Can I show an animated GIF in a widget?

This is not possible.

#### How is this different from the built-in “Photos” widget?

The built-in widget only shows photos from “Memories” and “Featured Photos” in your photo library. There is no way to customize it or pick the photos to be shown.

#### Can you make the cropping prioritize faces?

This is something I want to add, but it's more complicated than it sounds. Widgets have limited resources, and currently, it's not enough to do face detection. Apple works around that by having the face data already available, but this data is not available to third-party apps. Other photo widget apps solve this by letting the user pick the album in the app itself and then they do the face detection in the app upfront, however, that would require a rewrite of this app, which is not something I have time to do right now.

#### Why does running a shortcut from a widget first open the app and then the Shortcuts app?

This is unfortunately an iOS limitation. Widgets can only open their main app and there is no way to run a shortcut without opening the Shortcuts app.

#### Why is this free without ads?

I just enjoy making apps. I earn money on other apps. Consider leaving a nice review on the App Store.
