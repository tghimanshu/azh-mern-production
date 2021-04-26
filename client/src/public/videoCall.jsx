import React, { useContext } from "react";
import { Fragment } from "react";
import { Container } from "react-bootstrap";
import SectionTitle from "../advisor/sectionTitle";
import { SocketContext, ContextProvider } from "../Context";

const VideoPlayer = () => {
  return (
    <ContextProvider>
      <VideoCall />
    </ContextProvider>
  );
};

const VideoCall = ({ match }) => {
  const { callAccepted, myVideo, userVideo, callEnded, stream } = useContext(
    SocketContext
  );

  return (
    <Fragment>
      <SectionTitle
        title="Video Call"
        breadcrumbs={[
          { link: "/", name: "Home" },
          { link: "/videocall", name: "Video Call", active: true },
        ]}
      />
      <Container>
        {stream && (
          <video muted ref={myVideo} autoPlay width={200} height={200} />
        )}
        {callAccepted && !callEnded && (
          <video ref={userVideo} autoPlay width={200} height={200} />
        )}
      </Container>
    </Fragment>
  );
};

export default VideoPlayer;
