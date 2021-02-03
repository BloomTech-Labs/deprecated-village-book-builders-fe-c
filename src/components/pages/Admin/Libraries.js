// * ? Should this be reorganized into a common component?
import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import { axiosWithAuth } from '../../../utils/axiosWithAuth';
import { Button, Divider, Input, Modal } from 'antd';
import {
  InfoCircleOutlined,
  EditOutlined,
  PlusCircleOutlined,
} from '@ant-design/icons';

import { useHistory } from 'react-router-dom';
import './libraries.css';

export default function Libraries() {
  const [libraries, setLibraries] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [libraryModal, setLibraryModal] = useState(false);
  const [search, setSearch] = useState('');

  const { push } = useHistory();
  const libraryStyles = {
    newLibrary: {
      border: 'none',
      backgroundColor: '#ff914d',
      fontFamily: 'Caveat Brush,cursive',
      fontStyle: 'italic',
      webkitLetterSpacing: '2px',
      mozLetterSpacing: '2px',
      msLetterSpacing: '2px',
      height: 'none',
      letterSpacing: '2px',
      fontWeight: '400',
      fontSize: '22px',
      color: 'white',
      borderRadius: '18px',
      padding: '8px',
      paddingLeft: '15px',
      paddingRight: '15px',
      webkitAppearance: 'none',
      margin: '1rem 0',
      textAlign: 'right',
      margin: '1rem 0',
      width: 'auto',
    },
    editLibrary: {
      border: 'none',
      backgroundColor: '#ff914d',
      fontFamily: 'Caveat Brush,cursive',
      fontStyle: 'italic',
      webkitLetterSpacing: '2px',
      mozLetterSpacing: '2px',
      msLetterSpacing: '2px',
      letterSpacing: '2px',
      fontWeight: '400',
      fontSize: '22px',
      color: 'white',
      borderRadius: '18px',
      padding: '8px',
      paddingLeft: '15px',
      paddingRight: '15px',
      webkitAppearance: 'none',
      margin: '1rem 0',
      textAlign: 'right',
      margin: '1rem 20px',
      width: 'auto',
    },
    moreInfo: {
      border: 'none',
      backgroundColor: '#ff914d',
      fontFamily: 'Caveat Brush,cursive',
      fontStyle: 'italic',
      webkitLetterSpacing: '2px',
      mozLetterSpacing: '2px',
      msLetterSpacing: '2px',
      letterSpacing: '2px',
      fontWeight: '400',
      fontSize: '22px',
      color: 'white',
      borderRadius: '18px',
      padding: '8px',
      paddingLeft: '15px',
      paddingRight: '15px',
      webkitAppearance: 'none',
      margin: '1rem 0',
      textAlign: 'right',
      margin: '1rem 0',
      width: 'auto',
    },
  };

  const getLibraries = () => {
    axiosWithAuth()
      .get(`/library`)
      .then(libraries => {
        console.log('libraries from new server', libraries);
        setLibraries(libraries.data);
      })
      .catch(err => {
        //TODO: make this .catch more useful
        console.log(err);
      });
  };

  useEffect(() => {
    getLibraries();
  }, []);

  const searchHandler = e => setSearch(e.target.value);

  function handleAddLibrary() {
    push('/admin/library/add');
  }

  function handleEdit(libraryId) {
    // console.log('handle edit');
    // TODO: better to pass the libary data here than do a second axios call at new page. Or set it to redux store here, so I can pull it out at new page. Decisions...
    push(`/admin/library/edit/${libraryId}`);
  }

  function handleModal(library) {
    setLibraryModal(library);
    setShowModal(true);
  }

  return (
    <div className="libraries-container">
      <h1>Libraries, Admin View.</h1>
      <div
        style={{
          width: '80%',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Input.Search
          onChange={searchHandler}
          value={search}
          style={{ width: '80%', alignSelf: 'center' }}
          placeholder="Search by Name"
        />
        <button
          onClick={() => handleAddLibrary()}
          className="l2-btn btn"
          style={libraryStyles.newLibrary}
          align="center"
        >
          Create New Library
        </button>
      </div>
      <Divider />
      {libraries ? (
        libraries
          .filter(item =>
            item.name.toLowerCase().includes(search.toLowerCase())
          )
          .map(library => {
            return (
              <div className="individual-library-container" key={library.id}>
                <h2>{library.name}</h2>
                <p>{library.description}</p>
                <div className="listItemButtonWrapper">
                  {/* <div className="button-container"> */}
                  <button
                    style={libraryStyles.moreInfo}
                    className="l2-btn btn "
                    onClick={() => handleModal(library)}
                  >
                    <InfoCircleOutlined />
                  </button>
                  <button
                    style={libraryStyles.editLibrary}
                    className="l2-btn btn "
                    onClick={() => handleEdit(library.id)}
                  >
                    {' '}
                    <EditOutlined />
                  </button>
                </div>
                <Divider />
              </div>
            );
          })
      ) : (
        <p>
          Either there are no libraries, or there has been a problem with the
          server
        </p>
      )}
      {showModal && (
        <Modal
          visible={showModal}
          title={libraryModal.name}
          onOk={() => handleEdit(libraryModal.Id)}
          onCancel={() => setShowModal(false)}
          footer={[
            <Button key="back" onClick={() => setShowModal(false)}>
              Done
            </Button>,
            <Button
              key="submit"
              type="primary"
              // loading={loading}
              onClick={() => handleEdit(libraryModal.id)}
            >
              Edit
            </Button>,
          ]}
        >
          {libraryModal.image ? (
            <img src={libraryModal.image} alt="Library" />
          ) : (
            <p>Previous Image URL broken or not provided</p>
          )}
          <p>Description: {libraryModal.description}</p>
          <p>Library Usage: {libraryModal.library_usage}</p>
          <p>Notes: {libraryModal.notes}</p>
          <p>Image: {libraryModal.image}</p>
        </Modal>
      )}
    </div>
  );
}
