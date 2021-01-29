import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
// import axios from 'axios';
import { axiosWithAuth } from '../../../utils/axiosWithAuth';
import { Form, Input, Divider } from 'antd';
import Button from '../../common/Button';
import { addLibrary } from '../../../state/actions';

//? would it be faster on base-model cellphones to store library data on redux when the edit button is pushed, and then pull from the store to here, or to have the simple secondary axios request pull that specific library data.
//* I think it'll be best to store all libraries into redux store, then pull the specific one from the store when this page loads
//TODO: refactor to use redux.

const initialState = {
  // id: "",
  name: '',
  description: '',
  library_usage: '',
  notes: '',
  image: '',
};

function AddLibraryForm({ addLibrary }) {
  const [formData, setFormData] = useState(initialState);

  const { push } = useHistory();

  const params = useParams().id;
  // ? Why is this console logging 4 times? It's running too much.
  // console.log(params);

  const [form] = Form.useForm();

  // const getData = () => {
  //   axiosWithAuth()
  //     .get(`library/${params}`)
  //     .then(res => {
  //       form.setFieldsValue(res.data);
  //       setFormData(res.data);
  //     })
  //     .catch(err => console.dir(err));
  // };

  // useEffect(() => {
  //   getData();
  // }, []);

  const handleSubmit = async () => {
    // console.log('formData', formData);
    addLibrary(params, formData);
  };

  const handleCancel = () => {
    push('/admin/libraries');
    // window.location.replace('/admin/libraries');
  };

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // console.log(formData);
  };

  return (
    <div style={{ marginLeft: '30%', marginTop: '15%', width: '100%' }}>
      <h2 className="vbb-header" style={{ marginLeft: '9%' }}>
        Add a New Library
      </h2>
      <Form onFinish={handleSubmit} form={form}>
        <label
          name="name"
          style={{
            display: 'flex',
            alignItems: 'baseline',
            padding: '0',
            width: '100%',
          }}
        >
          <p
            className="vbb-header"
            style={{ width: '10%', fontSize: '1.7em', padding: '0' }}
          >
            Library Name:{' '}
          </p>
          <Input
            type="text"
            name="name"
            style={{ width: '20%' }}
            value={formData.name.value}
            onChange={e => handleChange(e)}
          />
        </label>

        <label
          style={{
            display: 'flex',
            alignItems: 'baseline',
            padding: '0',
            width: '100%',
          }}
          name="description"
        >
          <p
            className="vbb-header"
            style={{ width: '10%', fontSize: '1.7em', padding: '0' }}
          >
            Description :
          </p>
          <Input
            style={{ width: '20%' }}
            type="text"
            name="description"
            value={formData.description.value}
            onChange={e => handleChange(e)}
          />
        </label>

        <label
          style={{
            display: 'flex',
            alignItems: 'baseline',
            padding: '0',
            width: '100%',
          }}
          name="library_usage"
        >
          <p
            className="vbb-header"
            style={{ width: '10%', fontSize: '1.7em', padding: '0' }}
          >
            Usage :
          </p>
          <Input
            style={{ width: '20%' }}
            type="text"
            name="library_usage"
            value={formData.library_usage}
            onChange={e => handleChange(e)}
          />
        </label>

        <label
          style={{
            display: 'flex',
            alignItems: 'baseline',
            padding: '0',
            width: '100%',
          }}
          name="notes"
        >
          <p
            className="vbb-header"
            style={{ width: '10%', fontSize: '1.7em', padding: '0' }}
          >
            Notes :
          </p>
          <Input
            style={{ width: '20%' }}
            type="text"
            name="notes"
            value={formData.notes}
            onChange={e => handleChange(e)}
          />
        </label>

        <label
          style={{
            display: 'flex',
            alignItems: 'baseline',
            padding: '0',
            width: '100%',
          }}
          name="image"
        >
          <p
            className="vbb-header"
            style={{ width: '10%', fontSize: '1.7em', padding: '0' }}
          >
            Image Url :
          </p>
          <Input
            style={{ width: '20%' }}
            type="text"
            name="image"
            value={formData.image}
            onChange={e => handleChange(e)}
          />
        </label>

        {/* TODO: When this image renders, it removes the buttons off the page. Not covers them, but completely removes them. Not useful. */}
        {/* {formData.image ? (
        <img src={formData.image} alt="Library" />
      ) : (
        <p>Previous Image URL broken or not provided</p>
      )} */}

        <label>
          {/* <input
          style={{width:'20%'}} type="submit" value="Submit Edit" /> */}
          <span
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '35%',
            }}
          >
            <Button
              htmlType="button"
              buttonText="Add Library"
              onClick={handleSubmit}
            ></Button>
            {/* <Button htmlType="button" onClick={() => getData()}>
          Reset changes
        </Button> */}
            <Button
              htmlType="link"
              buttonText="Cancel"
              onClick={handleCancel}
            ></Button>
          </span>
        </label>
      </Form>
    </div>
  );
}

// export default EditLibraryForm;
export default connect(null, { addLibrary })(AddLibraryForm);
