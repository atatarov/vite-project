import { Page } from '@/shared/ui/Page';
import { UserCatalog } from '@/widgets/UserCatalog';
import { UserHeader } from '@/widgets/UserHeader';

const MainPage = () => {
  return (
    <Page>
      <UserHeader />
      <UserCatalog />
    </Page>
  );
};

export default MainPage;
