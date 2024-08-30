import React from "react";

export default function Loader() {
  return (
    <div>
      <div
        className="spinner-border text-center"
        role="status"
        style={{ height: "100px", width: "100px", marginTop: "100px" }}
      >
        <span class="sr-only">Loading...</span>
      </div>
    </div>
  );
}
