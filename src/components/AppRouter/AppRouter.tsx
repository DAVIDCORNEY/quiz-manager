import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '../Login/Login';
import Quiz from '../Quiz/Quiz';
import Questions from '../Questions/Questions';
import EditQuestion from '../EditQuestion/EditQuestion';
import { ReactElement, useState } from 'react';

const AppRouter = ():ReactElement => {
    const [token, setToken] = useState<string>("");
    console.log('TOKEN', token)
    if(!token) {
        return <Login setToken={setToken}/>
    }
    return(
    <div>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Quiz/>}/>
                <Route path="/question/edit/:id" element={<EditQuestion/>}/>
                <Route path="/quizzes/:quizId/questions" element={<Questions/>}/>
            </Routes>
      </BrowserRouter>
    </div>
    )
}

export default AppRouter;



