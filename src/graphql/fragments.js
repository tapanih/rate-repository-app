import { gql } from 'apollo-boost';

export const REPOSITORY_INFO = gql`
  fragment RepositoryInfo on Repository {
    id
    fullName
    description
    language
    forksCount
    stargazersCount
    ratingAverage
    reviewCount
    ownerAvatarUrl
  }
`;

export const PAGE_INFO = gql`
  fragment PageInfoFragment on PageInfo {
    endCursor
    startCursor
    totalCount
    hasNextPage
  }
`;

export const REVIEW_INFO = gql`
  fragment ReviewInfo on Review {
    id
    text
    rating
    createdAt
    user {
      id
      username
    }
  }
`;