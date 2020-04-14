import * as React from 'react';
import { graphql } from 'gatsby';
import { Link } from '@reach/router';

import styled from 'styled-components';

import './HeaderMenu.css';
import {
  MenuDowndownItem,
  MenuDowndownDataCat,
  MenuDowndownDataCatItem
} from './MenuDropdownItem';
import { CoursesJsonConnection } from '../../../domain/graphql-types';
import { courseFromCoursesJsonEdge } from '../../../domain/converters';

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 50px;

  @media only screen and (max-width: 624px) {
    margin-right: 15px;
  }
`;

interface HeaderMenuProps {
  data: {
    coursesConnection: CoursesJsonConnection;
  };
}
interface HeaderMenuState {
  isCoursesOpen: boolean;
  isTrainigOpen: boolean;
}

export class HeaderMenu extends React.Component<
  HeaderMenuProps,
  HeaderMenuState
> {
  private coursesMenuData: MenuDowndownDataCat[] = [];
  private trainingMenuData: MenuDowndownDataCat[] = [];

  constructor(props: HeaderMenuProps) {
    super(props);

    const courses = this.props.data.coursesConnection.edges.map(c =>
      courseFromCoursesJsonEdge(c, [])
    );

    const coreCat: MenuDowndownDataCat = {
      categoryName: 'NativeScript Core Courses',
      categoryLinks: []
    };
    const angularCat: MenuDowndownDataCat = {
      categoryName: 'NativeScript Angular Courses',
      categoryLinks: []
    };
    const vueCat: MenuDowndownDataCat = {
      categoryName: 'NativeScript Vue Courses',
      categoryLinks: []
    };

    courses.map(c => {
      const item: MenuDowndownDataCatItem = {
        title: c.title,
        link: `/course/${c.url}`
      };
      if (c.flavors.includes('Core')) {
        coreCat.categoryLinks.push(item);
      }
      if (c.flavors.includes('Angular')) {
        angularCat.categoryLinks.push(item);
      }
      if (c.flavors.includes('Vue')) {
        vueCat.categoryLinks.push(item);
      }
    });

    // this.menuData = [coreCat, angularCat, vueCat];

    this.coursesMenuData = [
      {
        categoryName: 'Popular Courses',
        categoryLinks: [
          {
            title: 'NativeScript Vue Pro',
            link: '/course/nativescript-vue-pro'
          },
          {
            title: 'NativeScript Core Pro',
            link: '/course/nativescript-core-pro'
          },
          {
            title: 'NativeScript with Angular Pro',
            link: '/course/nativescript-with-angular-pro'
          },
          {
            title: 'View all courses >',
            link: '/courses',
            className: 'view-all-link'
          }
        ]
      },
      {
        categoryName: 'Learning Tracks',
        categoryLinks: [
          {
            title: 'NativeScript Vue Track',
            link: '/track/vue'
          },
          {
            title: 'NativeScript Angular Track',
            link: '/track/angular'
          },
          {
            title: 'NativeScript Core Track',
            link: '/track/core'
          }
        ]
      },
      {
        categoryName: 'Webinars',
        categoryLinks: [
          {
            title: 'Free Pro Webinar',
            link: '/pro-webinar'
          }
        ]
      }
    ];

    this.trainingMenuData = [
      {
        categoryName: 'Private Classes',
        categoryLinks: [
          {
            title: 'Traing Your Team',
            link: 'https://nativescript.training/training/private/',
            external: true
          }
        ]
      },
      {
        categoryName: 'Open Enrollment',
        categoryLinks: [
          {
            title: 'Public Classes for Everyone',
            link: 'https://nativescript.training/training/public/',
            external: true
          }
        ]
      },
      {
        categoryName: 'Pro Webinar',
        categoryLinks: [
          {
            title: 'Free Pro Webinar',
            link: '/pro-webinar'
          }
        ]
      }
    ];

    this.state = {
      isCoursesOpen: false,
      isTrainigOpen: false
    };
  }

  public onNonDropdownClick() {
    this.setState({
      isCoursesOpen: false,
      isTrainigOpen: false
    });
  }

  public onCoursesClick() {
    this.setState({
      isCoursesOpen: !this.state.isCoursesOpen,
      isTrainigOpen: false
    });
  }

  public onTrainingClick() {
    this.setState({
      isTrainigOpen: !this.state.isTrainigOpen,
      isCoursesOpen: false
    });
  }

  public render() {
    return (
      <Container className="navbar">
        <Link
          to="/"
          className="navbar-link navbar-link-collapse"
          onClick={() => this.onNonDropdownClick()}
        >
          Home
        </Link>

        <MenuDowndownItem
          menuName="Courses"
          linkName="Courses"
          itemData={this.coursesMenuData}
          navButtonClick={() => this.onCoursesClick()}
          openStateProp={this.state.isCoursesOpen}
        />

        <MenuDowndownItem
          menuName="Training"
          linkName="Training"
          itemData={this.trainingMenuData}
          navButtonClick={() => this.onTrainingClick()}
          openStateProp={this.state.isTrainigOpen}
        />
      </Container>
    );
  }
}

export const headerMenuQuery = graphql`
  query HeaderMenuQuery {
    #get courses
    coursesConnection: allCoursesJson(sort: { order: ASC, fields: [order] }) {
      totalCount
      edges {
        node {
          id
          title
          flavors
          url
          label
          authors
          level
          order
          products {
            id
            name
            description
            licensesMin
            licensesMax
            pricereg
            pricesale
          }
        }
      }
    }
  }
`;
