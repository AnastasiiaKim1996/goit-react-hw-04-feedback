// import React, { Component } from 'react';
import { Container, Logo } from './Container/Container';

import { Section } from 'components/Section/Section';
import { FeedbackOptions } from 'components/Feedback/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';
import { Notification } from 'components/Notification/Notification';

import React from 'react';
import { useState } from 'react';

export function Feedback() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const addFeedback = number => {
    switch (number) {
      case 'good':
        return setGood(prev => prev + 1);

      case 'neutral':
        return setNeutral(prev => prev + 1);

      case 'bad':
        return setBad(prev => prev + 1);

      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.floor((good * 100) / countTotalFeedback());
  };

  return (
    <Container>
      <div>
        <Logo
          src="https://papik.pro/uploads/posts/2021-11/1636132436_1-papik-pro-p-kofe-logotip-foto-1.jpg"
          alt=""
          width="80"
          height="80"
        ></Logo>
      </div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={addFeedback}
        />
      </Section>

      <Section title="Statistic">
        {countTotalFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback 🙄" />
        )}
      </Section>
    </Container>
  );
}

// ============== class component ============== //

// export class Feedback extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   addFeedback = number => {
//     this.setState(prevState => {
//       const value = prevState[number];
//       return {
//         [number]: value + 1,
//       };
//     });
//   };
//   countTotalFeedback = () => {
//     const { good, neutral, bad } = this.state;
//     return good + neutral + bad;
//   };

//   countPositiveFeedbackPercentage = () =>
//     this.countTotalFeedback()
//       ? Math.floor((this.state.good * 100) / this.countTotalFeedback())
//       : 0;

//   render() {
//     const { good, neutral, bad } = this.state;
//     const totalFeedback = this.countTotalFeedback();
//     const positivePercentage = this.countPositiveFeedbackPercentage();
//     return (
//       <Container>
//         <div>
//           <Logo
//             src="https://papik.pro/uploads/posts/2021-11/1636132436_1-papik-pro-p-kofe-logotip-foto-1.jpg"
//             alt=""
//             width="80"
//             height="80"
//           ></Logo>
//         </div>
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             options={['good', 'neutral', 'bad']}
//             onLeaveFeedback={this.addFeedback}
//           />
//         </Section>

//         <Section title="Statistic">
//           {totalFeedback ? (
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={totalFeedback}
//               positivePercentage={positivePercentage}
//             />
//           ) : (
//             <Notification message="There is no feedback 🙄" />
//           )}
//         </Section>
//       </Container>
//     );
//   }
// }
