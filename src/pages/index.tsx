import { useEffect } from 'react';

import Home from '@/components/pages/home/Home';
import { getAllBudgets } from '@/redux/budgets/budgets.thunks';
import { useAppDispatch } from '@/redux/store';

const HomePage: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllBudgets());
  }, [dispatch]);

  return <Home />;
};

export default HomePage;
