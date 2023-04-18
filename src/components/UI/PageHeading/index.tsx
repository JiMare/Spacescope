import classes from './styles.module.scss';

export interface PageHeadingProps {
  children: string;
}

const PageHeading = ({ children }: PageHeadingProps): JSX.Element => {
  return (
    <h1 className={classes.pageHeading}>{children}</h1>
  );
};

export default PageHeading;
