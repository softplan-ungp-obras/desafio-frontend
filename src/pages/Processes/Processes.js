import React from "react";

import Header from "organisms/Header";
import ProcessesList from "organisms/ProcessesList";

export function Processes() {
  return (
    <>
      <Header />
      <ProcessesList />
    </>
  );
}

export default React.memo(Processes);
