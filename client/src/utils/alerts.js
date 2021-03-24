export const successAlert = (message, setalert) => {
  return (
    <div className="alert alert-success alert-dismissible" role="alert">
      <button
        type="button"
        className="close"
        data-dismiss="alert"
        aria-label="Close"
        onClick={setalert("")}
      >
        <span aria-hidden="true">×</span>
      </button>
      <div className="alert-message">{message}</div>
    </div>
  );
};

export const dangerAlert = (message) => {
  return (
    <div className="alert alert-danger alert-dismissible" role="alert">
      <button
        type="button"
        className="close"
        data-dismiss="alert"
        aria-label="Close"
        // onClick={setalert("")}
      >
        <span aria-hidden="true">×</span>
      </button>
      <div className="alert-message">{message}</div>
    </div>
  );
};
