/* eslint-disable react-hooks/exhaustive-deps */
import { forwardRef } from 'react';

import PropTypes from 'prop-types';

import Avatar from '@components/Avatar';
import Select from '@components/Form/Select';

import Styles from './Styles.module.scss';

const CustomOption = ({
  data: { label, id },
  innerRef,
  innerProps,
  size = 32,
  ...rest
}) => {
  return (
    <div ref={innerRef} {...rest} {...innerProps}>
      <Avatar
        initials='OA'
        profileId={id}
        containerProps={{
          borderColor: 'red',
          borderWidth: '1px',
          width: size,
          height: size
        }}
        round
      />
      <span className={Styles.optionName}>{label}</span>
    </div>
  );
};

const OrganizationOption = (props) => {
  return <CustomOption {...props} className={Styles.optionItem} />;
};

const SelectedOption = (props) => {
  return <CustomOption {...props} size={28} className={Styles.selectedItem} />;
};

const OrganizationSelector = forwardRef(
  ({ error, name = 'organization', label = 'Organization', ...props }, ref) => {
    return (
      <Select
        className={Styles.orgSelect}
        containerClassName={Styles.selectContainer}
        classNamePrefix='icon-select'
        name='phoneCountry'
        placeholder='Select Organization'
        getOptionLabel={({ label }) => label}
        getOptionValue={({ id }) => id}
        options={[
          { id: 1, label: 'Organization 1' },
          { id: 2, label: 'Organization 2' }
        ]}
        components={{
          Option: OrganizationOption,
          SingleValue: SelectedOption
        }}
        {...props}
      />
    );
  }
);

OrganizationSelector.propTypes = {
  error: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string
};

OrganizationSelector.defaultProps = {
  shouldValidate: true
};

OrganizationSelector.Instance = 'OrganizationSelector';

export default OrganizationSelector;
