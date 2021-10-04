import React from 'react';
import { ConfigContext } from '../hooks';
import loadScript from 'load-script';

let initialized = false;
let queue = [];

function fb(callback) {
  if (initialized) {
    callback(window.FB);
  } else {
    queue.push(callback);
    if (!window.fbAsyncInit) {
      window.fbAsyncInit = () => {
        window.FB.init({
          appId: window.config.facebook.appId,
          autoLogAppEvents: true,
          status: true,
          cookie: true,
          xfbml: false,
          version: 'v3.2',
        });
        initialized = true;
        queue.forEach(cb => cb(window.FB));
        queue = null;
      };
      const script = window.localStorage.getItem('fb:debug') === 'true'
        ? 'xfbml.customerchat/debug.js'
        : 'xfbml.customerchat.js';
      loadScript(`https://connect.facebook.net/en_US/sdk/${script}`, { async: true });
    }
  }
}


class CustomerChat extends React.PureComponent {
  componentDidMount() {
    this.timeout = setTimeout(() => {
      fb(FB => this.timeout && FB.XFBML.parse());
    }, 2000);
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
    delete this.timeout;
  }

  render() {
    return (
      <ConfigContext.Consumer>
        {config => (
          <div
            className="fb-customerchat"
            attribution="setup_tool"
            page_id={config.facebook.pageId}
            // theme_color="..."
            // logged_in_greeting="..."
            // logged_out_greeting="..."
            // greeting_dialog_display="..."
            // greeting_dialog_delay="..."
            // minimized="false"
            // ref="..."
          />
        )}
      </ConfigContext.Consumer>
    );
  }
}
