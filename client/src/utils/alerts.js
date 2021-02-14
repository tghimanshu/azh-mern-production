export const successAlert = (message, setalert) => {
  return (
    <div class="alert alert-success alert-dismissible" role="alert">
      <button
        type="button"
        class="close"
        data-dismiss="alert"
        aria-label="Close"
        onClick={setalert("")}
      >
        <span aria-hidden="true">×</span>
      </button>
      <div class="alert-message">{message}</div>
    </div>
  );
};

export const dangerAlert = (message) => {
  return (
    <div class="alert alert-danger alert-dismissible" role="alert">
      <button
        type="button"
        class="close"
        data-dismiss="alert"
        aria-label="Close"
        // onClick={setalert("")}
      >
        <span aria-hidden="true">×</span>
      </button>
      <div class="alert-message">{message}</div>
    </div>
  );
};
