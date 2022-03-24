import buttonStyles from './button.component.module.css';

//Todo- add different variants
export const Button = (props) => {
  const { label, variant } = props;
  const getVariant = (variant) => {
    let className;

    switch (variant) {
      case 'primary':
        className = 'primary';
        break;
      case 'ghost':
        className = 'ghost';
        break;
      default:
        className = 'primary';
    }

    return className;
  };
  const computedClass = getVariant(variant);
  return <button className={buttonStyles[computedClass]}>{label}</button>;
};
