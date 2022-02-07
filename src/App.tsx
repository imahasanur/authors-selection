import './App.css';
import { AuthorActions } from './components/AuthorsList/AuthorsList';
import AppRouter from './router/AppRouter';


function App() {
  const actions = {
    handleAddAuthor: function (_id: string) { },
    handleDeleteAuthor: function (_id: string) { }
  }
  return (
    <AuthorActions.Provider value={actions}>
      <AppRouter />
    </AuthorActions.Provider>
  );
}

export default App;
