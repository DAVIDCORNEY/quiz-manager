import { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { Question } from '../../services/openapi';

interface Props {
    question: Question
}

const QuizItem = ({question}: Props): ReactElement => {
    const role = localStorage.getItem('role');
    
    const isAllowedToEditQuestions = (role:string) => {
        if(role === 'admin' || role === 'customer'){
            return true;
        } else {
            return false;
        }
    }
    
    const isNotAllowedToViewAnswers = (role:string) => {
        if(role === 'guest'){
            return false
        }else {
            return true
        }
    }
    
    return (
        <div>
            <li>
                {question.question}
            </li>
            {isNotAllowedToViewAnswers(role!) &&
                <>
                <li>{question.option1}</li>
                <li>{question.option2}</li>
                <li>{question.option3}</li>
                </>
            }
            {isAllowedToEditQuestions(role!) && (
                <>
                    <Link to={`/question/edit/${question.id}`}>Edit</Link>
                </>
            )}
        </div>
    )
}

export default QuizItem;