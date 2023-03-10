import React from "react";
import { useSelector } from "react-redux";
import { selectServerError } from "../../../app/stores/common/common.selector";
import './serverError.styles.css';

const ServerError = () => {
  const error = useSelector(selectServerError);
  return (
    <div className="server-error">
      <h1>Server Error</h1>
      <h5 className="server-error__message">{error?.message}</h5>
      {error?.details && (
        <div className="server-error__details">
          <h4 className="server-error__details-heading">Stack Trace</h4>
          <code>{error.details}</code>
        </div>
      )}
    </div>
  );
};

export default ServerError;
