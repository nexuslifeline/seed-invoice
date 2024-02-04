import {
  cloneElement,
  forwardRef,
  useImperativeHandle,
  useRef,
  useState
} from 'react';
import classNames from 'classnames';
import Styles from './Field.module.scss';

const Field = forwardRef(
  ({ className, label, rules, children, ...props }, ref) => {
    const fieldRef = useRef();
    const [error, setError] = useState();
    useImperativeHandle(
      ref,
      () => ({
        validate: () => {
          if (!rules?.length) {
            return true;
          }

          const el = fieldRef.current || {};
          const value = el?.value || el?.props?.value;
          const name = el?.name || el?.props?.name;

          return !rules.some(({ required } = {}) => {
            if (required && !value) {
              setError(
                `${
                  name ? `The ${name.toLowerCase()} field` : `This field`
                } is required.`
              );
              return true;
            }
            return false;
          });
        },
        reset: () => {
          setError('');
        }
      }),
      [rules]
    );

    return (
      <div className={classNames(Styles.container, className)} {...props}>
        {label && <label className={Styles.caption}>{label}</label>}
        {cloneElement(children, { ref: fieldRef, error: error })}
      </div>
    );
  }
);

Field.InstanceOf = 'Field';

export default Field;
