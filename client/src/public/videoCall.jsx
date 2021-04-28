import React, { useContext, useState } from "react";
import { Fragment } from "react";
import {
  Button,
  Col,
  Container,
  FormControl,
  ResponsiveEmbed,
  Row,
} from "react-bootstrap";
import SectionTitle from "../advisor/sectionTitle";
import { SocketContext, ContextProvider } from "../Context";
import CopyToClipboard from "react-copy-to-clipboard";

const VideoPlayer = () => {
  return (
    <ContextProvider>
      <VideoCall />
      <Sidebar />
      <Notifications />
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
        <Row>
          <Col lg={6}>
            {stream && (
              <div className="embed-responsive embed-responsive-16by9">
                <video
                  muted
                  playinline
                  ref={myVideo}
                  autoPlay
                  className="embed-responsive-item"
                />
              </div>
            )}
          </Col>
          <Col lg={6}>
            {callAccepted && !callEnded && (
              <div className="embed-responsive embed-responsive-16by9">
                <video
                  ref={userVideo}
                  autoPlay
                  playinline
                  className="embed-responsive-item"
                />
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

const Sidebar = ({ children }) => {
  const {
    me,
    callAccepted,
    name,
    setName,
    callEnded,
    leaveCall,
    callUser,
  } = useContext(SocketContext);
  const [idToCall, setIdToCall] = useState("");

  return (
    <Container>
      <form noValidate autoComplete="off">
        <h5>Account Info</h5>
        <FormControl
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <CopyToClipboard text={me}>
          <Button variant="primary">Copy Your ID</Button>
        </CopyToClipboard>
        <h4>Make a call</h4>
        <FormControl
          label="ID to call"
          value={idToCall}
          onChange={(e) => setIdToCall(e.target.value)}
        />
        {callAccepted && !callEnded ? (
          <Button variant="secondary" onClick={leaveCall}>
            Hang Up
          </Button>
        ) : (
          <Button variant="primary" onClick={() => callUser(idToCall)}>
            Call
          </Button>
        )}
      </form>
      {children}
    </Container>
  );
};

const Notifications = () => {
  const { answerCall, call, callAccepted } = useContext(SocketContext);

  return (
    <>
      {call.isReceivingCall && !callAccepted && (
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <h1>{call.name} is calling:</h1>
          <Button variant="contained" color="primary" onClick={answerCall}>
            Answer
          </Button>
        </div>
      )}
    </>
  );
};

export default VideoPlayer;
