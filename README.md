# Word Definition

This is a chrome extension that allows you to highlight a word on any web page and obtain its definition(s) from the Oxford Dictionary.

It is still a work in progress - the api does not like plurals and there is an occasional word (for example 'practice') where nothing is rendered despite the call being successful.

## To Do

* Fix styling - currently inherits from original page
* Add functionality to left arrow cycle button
* Refactor #previousWordEntry and #nextWordEntry into a single method
* Refactor the removal and addition of #word-fact-div and #word-div in to a standalone method
* Fix bug where some words are obtained from API but not rendered
* Add information - perhaps previous or saved searches to the popup.html
* Add more informative message when word is not found

## Set Up

* Clone this repo
* Load up chrome and visit `chrome://extensions/`
* Select 'Load unpacked extension...' and navigate to the directory to which you cloned.
* Once you have loaded the extension an icon should appear in the top right of chrome.
* Load a new page and highlight a word - assuming it is a real English word the definition will appear in the bottom right of the page in a light blue box.
* If the word has different lexical entries you can cycle through them using the right arrow.
* To remove the extension right click the icon on chrome and select 'Remove from Chrome'.

## Tech

JavaScript, JQuery
