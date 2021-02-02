import React, { useEffect, useState } from 'react';
import { axiosWithAuth } from '../../../utils/axiosWithAuth';
import {
  InfoCircleOutlined,
  EditOutlined,
  PlusCircleOutlined,
} from '@ant-design/icons';
import { Divider, Input, Modal, List, Avatar, Select } from 'antd';
import Button from '../../common/Button';
import { connect } from 'react-redux';
import {
  checkToken,
  fetchMentees,
  editMentee,
} from '../../../state/actions/index';
import MenteeForm from '../Headmaster/Mentees/MenteeForm';
import MenteeProfile from '../Headmaster/Mentees/MenteeProfile';
