import { ReactElement } from 'react';
import {Link} from 'react-router-dom'
import { QuizWithRelations } from '../../services/openapi';

interface Props {
    quiz: QuizWithRelations
}

const QuizItem = ({quiz}: Props): ReactElement => {
    return (
            <li>
                <Link to={`/quizzes/${quiz.id}/questions`}>{quiz.title}</Link>
            </li>
    )
}

export default QuizItem;