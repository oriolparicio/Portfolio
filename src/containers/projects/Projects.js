import React, { useState, useEffect } from 'react';
import ApolloClient from 'apollo-boost';
import { gql } from 'apollo-boost';
import './Project.css';
import GithubRepoCard from '../../components/githubRepoCard/GithubRepoCard';
import Button from '../../components/button/Button';
import { openSource, socialMediaLinks } from '../../portfolio';
import { Fade } from 'react-reveal';
import ProjectsWeb from '../../components/projectsWeb/ProjectsWeb';

export default function Projects() {
  const [repo, setrepo] = useState([]);

  useEffect(() => {
    getRepoData();
  }, []);

  function getRepoData() {
    const client = new ApolloClient({
      uri: 'https://api.github.com/graphql',
      request: (operation) => {
        operation.setContext({
          headers: {
            authorization: `Bearer ${atob(openSource.githubConvertedToken)}`,
          },
        });
      },
    });

    client
      .query({
        query: gql`
        {
        user(login: "${openSource.githubUserName}") {
          pinnedItems(first: 6, types: [REPOSITORY]) {
            totalCount
            edges {
              node {
                ... on Repository {
                  name
                  description
                  forkCount
                  stargazers {
                    totalCount
                  }
                  url
                  id
                  diskUsage
                  primaryLanguage {
                    name
                    color
                  }
                }
              }
            }
          }
        }
      }
        `,
      })
      .then((result) => {
        setrepoFunction(result.data.user.pinnedItems.edges);
        console.log(result);
      });
  }

  function setrepoFunction(array) {
    setrepo(array);
  }

  const projectsData = [
    {
      title: 'APPOCKET',
      url: 'https://appocket.net/',
      desc: '',
    },
    {
      title: 'APPOCKET DASHBOARD',
      url: '',
      desc: 'Private',
    },
    {
      title: 'APPOCKET API',
      url: '',
      desc: 'Private',
    },
    {
      title: 'NFT Mastery',
      url: 'https://nftmastery.com/',
      desc: '',
    },
    {
      title: 'Kat Safarova',
      url: 'https://katsafarova.com/',
      desc: '',
    },
    {
      title: 'Chatarras Life',
      url: 'https://chatarraslife.com/',
      desc: '',
    },
    {
      title: 'La Hija del Jeque',
      url: 'https://lahijadeljeque.com/',
      desc: '',
    },
    {
      title: 'Olivia Misssy',
      url: 'https://www.oliviamisssy.com/',
      desc: '',
    },
    {
      title: 'Twerkealo',
      url: 'https://twerkealo.com/',
      desc: '',
    },
    {
      title: 'Press And Pull',
      url: 'https://online.pressandpullstudio.com/',
      desc: '',
    },
    {
      title: 'Mentorial (Work in Progress)',
      url: 'https://mentorial.com/',
      desc: '',
    },
  ];

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="opensource">
        <h1 className="project-title">Projects</h1>
        <div className="repo-cards-div-main" id="projects">
          {projectsData.map((web, i) => {
            return <ProjectsWeb repo={web} key={i} />;
          })}
          {repo.map((v, i) => {
            return <GithubRepoCard repo={v} key={v.node.id} />;
          })}
        </div>
        <Button
          text={'More Projects'}
          className="project-button"
          href={socialMediaLinks.github}
          newTab={true}
        />
      </div>
    </Fade>
  );
}
