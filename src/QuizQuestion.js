import React, { Component } from 'react'
import QuizQuestionButton from './QuizQuestionButton.js'

class QuizQuestion extends Component {
    handleClick(buttonText){
        if (buttonText === this.props.quiz_question.answer){
            this.props.showNextQuestionHandler();
        }
    }

    render (props) {
        return (
        <main>
            <section>
                <p>{this.props.quiz_question.instruction_text}</p>
            </section>
            <section className="buttons">
                <ul>
                    {this.props.quiz_question.answer_options.map(answer_option => (
                        <QuizQuestionButton clickHandler={this.handleClick.bind(this)} key={this.props.quiz_question.answer_options.indexOf(answer_option)} button_text={answer_option}/>
                    ))}
                </ul>
            </section>
        </main>
        )
    }

}

export default QuizQuestion