import { ReactElement, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ApiError, OpenAPI, Question, QuizQuestionControllerService } from '../../services/openapi';
import QuestionItem from '../QuestionItem/QuestionItem';

const Questions = (): ReactElement => {
    const [questions, setQuestions] = useState<Array<Question>>([]);
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

    const params = useParams();
    const { quizId } = params;

    useEffect(() => {
        QuizQuestionControllerService.quizQuestionControllerFind(quizId!)
            .then((quizzes) => setQuestions(quizzes))
            .catch((error) => setError(error));
    },[]);

    const questionList = questions.map((question) => {
        return(
            <QuestionItem key={question.id} question={question}/>
        )
    })

    return (
        <div>
            <Link to="/">Back</Link>
            <h1>Please answer the following questions</h1>
            <ul>
                {questionList}
            </ul>
        </div>
    )
}

export default Questions;