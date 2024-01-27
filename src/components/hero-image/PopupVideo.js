import React from 'react';
import VideoPlayer from './VideoPlayer';

class PopupVideo extends React.Component {
   state = {
      open: false
   };

   onOpenModal = () => {
      this.setState(prevState => ({
         open: !prevState.open
      }));
   };

   render() {
      return (
         <>
            {/* <button className="play-btn" onClick={this.onOpenModal}><i className="las la-play"></i><span>Watch Video</span></button>
            <VideoPlayer open={this.state.open} toggleModal={this.onOpenModal} /> */}
         </>
      );
   }
}

export default PopupVideo;