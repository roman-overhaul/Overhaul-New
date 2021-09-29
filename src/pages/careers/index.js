import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/Layout'
import PageTitle from '../../components/PageTitle'

const CareersPage = ({ data }) => {
    return (
        <Layout>
        <PageTitle
          title='We’re on the lookout for talented individuals with a passion for creativity and technology to join our team.'
          />
          <div className="careers container row">
            <h2 className="col-md-6 col-xs-12">Open Positions</h2>
            <div className="col-xs-12 col-md-6">
             {
              data.allMdx.nodes.map((node) => (
                  <Link to={`/careers/${node.slug}`} className="careers_card" key={node.id}>
                      <h2>{node.frontmatter.title}</h2>
                    <div className="careers_card-link"/>
                  </Link>
                ))
              }
            </div>
          </div>
        </Layout>
    )
}

export const query = graphql `
  query {
    allMdx(filter: {fileAbsolutePath: {regex: "/careers/"}}) {
      nodes {
        frontmatter {
          title
          date(formatString: "MMMM D, YYYY")
        }
        id
        slug
      }
    }
  }

`
export default CareersPage