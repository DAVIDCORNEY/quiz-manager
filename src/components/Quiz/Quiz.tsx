import { ReactElement, useEffect, useState } from "react";
import { ApiError, OpenAPI, QuizControllerService, QuizWithRelations } from "../../services/openapi";
import QuizItem from "../QuizItem/QuizItem";

const Quiz = (): ReactElement => {
    const [quizzes, setQuizzes] = useState<Array<QuizWithRelations>>([]);
    const [error, setError] = useState<ApiError|null>();

    const getToken = ():string => {
        const userToken = localStorage.getItem('token');
        const tokenString = JSON.parse(userToken as string);
        return tokenString.token;
    }

    const authToken = getToken();

    const headerObject = {
        Authorization: `Bearer ${authToken}`
    }

    OpenAPI.HEADERS = headerObject


    useEffect(() => {
        QuizControllerService.quizControllerFind()
            .then((quizzes) => setQuizzes(quizzes))
            .catch((error) => setError(error));
    },[]);

    const quizList = quizzes.map((quiz) => {
        return(
            <QuizItem key={quiz.id} quiz={quiz}/>
        )
    })

    return (
        <div>
            <h1>Quiz</h1>
            <ul>
                {quizList}
            </ul>
        </div>
    )
}

export default Quiz;