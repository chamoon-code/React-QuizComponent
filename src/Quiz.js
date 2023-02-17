import React, { Component } from 'react'

let quizData = require('./quis_data.json')

class Quiz extends Component {
  construction(props) {
    super(props)
    this.state = { quiz_position: 1 }
  }
  render() {
    return (
      <div>
      <div className="QuizQuestion">
      {quizData.quiz_questions[0].instruction_text}</div>
      </div>
    )
  }
}
