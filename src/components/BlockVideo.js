import * as React from 'react'

class Vimeo extends React.Component {
    render() {
      const cfg = {
        title: 0,
        byline: 0,
        muted: 1,
        playsinline: 0,
        controls: 0,
      };
      const allowed = [];
      if (+this.props.autoplay) {
        allowed.push('autoplay');
      }
      if (+this.props.fullscreen) {
        allowed.push('fullscreen');
      }
      return (
        <div className="container">
          <iframe
            className="player play-vimeo"
            type="text/html"
            src={`https://player.vimeo.com/video/${this.props.video}?${Object.keys(cfg).map(prop => `${prop}=${cfg[prop]}`).join('&')}`} width="100%" height="100%" allow={allowed.join('; ')}
            allowFullScreen
            frameborder={this.props.border || 0}
            />
        </div>
      );
    }
};

export default Vimeo