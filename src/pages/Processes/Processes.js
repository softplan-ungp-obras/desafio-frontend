import React from "react";

import Drawer from "@material-ui/core/Drawer";

import Header from "organisms/Header";
import ProcessesList from "organisms/ProcessesList";
import ProcessDetails from "organisms/ProcessDetails";
import NewProcess from "organisms/NewProcess";

import processService from "services/process";

export function Processes({ searchTextFromUrl }) {
  const [searchText, setSearchText] = React.useState(searchTextFromUrl);
  const [openDetails, setOpenDetails] = React.useState(false);
  const [openNewProcess, setOpenNewProcess] = React.useState(false);
  const [processDetails, setProcessDetails] = React.useState(false);
  const [processes, setProcesses] = React.useState([]);

  const getProcesses = React.useCallback(async () => {
    const response = await processService.getProcesses(
      searchText && searchText.trim("") !== "" ? searchText : undefined
    );
    setProcesses(response.data);
  }, [searchText]);

  React.useEffect(() => {
    getProcesses();
  }, [getProcesses]);

  const handleSearch = React.useCallback(value => setSearchText(value), []);

  const handleSelectProcess = React.useCallback(processDetails => {
    setOpenDetails(true);
    setProcessDetails(processDetails);
  }, []);

  const handleCloseDetails = React.useCallback(() => setOpenDetails(false), [
    setOpenDetails
  ]);

  const handleCloseNewProcess = React.useCallback(
    () => setOpenNewProcess(false),
    [setOpenNewProcess]
  );

  const handleNewProcess = React.useCallback(() => {
    setOpenNewProcess(true);
  }, [setOpenNewProcess]);

  return (
    <>
      <Header handleSearch={handleSearch} handleNewProcess={handleNewProcess} />
      <ProcessesList
        searchText={searchText}
        processes={processes}
        handleSelectProcess={handleSelectProcess}
      />
      {processDetails && (
        <Drawer anchor="right" open={openDetails} onClose={handleCloseDetails}>
          <ProcessDetails
            processDetails={processDetails}
            updateProcesses={getProcesses}
            handleCloseDetails={handleCloseDetails}
          />
        </Drawer>
      )}
      <Drawer
        anchor="right"
        open={openNewProcess}
        onClose={handleCloseNewProcess}
      >
        <NewProcess
          handleCloseNewProcess={handleCloseNewProcess}
          updateProcesses={getProcesses}
        />
      </Drawer>
    </>
  );
}

export default React.memo(Processes);
