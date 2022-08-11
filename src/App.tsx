// import { useState } from "react";
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
// import Questions from './components/Questions/Questions';
// import Login from "./components/Login/Login";
// import Quiz from "./components/Quiz/Quiz";

import AppRouter from "./components/AppRouter/AppRouter";

function App() {
  return (
    <div className="wrapper">
      <AppRouter/>
    </div>
  );
}

export default App;

// export default App;
// function App() {
//   const [token, setToken] = useState<string>("");

//   if(!token) {
//     return <Login setToken={setToken}/>
//   }
//   return (
//     <div className="wrapper">
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Quiz/>}/>
//           <Route path="/quizzes/:quizId/questions" element={<Questions/>}/>
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;
