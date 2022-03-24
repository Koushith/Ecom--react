
import heading from './text.component.module.css';



export const Text = () => {
  return (
    <>
      <p>text</p>
    </>
  );
};


export const Heading = ({ label }) => {
  return (
    <>
      <h2 className={heading.heading}>
        <span className={heading.underline}></span>
        {label}{' '}
      </h2>
    </>
  );
};

