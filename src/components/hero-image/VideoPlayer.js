import React from 'react';
import Data from '../../data/hero/hero-image.json';
import ReactPlayer from "react-player/youtube";
import Modal from "react-responsive-modal";

class VideoPlayer extends React.Component {
   render() {
      const { open, toggleModal } = this.props;
      return (
         <Modal
            open={open}
            onClose={toggleModal}
            styles={{
               modal: {
                  maxWidth: "unset",
                  width: "50%",
                  height: "50%",
                  padding: "unset"
               },
               overlay: {
                  background: "rgba(0, 0, 0, 0.5)"
               },
               closeButton: {
                  background: "#00b6ec"
               }
            }}
            center
         >
            <ReactPlayer
               className="react-player"
               url={Data.videoLink}
               width="100%"
               height="100%"
            />
         </Modal>
      );
   }
}

export default VideoPlayer;