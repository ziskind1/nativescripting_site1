import * as React from 'react';
import { CourseLevel } from '../../domain/models';

export interface LevelIconProps {
  level: CourseLevel;
}

function getLevelIconImgSrc(level: CourseLevel): string {
  switch (level.levelId) {
    case 1:
      return '/img/level_icon1.svg';
    case 2:
      return '/img/level_icon2.svg';
    case 3:
      return '/img/level_icon3.svg';
  }
}

const LevelIcon: React.StatelessComponent<LevelIconProps> = (
  props: LevelIconProps
) => {
  const imgSrc = getLevelIconImgSrc(props.level);

  return <img src={imgSrc} title={props.level.levelName} />;
};

export default LevelIcon;
