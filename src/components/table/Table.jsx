import React from "react";
export default function Table({ children }) {
  return <div className={`row  rtl`}>
    <div className="col-12 px-0 mt-1 mx-0 unload position-relative px-2 px-lg-3 ">
      <div className="row ">
        <div className="table-responsive-lg no-scroll rounded-1 mt-4 p-0 col-12  ">
          <table className="table table-light-td width-mobile-table-600">
            {children}
          </table>
        </div>
      </div>
    </div>
  </div>;
}
