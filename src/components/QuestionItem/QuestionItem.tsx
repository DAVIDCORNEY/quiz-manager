import { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { Question } from '../../services/openapi';

interface Props {
    question: Question
}

const userRole = localStorage.getItem('role');

const isAllowedToEditQuestions = (userRole:string) => {
    if(userRole === 'admin' || userRole === 'customer'){
        return true;
    } else {
        return false;
    }
}

const isNotAllowedToViewAnswers = (userRole:string) => {
    if(userRole === 'guest'){
        return false
    }else {
        return true
    }
}

const QuizItem = ({question}: Props): ReactElement => {
    return (
        <div>
            <li>
                {question.question}
            </li>
            {isNotAllowedToViewAnswers(userRole!) &&
                <>
                <li>{question.option1}</li>
                <li>{question.option2}</li>
                <li>{question.option3}</li>
                </>
            }
            {isAllowedToEditQuestions(userRole!) && (
                <>
                    <Link to={`/question/edit/${question.id}`}>Edit</Link>
                    <button>Delete</button>
                </>
            )}
        </div>
    )
}

export default QuizItem;