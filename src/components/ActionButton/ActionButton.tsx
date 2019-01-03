import * as React from 'react';
import { Link } from 'gatsby';

import './ActionButton.css';
import { isUrlExternal } from '../../utils/urls';

export type ActionBtnType = 'primary' | 'secondary' | 'tertiary';

export interface ActionButtonProps {
  text: string;
  url?: string;
  type?: ActionBtnType;
  newWindow?: boolean;
  clear?: boolean;
}

function getBtnClassName(type: ActionBtnType, clear: boolean) {
  const classClear = clear ? 'clear' : '';

  switch (type) {
    case 'primary':
      return `btn-action green ${classClear}`;
    case 'secondary':
      return `btn-action blue ${classClear}`;
    case 'tertiary':
      return `btn-action orange ${classClear}`;
    default:
      return `btn-action green ${classClear}`;
  }
}

const ActionButton: React.StatelessComponent<ActionButtonProps> = (
  props: ActionButtonProps
) => {
  const className = getBtnClassName(props.type, props.clear);

  const anchorTarget = props.newWindow ? '_blank' : null;

  if (isUrlExternal(props.url)) {
    return (
      <div className={className}>
        <a href={props.url} target={anchorTarget}>
          <span>{props.text}</span>
        </a>
      </div>
    );
  } else {
    return (
      <div className={className}>
        <Link to={props.url}>
          <span>{props.text}</span>
        </Link>
      </div>
    );
  }
};

export default ActionButton;
