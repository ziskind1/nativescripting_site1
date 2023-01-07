import * as React from 'react';
import { Link } from 'gatsby';

type NsLink = {
  children: any;
  className: string;
  to: string;
};

const NsLink = ({ children, className, to }: NsLink) => {
  return <Link to={to}>{children}</Link>;
};

export default NsLink;
