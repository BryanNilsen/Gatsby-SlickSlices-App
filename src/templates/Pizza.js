import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

export default function SinglePizzaPage({ data }) {
  // ! CONTINUE ON PART 24
  //   TODO: style this... list toppings
  const { pizza } = data;
  return (
    <>
      <p>{pizza.name}</p>
      <Img fluid={pizza.image.asset.fluid} alt={pizza.name} />
    </>
  );
}

// this needs to be dynamic based on the slug passed in via context in gatsby-node.js
export const query = graphql`
  query($slug: String!) {
    pizza: sanityPizza(slug: { current: { eq: $slug } }) {
      name
      id
      image {
        asset {
          fluid(maxWidth: 800) {
            ...GatsbySanityImageFluid
          }
        }
      }
      toppings {
        name
        id
        vegetarian
      }
    }
  }
`;
