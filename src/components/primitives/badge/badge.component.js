import badgeStyles from './badge.component.module.css';

export const Badge = (props) => {
  const { badgeLabel, onClick, isActive } = props;
  return (
    <button className={badgeStyles.badge} id='badge' onClick={onClick}>
      {badgeLabel}
    </button>
  );
};
