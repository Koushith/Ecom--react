import badgeStyles from './badge.component.module.css';

export const Badge = (props) => {
  const { badgeLabel } = props;
  return <div className={badgeStyles.badge}>{badgeLabel}</div>;
};
