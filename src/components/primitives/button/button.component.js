import buttonStyles from './button.component.module.css';

//Todo- add different variants
export const Button = (props) => {
  const { label, variant } = props;

  return <button className={buttonStyles.primary}>{label}</button>;
};
