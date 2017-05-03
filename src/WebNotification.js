import React from 'react';
import Notification  from 'react-web-notification';

const Noop = () => {};

// https://github.com/georgeOsdDev/react-web-notification/blob/master/example/app.js
const WebNotification = (props) => {
    return (
      <div>
        <button onClick={() => (props.handleButtonClick || Noop)()}>Show Notification</button>
        <Notification
          ignore={props.ignore && props.title !== ''}
          notSupported={() => (props.handleNotSupported || Noop)()}
          onPermissionGranted={() => (props.handlePermissionGranted || Noop)()}
          onPermissionDenied={() => (props.handlePermissionDenied || Noop)()}
          onShow={() => (props.handleNotificationOnShow || Noop)()}
          onClick={() => (props.handleNotificationOnClick || Noop)()}
          onClose={() => (props.handleNotificationOnClose || Noop)()}
          onError={() => (props.handleNotificationOnError || Noop)()}
          timeout={5000}
          title={props.title}
          options={props.options}
        />
      </div>);
};

export default WebNotification;