/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import { Link } from 'gatsby';

import { rhythm } from '../utils/typography';

const Bio = ({ short }) => {
  console.log('short', short);
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
            title
          }
          social {
            twitter
          }
        }
      }
    }
  `);

  const { author, social } = data.site.siteMetadata;
  return (
    <div
      style={{
        display: `flex`,
        marginBottom: rhythm(2.5),
      }}
    >
      <a href='https://jacobpackert.dk' target='_blank' rel='noopener noreferrer' style={{ boxShadow: 'none' }}>
        <Image
          fixed={data.avatar.childImageSharp.fixed}
          alt={author.name}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            minWidth: 50,
            borderRadius: `100%`,
          }}
          imgStyle={{
            borderRadius: `50%`,
          }}
        />
      </a>
      <p style={{ fontSize: '0.8rem', lineHeight: '1rem' }}>
        {short && (
          <span>
            Written by{' '}
            <strong>
              <a href='https://jacobpackert.dk' target='_blank' rel='noopener noreferrer'>
                {author.name}
              </a>
            </strong>{' '}
            <br />
          </span>
        )}
        {author.summary} <br />
        {author.title}
      </p>
    </div>
  );
};

export default Bio;
