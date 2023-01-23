import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';
import { Layout, Row, Col, Anchor, Space, Button, Card, Typography, Form, Input , Divider, Popover} from 'antd';
import { LinkedinOutlined, GithubOutlined, YoutubeOutlined, InfoCircleOutlined } from '@ant-design/icons';

const  { Title } = Typography;


const { Header,Footer } = Layout;


function Home() {
  return (
    <div className='page-content'>

      <Row>
        <Col xs={24} sm={12} md={12} lg={12} xl={12} >
          <div id='left' >
            <div>

            
            <h2>My name is Bill Konchellah</h2>
            <h2>I am a full-stack developer</h2>

            <Space>
              <Button type='dashed'><a href="#projects">View Projects</a></Button>
              <Button type='default'><a href="#contact">Contact Me</a></Button>
            </Space>
            <div style={{
              marginTop: '20px' 
            }}>
              <Space >
              <LinkedinOutlined 
                style={{
                fontSize: "30px"
              }}/>
              <a href="https://github.com/k-man-null">
              <GithubOutlined 
              style={{
                fontSize: "30px"
              }}/>
              </a>
              
              <YoutubeOutlined
                style={{
                  fontSize: "30px"
                }}
              />
              </Space>
            
            </div>
            </div>
          </div>
        </Col>
        <Col xs={24} sm={12} md={12} lg={12} xl={12}>
          <div id='right'>
            <img src="developer.png" alt="A software developer" />
          </div>
        </Col>
      </Row>

    </div>
      
    
  )
}

function About() {
  
  return (
    <Card style={{ width: '100%', margin: '0 auto', textAlign: 'center'}}>
      <Typography.Title >About Me</Typography.Title>
      <Typography.Paragraph >
        Hi there! My name is Bill Konchellah and I am a self-taught developer. I have always been fascinated by the power of technology to solve problems and improve people's lives, which is what drew me to pursue a career in software development.
      </Typography.Paragraph>
      <Typography.Paragraph >
        Throughout my journey as a self-taught developer, I have gained a strong foundation in a variety of technologies and methodologies, and have had the opportunity to work on a range of projects. I am skilled in languages such as Java, Javscript, Python, C# , and have experience working with frameworks such as express, react, angular, flask, django, asp and learning more...
      </Typography.Paragraph>
      <Typography.Paragraph >
        In my spare time, I enjoy staying up-to-date with the latest developments in my field and learning new technologies. I am also an active member of the developer community, and enjoy participating in hackathons and attending meetups and conferences.
      </Typography.Paragraph>
      <Typography.Paragraph >
        I am excited to share my work with you below, and I hope you find it interesting and informative. Please don't hesitate to reach out if you have any questions or if you'd like to connect.
      </Typography.Paragraph>
    </Card>
  );
}

function Projects() {
  const projects = [
    {
      title: 'Spotify Clone',
      image: 'spotifyClone.png',
      githubLink: 'https://github.com/k-man-null/musica-rondo',
      projectLink: 'https://musica-rondo.vercel.app/',
      demoLink: 'https://www.youtube.com/watch?v=abcdefg',
      desc: 'FullStack music player'
    },
    {
      title: 'Dice Angular',
      image: 'diceGame.png',
      githubLink: 'https://github.com/k-man-null/DiceGame',
      projectLink: 'https://dice-game-270l2gpah-k-man-null.vercel.app/',
      demoLink: 'https://www.youtube.com/watch?v=hijklmnop',
      desc: 'An OOP Typescript Angular dice game'
    },
    {
      title: 'Project 2',
      image: 'https://via.placeholder.com/200x200.jpg',
      githubLink: 'https://github.com/project2',
      projectLink: 'https://project2.com',
      demoLink: 'https://www.youtube.com/watch?v=hijklmnop',
      desc: 'An api'
    },
    {
      title: 'Project 2',
      image: 'https://via.placeholder.com/200x200.jpg',
      githubLink: 'https://github.com/project2',
      projectLink: 'https://project2.com',
      demoLink: 'https://www.youtube.com/watch?v=hijklmnop',
      desc: 'An api'
    },
    {
      title: 'Project 2',
      image: 'https://via.placeholder.com/200x200.jpg',
      githubLink: 'https://github.com/project2',
      projectLink: 'https://project2.com',
      demoLink: 'https://www.youtube.com/watch?v=hijklmnop',
      desc: 'An api'
    },
    {
      title: 'Project 2',
      image: 'https://via.placeholder.com/200x200.jpg',
      githubLink: 'https://github.com/project2',
      projectLink: 'https://project2.com',
      demoLink: 'https://www.youtube.com/watch?v=hijklmnop',
      desc: 'An api',

    },
    // Add more projects here
  ];

  return (
    <div style={{textAlign: 'center'}}>
    
      <Title>Projects</Title>
    
    <Row gutter={16}>
      
      {projects.map((project) => (
        <Col xs={24} sm={12} md={8} lg={6} xl={4}>
          <Card
            hoverable
            cover={<img alt={project.title} src={project.image} />}
          >
            <Popover>
            <InfoCircleOutlined />
            </Popover>
            
            <Card.Meta
              title={project.title}
              description={
                project.desc
              }
            />
            <Divider></Divider>
            <a href={project.githubLink} >
                  GitHub
                </a>
                <br />
            <a href={project.projectLink} >
              View Project
            </a>
            <br />
            <a href={project.demoLink} >
              View Demo
            </a>
          </Card>
        </Col>
      ))}
    </Row>
    </div>
  );
}


function Contact() {
  const [form] = Form.useForm();
  

  const onFinish = (values) => {
    window.location.href = `mailto:billkonchellah@gmail.com?subject=${values.subject}&body=Name: ${values.name}%0AEmail: ${values.email}%0AMessage: ${values.message}`;
  };

  return (
    <Card style={{ width: '100%', margin: '0 auto'  }}>
      <Typography.Title >Contact Me</Typography.Title>
      <Form form={form} onFinish={onFinish} layout='vertical'>
        <Form.Item
          label='Name'
          name='name'
          rules={[{ required: true, message: 'Please enter your name' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label='Email'
          name='email'
          rules={[
            { required: true, message: 'Please enter your email' },
            { type: 'email', message: 'Please enter a valid email' },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label='Subject'
          name='subject'
          rules={[{ required: true, message: 'Please enter a subject' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label='Message'
          name='message'
          rules={[{ required: true, message: 'Please enter a message' }]}
        >
          <Input.TextArea rows={4} />
        </Form.Item>
        <Form.Item>
          <Button type='primary' htmlType='submit'>
            Send Message
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
}

const App = () => {
  

  

  const currentYear = new Date().getFullYear();
  const topRef = React.useRef(null);
  const [targetOffset, setTargetOffset] = useState(undefined);
  
  useEffect(() => {
    setTargetOffset(topRef.current?.clientHeight);
  }, []);

  return (
    <Layout style={{ overflowX: 'hidden' }}>
     
      <Header style={{ position: 'sticky', top: 0, zIndex: 1, width: '100%' }}>
        <div
          style={{
            
            width: 200,
            height: 31,
            margin: '16px 24px 16px 0',
            background: 'rgba(255, 255, 255, 0.2)',
            display: 'flex',
            alignItems: 'center'
            
          }}
        >
          <span style={{ 
            color: 'white',
            margin: '0 auto'
          }}>Bill Konchellah</span>
        </div>

        
        
      </Header>
      <Row>
      <Col xs={24} sm={18} md={18} lg={18} xl={18}>
          <div
            id="home"
            style={{
              
              background: 'rgba(255,0,0,0.02)',
            }}
          >
            <Home></Home>
          </div>
          <div
            id="about"
            style={{
              padding: '20px',
              background: 'rgba(0,255,0,0.02)',
            }}
          >
            <About></About>
          </div>
          <div
            id="projects"
            style={{
              padding: '20px',
              background: 'rgba(0,0,255,0.02)',
            }}
          >
            <Projects></Projects>
          </div>
          <div
            id="contact"
            style={{
              padding: '20px',
              background: 'rgba(0,0,255,0.02)',
            }}
          >
            <Contact></Contact>
          </div>
        </Col>
        <Col xs={0} sm={6} md={6} lg={6} xl={6}>
          <Anchor
            targetOffset={targetOffset}
            items={[
              {
                key: 'home',
                href: '#home',
                title: 'home',
              },
              {
                key: 'about',
                href: '#about',
                title: 'about',
              },
              {
                key: 'projects',
                href: '#projects',
                title: 'projects',
              },
              {
                key: 'contact',
                href: '#contact',
                title: 'contact',
              },
            ]}
          />
        </Col>
      </Row>
      <Footer style={{ textAlign: 'center' }}>©{currentYear} Created by Bill Konchellah</Footer>
    </Layout>
  );
};

export default App;