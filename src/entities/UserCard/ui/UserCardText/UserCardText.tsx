import { memo } from 'react';

import { Text } from '@/shared/ui/Text';
import style from './UserCardText.module.scss';
import { Box } from '@/shared/ui/Box';

export interface UserCardTextProps {
  title?: string;
  text?: string;
}

const UserCardText = memo(({ title, text }: UserCardTextProps) => {
  return (
    <Box className={style.Box}>
      <Text className={style.Label} text={title} variant="h3" />
      <Text className={style.Text} text={text ?? 'No data'} />
    </Box>
  );
});

export default UserCardText;
