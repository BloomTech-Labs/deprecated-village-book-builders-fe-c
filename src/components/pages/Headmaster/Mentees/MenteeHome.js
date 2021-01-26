import React from 'react';
import styled from 'styled-components';
import { Card } from 'antd';

import { ComponentTitles } from '../../../common/';

const { Meta } = Card;

const HomePageContainer = styled.div`
  margin: 0 auto;
  width: 100%;
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 1%;
  justify-content: space-evenly;
`;

export default function MenteeHome(props) {
  return (
    <HomePageContainer>
      <ComponentTitles titleText="Dashboard" />
      <CardContainer>
        <Card
          hoverable
          style={{ width: 400, margin: '2%' }}
          cover={
            <img
              alt="Notion logo"
              src="https://lh3.googleusercontent.com/proxy/FQlR7Qhfwl07nkqA_D_rUqImxiL_frZY38CDV_dubJgezLML6Pq3-lXSds4NM1sKvlkDUCwbMPp0zfT-f2Ncx3mzyagZaXa02KRcgxmS2L4aaUPRjbtQ4RSvsCt2EUDztJZ0ld_NR5vnSw"
            />
          }
          onClick={() => window.open('https://www.notion.so/login', '_blank')}
        >
          <Meta
            title="Notion"
            description="Where mentors and mentees are encouraged to journal, and set and review goals."
          />
        </Card>

        <Card
          hoverable
          style={{ width: 400, margin: '2%' }}
          cover={
            <img
              alt="Google logo"
              src="https://openthread.google.cn/images/ot-contrib-google.png"
            />
          }
          onClick={() => window.open('http://google.com', '_blank')}
        >
          <Meta
            title="Google"
            description="For whatever it is you're looking for, or want to know. Most knowledge is a google search away."
          />
        </Card>

        <Card
          hoverable
          style={{ width: 400, margin: '2%' }}
          cover={
            <img
              alt="Khan Academy logo"
              src="https://www.asharpeye.com/wp-content/uploads/2010/11/khan-academy-logo-png-5.png"
            />
          }
          onClick={() =>
            window.open('https://www.khanacademy.org/math/k-8-grades', '_blank')
          }
        >
          <Meta
            title="Khan Academy"
            description="Provides videos explaining concepts for every subject and practice problems listed at the end of each setup videos."
          />
        </Card>

        <Card
          hoverable
          style={{ width: 400, margin: '2%' }}
          cover={
            <img
              alt="YouTube logo"
              src="https://i.insider.com/59a59a8d79bbfd1d008b601a?width=1200&format=jpeg"
            />
          }
          onClick={() =>
            window.open('https://www.youtube.com/user/crashcourse', '_blank')
          }
        >
          <Meta
            title="YouTube: John Green Crash Course"
            description="Very basic explanations for biology/psychology/history"
          />
        </Card>

        <Card
          hoverable
          style={{ width: 400, margin: '2%' }}
          cover={
            <img
              alt="IXL logo"
              src="https://mma.prnewswire.com/media/370627/IXL_Learning_Logo.jpg?p=facebook"
            />
          }
          onClick={() => window.open('https://www.ixl.com/', '_blank')}
        >
          <Meta
            title="IXL"
            description="Math and language arts help for all age groups, the website is categorized by grade."
          />
        </Card>

        <Card
          hoverable
          style={{ width: 400, margin: '2%' }}
          cover={
            <img
              alt="K5 Learning logo"
              src="https://m.k5learning.com/sites/all/files/k5-logo-400-px.png"
            />
          }
          onClick={() =>
            window.open(
              'https://www.k5learning.com/free-worksheets-for-kids',
              '_blank'
            )
          }
        >
          <Meta
            title="K5 Learning"
            description="Worksheets for math, language arts, reading comprehension, spelling, and grammar."
          />
        </Card>

        <Card
          hoverable
          style={{ width: 400, margin: '2%' }}
          cover={
            <img
              alt="Math-Drills logo"
              src="https://www.math-drills.com/images/math-drills-footer.svg?v=2"
            />
          }
          onClick={() => window.open('https://www.math-drills.com/', '_blank')}
        >
          <Meta
            title="Math-Drills"
            description="Provides math worksheets for addition, subtraction, multiplication, division, geometry, integers, real numbers, and more."
          />
        </Card>

        <Card
          hoverable
          style={{ width: 400, margin: '2%' }}
          cover={
            <img
              alt="Splash Learn logo"
              src="https://cdn.splashmath.com/logo/splashlearn_logo_withbrandmark.jpg"
            />
          }
          onClick={() => window.open('https://www.splashlearn.com/', '_blank')}
        >
          <Meta
            title="Splash Learn"
            description="Fun Math Activities for Kids."
          />
        </Card>

        <Card
          hoverable
          style={{ width: 400, margin: '2%' }}
          cover={
            <img
              alt="English For Everyone logo"
              src="https://edsurge.imgix.net/uploads/product/image/1506/FBRT-1456779904.png?auto=compress%2Cformat&w=480&h=480&fit=crop"
            />
          }
          onClick={() =>
            window.open('https://englishforeveryone.org/', '_blank')
          }
        >
          <Meta
            title="English For Everyone"
            description="Worksheets for nouns, verbs, grammatical prepositions, punctuation, sentence construction."
          />
        </Card>

        <Card
          hoverable
          style={{ width: 400, margin: '2%' }}
          cover={
            <img
              alt="Idoo logo"
              src="https://images.squarespace-cdn.com/content/v1/5880dd4dd482e9da5c3bf1ea/1584989798626-J8Y7YLHJ3BFRWCIIMMI9/ke17ZwdGBToddI8pDm48kHqYAt3UgyjNg-0dlUc4K5hZw-zPPgdn4jUwVcJE1ZvWhcwhEtWJXoshNdA9f1qD7UnCxNA8dHvmd7460Z7fbKEmJ2gL2qv94i4UWS2y7YfwkXCxk_sn2atIO3dASbw33Q/idroo.png"
            />
          }
          onClick={() => window.open('https://idroo.com/', '_blank')}
        >
          <Meta
            title="Idoo"
            description="Practice questions and learn math formulas, Spanish (and more languages), and has a whiteboard where you can write out all the work virtually."
          />
        </Card>
      </CardContainer>
    </HomePageContainer>
  );
}
