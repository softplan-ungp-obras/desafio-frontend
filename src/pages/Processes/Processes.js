import React from 'react';

import Drawer from '@material-ui/core/Drawer';

import Header from 'organisms/Header';
import ProcessesList from 'organisms/ProcessesList';
import ProcessDetails from 'organisms/ProcessDetails';
import ProcessForm from 'organisms/ProcessForm';

import processService from 'services/process';

import { ROUTES } from 'constants/routes';

export function Processes({ searchTextFromUrl, location }) {
  const [searchText, setSearchText] = React.useState(searchTextFromUrl);
  const [openDetails, setOpenDetails] = React.useState(false);
  const [editingProcess, setEditingProcess] = React.useState(false);
  const [openProcessForm, setOpenProcessForm] = React.useState(
    location.pathname === ROUTES.NEW_PROCESS
  );
  const [processDetails, setProcessDetails] = React.useState(false);
  const [processes, setProcesses] = React.useState([]);

  const getProcesses = React.useCallback(async () => {
    const response = await processService.getProcesses(
      searchText && searchText.trim('') !== '' ? searchText : undefined
    );
    setProcesses(response ? response.data : []);
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
    setOpenDetails,
  ]);

  const handleCloseProcessForm = React.useCallback(
    () => setOpenProcessForm(false),
    [setOpenProcessForm]
  );

  const handleOpenProcessForm = React.useCallback(() => {
    setOpenProcessForm(true);
  }, [setOpenProcessForm]);

  const handleEditProcess = () => {
    setOpenProcessForm(true);
    setEditingProcess(processDetails);
  };

  const handleNewProcess = () => {
    setEditingProcess();
    handleOpenProcessForm();
  };

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
            handleEditProcess={handleEditProcess}
          />
        </Drawer>
      )}
      <Drawer
        anchor="right"
        open={openProcessForm}
        onClose={handleCloseProcessForm}
      >
        <ProcessForm
          editingProcess={editingProcess}
          handleCloseNewProcess={handleCloseProcessForm}
          updateProcesses={getProcesses}
        />
      </Drawer>
    </>
  );
}

export default React.memo(Processes);
