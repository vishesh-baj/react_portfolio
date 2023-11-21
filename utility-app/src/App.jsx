import AppLayout from "./layout/AppLAyout";
import { Route, Routes } from "react-router-dom";
import { PATHS } from "./routes/paths";
import Dashboard from "./pages/Dashboard";
import TodosPage from "./pages/TodosPage";
import NotesPage from "./pages/NotesPage";
import ColorPalettePage from "./pages/ColorPalettePage";
import PomodoroPage from "./pages/PomodoroPage";
const App = () => {
  return (
    <AppLayout>
      <Routes>
        <Route path={PATHS.dashboard} element={<Dashboard />} />
        <Route path={PATHS.todos} element={<TodosPage />} />
        <Route path={PATHS.notes} element={<NotesPage />} />
        <Route path={PATHS.colorPalette} elemet={<ColorPalettePage />} />
        <Route path={PATHS.pomodoro} element={<PomodoroPage />} />
      </Routes>
    </AppLayout>
  );
};

export default App;
