import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';

import formBackup from 'services/formBackup';

import ReduxFormCodeMirror from 'components/ReduxFormCodeMirror';
import ReduxFormInput from 'components/ReduxFormInput';
import ReduxFormButtonCheckbox from 'components/ReduxFormButtonCheckbox';
import Button from 'components/Button';

import 'styles/components/LoginForm.scss';

class NewPostForm extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func,
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleSubmit();
  };

  render() {
    return (
      <form className="LoginForm" onSubmit={this.handleSubmit}>
        <Field
          name="title"
          component={ReduxFormInput}
          type="text"
          label="Title"
          fullWidth
        />
        <Field
          name="date"
          component={ReduxFormInput}
          type="number"
          label="Date"
          fullWidth
        />
        <Field
          name="tags"
          component={ReduxFormInput}
          type="text"
          label="Tags"
          fullWidth
        />
        <Field
          name="description"
          component={ReduxFormInput}
          type="text"
          label="Description"
          fullWidth
        />
        <Field
          name="content"
          component={ReduxFormCodeMirror}
          options={{
            mode: 'markdown',
          }}
        />
        <Field
          name="hidden"
          component={ReduxFormButtonCheckbox}
          text="Hidden"
        />
        <Button type="submit">Submit</Button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'newPost',
  onChange: values => formBackup.add('newPost', values),
})(NewPostForm);
