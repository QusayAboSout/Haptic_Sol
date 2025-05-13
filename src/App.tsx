import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

import MainPage from "./Pages/oh_studio/main-page";
import HapticPage from "./Pages/haptic/haptic_page";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <PrimeReactProvider>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" element={<MainPage />} />
            <Route path="/haptic" element={<HapticPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </PrimeReactProvider>
  );
}

export default App;
