/**
 * Footer component.
 * @module components/theme/Footer/Footer
 */

import React from 'react';
import { Container, Divider, List, Segment } from 'semantic-ui-react';
import {
  FormattedMessage,
  defineMessages,
  injectIntl,
  intlShape,
} from 'react-intl';

const messages = defineMessages({
  copyright: {
    id: 'Copyright',
    defaultMessage: 'Copyright',
  },
});

/**
 * Footer component class.
 * @function Footer
 * @param {Object} intl Intl object
 * @returns {string} Markup of the component
 */
const Footer = ({ intl }) => (
  <Segment inverted vertical textAlign="center">
    <Container>
      <FormattedMessage
        id="The {plonecms} is {copyright} 2000-{current_year} by the {plonefoundation} and friends."
        defaultMessage="The {plonecms} is {copyright} 2000-{current_year} by the {plonefoundation} and friends."
        values={{
          plonecms: (
            <FormattedMessage
              id="Plone{reg} Open Source CMS/WCM"
              defaultMessage="Plone{reg} Open Source CMS/WCM"
              values={{ reg: <sup>®</sup> }}
            />
          ),
          copyright: (
            <abbr title={intl.formatMessage(messages.copyright)}>©</abbr>
          ),
          current_year: new Date().getFullYear(),
          plonefoundation: (
            <a href="http://plone.org/foundation">
              <FormattedMessage
                id="Plone Foundation"
                defaultMessage="Plone Foundation"
              />
            </a>
          ),
        }}
      />{' '}
      <FormattedMessage
        id="Distributed under the {license}."
        defaultMessage="Distributed under the {license}."
        values={{
          license: (
            <a href="http://creativecommons.org/licenses/GPL/2.0/">
              <FormattedMessage
                id="GNU GPL license"
                defaultMessage="GNU GPL license"
              />
            </a>
          ),
        }}
      />
      <Divider />
      <List horizontal>
        <List.Item href="/sitemap">
          <FormattedMessage id="Site Map" defaultMessage="Site Map" />
        </List.Item>
        <List.Item href="/accessibility-info">
          <FormattedMessage id="Accessibility" defaultMessage="Accessibility" />
        </List.Item>
        <List.Item href="/contact">
          <FormattedMessage id="Contact" defaultMessage="Contact" />
        </List.Item>
        <List.Item href="http://plone.com">
          <FormattedMessage
            id="Powered by Plone & Python"
            defaultMessage="Powered by Plone & Python"
          />
        </List.Item>
      </List>
    </Container>
  </Segment>
);

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
Footer.propTypes = {
  intl: intlShape.isRequired,
};

export default injectIntl(Footer);
