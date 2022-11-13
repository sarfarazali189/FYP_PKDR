/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      fatherName
      DOB
      gender
      phonenumber
      city
      country
      email
      cnic
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        fatherName
        DOB
        gender
        phonenumber
        city
        country
        email
        cnic
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
