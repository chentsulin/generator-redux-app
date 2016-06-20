/* eslint no-console:0 */
import React from 'react';
import { render } from 'react-dom';
import DevTools from '../containers/DevTools';

/**
 * Puts Redux DevTools into a separate window.
 * Based on https://gist.github.com/tlrobinson/1e63d15d3e5f33410ef7#gistcomment-1560218.
 */
const createDevToolsWindow = (store) => {
  // Window name.
  const name = 'Redux DevTools';

  // Give it a name so it reuses the same window.
  const win = window.open(
    null,
    name,
    'menubar=no,location=no,resizable=yes,scrollbars=no,status=no'
  );

  // Pop-ups are blocked by default, so it may open async
  if (!win) {
    console.warn(
      'Couldn\'t open the dev Tools, probably the popup window ' +
      'was blocked, please enable the popup window for the current page.\n'
    );
    return;
  }

  // Reload in case it's reusing the same window with the old content.
  win.location.reload();

  // Set visible Window title.
  win.document.title = name;

  // Wait a little bit for it to reload, then render.
  setTimeout(() => render(
    <DevTools store={store} />,
    win.document.body.appendChild(document.createElement('div'))
  ), 10);
};


export default createDevToolsWindow;
