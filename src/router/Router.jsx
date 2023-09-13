// react router와 관련된 설정을 할거예요.
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home'; // Home 페이지 import
import Detail from '../pages/Detail'; // Detail 페이지 import

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/Detail/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}
