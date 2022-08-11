import { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { Question } from '../../services/openapi';

interface Props {
    question: Question
}

const QuizItem = ({question}: Props): ReactElement => {
    return (
        <div>
            <li>
                {question.question}
            </li>
            {question.options.map(option => {
                return(
                    <li>{option}</li>
                )
            })}
            <Link to={`/question/edit/${question.id}`}>Edit</Link>
            <button>Delete</button>
        </div>
    )
}

export default QuizItem;