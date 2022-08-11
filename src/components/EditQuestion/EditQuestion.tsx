import { ReactElement, useState } from 'react';
import { Link } from 'react-router-dom';

const EditQuestion = (): ReactElement => {
    const [inputValues, setInputValues] = useState<{ [x: string]: string }>()
    const handleSubmit = (event:React.FormEvent<HTMLFormElement>) => {
        const questionData = {
            question: inputValues?.question,
            answer: inputValues?.answer,
            options: [inputValues?.option1, inputValues?.option2, inputValues?.option3]
        }
        event.preventDefault();
    }

    const handleInputChange = (event: React.FormEvent<HTMLInputElement>) => {
        const { name, value } = event.currentTarget
        setInputValues(prevState => ({ ...prevState, [name]: value }))
      }
    

    return (
        <div>
            <br/>
            <Link to="/">Back</Link>
            <h1>Edit the question</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <input type="text" value={inputValues?.question || ""} name="question" onChange={handleInputChange}/>
                    <label htmlFor='question'>Question</label>
                </div>
                <div>
                    <input type="text" value={inputValues?.answer || ""} name="answer" onChange={handleInputChange}/>
                    <label htmlFor='answer'>Answer</label>
                </div>
                <div>
                    <input type="text" value={inputValues?.option1 || ""} name="option1" onChange={handleInputChange}/>
                    <label htmlFor='option1'>Option1</label>
                </div>
                <div>
                    <input type="text" value={inputValues?.option2 || ""} name="option2" onChange={handleInputChange}/>
                    <label htmlFor='option2'>Option2</label>
                </div>
                <div>
                    <input type="text" value={inputValues?.option3 || ""} name="option3" onChange={handleInputChange}/>
                    <label htmlFor='option3'>Option3</label>
                </div>
                <input type="submit" value="save"/>
            </form>
        </div>
    )
}

export default EditQuestion;