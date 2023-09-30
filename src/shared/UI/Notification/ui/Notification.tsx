import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface NotificationProps {}

export const Notification = (props: NotificationProps) => (
    <ToastContainer position="top-center" />
);
