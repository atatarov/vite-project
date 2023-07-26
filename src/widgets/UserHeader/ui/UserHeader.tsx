import { Button } from '@/shared/ui/Button';
import style from './UserHeader.module.scss';
import { Box } from '@/shared/ui/Box';

export const UserHeader = () => {
  const handleHomeButton = () => {
    window.location.href = "/";
  };

  return (
    <header className={style.Header}>
      <h1 className={style.HeaderTitle}>Users</h1>
      <Box>
        <ul className={style.HeaderList}>
          <li className={style.HeaderListItem}>
            <Button onClick={handleHomeButton}>
              Home
            </Button>
          </li>
        </ul>
      </Box>
    </header>
  );
};
