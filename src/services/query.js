import {gql} from 'apollo-boost';

const getCustomerToken = gql`
  mutation generateCustomerTokenCustom($email: String!, $password: String!) {
    generateCustomerTokenCustom(username: $email, password: $password) {
      token
    }
  }
`;

const getCategoryList = gql`
  {
    categoryList {
      children {
        id
        name
        url_key
      }
    }
  }
`;

const getCategoryByKey = gql`
  query getCategoryByKey($url_key: String!) {
    categoryList(filters: {url_key: {eq: $url_key}}) {
      id
      name
      image_path
      description
      products {
        items {
          id
          name
          small_image {
            url
          }
          url_key
          sku
          price_range {
            minimum_price {
              regular_price {
                currency
                value
              }
              final_price {
                currency
                value
              }
            }
          }
        }
      }
      children {
        id
        name
        image_path
        url_key
      }
    }
  }
`;

const getProductListByCategory = gql`
  query getCategoryByKey($category_id: String!) {
    products(filter: {category_id: {eq: $category_id}}, selectedStore: 1) {
      items {
        id
        thumbnail {
          url
        }
        name
        price {
          regularPrice {
            amount {
              value
              currency
            }
          }
        }
      }
      total_count
      page_info {
        page_size
      }
    }
  }
`;

const getProductByKey = gql`
  query getProductByKey($url_key: String!) {
    products(filter: {url_key: {eq: $url_key}}, selectedStore: 1) {
      items {
        id
        name
        sku
        description {
          html
        }
        image {
          url
          label
        }
        stock_status
        price_range {
          minimum_price {
            regular_price {
              value
              currency
            }
            final_price {
              value
              currency
            }
          }
        }
      }
    }
  }
`;

const getNotificationList = gql`
  {
    customerNotificationList {
      items {
        entityId
        content
        unread
        subject
      }
    }
  }
`;

const getCustomerData = gql`
  {
    customer(selectedStore: 1) {
      email
      firstname
      lastname
      date_of_birth
      gender
    }
  }
`;

export {
  getCustomerToken,
  getCategoryByKey,
  getCategoryList,
  getProductListByCategory,
  getProductByKey,
  getNotificationList,
  getCustomerData,
};
