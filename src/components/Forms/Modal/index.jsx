import React from 'react';
import PropTypes from 'prop-types';
import Styles from './Modal.module.scss';
import classNames from 'classnames/bind';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';

const Modal = ({ isOpen, title, description, content, onClose, size }) => {
  let cx = classNames.bind(Styles);
  const panelClass = cx({
    panel: true,
    'modal--sm': size === 'sm',
    'modal--md': size === 'md',
    'modal--lg': size === 'lg',
    'modal--xl': size === 'xl'
  })
  return (
    <Transition
      show={isOpen}
      enter={Styles.modal_transition_enter}
      enterFrom={Styles.modal_transform_enter_from}
      enterTo={Styles.modal_transform_enter_to}
      leave={Styles.modal_transition_leave}
      leaveFrom={Styles.modal_transform_leave_from}
      leaveTo={Styles.modal_transform_leave_to}
      as={Fragment}
    >
      <Dialog
        onClose={() => {}} //prevent closing on backdrop click
        className={Styles.modal_container}>
        <div className={Styles.backdrop}></div>
        <div className={Styles.panel_container}>
          <Dialog.Panel className={panelClass}>
            { title && (<Dialog.Title>{title}</Dialog.Title>) }
            {content}
          </Dialog.Panel>
        </div>
      </Dialog>
    </Transition>
  );
};

Modal.propTypes = {

};

export default Modal;
