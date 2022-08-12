import React, { ReactElement, useEffect, useState, useRef } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { ApiError, OpenAPI, QuestionControllerService, QuestionExcluding_id_quizId_WithRelations, QuestionPartialExcluding_id_quizId_ } from '../../services/openapi';
import { getToken } from '../../utils/getToken';

const EditQuestion = (): ReactElement => {
    let navigate = useNavigate();
    const intialState = {
        question: "",
        answer: "",
        option1: "",
        option2: "",
        option3:"",
    }
    const [question, setQuestion] = useState<QuestionExcluding_id_quizId_WithRelations>(intialState);
    const [error, setError] = useState<ApiError|null>();
    const questionInput = useRef<HTMLInputElement>(null);
    const answerInput = useRef<HTMLInputElement>(null);
    const option1Input = useRef<HTMLInputElement>(null);
    const option2Input = useRef<HTMLInputElement>(null);
    const option3Input = useRef<HTMLInputElement>(null);

    const authToken = getToken();

    const headerObject = {
        Authorization: `Bearer ${authToken}`
    }

    OpenAPI.HEADERS = headerObject

    const params = useParams();
    const { id } = params;

    useEffect(() => {
        QuestionControllerService.questionControllerFindById(id!)
            .then((question) => setQuestion(question))
            .catch((error) => setError(error))
    },[id]);

    if(error) {console.log(error)};

    const editQuestion = (id:string | undefined, questionData:QuestionPartialExcluding_id_quizId_) => {
        QuestionControllerService.questionControllerUpdateById(id!, questionData)
            .then((response) => {
                navigate('/');
            })
    }

    const handleSubmit = (event:React.FormEvent<HTMLFormElement>) => {
        const updatedQuestion = {
            question: questionInput.current?.value,
            answer: answerInput.current?.value,
            option1: option1Input.current?.value,
            option2: option2Input.current?.value,
            option3: option3Input.current?.value
        }
        editQuestion(id, updatedQuestion);
        event.preventDefault();
    }

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        setQuestion({...question, [name]:value})
    }

    return (
        <div>
            <br/>
            <Link to="/">Back</Link>
            <h1>Edit the question</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <input type="text" value={question?.question} name="question" ref={questionInput}
                        onChange={handleInputChange}
                    />
                    <label htmlFor='question'>Question</label>
                </div>
                <div>
                    <input type="text" value={question?.answer} name="answer" ref={answerInput}
                        onChange={handleInputChange}
                    />
                    <label htmlFor='answer'>Answer</label>
                </div>
                <div>
                    <input type="text" value={question?.option1} name="option1" ref={option1Input}
                        onChange={handleInputChange}
                    />
                    <label htmlFor='option1'>Option1</label>
                </div>
                <div>
                    <input type="text" value={question?.option2} name="option2" ref={option2Input}
                        onChange={handleInputChange}
                    />
                    <label htmlFor='option2'>Option2</label>
                </div>
                <div>
                    <input type="text" value={question?.option3} name="option3" ref={option3Input}
                        onChange={handleInputChange}
                    />
                    <label htmlFor='option3'>Option3</label>
                </div>
                <input type="submit" value="save"/>
            </form>
        </div>
    )
}

export default EditQuestion;