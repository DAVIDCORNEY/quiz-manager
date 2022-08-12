import { ReactElement, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ApiError, OpenAPI, Question, QuizQuestionControllerService } from '../../services/openapi';
import QuestionItem from '../QuestionItem/QuestionItem';
import { getToken } from '../../utils/getToken';

const Questions = (): ReactElement => {
    const [questions, setQuestions] = useState<Array<Question>>([]);
    const [error, setError] = useState<ApiError|null>();

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
    },[quizId]);

    if(error) {console.log(error)};

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