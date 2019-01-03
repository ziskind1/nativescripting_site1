import * as React from 'react';
import { Link } from 'gatsby';

const NsLink: React.StatelessComponent<{
  children: any;
  className: string;
  to: string;
}> = ({ children, className, to }) => {
  return <Link to={to}>{children}</Link>;
};

export default NsLink;
